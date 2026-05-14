<script lang="ts">
	import { MessageCircle, ArrowRight } from 'lucide-svelte';
</script>

<section id="contato" class="relative py-16 sm:py-20 md:py-28 overflow-hidden">
	<!-- Background -->
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(192,57,43,0.18),transparent)]"></div>

	<!-- Decorative circles -->
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-red-900/10 pointer-events-none"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full border border-red-900/10 pointer-events-none"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 h-50 rounded-full border border-red-900/15 pointer-events-none"></div>

	<div class="relative z-10 container mx-auto px-6 max-w-4xl text-center">
		<span class="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-6">Está pronto para mudar?</span>

		<h2 class="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
			Seu resultado<br />
			<span class="text-gradient">começa agora.</span>
		</h2>

		<p class="text-zinc-400 text-base sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
			Fale diretamente com Gui Freitas e inicie sua transformação. Sem enrolação, sem desculpas.
		</p>

		<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
			<a
				href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-brand animate-pulse-glow px-8 sm:px-10 py-4 text-base sm:text-lg w-full sm:w-auto justify-center"
			>
				<MessageCircle size={20} />
				Falar no WhatsApp
				<ArrowRight size={16} />
			</a>
		</div>

		<p class="text-zinc-600 text-sm mt-8">
			Resposta rápida • Sem compromisso • 100% gratuito
		</p>
	</div>
</section>
