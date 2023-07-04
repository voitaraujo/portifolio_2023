import React from 'react';

export default function PageContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex min-h-screen w-full flex-col items-center justify-start bg-custom-white font-poppins dark:bg-custom-black'>
			{children && children}
		</div>
	);
}

const PageSafeAreaContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex h-full w-full flex-1 flex-col items-center justify-start md:max-w-7xl'>
			{children && children}
		</div>
	);
};

PageContainer.SafeArea = PageSafeAreaContainer;
