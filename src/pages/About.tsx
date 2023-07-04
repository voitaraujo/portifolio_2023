import { motion } from 'framer-motion';
import MyBigHead from '../components/Bighead';

export default function Me() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100, scale: 1 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 100, scale: 0 }}
			className='flex h-full w-full flex-1 flex-col p-4'
		>
			<HeroSection />

			{/* <SectionLabel anchorId='start'>sobre mim</SectionLabel>
			<IntroductionSection />

			<SectionLabel>minha stack</SectionLabel>
			<StackSection />

			<SectionLabel>roadmap</SectionLabel> */}
		</motion.div>
	);
}

const HeroSection = () => {
	return (
		<div className='flex flex-1 flex-col-reverse px-4 sm:px-8 md:px-16 lg:flex-row'>
			<div className='flex w-full flex-1 flex-col justify-center py-4'>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='text-6xl font-bold tracking-tighter text-black antialiased dark:text-white'
				>
					Oi, eu sou o Voitila
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='mb-8 mt-4 w-full  max-w-[600px] text-2xl font-light leading-10 tracking-widest text-black antialiased dark:text-white'
				>
					E acredito que a internet deva ser{' '}
					<span className='spark-text'>divertida</span> e{' '}
					<span className='rounded bg-black px-2 py-1 font-Courgette text-xl text-white dark:bg-white dark:text-black'>
						elegante
					</span>{' '}
					sem deixar de ser{' '}
					<a className='block w-fit text-blue-600 underline underline-offset-8'>
						funcional()
					</a>
				</motion.p>
			</div>
			<div className='flex items-start justify-center lg:flex-1'>
				<MyBigHead className='max-h-[400px] md:max-h-[500px]' />
			</div>
		</div>
	);
};

// const IntroductionSection = () => {
// 	return (
// 		<div className=' relative mb-[100px]'>
// 			<motion.img
// 				initial={{ x: -100, opacity: 0 }}
// 				whileInView={{
// 					x: 0,
// 					opacity: 1,
// 					transition: {
// 						delay: 0.3,
// 						duration: 0.8,
// 						type: 'tween',
// 						ease: 'easeIn',
// 					},
// 				}}
// 				viewport={{ once: true }}
// 				className='absolute left-0 z-[0] h-full'
// 				src={Brazuca_Image}
// 			/>
// 			<div className='ml-auto mr-16 flex h-full w-full max-w-[400px] flex-col items-center justify-evenly gap-4 bg-white px-8 py-16 dark:bg-black sm:relative sm:h-[600px]'>
// 				<motion.p
// 					initial={{ opacity: 0 }}
// 					whileInView={{
// 						opacity: 1,
// 						transition: { delay: 0.3, type: 'tween', ease: 'easeIn' },
// 					}}
// 					viewport={{ once: true }}
// 					className='z-[1] w-full max-w-[500px] rounded-lg bg-blue-600 px-8 py-4 text-xl leading-8 tracking-widest text-white shadow-lg shadow-blue-400 sm:absolute sm:left-16 sm:top-4'
// 				>
// 					Desenvolvedor web à <strong>3+ anos</strong>, já me aventurei por{' '}
// 					<span className='line-through'>quase</span> todas as áreas do
// 					desenvolvimento de software mas hoje me sinto mais confortável com o{' '}
// 					<strong>front-end</strong> web.
// 				</motion.p>

// 				<motion.p
// 					initial={{ opacity: 0 }}
// 					whileInView={{
// 						opacity: 1,
// 						transition: { delay: 0.3, type: 'tween', ease: 'easeIn' },
// 					}}
// 					viewport={{ once: true }}
// 					className='z-[1] w-full max-w-[500px] rounded-lg bg-black px-8 py-4 text-xl leading-8 tracking-widest text-white shadow-lg  dark:bg-white dark:text-black  sm:absolute sm:bottom-4 sm:right-16'
// 				>
// 					Todos já acessaram um site que os fez pensar{' '}
// 					<strong className='spark-text'>"Uau"</strong>, e é essa experiência
// 					que eu busco criar!
// 				</motion.p>
// 			</div>
// 		</div>
// 	);
// };

