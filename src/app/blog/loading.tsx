import {
  TerminalSkeleton,
  CommandLineSkeleton,
  CodeBlockSkeleton,
  PostCardSkeleton,
} from "@/components/skeleton"

export default function BlogLoading() {
  return (
    <main className="animate-fade-in">
      {/* Terminal Window Header */}
      <TerminalSkeleton title="~/blog" className="mb-8">
        <div className="p-6">
          {/* Title skeleton */}
          <div className="w-32 h-10 bg-gray-800/40 rounded animate-pulse mb-4" />

          {/* Command Line */}
          <div className="mb-4">
            <CommandLineSkeleton command="cat description.md" showCursor={false} />
          </div>

          <CodeBlockSkeleton lines={2} />
        </div>
      </TerminalSkeleton>

      {/* Keyboard Shortcuts Skeleton */}
      <div className="hidden sm:flex items-center gap-6 mb-8 p-4 border border-gray-800/60 bg-[#161616]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-800/40 rounded animate-pulse" />
          <span className="text-gray-600 text-xs">Atalhos:</span>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <kbd className="w-6 h-5 bg-gray-800/30 border border-gray-700/30 rounded" />
            <div className="w-12 h-3 bg-gray-800/40 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <PostCardSkeleton key={i} index={i} />
        ))}
      </div>
    </main>
  )
}
