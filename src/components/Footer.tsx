import { motion } from 'framer-motion';
import { SiVercel as SiVercelIcon } from 'react-icons/si';

export default function Footer() {
	return (
		<motion.footer
			exit={{ y: 150, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { type: 'keyframes', ease: 'easeInOut', duration: 0.5 },
			}}
			initial={{ y: 150, opacity: 0 }}
			className='relative bottom-0 left-0 z-[500] h-[129px] w-full overflow-hidden mix-blend-exclusion'
		>
			<span className='absolute bottom-4 left-4 z-[99]'>
				Voitila Araújo © 2023.
			</span>
			<span className='absolute bottom-4 right-4 z-[99] inline-flex cursor-default flex-col items-center gap-px sm:flex-row sm:gap-2'>
				deployed at
				<a
					href='https://vercel.com/'
					className='inline-flex w-full cursor-pointer items-center justify-end  gap-1 underline-offset-2 hover:underline sm:w-fit sm:justify-start'
					target='_blank'
					rel='noreferrer'
				>
					<SiVercelIcon />
					Vercel
				</a>
			</span>
			{[...new Array(4)].map((_, idx) => (
				<div
					key={idx}
					style={{
						background: `url('/img/wave.png')`,
						animationDirection: idx % 2 === 0 ? 'reverse' : 'normal',
						animationDelay: `${idx % 2 === 0 ? '-' : ''}${idx * idx}s`,
						opacity: 0.9 - idx * 0.2,
						bottom: `-${idx * 8}px`,
					}}
					className={`absolute h-full w-full animate-[flow_20s_linear_infinite] bg-[1000px_100px]`}
				/>
			))}
		</motion.footer>
	);
}
