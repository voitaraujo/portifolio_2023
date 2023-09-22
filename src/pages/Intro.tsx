import { Variant, Variants, motion, useAnimate } from 'framer-motion';
import { CSSProperties, useLayoutEffect, useRef } from 'react';
import { HiChevronDoubleDown as HiChevronDoubleDownIcon } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { blue } from 'tailwindcss/colors';

const introGradient = {
	full: { '--intro-gradient-opacity': '50%' },
	invisible: { '--intro-gradient-opacity': '0%' },
};

export default function Intro() {
	return (
		<motion.div
			initial={'invisible'}
			animate={'full'}
			exit={'invisible'}
			variants={introGradient as Variants}
			transition={{
				type: 'tween',
				ease: 'easeInOut',
				duration: 0.5,
			}}
			id='intro'
			className={
				'flex h-full flex-1 flex-col items-center justify-center overflow-hidden lg:justify-start'
			}
		>
			<Title>WEB DEVELOPER</Title>
			<Subtitle>Voitila Araújo</Subtitle>
			<ActionButton navigateTo='/2023/sobre' />
		</motion.div>
	);
}

const Title = ({ children }: { children: string }) => {
	const ref = useRef<HTMLHeadingElement>(null);

	function moveTitleBackground(e: MouseEvent) {
		let variations: { [K: string]: number } = {};
		const clientWidth = document.body.clientWidth / 2;
		const clientHeight = document.body.clientHeight / 2;
		const maxBgXMovementPerc = 0.1;
		const maxBgYMovementPerc = 0.1;

		variations.xVariation = clientWidth - e.clientX;
		variations.yVariation = clientHeight - e.clientY;
		variations.xVariationPerc = variations.xVariation / clientWidth;
		variations.yVariationPerc = variations.yVariation / clientHeight;

		ref.current!.animate(
			{
				backgroundPosition: `${
					variations.xVariationPerc * 100 * maxBgXMovementPerc
				}% ${variations.yVariationPerc * 100 * maxBgYMovementPerc}%`,
			},
			{
				duration: 1000,
				fill: 'forwards',
				easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
			}
		);
	}

	function resetTitleBackground(_: MouseEvent) {
		ref.current!.animate(
			{
				backgroundPosition: '0% 0%',
			},
			{
				duration: 500,
				fill: 'forwards',
				easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
			}
		);
	}

	useLayoutEffect(() => {
		document.addEventListener('mousemove', moveTitleBackground);
		document.addEventListener('mouseleave', resetTitleBackground);

		return () => {
			document.removeEventListener('mousemove', moveTitleBackground);
			document.removeEventListener('mouseleave', resetTitleBackground);
		};
	}, []);

	return (
		<motion.h1
			ref={ref}
			initial={{ opacity: 0, y: 300 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 300, transition: { duration: 0.5 } }}
			style={{
				backgroundImage: `url('/img/bg_title.png')`,
				backgroundPosition: '0% 0%',
				backgroundSize: '110%',
			}}
			transition={{
				type: 'spring',
			}}
			className='cursor-default bg-black bg-clip-text py-4 text-center text-[15vw] font-black leading-[1] tracking-wide !text-transparent text-black dark:bg-white dark:!text-transparent dark:text-white'
		>
			{children && children}
		</motion.h1>
	);
};

const Subtitle = ({ children }: { children: string }) => {
	return (
		<motion.h2
			className='cursor-default text-[5vw] font-thin text-black after:mx-auto after:mt-4 after:block after:h-[1px] after:w-4/5 after:bg-shard dark:text-white md:text-5xl'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, y: 300, transition: { duration: 0.5 } }}
			transition={{
				type: 'tween',
				ease: 'easeInOut',
				duration: 1,
			}}
		>
			{children && children}
		</motion.h2>
	);
};

const ActionButton = ({ navigateTo }: { navigateTo: string }) => {
	const [scope, animate] = useAnimate();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		enterAnimation();
	}, []);

	async function enterAnimation() {
		await animate(scope.current, { opacity: 1 }, { duration: 1 });

		animate(
			'svg',
			{
				y: 10,
			},
			{
				duration: 1,
				repeatType: 'reverse',
				repeat: Infinity,
				type: 'tween',
			}
		);
	}

	const handleClick = async () => {
		animate(
			scope.current,
			{ borderColor: `${blue['600']}00` },
			{ duration: 0.3 }
		);

		await animate('svg', { y: -50, scale: 3 }, { duration: 0.5 });
		animate('svg', { y: 300, opacity: 0 }, { duration: 0.5 });

		navigate(navigateTo);
	};

	return (
		<motion.button
			ref={scope}
			onClick={handleClick}
			initial={{ opacity: 0 }}
			whileHover={{
				scale: 1.1,
			}}
			whileFocus={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 0.8,
			}}
			className='mb-10 mt-10 flex h-8 w-[30vw] items-center justify-center rounded border border-blue-600 text-black dark:border-white dark:text-white sm:h-8 sm:w-32 md:h-12 md:w-40 lg:mt-auto'
		>
			<HiChevronDoubleDownIcon />
		</motion.button>
	);
};
