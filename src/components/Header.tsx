import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LightModeSwitch from './LightmodeSwitch';

type TLinks = [string, string, string];

export default function Header({ links }: { links: TLinks }) {
	const [viewWidth, setViewWidth] = useState(window.innerWidth);
	const location = useLocation();

	function updateDeviceWidthClass() {
		setViewWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', updateDeviceWidthClass);

		return () => {
			window.removeEventListener('resize', updateDeviceWidthClass);
		};
	}, []);

	return (
		<motion.header
			initial={{ opacity: 0, y: -100 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: { duration: 0.5, type: 'spring' },
			}}
			exit={{ opacity: 0, y: -100 }}
			className='sticky top-0 z-[999] flex h-16 w-full items-center border-b border-gray-200 bg-custom-white/80 px-4 backdrop-blur dark:border-gray-800 dark:bg-custom-black/80'
		>
			{/* {viewWidth > 300 && <MyBigHead className='mb-2 h-[63px] w-[63px]' />} */}

			<Link
				to={'/'}
				className='mr-auto text-2xl font-extralight text-zinc-800 dark:text-gray-400 '
			>
				Voitila Araújo
			</Link>

			<LightModeSwitch />
			<nav className='ml-2'>
				{viewWidth <= 500 ? (
					<BurgerButton routes={links} currentRoute={location.pathname} />
				) : (
					<ListNavigation routes={links} currentRoute={location.pathname} />
				)}
			</nav>
		</motion.header>
	);
}

const BurgerButton = ({
	routes,
	currentRoute,
}: {
	routes: TLinks;
	currentRoute: string;
}) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	const burgerClassNames = {
		liDefault:
			'overflow-hidden transition-all absolute h-[4px] w-full dark:bg-white bg-black backface-hidden ',
		liVariants: {
			top: {
				default: 'top-[6px] left-0 !duration-[200ms] ',
				expanded:
					'top-[2.5rem] whitespace-nowrap !duration-[600ms] !w-[150px] !h-8 bg-black dark:bg-white z-10 -left-32 rounded-t',
			},
			middle: {
				default: 'top-[14px] left-0 !duration-[400ms] ',
				expanded:
					'top-[4.5rem] whitespace-nowrap !duration-[400ms] !w-[150px] !h-8 bg-black dark:bg-white z-10 -left-32',
			},
			bottom: {
				default: 'top-[22px] left-0 !duration-[600ms] ',
				expanded:
					'top-[6.5rem] whitespace-nowrap !duration-[200ms] !w-[150px] !h-8 bg-black dark:bg-white z-10 -left-32 rounded-b',
			},
		},
		spanDefault:
			'text-stone-800 text-white dark:text-black flex transition-all ',
		spanVariants: {
			top: {
				default: 'pl-8 opacity-0 delay-0 w-0 h-0',
				expanded: 'pl-2 opacity-100 delay-[600ms] py-1 w-full h-full',
			},
			middle: {
				default: 'pl-8 opacity-0 delay-0 w-0 h-0',
				expanded: 'pl-2 opacity-100 delay-[400ms] py-1 w-full h-full',
			},
			bottom: {
				default: 'pl-8 opacity-0 delay-0 w-0 h-0',
				expanded: 'pl-2 opacity-100 delay-[200ms] py-1 w-full h-full',
			},
		},
	};

	return (
		<ul className='relative m-0 h-8 w-8 p-0'>
			<button
				onClick={() => setExpanded((oldState) => !oldState)}
				className={`
          relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden text-black transition-all dark:text-white
          ${expanded ? 'opacity-1' : 'opacity-0'}
          `}
			>
				<div
					className={`absolute h-[4px] w-full bg-black transition-all delay-200 dark:bg-white ${
						expanded ? 'rotate-45' : 'rotate-0'
					}`}
				/>
				<div
					className={`absolute h-[4px] w-full bg-black transition-all delay-200 dark:bg-white ${
						expanded ? '-rotate-45' : 'rotate-0'
					}`}
				/>
			</button>
			{[
				...(Object.keys(burgerClassNames.liVariants) as [
					'top' | 'middle' | 'bottom'
				]),
			].map((variant, idx) => (
				<li
					key={routes[idx]}
					className={
						burgerClassNames.liDefault +
						`${
							expanded
								? burgerClassNames.liVariants[variant].expanded
								: burgerClassNames.liVariants[variant].default
						}` +
						`${routes[idx] === currentRoute.split('/').at(-1) ? ' !pl-2' : ''}`
					}
				>
					{routes[idx] === currentRoute.split('/').at(-1) && (
						<motion.span
							className={`h-4/5 w-1 bg-blue-600 ${
								expanded ? ' opacity-100' : 'opacity-0'
							} absolute left-2 top-1/2 flex -translate-y-1/2 rounded`}
						/>
					)}

					<Link
						to={routes[idx]}
						onClick={() => setExpanded(false)}
						className={
							burgerClassNames.spanDefault +
							`${
								expanded
									? burgerClassNames.spanVariants[variant].expanded
									: burgerClassNames.spanVariants[variant].default
							}`
						}
					>
						{routes[idx].replace('/', '')}
					</Link>
				</li>
			))}
		</ul>
	);
};

const ListNavigation = ({
	routes,
	currentRoute,
}: {
	routes: TLinks;
	currentRoute: string;
}) => {
	return (
		<ul className='flex'>
			{routes.map((link, i) => (
				<motion.li
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						duration: 0.2,
						delay: i === 0 ? 0.5 : 0.5 + i * 0.2,
					}}
					key={link}
					className='group relative mx-2 h-6 text-xs sm:h-8 sm:text-sm md:text-base'
				>
					<Link
						className='relative z-10 flex h-full w-full px-2 text-zinc-800 transition group-hover:text-blue-400 dark:text-white'
						to={link}
					>
						{link.replace('/', '')}
					</Link>
					{currentRoute.split('/').at(-1)!.replace('/', '') ===
						link.replace('/', '') && (
						<motion.span
							transition={{
								type: 'spring',
								bounce: 0.3,
							}}
							style={{
								transition:
									'height 200ms ease, margin-bottom 200ms ease, background-color 200ms ease',
							}}
							className='absolute bottom-0 right-0 h-1 w-full rounded-md bg-blue-400 group-hover:mb-1 group-hover:h-full group-hover:bg-black dark:group-hover:bg-white'
							layoutId='underline'
						/>
					)}
				</motion.li>
			))}
		</ul>
	);
};
