# Documentacao - Refresh minimalista

## Objetivo
- Reduzir ruido visual e deixar a interface mais minimalista.
- Reforcar hierarquia tipografica e legibilidade.
- Padronizar cores, superfices e interacoes.
- Simplificar a navegacao e as paginas principais.

## Alteracoes por arquivo

### src/app/globals.css
- Novos tokens de tema (background, foreground, surface, border, accent).
- Fundo com gradiente sutil para dar profundidade sem poluicao visual.
- Classes utilitarias: surface, surface-hover, kicker, section-title, link-accent, text-muted.
- Ajuste de selecao de texto e leve refinamento nas animacoes.
- Revisao de estilos do prose para alinhar com a nova paleta.
- Motivo: centralizar a identidade visual e reduzir inconsistencias entre componentes.

### src/app/layout.tsx
- Container principal reduzido (max-w-5xl) e espacamento mais consistente.
- Aplicacao explicita de bg/background e text/foreground.
- Motivo: melhorar leitura e manter layout mais contido e editorial.

### src/components/navbar.tsx
- Navbar simplificada, sem painel de atalhos e sem blocos terminal-style.
- Links em caixa alta com underline discreto e estado ativo mais elegante.
- Atalhos mantidos via teclado, com hint textual minimalista.
- Motivo: diminuir ruido visual e manter foco na navegacao essencial.

### src/components/header.tsx
- Hero refeito como layout editorial: avatar, titulo e bio em poucas linhas.
- Remocao de barras, indicadores e botoes estilo terminal.
- Links principais com estilo link-accent.
- Motivo: tornar a introducao mais direta e minimalista.

### src/components/blog-section.tsx
- Bento grid substituido por card em destaque + lista simples.
- Remocao de overlays e imagens para reduzir excesso visual.
- Metadados compactos com data e categoria.
- Motivo: aumentar clareza e reduzir complexidade visual.

### src/components/projects-section.tsx

- Cards terminais substituidos por card destacado + lista minimalista.
- Status vira label textual, tecnologias em tags discretas.
- Motivo: destacar conteudo sem ruido e manter consistencia com o blog.

### src/components/footer.tsx
- Footer refeito para colunas mais limpas e links textuais.
- Links de navegacao e conexoes estruturados com listas para melhor acessibilidade.
- Labels ARIA adicionados para navegacao do rodape.
- Ano envolvido em tag `<time>` para semantica leve.
- Motivo: reduzir ruido visual e manter consistencia com o layout minimalista.

### src/components/post-item.tsx
- Itens da lista de posts agora sao text-first, sem header terminal e miniaturas.
- Metadados e leitura com tipografia compacta.
- Motivo: leitura mais rapida e layout mais limpo.

### src/components/deck/Deck.tsx
- Interface do deck redesenhada para superfices minimalistas e controles discretos.
- Barra superior com titulo, progresso e atalhos; area de slides com tipografia limpa.
- Notas do apresentador simplificadas e integradas ao layout.
- Motivo: aplicar o mesmo sistema visual no modo apresentacao.

### src/components/posts.tsx
- Modal de busca simplificado, com superfice unica e inputs discretos.
- Resultados com highlight leve e menos cromia.
- Motivo: UX mais leve e consistente com o restante do site.

### src/components/section-list.tsx
### src/components/section-list-not-grouped.tsx
### src/components/project-card.tsx
- Estruturas convertidas para superfices minimalistas com tipografia uniforme.
- Links e descricoes com espaco generoso e hierarquia clara.
- Motivo: reduzir variacoes de estilo e manter unidade visual.

### src/app/blog/page.tsx
- Header refeito com titulo, descricao e contagem de posts.
- Atalhos exibidos em linha, sem caixa terminal.
- Motivo: pagina mais direta e menos decorativa.

### src/app/blog/[slug]/page.tsx
- Post individual alinhado ao layout minimalista e largura de leitura.
- Metadados e descricao integrados em header compacto.
- Motivo: consistencia visual e melhor foco no conteudo.

### src/app/blog/[slug]/mdx.tsx
- Blocos de codigo alinhados ao estilo surface e tipografia minimalista.
- Motivo: reduzir ruido visual no conteudo tecnico.

### src/app/blog/loading.tsx
### src/app/blog/[slug]/loading.tsx
- Remocao dos skeletons dos posts, substituidos por placeholders textuais.
- Motivo: simplificar o loading e evitar ruido visual.

### src/app/projects/page.tsx
- Layout recriado com destaque + grid para outros projetos.
- Remocao de barras e blocos estilo terminal.
- Metadados reorganizados em blocos simples e legiveis.
- Motivo: facilitar o scan visual e reduzir a complexidade dos cards.

### src/app/sobre/page.tsx
- Estrutura editorial com secao de perfil, skills e experiencia.
- Cards de experiencia simplificados e consistentes com o tema.
- Motivo: apresentar informacoes de forma clara e sem ruido visual.

### src/app/talks/page.tsx
- Pagina de talks reestruturada para lista limpa e headers minimalistas.
- Cards com tipografia clara e metadados compactos.
- Motivo: foco no conteudo e leitura rapida.

### src/app/presentations/layout.tsx
- Layout ajustado para usar os tokens do tema minimalista.
- Motivo: manter consistencia com o restante do frontend.

### src/app/presentations/[slug]/page.tsx
- Estados de erro e loading simplificados para superfices minimalistas.
- Mensagens alinhadas ao tom do site e ao novo layout.
- Motivo: aplicar a mesma linguagem visual das outras paginas.

### src/app/presentations/[slug]/loading.tsx
- Loading sem skeleton, com placeholder textual simples.
- Motivo: reduzir ruido visual durante o carregamento.

## Observacoes de UX
- Atalhos de teclado foram preservados, agora em formato de hint discreto.
- A hierarquia tipografica ficou mais previsivel em todas as paginas.
- Menos sombras, gradientes e bordas pesadas para reforcar o minimalismo.

## Proximos passos sugeridos
- Rodar `npm run lint` para validar o projeto.
- Revisar se deseja manter acentuacao original nos textos exibidos.

## Atualizacao de fonte
### src/app/layout.tsx
- Adicionada a fonte Space Grotesk via `next/font/google`.
- Motivo: aplicar a fonte solicitada como base tipografica do site.

### src/app/globals.css
- Remocao do @font-face local da Alliance No.1.
- `font-family` do body agora usa a variavel `--font-space-grotesk`.
- Motivo: garantir que a tipografia principal venha do Space Grotesk.

### tailwind.config.ts
- Atualizacao do `fontFamily.sans` para `var(--font-space-grotesk)`.
- Motivo: manter consistencia do `font-sans` em todo o projeto.
