<script lang="ts">
	import { benefits } from '$lib/mocks/benefits';
</script>

<section id="beneficios" class="relative overflow-hidden py-16 sm:py-20 md:py-28">
	<div class="absolute inset-0 bg-zinc-900/40"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(192,57,43,0.07),transparent)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-6xl px-6">
		<!-- Header -->
		<div class="mb-16 text-center">
			<span class="mb-4 inline-block text-sm font-semibold tracking-widest text-red-500 uppercase"
				>Por que escolher Gui Freitas</span
			>
			<h2 class="section-title mb-4 text-4xl text-white sm:text-5xl">
				Benefícios que você<br />
				<span class="text-gradient">realmente vai sentir.</span>
			</h2>
			<p class="mx-auto max-w-xl text-lg text-zinc-400">
				Cada detalhe do seu treino é pensado para gerar resultados reais e duradouros.
			</p>
		</div>

		<!-- Benefits grid -->
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each benefits as benefit (benefit.title)}
				<div
					class="group relative rounded-2xl border border-zinc-800/60 bg-linear-to-br p-6 {benefit.color} cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-red-900/40"
				>
					<!-- Hover glow -->
					<div
						class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(192,57,43,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>

					<div class="relative z-10">
						<div
							class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/50 bg-zinc-900/80 transition-colors duration-300 group-hover:border-red-900/50"
						>
							<benefit.icon size={20} class="text-red-400" />
						</div>
						<h3 class="mb-2 text-base font-semibold text-white">{benefit.title}</h3>
						<p class="text-sm leading-relaxed text-zinc-500">{benefit.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
