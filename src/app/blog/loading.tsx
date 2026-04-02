export default function BlogLoading() {
  return (
    <main className="animate-fade-in-up">
      <div className="mb-6">
        <p className="kicker">Arquivo</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-[color:var(--foreground)]">
          Blog
        </h1>
        <p className="mt-4 text-sm text-[color:var(--muted)]">
          Carregando posts...
        </p>
      </div>
      <p className="text-sm text-[color:var(--muted)]">Aguarde um instante.</p>
    </main>
  )
}
