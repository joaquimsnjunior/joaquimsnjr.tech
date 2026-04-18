import {
  TerminalSkeleton,
  CommandLineSkeleton,
  CodeBlockSkeleton,
  WorkItemSkeleton,
  SkillsJsonSkeleton,
} from "@/components/skeleton"

export default function SobreLoading() {
  return (
    <div className="animate-fade-in">
      {/* Terminal Window - About Header */}
      <TerminalSkeleton title="~/sobre" className="mb-8">
        <div className="p-6">
          {/* Title */}
          <div className="w-40 h-10 bg-gray-800/40 rounded animate-pulse mb-6" />

          {/* Command Line Bio */}
          <div className="font-mono text-sm space-y-3">
            <CommandLineSkeleton command="whoami" showCursor={false} />
            <div className="pl-5">
              <div className="w-48 h-4 bg-gray-800/40 rounded animate-pulse" />
            </div>

            <div className="mt-4">
              <CommandLineSkeleton command="cat bio.md" showCursor={false} />
            </div>
            <CodeBlockSkeleton lines={3} />
          </div>
        </div>
      </TerminalSkeleton>

      {/* Skills Grid */}
      <SkillsJsonSkeleton />

      {/* Work Experience Section */}
      <section className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-5 bg-gray-800/40 rounded animate-pulse" />
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-emerald-400/50">❯</span>
            <span className="text-gray-600">ls ~/experience</span>
          </div>
        </div>

        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <WorkItemSkeleton key={i} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
