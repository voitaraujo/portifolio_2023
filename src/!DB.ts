import { IProjectsData } from './hooks/useBentoSlotContext';

export const ProjectsData: IProjectsData[] = [
	{
		projectName: 'Snapshots',
		projectDescription: 'Aplicação pessoal para gestão dos meus freelances',
		imgSrc: '/img/snapshots.png',
		imgAlt: 'Snapshots project cover image',
		deployURL: null,
		repositoryURL: null,
		techStack: [
			'Typescript',
			'NextJS',
			'TailwindCSS',
			'Planet Scale',
			'ReactJS',
			'Shadcn/ui',
			'Zod',
			'React Hook Form',
			'Prisma',
			'Framer Motion',
		],
		variant: 'landscape',
	},
	{
		projectName: 'Scrappy',
		projectDescription:
			'API para requisitar o web scrapping de uma URL fornecida, retorna diversos dados de um site',
		imgSrc: '/img/scrappy_slot.png',
		imgAlt: 'Scrappy project cover image',
		deployURL: 'https://scrappingservice.vercel.app',
		repositoryURL: 'https://github.com/voitaraujo/scrappy',
		techStack: ['NodeJS', 'Express', 'Typescript', 'Puppeteer'],
		variant: 'portrait',
	},
	{
		projectName: 'SLWEB',
		projectDescription:
			'Plataforma para gestão completa de franquias de máquinas de café automáticas.',
		imgSrc: '/img/slweb_slot.png',
		imgAlt: 'SLWEB project cover image',
		deployURL: 'https://slweb.slaplic.com.br',
		repositoryURL: null,
		techStack: ['ReactJS', 'AdonisJS', 'Javascript', 'MSSQL', 'MUI', 'NodeJS'],
		variant: 'square',
	},
	{
		projectName: 'Galeria de Videos',
		projectDescription:
			'Landing page desenvolvida como atividade de um processo seletivo',
		imgSrc: '/img/galeria_slot.png',
		imgAlt: 'Galeria project cover image',
		deployURL: 'https://estudo-galeria-de-videos.vercel.app/',
		repositoryURL: 'https://github.com/voitaraujo/estudo-galeria-de-videos',
		techStack: ['NextJS', 'ReactJS', 'TailwindCSS', 'Framer Motion'],
		variant: 'square',
	},
	{
		projectName: 'KeepMyLink',
		projectDescription:
			'Uma plataforma para salvar, gerenciar e compartilhar links anônimamente.',
		imgSrc: '/img/kml_slot.png',
		imgAlt: 'KeepMyLink project cover image',
		deployURL: 'https://keep-my-link.vercel.app',
		repositoryURL: 'https://github.com/voitaraujo/KeepMyLink',
		techStack: ['Typescript', 'NextJS', 'SASS', 'FaunaDB', 'ReactJS'],
		variant: 'landscape',
	},
];
