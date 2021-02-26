import {ImageSourcePropType} from 'react-native';
import {IMAGE} from './';

interface onBoardingProps {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export const JSONDATA = {
  OnBoardingData: [
    {
      id: '0',
      title: 'Ilustración - Multimedia',
      description: 'Dolore ullamco eiusmod aliquip cupidatat ad tempor.',
      image: IMAGE.onBoarding1,
    },
    {
      id: '1',
      title: 'Ilustración - Multimedia',
      description: 'Dolore ullamco eiusmod aliquip cupidatat ad tempor.',
      image: IMAGE.onBoarding2,
    },
    {
      id: '2',
      title: 'Ilustración - Multimedia',
      description: 'Dolore ullamco eiusmod aliquip cupidatat ad tempor.',
      image: IMAGE.onBoarding3,
    },
  ] as onBoardingProps[],
};
