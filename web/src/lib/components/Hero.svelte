<script lang="ts">
	import { Dumbbell, ArrowRight, MessageCircle, Trophy, Flame, ChevronDown } from 'lucide-svelte';
</script>

<section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
	<!-- Background gradient layers -->
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(192,57,43,0.18),transparent)]"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(192,57,43,0.08),transparent)]"
	></div>

	<!-- Grid pattern overlay -->
	<div
		class="absolute inset-0 opacity-[0.03]"
		style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 60px 60px;"
	></div>

	<!-- Decorative blobs -->
	<div
		class="pointer-events-none absolute top-20 left-1/4 h-96 w-96 rounded-full bg-red-800/10 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-red-700/8 blur-3xl"
	></div>

	<!-- Content -->
	<div class="relative z-10 container mx-auto max-w-6xl px-4 text-center sm:px-6">
		<!-- Badge -->
		<div
			class="animate-fade-in glass mb-8 inline-flex items-center gap-2 rounded-full border border-red-900/30 px-4 py-2 text-sm text-zinc-300"
		>
			<Flame size={14} class="text-red-500" />
			<span>Personal Trainer Certificado</span>
			<Trophy size={14} class="text-red-500" />
		</div>

		<!-- Headline -->
		<h1
			class="animate-fade-in-up section-title mb-6 text-[clamp(1.65rem,7vw,6rem)] leading-tight text-white delay-100"
		>
			Transforme seu<br />
			<span class="text-gradient">corpo</span> com<br />
			acompanhamento<br />
			profissional.
		</h1>

		<!-- Subheadline -->
		<p
			class="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 delay-200 sm:text-xl md:text-2xl"
		>
			Treinos personalizados, acompanhamento individual e foco total na sua evolução.
		</p>

		<!-- Stats bar -->
		<div
			class="animate-fade-in-up mb-12 flex flex-wrap items-center justify-center gap-8 delay-300"
		>
			<div class="flex flex-col items-center">
				<span class="text-3xl font-bold text-white">+100</span>
				<span class="mt-1 text-xs tracking-widest text-zinc-500 uppercase">Alunos espalhados pelos</span><span class="text-gradient-brazil">Brasil</span>
			</div>
			<div class="hidden h-10 w-px bg-zinc-800 sm:block"></div>
			<div class="flex flex-col items-center">
				<span class="text-3xl font-bold text-white">3+</span>
				<span class="mt-1 text-xs tracking-widest text-zinc-500 uppercase">Anos de experiência</span
				>
			</div>
			<div class="hidden h-10 w-px bg-zinc-800 sm:block"></div>
			<div class="flex flex-col items-center">
				<span class="text-3xl font-bold text-white">100%</span>
				<span class="mt-1 text-xs tracking-widest text-zinc-500 uppercase">Satisfação</span>
			</div>
		</div>

		<!-- CTA Buttons -->
		<div
			class="animate-fade-in-up flex w-full flex-col items-center justify-center gap-4 delay-400 sm:w-auto sm:flex-row"
		>
			<a
				href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-brand animate-pulse-glow w-full justify-center px-8 py-4 text-base sm:w-auto"
			>
				<MessageCircle size={18} />
				Falar no WhatsApp
			</a>
			<a href="#sobre" class="btn-outline w-full justify-center px-8 py-4 text-base sm:w-auto">
				<Dumbbell size={18} />
				Começar agora
				<ArrowRight size={16} />
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
		<a href="#sobre" aria-label="Rolar para baixo">
			<ChevronDown size={28} class="text-zinc-400" />
		</a>
	</div>

	<!-- Bottom gradient fade -->
	<div
		class="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-zinc-950 to-transparent"
	></div>
</section>
