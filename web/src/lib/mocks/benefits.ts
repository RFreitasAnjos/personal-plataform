import { TrendingUp, Zap, Heart, Sun, UserCheck, Target } from 'lucide-svelte';

const benefits = [
	{
		icon: TrendingUp,
		title: 'Ganho de Massa Muscular',
		desc: 'Protocolos de hipertrofia scientificamente embasados para máxima síntese proteica.',
		color: 'from-red-950/60 to-red-900/20'
	},
	{
		icon: Target,
		title: 'Emagrecimento Eficaz',
		desc: 'Estratégias de déficit calórico e queima de gordura sem perder a massa muscular.',
		color: 'from-orange-950/60 to-orange-900/20'
	},
	{
		icon: Heart,
		title: 'Melhora da Saúde',
		desc: 'Redução de gordura visceral, melhora cardiovascular e controle metabólico.',
		color: 'from-rose-950/60 to-rose-900/20'
	},
	{
		icon: Sun,
		title: 'Mais Disposição',
		desc: 'Treinos equilibrados que aumentam energia, humor e qualidade do sono.',
		color: 'from-amber-950/60 to-amber-900/20'
	},
	{
		icon: UserCheck,
		title: 'Acompanhamento Próximo',
		desc: 'Suporte individual e ajustes constantes para que você nunca fique sem direção.',
		color: 'from-red-950/60 to-zinc-900/20'
	},
	{
		icon: Zap,
		title: 'Resultados Rápidos',
		desc: 'Metodologia validada que acelera resultados sem atalhos ou riscos à saúde.',
		color: 'from-yellow-950/60 to-yellow-900/20'
	}
];

export { benefits };
