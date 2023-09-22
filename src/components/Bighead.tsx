import { twMerge } from 'tailwind-merge';

export default function MyBigHead({ className = '' }: { className?: string }) {
	return (
		<div className={twMerge('flex h-full w-full ' + className)}>
			<img src={'/svg/bighead.svg'} />
		</div>
	);
}
