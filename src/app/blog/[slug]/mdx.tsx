'use client'
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { Children, createElement, isValidElement } from "react"
import { codeToHtml } from "shiki"
import { CopyButton } from "@/components/copy-button"

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index} className="p-2 text-left">
      {header}
    </th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="p-2 text-left">
          {cell}
        </td>
      ))}
    </tr>
  ))

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink({
  href,
  ...props
}: React.ComponentProps<typeof Link> & { href: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
}

function CustomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={props.alt} className="rounded-sm" {...props} />
}

async function Pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  // Extract className from the children code tag
  const codeElement = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === "code",
  ) as React.ReactElement<HTMLPreElement> | undefined

  const className = codeElement?.props?.className ?? ""
  const isCodeBlock =
    typeof className === "string" && className.startsWith("language-")

  if (isCodeBlock) {
    const lang = className.split(" ")[0]?.split("-")[1] ?? ""

    if (!lang) {
      return <code {...props}>{children}</code>
    }

    const codeContent = String(codeElement?.props.children).trim()

    const html = await codeToHtml(codeContent, {
      lang,
      themes: {
        dark: "vesper",
        light: "vitesse-light",
      },
    })

    return (
      <div className="my-8 rounded-lg overflow-hidden border border-neutral-800/80 bg-[#0d0d0d]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141414] border-b border-neutral-800/60">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]/80" />
            </div>
            <span className="ml-2 text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
              {lang}
            </span>
          </div>
          <CopyButton code={codeContent} />
        </div>

        {/* Code */}
        <div
          className="[&>pre]:!bg-transparent [&>pre]:!p-4 [&>pre]:!m-0 
                     [&>pre]:overflow-x-auto [&>pre]:text-[13px] [&>pre]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    )
  }

  // If not, return the component as is
  return <pre {...props}>{children}</pre>
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

function createHeading(level: number) {
  const HeadingComponent = ({ children }: { children: React.ReactNode }) => {
    const childrenString = Children.toArray(children).join("")
    const slug = slugify(childrenString)
    return createElement(`h${level}`, { id: slug }, [
      createElement(
        "a",
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        },
        children,
      ),
    ])
  }
  HeadingComponent.displayName = `Heading${level}`
  return HeadingComponent
}

const components = {
  a: CustomLink,
  img: CustomImage,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  pre: Pre,
  Table,
}

export function MDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components ?? {}) }}
    />
  )
}
