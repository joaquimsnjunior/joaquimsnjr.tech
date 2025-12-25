import { ImageResponse } from "next/og"

async function loadGoogleFont(fontName: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, "+")}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+?)\)/)
  if (!resource) return new ArrayBuffer(0)
  const response = await fetch(resource[1])
  return response.arrayBuffer()
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") ?? "Joaquim Silva | Blog"

  const width = 1200
  const height = 630

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111",
          fontFamily: "Geist Mono",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#888",
            }}
          >
            joaquimsnjr.tech
          </p>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: [
        {
          name: "Geist Mono",
          data: await loadGoogleFont("Geist Mono", title),
          style: "normal",
        },
      ],
    }
  )
}