import {act, renderHook} from '@testing-library/react-hooks';
import useSecondScreen from '../useSecondScreen';
import {mockReturnGetAdviceData} from './__mocks__';
import axios from 'axios';

describe('useSecondScreen', () => {
  it('must call the requisition, and get advice', async () => {
    //mockando a chamada da api Get para obter dados ficticios
    jest.spyOn(axios, 'get').mockResolvedValue(mockReturnGetAdviceData);

    // extraindo o result, para poder fazer manipulações
    const {result} = renderHook(useSecondScreen, {});

    //chamando a requisição
    await act(async () => {
      result.current.getAdviceData();
    });

    // verificando se o state obteu os dados mockados corretamente
    expect(result.current.dataAdvice).toEqual(mockReturnGetAdviceData);
  });
});
