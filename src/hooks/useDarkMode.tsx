import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

	const detectDarkMode = () => {
		setIsDarkMode(document.documentElement.classList.contains('dark'));
	};

	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.attributeName === 'class') {
				detectDarkMode();
			}
		}
	});

	useEffect(() => {
		observer.observe(document.documentElement, { attributes: true });

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const preferredColorScheme = event.matches ? 'dark' : 'light';

				if (preferredColorScheme === 'dark') {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}

				detectDarkMode();
			});

		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			document.documentElement.classList.add('dark');
		}

		detectDarkMode();

		return () => {
			observer.disconnect();
		};
	}, []);

	return isDarkMode;
};
