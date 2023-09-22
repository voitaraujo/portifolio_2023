import emailjs from '@emailjs/browser';
import { motion, useAnimate } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { flushSync } from 'react-dom';
import {
	FaArrowRight as FaArrowRightIcon,
	FaGithub as FaGithubIcon,
	FaLinkedin as FaLinkedinIcon,
	FaWhatsapp as FaWhatsappIcon,
} from 'react-icons/fa';
import { GrSend as GrSendIcon } from 'react-icons/gr';
import {
	MdCheck as MdCheckIcon,
	MdLocationPin as MdLocationPinIcon,
	MdMail as MdMailIcon,
} from 'react-icons/md';
import ChatImage from '../assets/svg/chat.svg';
import { Input } from '../components/Input';

interface IContactForm {
	name: string;
	email: string;
	message: string;
}

type TMailState = 'standby' | 'sending' | 'sended';

interface ContactBadgeProps {
	href: string;
	Icon: ReactNode;
	label: string;
}

export default function Contacts() {
	const [contactForm, setContactForm] = useState<IContactForm>({
		email: '',
		message: '',
		name: '',
	});
	const [mailState, setMailState] = useState<TMailState>('standby');
	const [scope, animate] = useAnimate<HTMLButtonElement>();

	const submitContact = async (event?: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		if (contactForm.name.trim() === '' || contactForm.email.trim() === '') {
			return;
		}

		flushSync(() => setMailState('sending'));

		animate(
			'svg',
			{ top: '0px', right: '0px' },
			{
				repeat: Infinity,
				repeatType: 'mirror',
				duration: 0.5,
				type: 'keyframes',
				ease: 'easeInOut',
			}
		);

		const res = await emailjs.send(
			'service_gs3f44q',
			'template_6tq2awm',
			{
				Name: contactForm.name,
				Email: contactForm.email,
				Message: contactForm.message,
			},
			'PQGK_1aYh2hr3jY7o'
		);

		if (res.status === 200) {
			setMailState('sended');
		} else {
			setMailState('standby');
		}

		animate('svg', { top: '50%', right: '50%' }, { repeat: 0 });
	};

	return (
		<motion.div
			initial={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			className='flex w-full flex-1 flex-wrap justify-center gap-16 p-6'
		>
			<motion.div
				initial={{ opacity: 0, y: -200, scale: 0.8 }}
				animate={{
					opacity: 1,
					y: 0,
					scale: 1,
					transition: { type: 'tween', ease: 'circOut', duration: 0.6 },
				}}
				className='flex w-full max-w-[400px] flex-col space-y-6 '
			>
				<h2 className='text-6xl font-bold tracking-tight text-blue-600 sm:text-7xl'>
					Vamos conversar
				</h2>
				<span className='text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:text-base'>
					Quer conheçer um pouco mais do meu <strong>trabalho</strong> ou tomar
					um <strong>café</strong>? Entre em contato, ou se preferir, deixe seu{' '}
					<strong>email abaixo</strong> que te retorno.
				</span>

				<form
					className='relative flex h-[450px] w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-lg bg-white px-8 pb-8 pt-12 dark:bg-black'
					onSubmit={submitContact}
				>
					<div className='absolute z-[1] min-h-[225%] min-w-[200%] animate-[fluid-spin_4s_linear_forwards] rounded-[45%] bg-blue-600 sm:rounded-[35%]' />
					<Input
						disabled={mailState !== 'standby'}
						id='Name'
						label='Seu nome'
						onChange={(newValue) =>
							setContactForm((oldState) => ({ ...oldState, name: newValue }))
						}
						value={contactForm.name}
					/>
					<Input
						disabled={mailState !== 'standby'}
						id='Email'
						label='Seu email'
						onChange={(newValue) =>
							setContactForm((oldState) => ({ ...oldState, email: newValue }))
						}
						value={contactForm.email}
					/>

					<Input
						disabled={mailState !== 'standby'}
						id='Message'
						label='Deixe uma mensagem'
						onChange={(newValue) =>
							setContactForm((oldState) => ({
								...oldState,
								message: newValue,
							}))
						}
						value={contactForm.message}
						element='textarea'
					/>

					<div className='flex w-full items-center justify-between'>
						<span className='ml-4 text-green-600'>
							{mailState === 'sended' && 'Enviado!'}
						</span>

						<button
							ref={scope}
							disabled={mailState !== 'standby'}
							type='submit'
							className={`
						relative flex items-center justify-center rounded-full shadow-lg
						${mailState === 'standby' && 'h-14 bg-blue-600 px-10 text-white'}
						${mailState === 'sending' && ' h-14 w-14  bg-neutral-200'}
						${mailState === 'sended' && ' h-14 w-14 bg-green-600 text-white'}
						`}
							onClick={() => submitContact()}
						>
							{mailState === 'standby' && 'Enviar contato'}
							{mailState === 'sending' && (
								<GrSendIcon className='absolute right-1/2 top-1/2' />
							)}
							{mailState === 'sended' && (
								<MdCheckIcon className='absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2' />
							)}
						</button>
					</div>
				</form>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 300, scale: 0.8 }}
				animate={{
					opacity: 1,
					x: 0,
					scale: 1,
					transition: { type: 'tween', ease: 'circOut', duration: 0.6 },
				}}
				className='flex max-h-[600px] w-full max-w-[400px] flex-col justify-start'
			>
				<img
					draggable={false}
					src={ChatImage}
					alt='chat image'
					className='mb-auto'
				/>

				<div className='mt-8 pl-6'>
					<div className='mb-8 flex items-center justify-start gap-8 text-neutral-400 dark:text-white'>
						<MdLocationPinIcon className='text-xl' /> Jundiaí - São Paulo,
						Brasil
					</div>
					<div className='mb-2 flex items-center justify-start gap-8 text-neutral-400 dark:text-white'>
						<MdMailIcon className='text-xl' /> voitilaaraujo@gmail.com
					</div>
					<div className='flex items-center justify-start gap-8 text-neutral-400 dark:text-white'>
						<FaWhatsappIcon className='text-xl' /> +55 (11) 9 9977-2682
					</div>
				</div>

				<div className='flex w-full flex-col items-center'>
					<span className='mt-8 text-2xl text-black dark:text-white'>
						Minhas redes
					</span>
					<div className='mt-4 flex w-full flex-wrap justify-center gap-2'>
						<ContactBadge
							Icon={
								<FaGithubIcon className='text-2xl text-black dark:text-white' />
							}
							label='/voitaraujo'
							href='https://github.com/voitaraujo'
						/>
						<ContactBadge
							Icon={
								<FaLinkedinIcon className='text-2xl text-black dark:text-white' />
							}
							label='/voitila-araujo'
							href='https://www.linkedin.com/in/voitila-araujo/'
						/>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

function ContactBadge({ href, Icon, label }: ContactBadgeProps) {
	return (
		<a
			href={href}
			target='_blanc'
			rel='noreferrer'
			className='group flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 shadow-md dark:bg-black'
		>
			{Icon}
			<span className='whitespace-nowrap text-neutral-400'>{label}</span>
			<FaArrowRightIcon className=' w-0 text-black transition-all group-focus-within:w-[1.5rem] group-hover:w-[1.5rem] dark:text-white' />
		</a>
	);
}
