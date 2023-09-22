import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
	HiChevronDoubleRight as HiChevronDoubleRightIcon,
	HiChevronDoubleDown as HiChevronDoubleDownIcon,
	HiSpeakerphone as HiSpeakerphoneIcon,
	HiUserGroup as HiUserGroupIcon,
	HiUsers as HiUsersIcon,
	HiPuzzle as HiPuzzleIcon,
} from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';
import MyBigHead from '../components/Bighead';
import { ReactNode, useId, useRef } from 'react';
import ReactTyped from 'react-typed';
import Balancer from 'react-wrap-balancer';
import StuffBox from '../components/StuffBox';

interface GoalsSectionProps {
	Goals: {
		icon: ReactNode;
		title: string;
		description: string;
	}[];
}

interface SectionLabelProps {
	children: ReactNode;
	anchorId?: string;
}

const Goals = [
	{
		title: 'Palestrar',
		icon: <HiSpeakerphoneIcon className='h-12 w-12' />,
		description:
			'Apesar de ser assustador para muitas pessoas eu adoro a ideia de falar sobre algo que gosto para outros também interessados no assunto. Até o momento só tive essa experiência no meio acadêmico mas adoraria um dia poder me apresentar em uma convenção ou afins!',
	},
	{
		title: 'Contribuir',
		icon: <HiUsersIcon className='h-12 w-12' />,
		description:
			'Programadores dependem fortemente do trabalho passado de outros colegas, por isso gostaria de um dia retribuir à comunidade, seja na forma de um novo framework, biblioteca ou até mesmo uma nova linguagem de programação.',
	},
	{
		title: 'Resolver',
		icon: <HiPuzzleIcon className='h-12 w-12' />,
		description:
			'Eu entendo que mesmo o código mais complexo, robusto e performático não vale a pena ser escrito se não resolver um problema real, tendo isso em mente tento mesmo em meus projetos pessoais criar softwares que possam ajudar diferentes tipos de públicos com problemas comuns.',
	},
] satisfies GoalsSectionProps['Goals'];

export default function About() {
	const startAnchorId = 'start';

	return (
		<motion.div
			initial={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			className='flex h-full w-full flex-1 flex-col'
		>
			<ScrollCallout />
			<HeroSection startAnchorId={startAnchorId} />
			<SectionLabel anchorId={startAnchorId}>sobre mim</SectionLabel>
			<IntroductionSection />

			<SectionLabel>minha stack</SectionLabel>
			<StackSection />

			{/* <SectionLabel>meus objetivos</SectionLabel>
			<GoalsSection Goals={Goals} /> */}
		</motion.div>
	);
}

function HeroSection({ startAnchorId }: { startAnchorId?: string }) {
	return (
		<div className='flex min-h-screen w-full flex-1 flex-col-reverse justify-end px-4 pb-24 sm:px-8 md:px-16 lg:flex-row'>
			<div className='flex max-h-[400px] flex-col items-center justify-center md:max-h-[500px] lg:mt-20 lg:flex-1'>
				<Greeting />
				<Description />
				<ReadMoreButton startAnchorId={startAnchorId} />
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}
				className='flex h-full items-start justify-center lg:flex-1'
			>
				<MyBigHead className='max-h-[400px] justify-center md:max-h-[500px]' />
			</motion.div>
		</div>
	);
}

