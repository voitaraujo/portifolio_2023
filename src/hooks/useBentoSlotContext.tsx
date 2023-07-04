import { createContext, useContext } from 'react';

import { TBentoSlotVariant } from '../components/BentoGrid';
import { TTecnologies } from '../components/TechIcon';

export interface IProjectsData {
	projectName: string;
	projectDescription: string;
	imgSrc: string;
	imgAlt: string;
	deployURL: string | null;
	repositoryURL: string | null;
	techStack: TTecnologies[];
	variant: TBentoSlotVariant;
}

const BentoSlotContext = createContext<IProjectsData | null>(null);

export const BentoSlotContextProvider = BentoSlotContext.Provider;
export const useBentoSlotContext = () => {
	const context = useContext(BentoSlotContext);

	if (!context) {
		throw new Error('Context for BentoSlot unavailable');
	}

	return context;
};
