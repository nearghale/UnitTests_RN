import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {NavigationService} from './services';

import Routes from './routes';

const App: React.FC = () => {
  let navigationRef: NavigationContainerRef | null = null;
  const routeNameRef = React.useRef<string>();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={nav => {
          NavigationService.setNavigator(nav);
          navigationRef = nav;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef?.getCurrentRoute()?.name;

          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
