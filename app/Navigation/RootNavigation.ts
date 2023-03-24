import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../../types/data';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigate = (name: keyof RootStackParamList) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
};

export default navigate;
