import React from "react"

/**
 * Demo presentation
 * Exporta um array `slides` contendo JSX. Também exporta `notes` e `meta`.
 * Você pode criar novas apresentações adicionando um novo arquivo em `src/presentations/`.
 */
export const meta = {
  title: "Demo: Como criar apresentações no portfolio",
}

export const notes: (string | undefined)[] = [
  "Boas-vindas — explique objetivo da apresentação.",
  "Demonstre a arquitetura do site e as features principais.",
  "Mostre um exemplo de código e conclua com próximos passos.",
]

export const slides: React.ReactNode[] = [
  (
    <section>
      <h1 className="text-4xl font-semibold">Olá — Apresentações no portfolio</h1>
      <p className="mt-4 text-lg">Sistema de slides leve integrado ao site.</p>
    </section>
  ),

  (
    <section>
      <h2 className="text-3xl font-semibold">Por que ter slides no site?</h2>
      <ul className="mt-3 list-disc ml-6">
        <li>Compartilhar talk/palestras</li>
        <li>Apresentar runbooks e cases</li>
        <li>Demonstrar habilidades técnicas</li>
      </ul>
    </section>
  ),

  (
    <section>
      <h2 className="text-3xl font-semibold">Exemplo de código</h2>
      <pre className="bg-gray-800 p-4 rounded mt-3 overflow-auto text-sm">{`// Go: hello
        package main
        import "fmt"
        func main(){fmt.Println("hello")}`}</pre>
    </section>
  ),
]

export default { slides, notes, meta }
