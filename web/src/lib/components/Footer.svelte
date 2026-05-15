<script lang="ts">
	import { Instagram, MessageCircle, Phone } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	const links = [
		{ label: 'Sobre', href: '#sobre' },
		{ label: 'Benefícios', href: '#beneficios' },
		{ label: 'Depoimentos', href: '#depoimentos' },
		{ label: 'Planos', href: '#planos' },
		{ label: 'Contato', href: '#contato' }
	];
</script>

<footer class="relative border-t border-zinc-900 bg-zinc-950">
	<div class="container mx-auto max-w-6xl px-6 py-14">
		<div class="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<h3 class="mb-3 text-2xl font-black tracking-tight text-white">
					Gui <span class="text-red-500">Freitas</span>
				</h3>
				<p class="max-w-xs text-sm leading-relaxed text-zinc-500">
					Personal trainer certificado dedicado a transformar vidas através do movimento e
					disciplina.
				</p>
			</div>

			<!-- Nav links -->
			<div>
				<p class="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">Navegação</p>
				<ul class="flex flex-col gap-2">
					{#each links as link (link.href)}
						<li>
							<a
								href={link.href}
								class="text-sm text-zinc-500 transition-colors duration-200 hover:text-red-400"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Social -->
			<div>
				<p class="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
					Redes Sociais
				</p>
				<div class="flex flex-col gap-3">
					<a
						href="https://www.instagram.com/guifreitas_personal"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-3 text-zinc-500 transition-colors duration-200 hover:text-red-400"
					>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-red-900/50"
						>
							<Instagram size={15} />
						</div>
						<span class="text-sm">@guifreitas_personal</span>
					</a>
					<a
						href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-3 text-zinc-500 transition-colors duration-200 hover:text-red-400"
					>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-red-900/50"
						>
							<MessageCircle size={15} />
						</div>
						<span class="text-sm">WhatsApp</span>
					</a>
					<a
						href="tel:+5511994740471"
						class="group flex items-center gap-3 text-zinc-500 transition-colors duration-200 hover:text-red-400"
					>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-red-900/50"
						>
							<Phone size={15} />
						</div>
						<span class="text-sm">(11) 99474-0471</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div
			class="flex flex-col items-center justify-around gap-3 border-t border-zinc-900 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
		>
			<p class="text-xs text-zinc-600">
				&copy; {currentYear} Gui Freitas Personal Trainer. Todos os direitos reservados.
			</p>
			<a
				href="https://rfreitasanjos.github.io/meu-portifolio/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
			>
				Feito com dedicação por <span class="text-red-500">Renan Freitas</span> para transformar vidas.
			</a>
		</div>
	</div>
</footer>
