import { motion } from 'framer-motion';
import Wave_img from '../assets/img/wave.png';

export default function Footer() {
	return (
		<motion.div
			exit={{ y: 150, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { type: 'keyframes', ease: 'easeInOut', duration: 0.5 },
			}}
			initial={{ y: 150, opacity: 0 }}
			className='relative bottom-0 mix-blend-exclusion left-0 z-[500] h-[129px] w-full overflow-hidden'
		>
			<span className='absolute bottom-4 left-4 z-[99]'>
				Voitila Araújo © 2023.
			</span>
			{[...new Array(4)].map((_, idx) => (
				<div
					key={idx}
					style={{
						background: `url(${Wave_img})`,
						animationDirection: idx % 2 === 0 ? 'reverse' : 'normal',
						animationDelay: `${idx % 2 === 0 ? '-' : ''}${idx * idx}s`,
						opacity: 0.9 - idx * 0.2,
						bottom: `-${idx * 8}px`,
					}}
					className={`absolute h-full w-full animate-[flow_20s_linear_infinite] bg-[1000px_100px]`}
				/>
			))}
		</motion.div>
	);
}
