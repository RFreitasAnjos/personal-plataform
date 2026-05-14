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

<footer class="relative bg-zinc-950 border-t border-zinc-900">
	<div class="container mx-auto px-6 max-w-6xl py-14">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
			<!-- Brand -->
			<div>
				<h3 class="text-white font-black text-2xl tracking-tight mb-3">
					Gui <span class="text-red-500">Freitas</span>
				</h3>
				<p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
					Personal trainer certificado dedicado a transformar vidas através do movimento e disciplina.
				</p>
			</div>

			<!-- Nav links -->
			<div>
				<p class="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">Navegação</p>
				<ul class="flex flex-col gap-2">
					{#each links as link}
						<li>
							<a href={link.href} class="text-zinc-500 hover:text-red-400 text-sm transition-colors duration-200">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Social -->
			<div>
				<p class="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">Redes Sociais</p>
				<div class="flex flex-col gap-3">
					<a
						href="https://www.instagram.com/guifreitas_personal"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 text-zinc-500 hover:text-red-400 transition-colors duration-200 group"
					>
						<div class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-red-900/50 transition-colors">
							<Instagram size={15} />
						</div>
						<span class="text-sm">@guifreitas_personal</span>
					</a>
					<a
						href="https://wa.me/5511994740471?text=Ol%C3%A1%20Gui%2C%20quero%20come%C3%A7ar%20minha%20transforma%C3%A7%C3%A3o!"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 text-zinc-500 hover:text-red-400 transition-colors duration-200 group"
					>
						<div class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-red-900/50 transition-colors">
							<MessageCircle size={15} />
						</div>
						<span class="text-sm">WhatsApp</span>
					</a>
					<a
						href="tel:+5511994740471"
						class="flex items-center gap-3 text-zinc-500 hover:text-red-400 transition-colors duration-200 group"
					>
						<div class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-red-900/50 transition-colors">
							<Phone size={15} />
						</div>
						<span class="text-sm">(11) 99474-0471</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
			<p class="text-zinc-600 text-xs">
				© {currentYear} Gui Freitas Personal Trainer. Todos os direitos reservados.
			</p>
			<p class="text-zinc-700 text-xs">
				Feito com dedicação para transformar vidas.
			</p>
		</div>
	</div>
</footer>
