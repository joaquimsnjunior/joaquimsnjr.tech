import {
  TerminalSkeleton,
  CommandLineSkeleton,
  CodeBlockSkeleton,
  TalkCardSkeleton,
} from "@/components/skeleton"

export default function TalksLoading() {
  return (
    <div className="animate-fade-in">
      {/* Terminal Window - Header */}
      <TerminalSkeleton title="~/talks" className="mb-8">
        <div className="p-6">
          {/* Title */}
          <div className="w-64 h-10 bg-gray-800/40 rounded animate-pulse mb-4" />

          {/* Command Line */}
          <CommandLineSkeleton command="cat description.md" showCursor={false} />
          <div className="mt-3">
            <CodeBlockSkeleton lines={2} />
          </div>
        </div>
      </TerminalSkeleton>

      {/* Upcoming Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-5 bg-emerald-400/20 rounded animate-pulse" />
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-emerald-400/50">❯</span>
            <span className="text-gray-600">ls --upcoming</span>
          </div>
        </div>

        <div className="bg-[#161616]/50 border border-dashed border-gray-700 p-8 text-center">
          <div className="flex items-center justify-center gap-2 font-mono text-sm">
            <span className="text-gray-600">//</span>
            <div className="w-56 h-4 bg-gray-800/40 rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Past Talks Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-5 bg-gray-800/40 rounded animate-pulse" />
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-emerald-400/50">❯</span>
            <span className="text-gray-600">ls --past</span>
          </div>
        </div>

        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <TalkCardSkeleton key={i} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