function IntroductionSection() {
	const description = useRef<HTMLParagraphElement>(null);
	const isInView = useInView(description, {
		once: true,
	});

	const ParagraphVariants = {
		initial: {
			y: '100%',
		},

		open: (i: number) => ({
			y: '0%',

			transition: { duration: 0.5, delay: 0.05 * i },
		}),
		closed: {
			y: '100%',

			transition: { duration: 0.5 },
		},
	};

	const paragraph =
		'Desenvolvedor web à 3+ anos, já me aventurei por diversas áreas do desenvolvimento de software mas hoje me sinto mais confortável com o front-end web.';

	return (
		<div className=' relative mb-[100px]'>
			<motion.img
				initial={{ x: -100, opacity: 0 }}
				whileInView={{
					x: 0,
					opacity: 1,
					transition: {
						delay: 0.3,
						duration: 0.8,
						type: 'tween',
						ease: 'easeOut',
					},
				}}
				viewport={{ once: true }}
				className='absolute left-0 z-[0] h-full'
				src={'/svg/brazuca.svg'}
			/>
			<div
				id='about-panel'
				className='ml-auto mr-16 flex h-full w-full max-w-[400px] flex-col items-center justify-evenly gap-4 sm:relative sm:h-[600px]'
			>
				<motion.p
					ref={description}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.3, type: 'tween', ease: 'easeOut' },
					}}
					viewport={{ once: true }}
					className='z-[1] w-full max-w-[500px] space-x-2 rounded-lg bg-blue-600 px-8 py-4 text-xl leading-8 tracking-widest text-white shadow-lg shadow-blue-400 sm:absolute sm:left-16 sm:top-4'
				>
					{paragraph.split(' ').map((word, index) => {
						return (
							<span
								key={index}
								className='relative inline-flex overflow-hidden'
							>
								<motion.span
									variants={ParagraphVariants}
									custom={index}
									animate={isInView ? 'open' : 'closed'}
								>
									{word}
								</motion.span>
							</span>
						);
					})}
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.3, type: 'tween', ease: 'easeOut' },
					}}
					viewport={{ once: true }}
					className='z-[1] w-full max-w-[500px] rounded-lg bg-black px-8 py-4 text-xl leading-8 tracking-widest text-white shadow-lg  dark:bg-white dark:text-black  sm:absolute sm:bottom-4 sm:right-16'
				>
					<Balancer>
						Todos já acessaram um site que os fez pensar{' '}
						<strong className='spark-text'>"Uau"</strong>, e é essa experiência
						que eu busco criar!
					</Balancer>
				</motion.p>
			</div>
		</div>
	);
}

function StackSection() {
	return (
		<>
			<div className='mb-[100px] flex flex-1 flex-col justify-evenly gap-4 sm:mb-[200px] md:flex-row'>
				<StuffBox
					Techs={['Framer Motion', 'React Native', 'TailwindCSS']}
					fillWith={['NodeJS', 'Tauri', 'Vite', 'MUI', 'SASS', 'Typescript']}
				/>
				<Tilt
					tiltMaxAngleX={5}
					tiltMaxAngleY={10}
					glareEnable
					tiltAngleYInitial={10}
					tiltAngleXInitial={5}
					glareMaxOpacity={0.1}
					className='fix-safari-tilt flex flex-col rounded-2xl bg-white px-8 py-8 shadow-md '
				>
					<h2 className='mr-auto max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-none rounded-tr-3xl bg-blue-300 px-6 py-2 text-lg italic text-zinc-800 sm:text-2xl'>
						E qual é a receita?
					</h2>
					<span className='mb-8 ml-auto mt-4 block max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-none bg-green-300 px-6 py-2 text-lg text-zinc-800 sm:text-2xl'>
						Simples! Combinar as melhores ferramentas de desenvolvimento web.
					</span>
					<p className='mt-auto max-w-[500px] text-sm text-neutral-400 sm:text-base'>
						Com o <strong style={{ color: '#00d8ff' }}>React</strong> é possível
						criar interfaces extremamente ricas e interativas, que uma vez que
						são estilizadas com{' '}
						<strong style={{ color: '#44a8b3' }}>TailwindCSS</strong> e animadas
						com <strong style={{ color: '#d2c' }}>Framer Motion</strong> se
						tornam muito mais atrativas para qualquer visitante!
					</p>
				</Tilt>
			</div>

			{/* <div className='mb-[100px] flex flex-1 flex-col-reverse justify-evenly gap-4 sm:mb-[200px] md:flex-row'>
				<Tilt
					tiltMaxAngleX={5}
					tiltMaxAngleY={10}
					glareEnable
					tiltAngleYInitial={-10}
					tiltAngleXInitial={5}
					glareMaxOpacity={0.1}
					className='fix-safari-tilt flex flex-col rounded-2xl bg-white px-8 py-8 shadow-md '
				>
					<h2 className='mr-auto max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-none rounded-tr-3xl bg-blue-300 px-6 py-2 text-lg italic text-zinc-800 sm:text-2xl'>
						Ok, agora sobre a interatividade...
					</h2>
					<span className='mb-8 ml-auto mt-4 block max-w-[400px] rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-none bg-green-300 px-6 py-2 text-lg text-zinc-800 sm:text-2xl'>
						Nem só de design vive um site, é preciso um servidor para atendê-lo.
					</span>
					<p className='mt-auto max-w-[500px] text-sm text-neutral-400 sm:text-base'>
						Nessa categoria opções não faltam, mas minhas escolhas são{' '}
						<strong>Next</strong>, <strong>Adonis</strong> ou{' '}
						<strong>Express</strong>, sendo cada solução mais indicada para uma.
						situação diferente.
					</p>
				</Tilt>

				<StuffBox
					Techs={['NextJS', 'AdonisJS', 'Express']}
					fillWith={[
						'Puppeteer',
						'RealmDB',
						'MSSQL',
						'FaunaDB',
						'Rust',
						'Javascript',
					]}
				/>
			</div> */}
		</>
	);
}

