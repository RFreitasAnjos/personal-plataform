<script lang="ts">
	import { Star, Quote } from 'lucide-svelte';

	import { testimonials } from '$lib/mocks/Testimonials';
</script>

<section id="depoimentos" class="relative overflow-hidden py-16 sm:py-20 md:py-28">
	<div class="absolute inset-0 bg-zinc-950"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(192,57,43,0.10),transparent)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-6xl px-6">
		<!-- Header -->
		<div class="mb-16 text-center">
			<span class="mb-4 inline-block text-sm font-semibold tracking-widest text-red-500 uppercase"
				>Depoimentos</span
			>
			<h2 class="section-title mb-4 text-4xl text-white sm:text-5xl">
				O que dizem<br />
				<span class="text-gradient">nossos alunos.</span>
			</h2>
			<p class="mx-auto max-w-xl text-lg text-zinc-400">
				Resultados reais de quem confiou no método e se comprometeu com a transformação.
			</p>
		</div>

		<!-- Cards -->
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each testimonials as t (t.name)}
				<div
					class="glass-dark group flex flex-col gap-5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-900/30"
				>
					<!-- Quote icon -->
					<div class="text-red-900/60 transition-colors group-hover:text-red-800/80">
						<Quote size={32} />
					</div>

					<!-- Stars -->
					<div class="flex gap-1">
						{#each Array(t.stars) as _, i (i)}
							<Star size={14} class="fill-yellow-400 text-yellow-400" />
						{/each}
					</div>

					<!-- Text -->
					<p class="flex-1 text-base leading-relaxed text-zinc-300">"{t.text}"</p>

					<!-- Author -->
					<div class="flex items-center gap-3 border-t border-zinc-800/60 pt-2">
						<div
							class="h-10 w-10 rounded-full bg-linear-to-br {t.color} flex shrink-0 items-center justify-center text-sm font-bold text-white"
						>
							{t.initials}
						</div>
						<div>
							<p class="text-sm font-semibold text-white">{t.name}</p>
							<p class="text-xs text-zinc-500">{t.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
