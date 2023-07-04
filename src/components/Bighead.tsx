import { twMerge } from 'tailwind-merge';
import BigHead from '../assets/svg/bighead.svg';

export default function MyBigHead({ className = '' }: { className?: string }) {
	return (
		<div className={twMerge('flex h-full w-full ' + className)}>
			<img src={BigHead} />
		</div>
	);
}
