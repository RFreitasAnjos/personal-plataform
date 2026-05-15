<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Gui Freitas | Personal Trainer</title>
</svelte:head>

<main class="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
	<Hero />
	<About />
	<Benefits />
	<Testimonials />
	<Pricing />
	<CTA />
	<Footer />
</main>
