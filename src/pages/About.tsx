import { motion } from 'framer-motion';
import { HiChevronDoubleRight as HiChevronDoubleRightIcon } from 'react-icons/hi';
import MyBigHead from '../components/Bighead';
import Something from './Something';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactTyped from 'react-typed';

export default function Me() {
	return (
		<motion.div
			initial={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			className='flex h-full w-full flex-1 flex-col p-4'
		>
			<HeroSection />
			{/* <Something /> */}
		</motion.div>
	);
}

const HeroSection = () => {
	const [isRaining, setIsRaining] = useState(false);
	const ref = useRef<HTMLButtonElement>(null);

	// TODO: make it rain!

	// useLayoutEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (isRaining) rain();
	// 	}, 1000);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [isRaining]);

	// function rain() {
	// 	const droplet = document.createElement('div');

	// 	ref.current?.appendChild(droplet);

	// 	setTimeout(() => {
	// 		ref.current?.removeChild(droplet);
	// 	}, 2000);
	// }

	return (
		<div className='flex flex-1 flex-col-reverse px-4 sm:px-8 md:px-16 lg:flex-row'>
			<div className='flex w-full flex-1 flex-col justify-center py-4'>
				<ReactTyped
					strings={['Oi, eu sou o voit', 'Oi, eu sou o Voitila']}
					typeSpeed={50}
					backSpeed={40}
					loop={false}
					startDelay={400}
					cursorChar=' |'
					smartBackspace
					className='text-6xl font-bold tracking-tighter text-black antialiased dark:text-white'
				/>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 2.2 } }}
					exit={{ opacity: 0 }}
					className='mb-8 mt-4 w-full  max-w-[600px] text-2xl font-light leading-10 tracking-widest text-black antialiased dark:text-white'
				>
					E acredito que a internet deva ser{' '}
					<span className='spark-text'>divertida</span> e{' '}
					<span className='rounded bg-black px-2 py-1 font-Courgette text-xl text-white dark:bg-white dark:text-black'>
						elegante
					</span>{' '}
					sem deixar de ser{' '}
					<button
						ref={ref}
						onClick={() => setIsRaining((ps) => !ps)}
						className='block w-fit text-blue-600 underline underline-offset-8'
					>
						funcional()
					</button>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 4 } }}
					className='group relative ml-auto h-[50px] w-[180px]'
				>
					<button className='absolute -left-2 -top-2 z-[1] inline-flex h-full w-full items-center justify-center gap-2 rounded-sm bg-black text-xl text-white transition-[left_top] group-hover:left-0 group-hover:top-0 dark:bg-white dark:text-black'>
						ler mais
						<HiChevronDoubleRightIcon />
					</button>
					<div className='absolute h-full w-full rounded-sm bg-blue-400 transition-all delay-100 dark:bg-rose-400' />
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}
				className='flex items-start justify-center lg:flex-1'
			>
				<MyBigHead className='max-h-[400px] md:max-h-[500px]' />
			</motion.div>
		</div>
	);
};
