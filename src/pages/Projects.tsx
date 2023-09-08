import { motion } from 'framer-motion';

import { ProjectsData } from '../!DB';
import { BentoGrid, BentoSlot } from '../components/BentoGrid';

export default function Projects() {
	return (
		<motion.div
		initial={{ opacity: 0, scale: 0.8 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0, scale: 0 }}
			className='p-4'
		>
			<BentoGrid>
				{ProjectsData.map((prj) => (
					<BentoSlot project={prj} key={prj.projectName}>
						<BentoSlot.BentoCover />
						<BentoSlot.Info>
							<BentoSlot.Title />
							<BentoSlot.Description />
							<BentoSlot.TechCarrousel />
						</BentoSlot.Info>
					</BentoSlot>
				))}
				<BentoSlot project={null}>
					<div className='flex h-full min-h-[100px] flex-col items-center justify-center'>
						<pre className='cursor-default text-4xl text-neutral-300 dark:text-neutral-600'>
							(em breve)
						</pre>
					</div>
				</BentoSlot>
			</BentoGrid>
		</motion.div>
	);
}
