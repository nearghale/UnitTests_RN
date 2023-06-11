import React from 'react';
import {fireEvent, render, renderHook} from '@testing-library/react-native';
import SecondScreen from '../index';
import {act} from 'react-test-renderer';
import {Color} from '../../../styles';
import axios from 'axios';
import {mockReturnGetAdviceData} from './__mocks__';
import useSecondScreen from '../useSecondScreen';

describe('../App.tsx', () => {
  it('click on the button, call the request, and show the advice on the screen ', async () => {
    //mockando a chamada da api Get para obter dados ficticios
    jest.spyOn(axios, 'get').mockResolvedValue(mockReturnGetAdviceData);

    // extraindo o result, para poder fazer manipulações
    const {result} = renderHook(useSecondScreen, {});

    //renderizando a tela
    const {getByTestId} = render(<SecondScreen />);

    // obtendo o componente botão da tela
    const Button = getByTestId('button-call-advice');

    //pressionando o botão
    fireEvent.press(Button);

    // esperando a chamada da requisição ser finalizada
    await act(async () => {});

    // obtendo o componente de texto
    const TextAdvice = getByTestId('text-advice');

    // verificando se o componente, tem o texto mockado da chamada
    expect(TextAdvice.props.children).toBe(
      'Always double check you actually attached the file to the email.',
    );
  });
});
