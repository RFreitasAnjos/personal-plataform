<script lang="ts">
	import { HeartPulse, Dumbbell, Timer, Activity, ArrowRight } from 'lucide-svelte';

	const cards = [
		{
			icon: Dumbbell,
			title: 'Treinos Personalizados',
			desc: 'Protocolos 100% adaptados ao seu biotipo, objetivo e nível de condicionamento.'
		},
		{
			icon: Activity,
			title: 'Acompanhamento Online',
			desc: 'Suporte contínuo via WhatsApp, vídeos e ajustes semanais de treino e dieta.'
		},
		{
			icon: HeartPulse,
			title: 'Evolução Física Real',
			desc: 'Metodologia comprovada que gera resultados visíveis e duradouros.'
		},
		{
			icon: Timer,
			title: 'Consultoria Fitness',
			desc: 'Orientação completa sobre treino, nutrição e hábitos para uma vida mais saudável.'
		}
	];
</script>

<section id="sobre" class="relative overflow-hidden py-16 sm:py-20 md:py-28">
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(192,57,43,0.08),transparent)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-6xl px-6">
		<div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
			<!-- Text content -->
			<div class="text-center lg:text-left">
				<span class="mb-4 inline-block text-sm font-semibold tracking-widest text-red-500 uppercase"
					>Sobre Gui Freitas</span
				>
				<h2 class="section-title mb-6 text-4xl text-white sm:text-5xl">
					Mais do que um<br />
					<span class="text-gradient">personal trainer.</span><br />
					Um parceiro de evolução.
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-zinc-400">
					Com mais de 3 anos de experiência e centenas de alunos transformados, acredito que a verdadeira mudança 
					que resulta em resultados reais vem de um acompanhamento próximo, metodologia séria e muito
					comprometimento.
				</p>
				<p class="mb-8 text-lg leading-relaxed text-zinc-400">
					Seja para emagrecer, ganhar massa ou melhorar a qualidade de vida, a filosofia é simples: <strong
						class="text-white">consistência + método + suporte = transformação.</strong
					>
				</p>
				<a href="#planos" class="btn-brand mx-auto inline-flex lg:mx-0">
					Conhecer os planos
					<ArrowRight size={16} />
				</a>
			</div>

			<!-- Cards grid -->
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each cards as card, i (i)}
					<div
						class="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-900/40"
						style="animation-delay: {i * 100}ms"
					>
						<div
							class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-red-900/30 bg-red-950/60 transition-colors duration-300 group-hover:bg-red-900/40"
						>
							<card.icon size={22} class="text-red-400" />
						</div>
						<h3 class="mb-2 text-base font-semibold text-white">{card.title}</h3>
						<p class="text-sm leading-relaxed text-zinc-500">{card.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
