<script lang="ts">
	import { Star, Quote } from 'lucide-svelte';

	const testimonials = [
		{
			name: 'Carlos Mendes',
			role: 'Aluno há 8 meses',
			initials: 'CM',
			color: 'from-red-700 to-red-900',
			text: 'Em poucos meses consegui resultados que nunca tinha alcançado antes. O acompanhamento do Gui fez toda diferença.',
			stars: 5
		},
		{
			name: 'Fernanda Lima',
			role: 'Aluna há 1 ano',
			initials: 'FL',
			color: 'from-rose-700 to-rose-900',
			text: 'Treinos organizados, suporte excelente e uma motivação absurda. Recomendo demais.',
			stars: 5
		},
		{
			name: 'Lucas Andrade',
			role: 'Aluno há 6 meses',
			initials: 'LA',
			color: 'from-orange-700 to-red-900',
			text: 'Além da evolução física, minha rotina mudou completamente. Hoje tenho muito mais disposição.',
			stars: 5
		}
	];
</script>

<section id="depoimentos" class="relative py-16 sm:py-20 md:py-28 overflow-hidden">
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(192,57,43,0.10),transparent)]"></div>

	<div class="relative z-10 container mx-auto px-6 max-w-6xl">
		<!-- Header -->
		<div class="text-center mb-16">
			<span class="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">Depoimentos</span>
			<h2 class="section-title text-4xl sm:text-5xl text-white mb-4">
				O que dizem<br />
				<span class="text-gradient">nossos alunos.</span>
			</h2>
			<p class="text-zinc-400 text-lg max-w-xl mx-auto">
				Resultados reais de quem confiou no método e se comprometeu com a transformação.
			</p>
		</div>

		<!-- Cards -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
			{#each testimonials as t, i}
				<div class="glass-dark rounded-2xl p-7 flex flex-col gap-5 hover:border-red-900/30 transition-all duration-300 hover:-translate-y-1 group">
					<!-- Quote icon -->
					<div class="text-red-900/60 group-hover:text-red-800/80 transition-colors">
						<Quote size={32} />
					</div>

					<!-- Stars -->
					<div class="flex gap-1">
						{#each Array(t.stars) as _}
							<Star size={14} class="fill-yellow-400 text-yellow-400" />
						{/each}
					</div>

					<!-- Text -->
					<p class="text-zinc-300 text-base leading-relaxed flex-1">"{t.text}"</p>

					<!-- Author -->
					<div class="flex items-center gap-3 pt-2 border-t border-zinc-800/60">
						<div class="w-10 h-10 rounded-full bg-linear-to-br {t.color} flex items-center justify-center text-white text-sm font-bold shrink-0">
							{t.initials}
						</div>
						<div>
							<p class="text-white font-semibold text-sm">{t.name}</p>
							<p class="text-zinc-500 text-xs">{t.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
