import {
  TerminalSkeleton,
  CommandLineSkeleton,
  CodeBlockSkeleton,
  ProjectCardSkeleton,
} from "@/components/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="animate-fade-in">
      {/* Terminal Window - Header */}
      <TerminalSkeleton title="~/projects" className="mb-8">
        <div className="p-6">
          {/* Title */}
          <div className="w-48 h-10 bg-gray-800/40 rounded animate-pulse mb-4" />

          {/* Command Line */}
          <CommandLineSkeleton command="cat README.md" showCursor={false} />
          <div className="mt-3">
            <CodeBlockSkeleton lines={2} />
          </div>
        </div>
      </TerminalSkeleton>

      {/* Featured Project Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-5 bg-blue-400/20 rounded animate-pulse" />
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-emerald-400/50">❯</span>
            <span className="text-gray-600">ls --featured</span>
          </div>
        </div>

        <ProjectCardSkeleton featured />
      </section>

      {/* All Projects Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-5 bg-gray-800/40 rounded animate-pulse" />
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-emerald-400/50">❯</span>
            <span className="text-gray-600">ls -la</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
