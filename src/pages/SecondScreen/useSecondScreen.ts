import {useCallback, useState} from 'react';
import {DataAdviceProps} from './types';
import axios from 'axios';

const useSecondScreen = () => {
  const [dataAdvice, setDataAdvice] = useState<DataAdviceProps | any>();

  const [loading, setLoading] = useState(false);

  const getAdviceData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.adviceslip.com/advice');

      setDataAdvice(response);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    getAdviceData,
    dataAdvice,
  };
};

export default useSecondScreen;
