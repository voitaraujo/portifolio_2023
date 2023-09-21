import Logo_ReactHookForm from '../assets/svg/ReactHookForm.svg';
import Logo_AdonisJS from '../assets/svg/adonisjs.svg';
import Logo_Express from '../assets/svg/express.svg';
import Logo_Fauna from '../assets/svg/faunadb.svg';
import Logo_Framer from '../assets/svg/framer.svg';
import Logo_JS from '../assets/svg/javascript.svg';
import Logo_MSSQL from '../assets/svg/mssql.svg';
import Logo_MUI from '../assets/svg/mui.svg';
import Logo_NextJS from '../assets/svg/nextjs.svg';
import Logo_Nodejs from '../assets/svg/nodejs.svg';
import Logo_PlanetScale from '../assets/svg/planetscale.svg';
import Logo_Prisma from '../assets/svg/prisma.svg';
import Logo_Puppeteer from '../assets/svg/puppeteer.svg';
import Logo_ReactJS from '../assets/svg/reactjs.svg';
import Logo_RN from '../assets/svg/reactnative.svg';
import Logo_RealmDB from '../assets/svg/realm.svg';
import Logo_Rust from '../assets/svg/rust.svg';
import Logo_Sass from '../assets/svg/sass.svg';
import Logo_ShadcnUI from '../assets/svg/shadcnui.svg';
import Logo_Svelte from '../assets/svg/svelte.svg';
import Logo_Tailwind from '../assets/svg/tailwind.svg';
import Logo_Tauri from '../assets/svg/tauri.svg';
import Logo_TS from '../assets/svg/typescript.svg';
import Logo_ViteJS from '../assets/svg/vitejs.svg';
import Logo_Zod from '../assets/svg/zod.svg';

export default function TechIcon({
	tech,
	className,
}: {
	tech: TTecnologies;
	className?: string;
}) {
	return (
		<img
			draggable={false}
			className={className}
			src={getIcon(tech)}
			alt={tech}
		/>
	);
}

export type TTecnologies = TFront | TBack | TDB | TOthers;
type TFront =
	| 'ReactJS'
	| 'React Native'
	| 'TailwindCSS'
	| 'MUI'
	| 'Svelte'
	| 'SASS'
	| 'Framer Motion'
	| 'Shadcn/ui'
	| 'React Hook Form'
	| 'Prisma'
	| 'Zod';
type TBack = 'NodeJS' | 'AdonisJS' | 'NextJS' | 'Rust' | 'Express';
type TDB = 'MSSQL' | 'FaunaDB' | 'RealmDB' | 'Planet Scale';
type TOthers = 'Vite' | 'Typescript' | 'Javascript' | 'Tauri' | 'Puppeteer';

function getIcon(tec: TTecnologies) {
	switch (tec) {
		case 'ReactJS':
			return Logo_ReactJS;
		case 'FaunaDB':
			return Logo_Fauna;
		case 'MSSQL':
			return Logo_MSSQL;
		case 'MUI':
			return Logo_MUI;
		case 'NextJS':
			return Logo_NextJS;
		case 'NodeJS':
			return Logo_Nodejs;
		case 'React Native':
			return Logo_RN;
		case 'SASS':
			return Logo_Sass;
		case 'Svelte':
			return Logo_Svelte;
		case 'TailwindCSS':
			return Logo_Tailwind;
		case 'Vite':
			return Logo_ViteJS;
		case 'AdonisJS':
			return Logo_AdonisJS;
		case 'RealmDB':
			return Logo_RealmDB;
		case 'Javascript':
			return Logo_JS;
		case 'Typescript':
			return Logo_TS;
		case 'Tauri':
			return Logo_Tauri;
		case 'Express':
			return Logo_Express;
		case 'Puppeteer':
			return Logo_Puppeteer;
		case 'Rust':
			return Logo_Rust;
		case 'Framer Motion':
			return Logo_Framer;
		case 'Planet Scale':
			return Logo_PlanetScale;
		case 'Prisma':
			return Logo_Prisma;
		case 'React Hook Form':
			return Logo_ReactHookForm;
		case 'Shadcn/ui':
			return Logo_ShadcnUI;
		case 'Zod':
			return Logo_Zod;
	}
}
