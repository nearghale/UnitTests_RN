import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from '../index';
import {Color} from '../../../styles';

describe('../App.tsx', () => {
  it('should render the component according to the props', () => {
    const {getByTestId} = render(
      <Button
        h={42}
        w={305}
        loading={false}
        text={'Clique Aqui'}
        backgroundColor={Color.tertiaryBlue}
        primaryGradientColor={Color.blue}
        secondaryGradientColor={Color.blue}
        fontSize={20}
        borderRadius={24}
        fontWeight={700}
        onPress={() => {}}
      />,
    );

    // Obtendo o componente de LinearGradient
    const LinearGradient = getByTestId('linear-gradient-component');

    // Console log para mostrar as propriedades do componente do LinearGradient
    console.log(
      'LinearGradient Component props',
      LinearGradient.props.style[0],
    );

    // Verificando se o componente de LinearGradient está com o width e height correto
    expect(LinearGradient.props.style[0].width).toBe(305);
    expect(LinearGradient.props.style[0].height).toBe(42);

    const Text = getByTestId('text-component');

    // Console log para mostrar as propriedades do componente do LinearGradient
    console.log('Text Component props ', Text.props);

    // Verificando se o componente de Texto está com o texto correto
    expect(Text.props.children).toBe('Clique Aqui');
  });

  it('should call function props when click button', () => {
    const functionCall = jest.fn();

    const {getByTestId} = render(
      <Button
        h={42}
        w={305}
        loading={false}
        text={'Clique Aqui'}
        backgroundColor={Color.tertiaryBlue}
        primaryGradientColor={Color.blue}
        secondaryGradientColor={Color.blue}
        fontSize={20}
        borderRadius={24}
        fontWeight={700}
        onPress={() => functionCall()}
      />,
    );

    const ButtonComponent = getByTestId('button-component');

    fireEvent.press(ButtonComponent);

    expect(functionCall).toBeCalled();
  });
});
