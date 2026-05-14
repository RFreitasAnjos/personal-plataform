<script lang="ts">
	import { Dumbbell, ArrowRight, MessageCircle, Trophy, Flame, ChevronDown } from 'lucide-svelte';
</script>

<section class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
	<!-- Background gradient layers -->
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(192,57,43,0.18),transparent)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(192,57,43,0.08),transparent)]"></div>

	<!-- Grid pattern overlay -->
	<div
		class="absolute inset-0 opacity-[0.03]"
		style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 60px 60px;"
	></div>

	<!-- Decorative blobs -->
	<div class="absolute top-20 left-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-20 right-1/4 w-80 h-80 bg-red-700/8 rounded-full blur-3xl pointer-events-none"></div>

	<!-- Content -->
	<div class="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl text-center">
		<!-- Badge -->
		<div class="animate-fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-zinc-300 mb-8 border border-red-900/30">
			<Flame size={14} class="text-red-500" />
			<span>Personal Trainer Certificado</span>
			<Trophy size={14} class="text-red-500" />
		</div>

		<!-- Headline -->
		<h1 class="animate-fade-in-up delay-100 section-title text-[clamp(1.65rem,7vw,6rem)] leading-tight text-white mb-6">
			Transforme seu<br />
			<span class="text-gradient">corpo</span> com<br />
			acompanhamento<br />
			profissional.
		</h1>

		<!-- Subheadline -->
		<p class="animate-fade-in-up delay-200 text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
			Treinos personalizados, acompanhamento individual e foco total na sua evolução.
		</p>

		<!-- Stats bar -->
		<div class="animate-fade-in-up delay-300 flex flex-wrap items-center justify-center gap-8 mb-12">
			<div class="flex flex-col items-center">
				<span class="text-3xl font-bold text-white">+200</span>
				<span class="text-xs text-zinc-500 uppercase tracking-widest mt-1">Alunos</span>
			</div>
			<div class="w-px h-10 bg-zinc-800 hidden sm:block"></div>
			<div class="flex flex-col items-center">
				<span class="text-3xl font-bold text-white">5+</span>
				<span class="text-xs text-zinc-500 uppercase tracking-widest mt-1">Anos de experiência</span>
			</div>
			<div class="w-px h-10 bg-zinc-800 hidden sm:block"></div>
			<div class="flex flex-col items-center">
				<span class="text-3xl font-bold text-white">98%</span>
				<span class="text-xs text-zinc-500 uppercase tracking-widest mt-1">Satisfação</span>
			</div>
		</div>

		<!-- CTA Buttons -->
		<div class="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
			<a
				href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-brand animate-pulse-glow text-base px-8 py-4 w-full sm:w-auto justify-center"
			>
				<MessageCircle size={18} />
				Falar no WhatsApp
			</a>
			<a href="#sobre" class="btn-outline text-base px-8 py-4 w-full sm:w-auto justify-center">
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
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none"></div>
</section>
