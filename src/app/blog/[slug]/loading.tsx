export default function BlogPostLoading() {
  return (
    <section className="animate-fade-in-up max-w-3xl mx-auto">
      <p className="kicker">Post</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
        Carregando...
      </h1>
      <p className="mt-4 text-sm text-[color:var(--muted)]">
        Preparando conteúdo.
      </p>
    </section>
  )
}
