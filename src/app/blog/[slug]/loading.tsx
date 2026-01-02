import {
  TerminalSkeleton,
  CommandLineSkeleton,
  CodeBlockSkeleton,
  BadgeSkeleton,
} from "@/components/skeleton"

export default function BlogPostLoading() {
  return (
    <article className="max-w-3xl mx-auto animate-fade-in">
      {/* Terminal Header - Post Meta */}
      <TerminalSkeleton title="~/blog/loading..." className="mb-8">
        <div className="p-6">
          {/* Title */}
          <div className="w-3/4 h-10 bg-gray-800/40 rounded animate-pulse mb-6" />

          {/* Metadata Line */}
          <div className="flex flex-wrap items-center gap-4 mb-6 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-gray-800/40 rounded animate-pulse" />
              <div className="w-24 h-3 bg-gray-800/40 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-gray-800/40 rounded animate-pulse" />
              <div className="w-20 h-3 bg-gray-800/40 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-gray-800/40 rounded animate-pulse" />
              <div className="w-16 h-3 bg-gray-800/40 rounded animate-pulse" />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <BadgeSkeleton width="w-16" />
            <BadgeSkeleton width="w-20" />
            <BadgeSkeleton width="w-14" />
          </div>
        </div>
      </TerminalSkeleton>

      {/* Content Terminal */}
      <TerminalSkeleton title="article.mdx">
        <div className="p-8 space-y-8">
          {/* First Paragraph */}
          <div>
            <CommandLineSkeleton command="reading content..." showCursor={false} />
            <div className="mt-4">
              <CodeBlockSkeleton lines={3} />
            </div>
          </div>

          {/* Code Block */}
          <div className="bg-[#1a1a1a] border border-gray-800/40 p-4">
            <div className="flex items-center gap-2 mb-3 text-xs">
              <span className="text-gray-600 font-mono">// code example</span>
            </div>
            <div className="space-y-2 pl-4 border-l border-gray-700/30">
              <div className="w-64 h-3 bg-blue-400/10 rounded animate-pulse" />
              <div className="w-56 h-3 bg-emerald-400/10 rounded animate-pulse" />
              <div className="w-72 h-3 bg-gray-800/30 rounded animate-pulse" />
              <div className="w-48 h-3 bg-gray-800/30 rounded animate-pulse" />
            </div>
          </div>

          {/* Second Paragraph */}
          <CodeBlockSkeleton lines={4} />

          {/* Another Code Block */}
          <div className="bg-[#1a1a1a] border border-gray-800/40 p-4">
            <div className="space-y-2 pl-4 border-l border-gray-700/30">
              <div className="w-72 h-3 bg-gray-800/30 rounded animate-pulse" />
              <div className="w-56 h-3 bg-yellow-400/10 rounded animate-pulse" />
              <div className="w-64 h-3 bg-gray-800/30 rounded animate-pulse" />
            </div>
          </div>

          {/* Final Paragraph */}
          <CodeBlockSkeleton lines={2} />
        </div>
      </TerminalSkeleton>
    </article>
  )
}
