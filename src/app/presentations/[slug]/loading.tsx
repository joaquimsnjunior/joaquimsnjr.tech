export default function PresentationLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="surface max-w-md w-full p-6">
        <p className="kicker">Carregando</p>
        <p className="mt-3 text-sm text-[color:var(--muted)]">
          Preparando apresentacao...
        </p>
      </div>
    </div>
  )
}
