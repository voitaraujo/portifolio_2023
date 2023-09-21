import { Switch } from '@headlessui/react';
import {
	MdOutlineDarkMode as MdOutlineDarkModeIcon,
	MdOutlineLightMode as MdOutlineLightModeIcon,
} from 'react-icons/md';

export default function LightModeSwitch() {
	const handleUpdateDarkMode = (enableDarkMode: boolean) => {
		if (enableDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	const isDarkModeActive = document.documentElement.classList.contains('dark');

	return (
		<Switch
			checked={isDarkModeActive}
			onChange={handleUpdateDarkMode}
			className={`${isDarkModeActive ? 'bg-zinc-600' : 'bg-amber-400'}
          relative inline-flex h-[34px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out`}
		>
			<span className='absolute right-0 flex h-[30px] w-[30px] items-center justify-center'>
				<MdOutlineLightModeIcon size={20} />
			</span>
			<span className='absolute left-0 flex h-[30px] w-[30px] items-center justify-center text-white'>
				<MdOutlineDarkModeIcon size={20} />
			</span>
			<span className='sr-only'>Lightmode</span>
			<span
				aria-hidden='true'
				className={`${isDarkModeActive ? 'translate-x-10' : 'translate-x-0'}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
			/>
		</Switch>
	);
}
