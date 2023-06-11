import React from 'react';
import {Color} from '../../styles';

import {Container, Button, Label} from '../../components';
import useSecondScreen from './useSecondScreen';

const SecondScreen: React.FC = () => {
  const {dataAdvice, getAdviceData, loading} = useSecondScreen();

  return (
    <Container
      flex={1}
      bg="#181818"
      alignItems="center"
      justifyContent="center">
      <Button
        testID="button-call-advice"
        h={48}
        w={312}
        loading={loading}
        text={'Pedir conselho'}
        backgroundColor={Color.tertiaryBlue}
        primaryGradientColor={Color.blue}
        secondaryGradientColor={Color.blue}
        fontSize={20}
        borderRadius={24}
        fontWeight={700}
        onPress={() => getAdviceData()}
      />
      <Label testID="text-advice" fontSize={15} fontWeight={700} mt={40}>
        {dataAdvice?.data.slip.advice}
      </Label>
    </Container>
  );
};

export default SecondScreen;
