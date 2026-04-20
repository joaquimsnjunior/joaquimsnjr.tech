export async function GET() {
  const humansContent = `# ============================================================
# HUMANS.TXT - joaquimsnjr.tech
# O lado humano do website
# Ref: humanstxt.org
# ============================================================

## CRIADOR
Nome: Joaquim Silva Neto Junior
Título: Software Engineer & SRE
Email: joaquimsilvanetojunior@gmail.com
Website: https://www.joaquimsnjr.tech
GitHub: https://github.com/joaquimsnjunior
X (Twitter): https://x.com/joaquimsnjunior
LinkedIn: https://www.linkedin.com/in/joaquimsnjr/
Medium: https://medium.com/@joaquimsilvanetojunior

## LOCALIZAÇÃO
Localização: São Paulo, Brasil
Timezone: America/Sao_Paulo (GMT -3)
Idioma: Português (Brasil)

## SOBRE
Engenheiro de Software apaixonado por construir infraestrutura 
resiliente e escalável. Especialista em Cloud Native, Kubernetes, 
Go e Site Reliability Engineering.

Estou comprometido com educação técnica de qualidade e compartilhamento
de conhecimento através de blog posts, workshops e mentorias.

## HISTÓRIA
- 2023: Começou a focar em SRE e Cloud Native
- 2024: Transição para educação técnica
- 2025: Instrutor e mentor em cloud architecture, Golang e DevOps

## FILOSOFIA
- Simplicidade com eficiência
- Conhecimento é para ser compartilhado
- Infraestrutura que não dorme, código que dura

## SOFTWARES & FERRAMENTAS
Editor: VS Code
Linguagens: Golang, Python, TypeScript
Sistema Operacional: Linux (Ubuntu, Arch)
Terminal: Zsh + Tmux
Versionamento: Git
Containerização: Docker
Orquestração: Kubernetes

## CRÉDITOS & TECNOLOGIAS
- Framework: Next.js 15
- Frontend: React 18 + TypeScript
- Estilização: Tailwind CSS
- Conteúdo: MDX + next-mdx-remote
- Syntax Highlighting: Shiki
- Hospedagem: Vercel
- Observabilidade: Upstash Redis

## COMUNIDADE
Encontre-me em:
- GitHub Discussions
- Dev.to
- LinkedIn
- Twitter/X
- Mentorias diretas (agende via email)

## ÚLTIMA ATUALIZAÇÃO
${new Date().toISOString().split('T')[0]}

# ============================================================`

  return new Response(humansContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}