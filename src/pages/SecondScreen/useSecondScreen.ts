import {useCallback, useState} from 'react';
import {DataAdviceProps} from './types';
import axios from 'axios';

const useSecondScreen = () => {
  const [dataAdvice, setDataAdvice] = useState<DataAdviceProps>();

  const [loading, setLoading] = useState(false);

  const getAdviceData = useCallback(async () => {
    try {
      setLoading(true);
      await axios
        .get('https://api.adviceslip.com/advice')
        .then(response => setDataAdvice(response.data));
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
