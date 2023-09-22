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
			return '/svg/reactjs.svg';
		case 'FaunaDB':
			return '/svg/faunadb.svg';
		case 'MSSQL':
			return '/svg/mssql.svg';
		case 'MUI':
			return '/svg/mui.svg';
		case 'NextJS':
			return '/svg/nextjs.svg';
		case 'NodeJS':
			return '/svg/nodejs.svg';
		case 'React Native':
			return '/svg/reactnative.svg';
		case 'SASS':
			return '/svg/sass.svg';
		case 'Svelte':
			return '/svg/svelte.svg';
		case 'TailwindCSS':
			return '/svg/tailwind.svg';
		case 'Vite':
			return '/svg/vitejs.svg';
		case 'AdonisJS':
			return '/svg/adonisjs.svg';
		case 'RealmDB':
			return '/svg/realm.svg';
		case 'Javascript':
			return '/svg/javascript.svg';
		case 'Typescript':
			return '/svg/typescript.svg';
		case 'Tauri':
			return '/svg/tauri.svg';
		case 'Express':
			return '/svg/express.svg';
		case 'Puppeteer':
			return '/svg/puppeteer.svg';
		case 'Rust':
			return '/svg/rust.svg';
		case 'Framer Motion':
			return '/svg/framer.svg';
		case 'Planet Scale':
			return '/svg/planetscale.svg';
		case 'Prisma':
			return '/svg/prisma.svg';
		case 'React Hook Form':
			return '/svg/ReactHookForm.svg';
		case 'Shadcn/ui':
			return '/svg/shadcnui.svg';
		case 'Zod':
			return '/svg/zod.svg';
	}
}
