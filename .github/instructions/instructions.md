# Contexto do Projeto — Landing Page Personal Trainer Gui Freitas

## Objetivo do Projeto

Criar uma landing page moderna, premium e altamente responsiva para o personal trainer **Gui Freitas**, focada em:

* Conversão de leads via WhatsApp
* Autoridade profissional
* Apresentação visual impactante
* Design moderno estilo landing pages fitness premium
* Performance e SEO
* Experiência mobile-first

A página será desenvolvida utilizando:

* SvelteKit
* TypeScript
* TailwindCSS
* Lucide Icons
* Componentização moderna
* Animações suaves
* Estrutura clean e elegante

---

# Stack do Projeto

## Framework Principal

* SvelteKit

## Linguagem

* TypeScript

## Estilização

* TailwindCSS

## Ícones

* lucide-svelte

Instalação:

```bash
npm install lucide-svelte
```

## Biblioteca de Componentes

Utilizar:

### Skeleton UI

Biblioteca moderna e muito utilizada no ecossistema Svelte.

Site:
[https://www.skeleton.dev/](https://www.skeleton.dev/)

Instalação:

```bash
npm install @skeletonlabs/skeleton
npm install @skeletonlabs/tw-plugin
```

Objetivo da lib:

* Cards modernos
* Buttons premium
* Inputs estilizados
* Estrutura visual elegante
* Componentes reutilizáveis

---

# Estilo Visual

## Inspiração Visual

A landing page deve se inspirar em:

* Landing pages fitness premium
* Websites modernos de personal trainer
* Estética Apple + Nike + Gymshark
* Visual minimalista premium
* Dark mode elegante

## Paleta de Cores

### Fundo Principal

* Preto profundo
* Cinza Shadow

### Cor Destaque

* Vermelho Marsala 
  OU
* Vermelho Borgonha Neon

### Texto

* Branco
* Cinza claro

## Tipografia

Utilizar fontes modernas como:

* Inter
* Poppins
* Outfit

Preferencialmente:

```css
font-family: 'Inter', sans-serif;
```

---

# Estrutura da Landing Page

Tudo deverá existir em UMA página única.

## Seções da Página

### 1. Hero Section

Objetivo:
Impactar imediatamente o usuário.

Conteúdo:

* Nome “Gui Freitas”
* Frase de impacto
* CTA principal
* Video profissional como gif no fundo
* Background moderno
* Efeitos de blur
* Gradientes suaves

Exemplo de headline:

```txt
Transforme seu corpo com acompanhamento profissional.
```

Subheadline:

```txt
Treinos personalizados, acompanhamento individual e foco total na sua evolução.
```

Botões:

* Começar agora
* Falar no WhatsApp

Ícones sugeridos:

* Dumbbell
* ArrowRight
* Trophy
* Flame

---

### 2. Sobre o Personal

Objetivo:
Gerar conexão e autoridade.

Conteúdo:

* História resumida
* Filosofia de treino
* Diferenciais
* Experiência

Adicionar cards com:

* Treinos personalizados
* Acompanhamento online
* Evolução física
* Consultoria fitness

Ícones Lucide:

* HeartPulse
* Dumbbell
* Timer
* Activity

---

### 3. Benefícios

Criar uma seção destacando benefícios.

Exemplos:

* Ganho de massa muscular
* Emagrecimento
* Melhora da saúde
* Mais disposição
* Acompanhamento próximo

Usar cards modernos.

Adicionar hover effects.

---

### 4. Comentários de Alunos

Adicionar uma seção premium de depoimentos.

Objetivo:
Criar prova social.

Adicionar 3 comentários fictícios.

## Comentário 1

Nome:
Carlos Mendes

Texto:

```txt
Em poucos meses consegui resultados que nunca tinha alcançado antes. O acompanhamento do Gui fez toda diferença.
```

## Comentário 2

Nome:
Fernanda Lima

Texto:

```txt
Treinos organizados, suporte excelente e uma motivação absurda. Recomendo demais.
```

## Comentário 3

Nome:
Lucas Andrade

Texto:

```txt
Além da evolução física, minha rotina mudou completamente. Hoje tenho muito mais disposição.
```

Adicionar:

* Estrelas
* Cards modernos
* Foto/avatar fake
* Efeito glassmorphism

Ícones:

* Star
* Quote

---

### 5. Planos ou Serviços

Criar cards para:

* Consultoria Online
* Personal Presencial
* Plano Premium

Cada card deve possuir:

* Nome
* Preço fictício
* Benefícios
* CTA

Visual:

* Destaque no plano principal
* Hover premium
* Glow effect

---

### 6. CTA Final

Criar uma seção forte de conversão.

Headline:

```txt
Seu resultado começa agora.
```

Subheadline:

```txt
Fale diretamente com Gui Freitas e inicie sua transformação.
```

Botão:

* WhatsApp

Adicionar:

* Fundo com gradiente
* Efeito blur
* Glow

---

### 7. Footer

Adicionar:

* Redes sociais
* Instagram
* WhatsApp
* Copyright
* Nome do personal

Ícones:

* Instagram
* MessageCircle
* Phone

---

# UX/UI Guidelines

## Responsividade

A página precisa funcionar perfeitamente em:

* Mobile
* Tablet
* Desktop

## Animações

Utilizar animações suaves:

* Fade in
* Slide up
* Hover animations
* Smooth transitions

Sugestão:

```css
transition-all duration-300
```

---

# SEO

Adicionar:

* Meta title
* Meta description
* Open Graph
* Keywords fitness

Exemplo:

```html
<title>Gui Freitas | Personal Trainer</title>
<meta name="description" content="Transforme seu corpo com acompanhamento profissional." />
```

---

# Estrutura Técnica Recomendada

## Estrutura de Pastas

```txt
src/
 ├── lib/
 │    ├── components/
 │    │     ├── Hero.svelte
 │    │     ├── About.svelte
 │    │     ├── Benefits.svelte
 │    │     ├── Testimonials.svelte
 │    │     ├── Pricing.svelte
 │    │     ├── CTA.svelte
 │    │     └── Footer.svelte
 │
 ├── routes/
 │    └── +page.svelte
```

---

# Requisitos Técnicos

## Código

* Código limpo
* Componentizado
* Responsivo
* Reutilizável
* Bem organizado

## Tailwind

Utilizar bastante:

* Flex
* Grid
* Gradients
* Backdrop blur
* Rounded 2xl
* Shadows
* Hover states

---

# Estilo Desejado

A interface deve transmitir:

* Alta performance
* Modernidade
* Profissionalismo
* Energia fitness
* Visual premium

A sensação final deve lembrar:

* Aplicativos fitness modernos
* Landing pages SaaS premium
* Marcas esportivas de luxo

---

# Objetivo Final

A landing page precisa:

* Impressionar visualmente
* Converter visitantes
* Gerar autoridade para Gui Freitas
* Ter aparência profissional moderna
* Parecer um produto premium

---

# Instruções Extras para o Copilot

* Gere componentes reutilizáveis
* Utilize SvelteKit moderno
* Utilize TypeScript
* Utilize TailwindCSS
* Utilize Lucide Icons
* Utilize Skeleton UI
* Priorize acessibilidade
* Priorize performance
* Utilize boas práticas modernas
* Utilize design responsivo
* Utilize animações suaves
* Utilize dark mode
* Utilize efeitos visuais premium
* Evite visual genérico
* Crie uma estética elegante e fitness premium
