<script lang="ts">
	import { Check, MessageCircle, Zap, Crown } from 'lucide-svelte';

	const plans = [
		{
			icon: Zap,
			name: 'Consultoria Online',
			price: 'R$ 149.90',
			period: '/mês',
			desc: 'Para quem quer treinar em qualquer lugar com orientação profissional.',
			featured: false,
			cta: 'Começar agora',
			perks: [
				'Planilha de treino personalizada',
				'Suporte via WhatsApp (dias úteis)',
				'Ajuste mensal de treino',
				'Acesso a vídeos explicativos',
            'Avaliação física mensal'
			]
		},
		{
			icon: Crown,
			name: 'Plano Premium',
			price: 'R$ 299.90',
			period: '/mês',
			desc: 'Máxima evolução com suporte completo, presencial ou online.',
			featured: true,
			cta: 'Quero o Premium',
			perks: [
            'Acompanhamento presencial',
				'Treino 100% personalizado',
				'Suporte WhatsApp 7 dias/semana',
				'Avaliação física mensal',
            'Orientação nutricional com nutricionista profissional',
				'Vídeo-aula semanal ao vivo',
				'Acesso a comunidade exclusiva'
			]
		},
		{
			icon: MessageCircle,
			name: 'Personal Presencial',
			price: 'R$ 199.90',
			period: '/mês',
			desc: 'Acompanhamento presencial na sua academia com atenção individual.',
			featured: false,
			cta: 'Falar com Gui',
			perks: [
				'Aulas presenciais 3x por semana',
				'Treino personalizado',
				'Correção postural e execução',
				'Suporte via WhatsApp',
				'Avaliação física bimestral'
			]
		}
	];
</script>

<section id="planos" class="relative py-16 sm:py-20 md:py-28 overflow-hidden">
	<div class="absolute inset-0 bg-zinc-900/30"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(192,57,43,0.07),transparent)]"></div>

	<div class="relative z-10 container mx-auto px-6 max-w-6xl">
		<!-- Header -->
		<div class="text-center mb-16">
			<span class="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Planos e Serviços</span>
			<h2 class="section-title text-4xl sm:text-5xl text-white mb-4">
				Invista na sua<br />
				<span class="text-gradient">melhor versão.</span>
			</h2>
			<p class="text-zinc-400 text-lg max-w-xl mx-auto">
				Escolha o plano que melhor se encaixa na sua rotina e objetivos.
			</p>
		</div>

		<!-- Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-center">
			{#each plans as plan}
				<div
					class="relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2
					{plan.featured
						? 'bg-linear-to-b from-red-950/80 to-zinc-900 border border-red-700/50 shadow-[0_0_40px_rgba(192,57,43,0.25)] md:scale-105'
						: 'glass-dark hover:border-red-900/30'}"
				>
					<!-- Featured badge -->
					{#if plan.featured}
						<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-red-700 to-red-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
							Mais Popular
						</div>
					{/if}

					<!-- Icon + Name -->
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl flex items-center justify-center {plan.featured ? 'bg-red-800/60 border border-red-600/40' : 'bg-zinc-800/60 border border-zinc-700/40'}">
							<plan.icon size={18} class={plan.featured ? 'text-red-300' : 'text-zinc-400'} />
						</div>
						<h3 class="text-white font-bold text-lg">{plan.name}</h3>
					</div>

					<!-- Price -->
					<div class="flex items-end gap-1">
						<span class="text-4xl font-black text-white">{plan.price}</span>
						<span class="text-zinc-500 text-sm mb-1">{plan.period}</span>
					</div>

					<p class="text-zinc-400 text-sm leading-relaxed">{plan.desc}</p>

					<hr class="border-zinc-800/60" />

					<!-- Perks -->
					<ul class="flex flex-col gap-3">
						{#each plan.perks as perk}
							<li class="flex items-start gap-2.5 text-sm text-zinc-300">
								<Check size={15} class="text-red-500 shrink-0 mt-0.5" />
								{perk}
							</li>
						{/each}
					</ul>

					<!-- CTA -->
					<a
						href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20tenho%20interesse%20no%20{encodeURIComponent(plan.name)}!"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-auto {plan.featured ? 'btn-brand w-full justify-center' : 'btn-outline w-full justify-center'}"
					>
						<MessageCircle size={16} />
						{plan.cta}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
