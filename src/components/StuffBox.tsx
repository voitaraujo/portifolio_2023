import { motion, useAnimate, useInView } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { FaQuestion as FaQuestionIcon } from 'react-icons/fa';
import TechIcon, { TTecnologies } from './TechIcon';

export default function StuffBox({
	Techs,
	fillWith,
}: {
	Techs: TTecnologies[];
	fillWith?: TTecnologies[];
}) {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, {
		margin: '-25% 0px -25% 0px',
		once: true,
	});

	useLayoutEffect(() => {
		if (isInView) {
			animateIconsOutsideTheBox();
		} else {
			animateIconsInsideTheBox();
		}
	}, [isInView]);

	const animateIconsOutsideTheBox = () => {
		Techs.forEach((t, idx) => {
			animate(
				`#${t.replace(' ', '_')}`,
				{
					top: `${getRandomInt(0, 20)}%`,
					right: `${(75 / Techs.length) * (idx + 1)}%`,
				},
				{ type: 'spring', duration: 1, delay: 0.3 + idx * 0.2 }
			);
		});
	};

	const animateIconsInsideTheBox = () => {
		Techs.forEach((t) => {
			animate(
				`#${t.replace(' ', '_')}`,
				{ top: '75%', right: '50%' },
				{ type: 'tween', duration: 0.3 }
			);
		});
	};

	return (
		<div
			ref={scope}
			className='relative flex h-[300px] w-[300px] flex-shrink-0 sm:h-[400px] sm:w-[400px]'
		>
			<motion.img
				draggable={false}
				src={'/img/caixa-full.png'}
				alt=''
				style={{
					top: '50%',
					right: '50%',
				}}
				className='absolute z-[1] -translate-y-1/2 translate-x-1/2'
			/>

			<motion.img
				draggable={false}
				src={'/img/caixa-mask.png'}
				alt=''
				className='absolute right-1/2 top-1/2 z-[3] -translate-y-1/2 translate-x-1/2'
			/>

			{fillerBalls.map((p, idx) => (
				<motion.div
					key={idx}
					whileInView={p.whileInView}
					initial={{ rotate: '0deg' }}
					className={
						`absolute top-1/2 z-[2] flex h-16 w-16 items-center justify-center rounded-full border border-neutral-400 bg-white shadow-md sm:h-20 sm:w-20 ` +
						p.className
					}
					viewport={{
						once: true,
					}}
				>
					{fillWith && fillWith[idx] ? (
						<TechIcon
							tech={fillWith[idx]}
							className='h-10 w-10 sm:h-12 sm:w-12'
						/>
					) : (
						<FaQuestionIcon className='rotate-45 text-zinc-400' />
					)}
				</motion.div>
			))}

			{Techs.map((t) => (
				<motion.div
					key={t}
					id={t.replace(' ', '_')}
					className='absolute right-1/2 top-[75%] z-[2] flex h-16 w-16 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg sm:h-20 sm:w-20'
				>
					<TechIcon tech={t} className='h-10 w-10 sm:h-12 sm:w-12' />
				</motion.div>
			))}
		</div>
	);
}

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

const fillerBalls = [
	{
		whileInView: {
			top: '30%',
			rotate: '-20deg',
			transition: { type: 'spring' },
		},
		className: 'right-[40%]',
	},
	{
		whileInView: {
			top: '35%',
			rotate: '10deg',
			transition: { type: 'spring' },
		},
		className: 'right-[20%]',
	},
	{
		whileInView: {
			top: '28%',
			rotate: '-35deg',
			transition: { type: 'spring' },
		},
		className: 'right-[50%]',
	},
	{
		whileInView: {
			top: '30%',
			rotate: '-15deg',
			transition: { type: 'spring' },
		},
		className: 'right-[60%]',
	},
	{
		whileInView: {
			top: '25%',
			rotate: '-25deg',
			transition: { type: 'spring' },
		},
		className: 'right-[35%]',
	},
	{
		whileInView: {
			top: '30%',
			rotate: '30deg',
			transition: { type: 'spring' },
		},
		className: 'right-[30%]',
	},
];
