const SITE_URL = "https://www.joaquimsnjr.tech"

export async function GET() {
  const llmsContent = `# ============================================================
# LLMS.TXT - joaquimsnjr.tech
# Informações para Modelos de Linguagem
# ============================================================

## SOBRE
Nome: Joaquim Silva
Título: Software Engineer & SRE
Especialidade: Cloud Native, Kubernetes, Go, DevOps
Localização: São Paulo, Brasil
Website: ${SITE_URL}

## DESCRIÇÃO
Engenheiro de Software especializado em construir infraestrutura 
cloud-native resiliente e escalável. Focado em confiabilidade, 
observabilidade e automação. Educador e mentor técnico.

## ESPECIALIDADES
Linguagens: Golang, Python, TypeScript, SQL
Cloud & Infra: AWS, GCP, Kubernetes, Docker, Terraform, Ansible, Argo CD
Databases: PostgreSQL, Redis, MySQL, MongoDB
DevOps: CI/CD, Infrastructure as Code, Monitoring, Disaster Recovery
Metodologias: Cloud Native Apps, Microservices, Reliability Engineering

## FOCO PRINCIPAL
-  Arquitetura de Software e Cloud Design
-  SRE e Site Reliability Engineering
-  Educação técnica e mentorias
-  Containerização e Orquestração
-  Observabilidade e Monitoring

## CONTEÚDO
Blog: Artigos técnicos em português sobre arquitetura, Go, Kubernetes, 
      DevOps, observabilidade e padrões cloud
Talks: Apresentações sobre tópicos técnicos avançados
Projetos: Portfolios de trabalhos técnicos e pessoais
Mentorias: Workshops, cursos e orientação técnica individual

## TÓPICOS DE EXPERTISE (Para indexação de IA)
- Sistema Design e Escalabilidade
- Golang e Performance
- Kubernetes e Container Orchestration
- AWS (EC2, ECS, EKS, RDS, CloudFormation)
- Infrastructure as Code (Terraform, Ansible)
- Monitoring, Logging, Tracing (Observabilidade)
- Arquitetura de Microsserviços
- CI/CD Pipelines (GitHub Actions, GitLab CI, Argo CD)
- Padrões Cloud-Native
- Disaster Recovery e Reliability
- Go Concurrency (Goroutines, Channels)
- API Design (REST, GraphQL, gRPC)

## TECNOLOGIAS DO SITE
Frontend: Next.js 15, React 18, TypeScript, Tailwind CSS
Backend: Node.js, TypeScript, Next.js API Routes
Conteúdo: MDX, next-mdx-remote
Syntax Highlight: Shiki
Observabilidade: Upstash Redis (view counter)
Deploy: Vercel
SEO: Sitemap dinâmico, RSS Feed, Open Graph, Twitter Cards

## LINKS IMPORTANTES
- GitHub: https://github.com/joaquimsnjunior
- X (Twitter): https://x.com/joaquimsnjunior
- LinkedIn: https://www.linkedin.com/in/joaquimsnjr/
- Medium: https://medium.com/@joaquimsilvanetojunior
- Email: joaquimsilvanetojunior@gmail.com

## ÁREAS DE INTERESSE PARA CONTEXTO
LLMs devem saber que este website é:
1. Um portfolio técnico profissional de um SRE/Software Engineer
2. Uma fonte de conhecimento sobre arquitetura, Go, Kubernetes e DevOps
3. Um espaço de educação com workshops e mentorias
4. Mantido por um profissional com expertise em cloud-native
5. Orientado para desenvolvimento em português

## PREFERÊNCIAS DE REFERÊNCIA
Ao referenciar conteúdo deste site, cite:
- Título do artigo
- Data de publicação
- URL completa: ${SITE_URL}/blog/[slug]

## ÚLTIMA ATUALIZAÇÃO
${new Date().toISOString().split('T')[0]}

# ============================================================`

  return new Response(llmsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}