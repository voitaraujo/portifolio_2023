import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FaGithub as FaGithubIcon } from 'react-icons/fa';
import TechIcon from './TechIcon';

import {
	BentoSlotContextProvider,
	IProjectsData,
	useBentoSlotContext,
} from '../hooks/useBentoSlotContext';

export function BentoGrid({ children }: { children: ReactNode }) {
	return (
		<div className='grid auto-rows-auto grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4'>
			{children}
		</div>
	);
}

export function BentoSlot({
	children,
	project,
}: {
	children: ReactNode;
	project: IProjectsData | null;
}) {
	let composeClassName: string =
		'relative group hover:border-blue-300 rounded-xl border-2 border-slate-400/10 bg-neutral-100 overflow-hidden md:min-h-[300px] dark:bg-neutral-500 ';

	if (!project) {
		composeClassName = composeClassName + 'col-span-1 row-span-1';
	} else {
		switch (project.variant) {
			// case 'box':
			// 	composeClassName = composeClassName + 'col-span-2 row-span-2';
			// 	break;
			case 'square':
				composeClassName = composeClassName + 'col-span-1 row-span-1';
				break;
			case 'landscape':
				composeClassName =
					composeClassName + 'col-span-1 sm:col-span-2 row-span-1';
				break;
			case 'portrait':
				composeClassName =
					composeClassName + 'col-span-1 row-span-1 sm:row-span-2';
				break;
		}
	}

	return (
		<BentoSlotContextProvider value={project}>
			<motion.div
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					transition: {
						delay: Math.random(),
						duration: 1,
						type: 'spring',
					},
				}}
				style={{
					transition: 'border 200ms ease',
				}}
				className={composeClassName}
			>
				{children}
			</motion.div>
		</BentoSlotContextProvider>
	);
}

const BentoCover = () => {
	const { imgSrc, imgAlt } = useBentoSlotContext();

	return (
		<img
			draggable={false}
			className='h-full object-cover opacity-80 transition-all group-hover:scale-110 group-hover:opacity-100'
			alt={imgAlt}
			src={imgSrc}
		/>
	);
};

const BentoInfo = ({ children }: { children: ReactNode }) => {
	const { variant } = useBentoSlotContext();

	const sharedClasses =
		'absolute flex flex-col border border-neutral-400/50 shadow-xl bg-white/50 rounded-xl backdrop-blur-xl py-2 px-4 ';
	const smallerScreenClasses =
		'max-w-[90%] max-h-4/5 bottom-4 right-4 sm:bottom-6 md:bottom-10 pb-8 ';
	const landscapeSpecificClasses =
		'sm:w-1/2 sm:h-1/2 sm:right-10 md:min-w-[300px] ';

	return (
		<div
			className={
				sharedClasses +
				smallerScreenClasses +
				(variant === 'landscape' ? landscapeSpecificClasses : '')
			}
		>
			{children}
			{/* {relatedPageUrl && (
				<a
					href={relatedPageUrl}
					target='_blank'
					rel='noreferrer'
					className='ml-auto mt-auto whitespace-nowrap text-sm font-light text-blue-600/70'
				>
					ler mais
				</a>
			)} */}
		</div>
	);
};

const BentoTitle = () => {
	const { deployURL, repositoryURL, projectName } = useBentoSlotContext();

	return (
		<span className='flex items-baseline justify-between gap-2'>
			<a
				target='_blanc'
				rel='noreferrer'
				href={deployURL ?? undefined}
				className={`w-fit text-2xl font-medium underline-offset-4 sm:text-4xl ${
					typeof deployURL === 'undefined'
						? 'cursor-default text-zinc-600'
						: 'text-blue-600/70 focus-within:underline hover:underline'
				}`}
			>
				{projectName}
			</a>
			{repositoryURL && (
				<a
					target='_blanc'
					rel='noreferrer'
					href={repositoryURL}
					className='rounded-full bg-white/40 p-2 text-xl shadow-sm shadow-black/30 transition ease-out focus-within:scale-105 focus-within:shadow-md focus-within:shadow-black/30 hover:scale-105 hover:shadow-md hover:shadow-black/30'
				>
					<FaGithubIcon />
				</a>
			)}
		</span>
	);
};

const BentoDescription = () => {
	const { projectDescription } = useBentoSlotContext();

	return (
		<p className='mt-2 pl-4 font-light tracking-tighter text-neutral-600 dark:text-neutral-800'>
			{projectDescription}
		</p>
	);
};

const BentoTechCarrousel = () => {
	const { techStack } = useBentoSlotContext();

	return (
		<div className='absolute -bottom-4 -left-4 flex h-[40px] w-full max-w-[200px] items-start overflow-hidden rounded-full border border-zinc-400 bg-slate-200 transition-all hover:h-16 hover:max-w-[250px]'>
			<div className='absolute flex h-10 w-max items-center'>
				{[...new Array(2)].map((_, idx) => (
					<div
						key={idx}
						className='flex h-10 w-full animate-slide items-center'
					>
						{techStack.map((t) => (
							<div key={t} className='mx-3 mt-2 h-10'>
								<TechIcon className='mx-auto h-8 w-8' tech={t} />
								<span className='w-full text-center text-xs'>{t}</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

BentoSlot.Info = BentoInfo;
BentoSlot.BentoCover = BentoCover;
BentoSlot.Title = BentoTitle;
BentoSlot.Description = BentoDescription;
BentoSlot.TechCarrousel = BentoTechCarrousel;

export type TBentoSlotVariant = 'square' | 'portrait' | 'landscape';
