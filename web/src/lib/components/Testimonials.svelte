<script lang="ts">
	import { Star, Quote, ArrowRight, X } from 'lucide-svelte';

	import { testimonials } from '$lib/mocks/Testimonials';

	let selectedImage: { src: string; alt: string } | null = $state(null);

	function openImage(src: string, alt: string) {
		selectedImage = { src, alt };
	}

	function closeImage() {
		selectedImage = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeImage();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if selectedImage}
	<!-- Lightbox -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
		onclick={closeImage}
		onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeImage(); }}
		role="dialog"
		aria-modal="true"
		aria-label="Visualizar imagem"
		tabindex="-1"
	>
		<button
			class="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-800/80 text-white/70 transition-colors hover:bg-zinc-700 hover:text-white"
			onclick={closeImage}
			aria-label="Fechar"
		>
			<X size={20} />
		</button>
		<button
			class="cursor-default focus:outline-none"
			onclick={(e) => e.stopPropagation()}
			aria-label="Imagem ampliada de {selectedImage.alt}"
		>
			<img
				src={selectedImage.src}
				alt={selectedImage.alt}
				class="max-h-[85vh] max-w-[90vw] rounded-2xl border-4 border-zinc-700/60 object-contain shadow-2xl"
			/>
		</button>
	</div>
{/if}

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

					<div>
						<!-- Image -->
						{#if t.image}
							<button
								class="mb-4 cursor-zoom-in rounded-xl p-0 focus:outline-none focus:ring-2 focus:ring-red-500"
								onclick={() => openImage(t.image, t.name)}
								aria-label="Ampliar foto de {t.name}"
							>
								<img
									src={t.image}
									alt={t.name}
									class="h-44 w-44 rounded-xl border-4 border-zinc-800/60 object-cover transition-all duration-300 hover:scale-105 hover:border-red-700/60 hover:shadow-lg hover:shadow-red-900/20 sm:h-40 sm:w-40"
								/>
							</button>
						{/if}
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
		<!-- Instagram CTA -->
		<div class="mt-12 flex justify-center">
			<a
				href="https://www.instagram.com/guifreitas_personal"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-6 py-4 transition-all duration-300 hover:border-pink-500/40 hover:bg-zinc-900 hover:shadow-lg hover:shadow-pink-900/10"
			>
				<!-- Instagram icon -->
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
					>
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
					</svg>
				</div>
				<div class="flex flex-col">
					<span class="text-xs text-zinc-500">Veja mais depoimentos no nosso</span>
					<span
						class="bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-sm font-bold text-transparent"
						>@guifreitas_personal</span
					>
				</div>
				<ArrowRight
					size={16}
					class="ml-1 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-pink-400"
				/>
			</a>
		</div>
	</div>
</section>
