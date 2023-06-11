import React from 'react';
import {Color} from '../../styles';

import {Container, Button} from '../../components';
import {Alert} from 'react-native';

const FirstScreen: React.FC = () => {
  const handleNavigateToFirstScreen = () => {
    Alert.alert('Você clicou');
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
        text={'Clique Aqui'}
        backgroundColor={Color.tertiaryBlue}
        primaryGradientColor={Color.blue}
        secondaryGradientColor={Color.blue}
        fontSize={20}
        borderRadius={24}
        fontWeight={700}
        onPress={() => handleNavigateToFirstScreen()}
      />
    </Container>
  );
};

export default FirstScreen;
