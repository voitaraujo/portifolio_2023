// import OnProgress_IMG from './assets/img/development_slot.png';
import Galeria_IMG from './assets/img/galeria_slot.png';
import KeepMyLink_IMG from './assets/img/kml_slot.png';
import Scrappy_IMG from './assets/img/scrappy_slot.png';
import SLWEB_IMG from './assets/img/slweb_slot.png';
import Snapshot_IMG from './assets/img/snapshots.png';

import { IProjectsData } from './hooks/useBentoSlotContext';

export const ProjectsData: IProjectsData[] = [
	{
		projectName: 'Snapshots',
		projectDescription:
			'Aplicação pessoal para gestão dos meus freelances',
		imgSrc: Snapshot_IMG,
		imgAlt: 'Snapshots project cover image',
		deployURL: null,
		repositoryURL: null,
		techStack: ['Typescript', 'NextJS', 'TailwindCSS', 'Planet Scale', 'ReactJS', 'Shadcn/ui', 'Zod', 'React Hook Form', 'Prisma', 'Framer Motion'],
		variant: 'landscape',
	},
	{
		projectName: 'Scrappy',
		projectDescription:
			'API para requisitar o web scrapping de uma URL fornecida, retorna diversos dados de um site',
		imgSrc: Scrappy_IMG,
		imgAlt: 'Scrappy project cover image',
		deployURL: 'https://scrappingservice.vercel.app',
		repositoryURL: 'https://github.com/voitaraujo/scrappy',
		techStack: ['NodeJS', 'Express', 'Typescript', 'Puppeteer'],
		variant: 'portrait',
	},
	// {
	// 	projectName: 'Delusion',
	// 	projectDescription:
	// 		'Aplicação para vizualização de projetos, também fornece atalhos para terefas do dia-a-dia.',
	// 	imgSrc: OnProgress_IMG,
	// 	imgAlt: 'Delusion project cover image',
	// 	deployURL: null,
	// 	repositoryURL: null,
	// 	techStack: ['ReactJS', 'Vite', 'Rust', 'Tauri'],
	// 	variant: 'square',
	// },
	{
		projectName: 'SLWEB',
		projectDescription:
			'Plataforma para gestão completa de franquias de máquinas de café automáticas.',
		imgSrc: SLWEB_IMG,
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
		imgSrc: Galeria_IMG,
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
		imgSrc: KeepMyLink_IMG,
		imgAlt: 'KeepMyLink project cover image',
		deployURL: 'https://keep-my-link.vercel.app',
		repositoryURL: 'https://github.com/voitaraujo/KeepMyLink',
		techStack: ['Typescript', 'NextJS', 'SASS', 'FaunaDB', 'ReactJS'],
		variant: 'landscape',
	},
];
