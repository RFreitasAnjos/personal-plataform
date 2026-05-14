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

<section id="sobre" class="relative py-16 sm:py-20 md:py-28 overflow-hidden">
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(192,57,43,0.08),transparent)]"></div>

	<div class="relative z-10 container mx-auto px-6 max-w-6xl">
		<div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
			<!-- Text content -->
			<div class="text-center lg:text-left">
				<span class="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Sobre Gui Freitas</span>
				<h2 class="section-title text-4xl sm:text-5xl text-white mb-6">
					Mais do que um<br />
					<span class="text-gradient">personal trainer.</span><br />
					Um parceiro de evolução.
				</h2>
				<p class="text-zinc-400 text-lg leading-relaxed mb-6">
					Com mais de 5 anos de experiência e centenas de alunos transformados, Gui Freitas acredita que resultado real vem de um acompanhamento próximo, metodologia séria e muito comprometimento.
				</p>
				<p class="text-zinc-400 text-lg leading-relaxed mb-8">
					Seja para emagrecer, ganhar massa ou melhorar a qualidade de vida, a filosofia é simples: <strong class="text-white">consistência + método + suporte = transformação.</strong>
				</p>
				<a href="#planos" class="btn-brand inline-flex mx-auto lg:mx-0">
					Conhecer os planos
					<ArrowRight size={16} />
				</a>
			</div>

			<!-- Cards grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{#each cards as card, i}
					<div
						class="glass rounded-2xl p-6 group hover:border-red-900/40 transition-all duration-300 hover:-translate-y-1"
						style="animation-delay: {i * 100}ms"
					>
						<div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-950/60 border border-red-900/30 mb-4 group-hover:bg-red-900/40 transition-colors duration-300">
						<card.icon size={22} class="text-red-400" />
						</div>
						<h3 class="text-white font-semibold text-base mb-2">{card.title}</h3>
						<p class="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