// const StackSection = () => {
// 	return (
// 		<>
// 			<div className='mb-[100px] flex flex-1 flex-col justify-evenly gap-4 sm:mb-[200px] md:flex-row'>
// 				<StuffBox
// 					Techs={['Framer Motion', 'React Native', 'TailwindCSS']}
// 					fillWith={['NodeJS', 'Tauri', 'Vite', 'MUI', 'SASS', 'Typescript']}
// 				/>
// 				<Tilt
// 					tiltMaxAngleX={5}
// 					tiltMaxAngleY={10}
// 					glareEnable
// 					tiltAngleYInitial={10}
// 					tiltAngleXInitial={5}
// 					glareMaxOpacity={0.1}
// 					className='flex flex-col rounded-2xl bg-white px-8 py-8 shadow-md '
// 				>
// 					<h2 className='mr-auto max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-none rounded-tr-3xl bg-blue-300 px-6 py-2 text-lg italic text-zinc-800 sm:text-2xl'>
// 						E qual é a receita?
// 					</h2>
// 					<span className='mb-8 ml-auto mt-4 block max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-none bg-green-300 px-6 py-2 text-lg text-zinc-800 sm:text-2xl'>
// 						Simples! Combinar as melhores ferramentas de desenvolvimento web.
// 					</span>
// 					<p className='mt-auto max-w-[500px] text-sm text-neutral-400 sm:text-base'>
// 						Com o <strong style={{ color: '#00d8ff' }}>React</strong> é possível
// 						criar interfaces extremamente ricas e interativas, que uma vez que
// 						são estilizadas com{' '}
// 						<strong style={{ color: '#44a8b3' }}>TailwindCSS</strong> e animadas
// 						com <strong style={{ color: '#d2c' }}>Framer Motion</strong> se
// 						tornam muito mais atrativas para qualquer visitante!
// 					</p>
// 				</Tilt>
// 			</div>

// 			<div className='mb-[100px] flex flex-1 flex-col-reverse justify-evenly gap-4 sm:mb-[200px] md:flex-row'>
// 				<Tilt
// 					tiltMaxAngleX={5}
// 					tiltMaxAngleY={10}
// 					glareEnable
// 					tiltAngleYInitial={-10}
// 					tiltAngleXInitial={5}
// 					glareMaxOpacity={0.1}
// 					className='flex flex-col rounded-2xl bg-white px-8 py-8 shadow-md '
// 				>
// 					<h2 className='mr-auto max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-none rounded-tr-3xl bg-blue-300 px-6 py-2 text-lg italic text-zinc-800 sm:text-2xl'>
// 						Ok, agora sobre a interatividade...
// 					</h2>
// 					<span className='mb-8 ml-auto mt-4 block max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-none bg-green-300 px-6 py-2 text-lg text-zinc-800 sm:text-2xl'>
// 						Nem só de design vive um site, é preciso um servidor para atendê-lo.
// 					</span>
// 					<p className='mt-auto max-w-[500px] text-sm text-neutral-400 sm:text-base'>
// 						Nessa categoria opções não faltam, mas minhas escolhas são{' '}
// 						<strong>Next</strong>, <strong>Adonis</strong> ou{' '}
// 						<strong>Express</strong>, sendo cada solução mais indicada para um
// 						caso diferente.
// 					</p>
// 				</Tilt>

// 				<StuffBox
// 					Techs={['NextJS', 'AdonisJS', 'Express']}
// 					fillWith={[
// 						'Puppeteer',
// 						'RealmDB',
// 						'MSSQL',
// 						'FaunaDB',
// 						'Rust',
// 						'Javascript',
// 					]}
// 				/>
// 			</div>
// 		</>
// 	);
// };

// const SectionLabel = ({
// 	children,
// 	anchorId,
// }: {
// 	children: ReactNode;
// 	anchorId?: string;
// }) => {
// 	return (
// 		<div
// 			id={anchorId}
// 			className={`relative mb-[100px] w-full  text-center text-black after:absolute after:bottom-[16px] after:right-0 after:h-[1px] after:w-full after:bg-zinc-400/20 dark:text-white ${
// 				anchorId && 'pt-[100px]'
// 			}`}
// 		>
// 			<span className='relative z-[1] bg-custom-white px-8 text-2xl dark:bg-custom-black'>
// 				{children}
// 			</span>
// 		</div>
// 	);
// };

// const ScrollCallout = () => {
// 	const ref = useRef(null);
// 	const { scrollYProgress } = useScroll({
// 		target: ref,
// 		offset: ['end end', 'start center'],
// 	});

// 	/*
// 	 this offset means:
// 	 "measure the progress between the END OF THE TARGET AND THE END OF THE CONTAINER(0%)
// 	 until the START OF THE TARGET HITS THE CENTER OF THE CONTAINER(100%)"
// 	*/

// 	const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

// 	return (
// 		<motion.div
// 			ref={ref}
// 			style={{ opacity: opacity }}
// 			className='absolute bottom-16 right-1/2 flex translate-x-1/2 cursor-default items-center justify-center gap-2 rounded px-4 py-2 backdrop-blur-xl'
// 		>
// 			<HiChevronDoubleDownIcon className='text-2xl text-zinc-800 dark:text-white' />
// 			<span className='whitespace-nowrap text-2xl text-zinc-800 dark:text-neutral-200'>
// 				Arraste
// 			</span>
// 		</motion.div>
// 	);
// };
