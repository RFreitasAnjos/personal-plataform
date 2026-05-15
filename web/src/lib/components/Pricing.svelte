<script lang="ts">
	import { plans } from '$lib/mocks/pricing';
	import { Check, MessageCircle } from 'lucide-svelte';
</script>

<section id="planos" class="relative overflow-hidden py-16 sm:py-20 md:py-28">
	<div class="absolute inset-0 bg-zinc-900/30"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(192,57,43,0.07),transparent)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-6xl px-6">
		<!-- Header -->
		<div class="mb-16 text-center">
			<span class="mb-4 inline-block text-sm font-semibold tracking-widest text-red-500 uppercase"
				>Planos e Serviços</span
			>
			<h2 class="section-title mb-4 text-4xl text-white sm:text-5xl">
				Invista na sua<br />
				<span class="text-gradient">melhor versão.</span>
			</h2>
			<p class="mx-auto max-w-xl text-lg text-zinc-400">
				Escolha o plano que melhor se encaixa na sua rotina e objetivos.
			</p>
		</div>

		<!-- Cards -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
			{#each plans as plan (plan.name)}
				<div
					class="relative flex flex-col gap-5 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2
					{plan.featured
						? 'border border-red-700/50 bg-linear-to-b from-red-950/80 to-zinc-900 shadow-[0_0_40px_rgba(192,57,43,0.25)] md:scale-105'
						: 'glass-dark hover:border-red-900/30'}"
				>
					<!-- Featured badge -->
					{#if plan.featured}
						<div
							class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-red-700 to-red-500 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg"
						>
							Mais Popular
						</div>
					{/if}

					<!-- Icon + Name -->
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl {plan.featured
								? 'border border-red-600/40 bg-red-800/60'
								: 'border border-zinc-700/40 bg-zinc-800/60'}"
						>
							<plan.icon size={18} class={plan.featured ? 'text-red-300' : 'text-zinc-400'} />
						</div>
						<h3 class="text-lg font-bold text-white">{plan.name}</h3>
					</div>

					<!-- Price -->
					<div class="flex items-end gap-1">
						<span class="text-4xl font-black text-white">{plan.price}</span>
						<span class="mb-1 text-sm text-zinc-500">{plan.period}</span>
					</div>

					<p class="text-sm leading-relaxed text-zinc-400">{plan.desc}</p>

					<hr class="border-zinc-800/60" />

					<!-- Perks -->
					<ul class="flex flex-col gap-3">
						{#each plan.perks as perk (perk)}
							<li class="flex items-start gap-2.5 text-sm text-zinc-300">
								<Check size={15} class="mt-0.5 shrink-0 text-red-500" />
								{perk}
							</li>
						{/each}
					</ul>

					<!-- CTA -->
					<a
						href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20tenho%20interesse%20no%20{encodeURIComponent(
							plan.name
						)}!"
						target="_blank"
						rel="noopener noreferrer"
						class="mt-auto {plan.featured
							? 'btn-brand w-full justify-center'
							: 'btn-outline w-full justify-center'}"
					>
						<MessageCircle size={16} />
						{plan.cta}
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
