import PageContainer from './components/Page';
import { useDarkMode } from './hooks/useDarkMode';

import Routes from './Router';

export default function App() {
	useDarkMode();

	return (
		<PageContainer>
			<Routes />
		</PageContainer>
	);
}
