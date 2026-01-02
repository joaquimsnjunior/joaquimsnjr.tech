/**
 * Skeleton Components - Terminal Theme
 * 100% harmonizado com a estética do site joaquimsnjr.tech
 */

// ============================================
// BASE COMPONENTS
// ============================================

/**
 * Terminal Window Container - Base para todos os skeletons
 */
export function TerminalSkeleton({
  title = "loading...",
  children,
  className = "",
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border border-gray-800/60 bg-[#161616] overflow-hidden ${className}`}>
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <span className="ml-3 text-xs text-gray-600 font-mono">{title}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-700">
          <span className="w-1 h-3 bg-gray-700 animate-pulse" />
        </div>
      </div>
      {children}
    </div>
  )
}

/**
 * Linha de comando skeleton
 */
export function CommandLineSkeleton({
  command = "loading",
  showCursor = true,
}: {
  command?: string
  showCursor?: boolean
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-emerald-400/50 select-none">❯</span>
      <span className="text-gray-600">{command}</span>
      {showCursor && (
        <span className="w-2 h-4 bg-gray-600 animate-pulse" />
      )}
    </div>
  )
}

/**
 * Bloco de texto skeleton com estilo code
 */
export function CodeBlockSkeleton({ lines = 3 }: { lines?: number }) {
  const widths = ["w-3/4", "w-full", "w-5/6", "w-2/3", "w-4/5", "w-1/2"]

  return (
    <div className="pl-5 border-l-2 border-gray-800/60 space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-800/40 rounded ${widths[i % widths.length]} animate-pulse`}
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  )
}

/**
 * Badge/Tag skeleton
 */
export function BadgeSkeleton({ width = "w-16" }: { width?: string }) {
  return (
    <span className={`h-5 ${width} bg-gray-800/40 rounded animate-pulse`} />
  )
}

/**
 * Status indicator skeleton
 */
export function StatusSkeleton() {
  return (
    <div className="flex items-center gap-2 border border-gray-700/30 px-3 py-1">
      <span className="w-2 h-2 rounded-full bg-gray-700 animate-pulse" />
      <span className="w-12 h-3 bg-gray-800/40 rounded animate-pulse" />
    </div>
  )
}

// ============================================
// NAVBAR SKELETON
// ============================================

export function NavbarSkeleton() {
  return (
    <nav className="flex items-center justify-between py-4 mb-8 border-b border-gray-800/40">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-gray-700 font-mono">❯</span>
        <div className="w-32 h-5 bg-gray-800/40 rounded animate-pulse" />
      </div>

      {/* Nav Items */}
      <div className="hidden sm:flex items-center gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <kbd className="w-6 h-5 bg-gray-800/30 border border-gray-700/30 rounded text-[10px]" />
            <div className="w-12 h-4 bg-gray-800/40 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </nav>
  )
}

// ============================================
// HEADER SKELETON (Homepage)
// ============================================

export function HeaderSkeleton() {
  return (
    <TerminalSkeleton title="~/Development/joaquimsnjr.tech — zsh" className="mb-16">
      <div className="p-6 md:p-8">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="relative">
            <div className="w-[100px] h-[100px] rounded-full bg-gray-800/60 animate-pulse border-2 border-gray-800" />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-gray-700 rounded-full border-2 border-[#161616] animate-pulse" />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            {/* Name */}
            <div>
              <div className="w-48 h-8 bg-gray-800/40 rounded animate-pulse mb-2" />
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-blue-400/50">const</span>
                <span className="text-gray-600">role =</span>
                <div className="w-40 h-4 bg-gray-800/40 rounded animate-pulse" />
              </div>
            </div>

            {/* Location & Status */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-gray-800/40 rounded animate-pulse" />
                <div className="w-28 h-4 bg-gray-800/40 rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-gray-800/40 rounded animate-pulse" />
                <div className="w-36 h-4 bg-gray-800/40 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-dashed border-gray-800/60" />

        {/* Command Line Bio */}
        <div className="font-mono text-sm space-y-3">
          <CommandLineSkeleton command="cat about.md" showCursor={false} />
          <CodeBlockSkeleton lines={2} />
        </div>
      </div>
    </TerminalSkeleton>
  )
}

// ============================================
// BLOG POST CARD SKELETON
// ============================================

export function PostCardSkeleton({ index = 0 }: { index?: number }) {
  return (
    <div
      className="border border-gray-800/60 bg-[#161616] p-5 group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Command prompt */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs">
        <span className="text-emerald-400/50">❯</span>
        <span className="text-gray-600">cat</span>
        <div className="w-32 h-3 bg-gray-800/40 rounded animate-pulse" />
      </div>

      {/* Title */}
      <div className="w-4/5 h-5 bg-gray-800/40 rounded animate-pulse mb-3" />

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="w-full h-3 bg-gray-800/30 rounded animate-pulse" />
        <div className="w-5/6 h-3 bg-gray-800/30 rounded animate-pulse" />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-gray-800/40 rounded animate-pulse" />
          <div className="w-20 h-3 bg-gray-800/40 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-gray-800/40 rounded animate-pulse" />
          <div className="w-16 h-3 bg-gray-800/40 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// ============================================
// PROJECT CARD SKELETON
// ============================================

export function ProjectCardSkeleton({ featured = false }: { featured?: boolean }) {
  return (
    <div className={`border border-gray-800/60 bg-[#161616] ${featured ? "" : ""}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800/60 bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="w-40 h-3 bg-gray-800/40 rounded animate-pulse font-mono" />
        </div>
        <StatusSkeleton />
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? "lg:grid lg:grid-cols-2 lg:gap-6" : ""}`}>
        {/* Info */}
        <div>
          <div className="mb-4 flex items-center gap-4">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center border border-gray-700/30 bg-gray-800/20">
              <div className="w-7 h-7 bg-gray-800/40 rounded animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="w-40 h-5 bg-gray-800/40 rounded animate-pulse mb-2" />
              <div className="w-24 h-3 bg-gray-800/30 rounded animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <div className="mb-5 border-l-2 border-gray-700/30 pl-4 space-y-2">
            <div className="w-full h-4 bg-gray-800/30 rounded animate-pulse" />
            <div className="w-4/5 h-4 bg-gray-800/30 rounded animate-pulse" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <div className="w-24 h-4 bg-gray-800/30 rounded animate-pulse" />
            <div className="w-20 h-4 bg-gray-800/30 rounded animate-pulse" />
          </div>
        </div>

        {/* Stack (featured only) */}
        {featured && (
          <div className="mt-6 lg:mt-0 border-t lg:border-t-0 lg:border-l border-gray-800/40 pt-6 lg:pt-0 lg:pl-6">
            <div className="w-24 h-4 bg-gray-800/40 rounded animate-pulse mb-4" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-gray-800/20 border border-gray-700/30 rounded"
                >
                  <div className="w-16 h-3 bg-gray-800/40 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================
// TALK CARD SKELETON
// ============================================

export function TalkCardSkeleton({ index = 0 }: { index?: number }) {
  return (
    <div
      className="border border-gray-800/60 bg-[#161616]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/40 bg-[#1a1a1a]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500/40" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <span className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[10px] text-gray-600 font-mono ml-2">talks/{index + 1}</span>
        </div>
        <BadgeSkeleton width="w-16" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Icon */}
        <div className="flex items-start gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center border border-gray-700/30 bg-gray-800/20">
            <div className="w-5 h-5 bg-gray-800/40 rounded animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="w-3/4 h-5 bg-gray-800/40 rounded animate-pulse mb-2" />
            <div className="w-1/3 h-3 bg-blue-400/20 rounded animate-pulse" />
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 bg-gray-800/40 rounded animate-pulse" />
            <div className="w-24 h-3 bg-gray-800/40 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 bg-gray-800/40 rounded animate-pulse" />
            <div className="w-20 h-3 bg-gray-800/40 rounded animate-pulse" />
          </div>
        </div>

        {/* Description */}
        <div className="border-l-2 border-gray-700/50 pl-3">
          <div className="flex items-start gap-2">
            <span className="text-gray-700 text-sm">//</span>
            <div className="flex-1 space-y-2">
              <div className="w-full h-3 bg-gray-800/30 rounded animate-pulse" />
              <div className="w-4/5 h-3 bg-gray-800/30 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// WORK EXPERIENCE SKELETON
// ============================================

export function WorkItemSkeleton({ index = 0 }: { index?: number }) {
  return (
    <div
      className="border border-gray-800/60 bg-[#161616] p-5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-gray-700/30 bg-gray-800/20">
            <div className="w-5 h-5 bg-gray-800/40 rounded animate-pulse" />
          </div>
          <div>
            <div className="w-36 h-5 bg-gray-800/40 rounded animate-pulse mb-2" />
            <div className="w-28 h-3 bg-blue-400/20 rounded animate-pulse" />
          </div>
        </div>
        <div className="w-24 h-4 bg-gray-800/30 rounded animate-pulse" />
      </div>

      <div className="border-l-2 border-gray-700/50 pl-4 mt-4 space-y-2">
        <div className="w-full h-3 bg-gray-800/30 rounded animate-pulse" />
        <div className="w-5/6 h-3 bg-gray-800/30 rounded animate-pulse" />
        <div className="w-4/5 h-3 bg-gray-800/30 rounded animate-pulse" />
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="px-2 py-1 bg-gray-800/20 border border-gray-700/30 rounded">
            <div className="w-12 h-3 bg-gray-800/40 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// SKILLS JSON SKELETON
// ============================================

export function SkillsJsonSkeleton() {
  return (
    <TerminalSkeleton title="skills.json">
      <div className="p-5 font-mono text-sm">
        <p className="text-gray-600">{"{"}</p>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="ml-4 my-3" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center gap-2">
              <div className="w-24 h-4 bg-blue-400/20 rounded animate-pulse" />
              <span className="text-gray-600">:</span>
              <span className="text-gray-700">[</span>
            </div>
            <div className="ml-4 flex flex-wrap gap-2 my-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="w-16 h-4 bg-emerald-400/10 rounded animate-pulse" />
              ))}
            </div>
            <span className="ml-4 text-gray-700">]</span>
            {i < 4 && <span className="text-gray-600">,</span>}
          </div>
        ))}
        <p className="text-gray-600">{"}"}</p>
      </div>
    </TerminalSkeleton>
  )
}

// ============================================
// BLOG SECTION SKELETON (Homepage)
// ============================================

export function BlogSectionSkeleton() {
  return (
    <section className="my-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CommandLineSkeleton command="ls ~/blog" showCursor={false} />
        </div>
        <div className="w-20 h-4 bg-gray-800/30 rounded animate-pulse" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured Post */}
        <div className="md:col-span-2 lg:col-span-2">
          <TerminalSkeleton title="featured.md" className="h-full">
            <div className="p-6">
              <div className="w-3/4 h-7 bg-gray-800/40 rounded animate-pulse mb-4" />
              <div className="space-y-2 mb-6">
                <div className="w-full h-4 bg-gray-800/30 rounded animate-pulse" />
                <div className="w-5/6 h-4 bg-gray-800/30 rounded animate-pulse" />
                <div className="w-4/5 h-4 bg-gray-800/30 rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-4 bg-gray-800/30 rounded animate-pulse" />
                <div className="w-20 h-4 bg-gray-800/30 rounded animate-pulse" />
              </div>
            </div>
          </TerminalSkeleton>
        </div>

        {/* Regular Posts */}
        {[1, 2, 3].map((i) => (
          <PostCardSkeleton key={i} index={i} />
        ))}
      </div>
    </section>
  )
}

// ============================================
// PROJECTS SECTION SKELETON (Homepage)
// ============================================

export function ProjectsSectionSkeleton() {
  return (
    <section className="my-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CommandLineSkeleton command="ls ~/projects" showCursor={false} />
        </div>
        <div className="w-24 h-4 bg-gray-800/30 rounded animate-pulse" />
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        <ProjectCardSkeleton featured />
      </div>
    </section>
  )
}

// ============================================
// PRESENTATION LOADING SKELETON
// ============================================

export function PresentationSkeleton() {
  return (
    <div className="fixed inset-0 bg-[#111] flex items-center justify-center">
      <TerminalSkeleton title="presentation — loading" className="w-96">
        <div className="p-6 font-mono text-sm">
          {/* Loading indicator */}
          <div className="flex items-center gap-2 text-gray-400 mb-6">
            <span className="text-blue-400">❯</span>
            <span className="text-gray-500">initializing deck...</span>
            <span className="w-2 h-4 bg-blue-400 animate-pulse" />
          </div>

          {/* Progress steps */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 border border-green-400/50 text-green-400 flex items-center justify-center text-xs">✓</span>
              <span className="text-gray-400">Loading assets</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 border border-green-400/50 text-green-400 flex items-center justify-center text-xs">✓</span>
              <span className="text-gray-400">Parsing slides</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 border border-yellow-400/50 animate-pulse" />
              <span className="text-gray-400">Rendering components</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 border border-gray-700" />
              <span className="text-gray-600">Starting presentation</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 pt-4 border-t border-gray-800/60">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>Progress</span>
              <span className="font-mono">75%</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-blue-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </TerminalSkeleton>
    </div>
  )
}
