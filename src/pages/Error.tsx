import { TbError404 as TbError404Icon } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import PageContainer from '../components/Page';

export default function ErrorPage() {
	return (
		<PageContainer.SafeArea>
			<TbError404Icon className='mt-auto text-[15vw] text-black dark:text-white' />
			<h1 className='text-5xl text-black dark:text-white sm:text-[10vw]'>
				Oops!
			</h1>
			<p className='mb-auto mt-4 text-center text-sm text-black dark:text-white sm:text-base'>
				Sorry, we couldn't take you were expected
				<br />
				Click {'>'}{' '}
				<Link to={'/'} className='text-blue-600'>
					here
				</Link>{' '}
				{'<'} to go back home
			</p>
			{/* <p className="text-white">
        <i className="text-white">{error.statusText || error.message}</i>
      </p> */}
		</PageContainer.SafeArea>
	);
}
