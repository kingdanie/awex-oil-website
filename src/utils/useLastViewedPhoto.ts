import { createGlobalState } from 'react-hooks-global-state';

const initialState = { photoToScrollTo: null as null | number };
const { useGlobalState } = createGlobalState(initialState);

export const useLastViewedPhoto = () => {
  return useGlobalState('photoToScrollTo');
};
