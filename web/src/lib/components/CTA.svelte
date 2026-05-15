<script lang="ts">
	import { MessageCircle, ArrowRight } from 'lucide-svelte';
</script>

<section id="contato" class="relative overflow-hidden py-16 sm:py-20 md:py-28">
	<!-- Background -->
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(192,57,43,0.18),transparent)]"
	></div>

	<!-- Decorative circles -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-900/10"
	></div>
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-900/10"
	></div>
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-50 w-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-900/15"
	></div>

	<div class="relative z-10 container mx-auto max-w-4xl px-6 text-center">
		<span class="mb-6 inline-block text-sm font-semibold tracking-widest text-red-500 uppercase"
			>Está pronto para mudar?</span
		>

		<h2 class="section-title mb-6 text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
			Seu resultado<br />
			<span class="text-gradient">começa agora.</span>
		</h2>

		<p class="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-xl">
			Fale diretamente com Gui Freitas e inicie sua transformação. Sem enrolação, sem desculpas.
		</p>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-brand animate-pulse-glow w-full justify-center px-8 py-4 text-base sm:w-auto sm:px-10 sm:text-lg"
			>
				<MessageCircle size={20} />
				Falar no WhatsApp
				<ArrowRight size={16} />
			</a>
		</div>

		<p class="mt-8 text-sm text-zinc-600">Resposta rápida • Sem compromisso • 100% gratuito</p>
	</div>
</section>
