import React from 'react';
import {Color} from '../../styles';

import {Container, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {RouteMain} from '../../routes';

const MainScreen: React.FC = () => {
  const {navigate} = useNavigation();

  const handleNavigateToFirstScreen = () => {
    navigate(RouteMain.FIRST_SCREEN);
  };

  const handleNavigateToSecondScreen = () => {
    navigate(RouteMain.SECOND_SCREEN);
  };

  return (
    <Container
      flex={1}
      bg="#181818"
      alignItems="center"
      justifyContent="center">
      <Button
        h={48}
        w={312}
        loading={false}
        text={'Testes de Componente'}
        backgroundColor={Color.tertiaryBlue}
        primaryGradientColor={Color.blue}
        secondaryGradientColor={Color.blue}
        fontSize={20}
        borderRadius={24}
        fontWeight={700}
        onPress={() => handleNavigateToFirstScreen()}
      />
      <Button
        mt={20}
        h={48}
        w={312}
        loading={false}
        text={'Testes de Hook e Tela'}
        backgroundColor={Color.tertiaryBlue}
        primaryGradientColor={Color.blue}
        secondaryGradientColor={Color.blue}
        fontSize={20}
        borderRadius={24}
        fontWeight={700}
        onPress={() => handleNavigateToSecondScreen()}
      />
    </Container>
  );
};

export default MainScreen;
