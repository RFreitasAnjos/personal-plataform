import { MessageCircle, Zap, Crown } from 'lucide-svelte';

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

export { plans };
