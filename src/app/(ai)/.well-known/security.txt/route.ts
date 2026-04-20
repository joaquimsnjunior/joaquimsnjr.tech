export async function GET() {
  const securityContent = `# Security Policy for joaquimsnjr.tech
# RFC 9116 - https://securitytxt.org

# Contato para relatar vulnerabilidades
Contact: security@joaquimsnjr.tech
Contact: mailto:joaquimsilvanetojunior@gmail.com

# Prazo para resposta: 90 dias
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}

# Preferência de linguagem
Preferred-Languages: pt-BR, en

# Canais adicionais de contato
Contact: https://www.linkedin.com/in/joaquimsnjr/
Contact: https://github.com/joaquimsnjunior

# Última atualização
# ${new Date().toISOString()}`

  return new Response(securityContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}