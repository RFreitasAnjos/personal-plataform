import { MessageCircle, Zap, Crown } from 'lucide-svelte';

const plans = [
	{
		icon: Zap,
		name: 'Consultoria Online',
		price: 'R$ 200.00',
		period: '/mês',
		desc: 'Para quem quer treinar com orientação profissional a distância.',
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
		price: 'R$ 450.00',
		period: '/mês',
		desc: 'Máxima evolução com suporte completo, presencial ou online.',
		featured: true,
		cta: 'Quero o Premium',
		perks: [
			'Acompanhamento presencial 3x por semana',
			'Treino 100% personalizado',
			'Suporte WhatsApp 7 dias/semana',
			'Avaliação física mensal',
			'Orientação nutricional com nutricionista profissional',
			'Acesso a comunidade exclusiva e plataforma de acompanhamento'
		]
	},
	{
		icon: MessageCircle,
		name: 'Personal Presencial',
		price: 'R$ 300.00',
		period: '/mês',
		desc: 'Acompanhamento presencial na sua academia com atenção individual.',
		featured: false,
		cta: 'Falar com Gui',
		perks: [
			'Aulas presenciais 3x por semana',
			'Treino personalizado',
			'Suporte via WhatsApp 7 dias/semana',
			'Avaliação física mensal',
			'Acesso a plataforma de acompanhamento'
		]
	}
];

export { plans };