function SectionLabel({ children, anchorId }: SectionLabelProps) {
	const id = useId();
	return (
		<div
			id={anchorId || id}
			className={`relative mb-[100px] w-full  text-center text-black after:absolute after:bottom-[16px] after:right-0 after:h-[1px] after:w-full after:bg-zinc-400/20 dark:text-white ${
				anchorId && 'pt-[100px]'
			}`}
		>
			<span className='relative z-[1] bg-custom-white px-8 text-2xl dark:bg-custom-black'>
				{children}
			</span>
		</div>
	);
}

function GoalsSection({ Goals }: GoalsSectionProps) {
	return (
		<div className='flex w-full flex-col items-center justify-evenly gap-4 pb-16 sm:flex-row'>
			{/* {Goals.map((goal, idx) => (
				<Tilt
					key={idx}
					tiltMaxAngleX={2.5}
					tiltMaxAngleY={5}
					glareEnable
					tiltAngleYInitial={0}
					glareMaxOpacity={0.1}
					className='fix-safari-tilt flex h-[450px] w-[300px]  flex-col overflow-hidden rounded-2xl bg-white shadow-md'
				>
					<div className='grid-background' />
					<div className='flex flex-col items-center p-8'>
						{goal.icon}

						<div>
							<h4 className='w-full text-center text-xl font-semibold text-zinc-800'>
								{goal.title}
							</h4>
							<p className='mt-3 text-zinc-600 dark:text-zinc-400'>
								<Balancer>{goal.description}</Balancer>
							</p>
						</div>
					</div>
				</Tilt>
			))} */}
			{Goals.map((goal, idx) => (
				<div
					key={idx}
					className='flex h-[450px] w-[300px]  flex-col overflow-hidden rounded-2xl bg-white shadow-md'
				>
					lorem
				</div>
			))}
		</div>
	);
}

function Greeting() {
	return (
		<ReactTyped
			strings={['Oi, eu sou o voit', 'Oi, eu sou o Voitila']}
			typeSpeed={50}
			backSpeed={40}
			loop={false}
			startDelay={400}
			cursorChar=' |'
			smartBackspace
			className='w-full max-w-[600px] text-6xl font-bold tracking-tighter text-black antialiased dark:text-white'
		/>
	);
}

function Description() {
	const rainTrigger = useRef<HTMLButtonElement>(null);

	return (
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
				ref={rainTrigger}
				onClick={() => {}}
				className='inline w-fit text-blue-600 underline underline-offset-8'
			>
				funcional()
			</button>
		</motion.p>
	);
}

function ReadMoreButton({ startAnchorId }: { startAnchorId?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 4 } }}
			className='group relative ml-auto h-[50px] w-[180px]'
		>
			<a
				href={`/2023/sobre#${startAnchorId}`}
				className='absolute -left-2 -top-2 z-[1] inline-flex h-full w-full items-center justify-center gap-2 rounded-sm bg-black text-xl text-white transition-[left_top] group-hover:left-0 group-hover:top-0 dark:bg-white dark:text-black'
			>
				ler mais
				<HiChevronDoubleRightIcon />
			</a>
			<div className='absolute h-full w-full rounded-sm bg-blue-400 transition-all delay-100 dark:bg-rose-400' />
		</motion.div>
	);
}

function ScrollCallout() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start center'],
	});

	/*
  	 this offset means:
  	 "measure the progress between the END OF THE TARGET AND THE END OF THE CONTAINER(0%)
  	 until the START OF THE TARGET HITS THE CENTER OF THE CONTAINER(100%)"
  	*/

	const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

	return (
		<motion.div
			ref={ref}
			style={{ opacity: opacity }}
			className='fixed bottom-16 right-1/2 flex translate-x-1/2 cursor-default items-center justify-center gap-2 rounded px-4 py-2 backdrop-blur-xl'
		>
			<HiChevronDoubleDownIcon className='text-2xl text-zinc-800 dark:text-white' />
			<span className='whitespace-nowrap text-2xl text-zinc-800 dark:text-neutral-200'>
				Arraste
			</span>
		</motion.div>
	);
}
