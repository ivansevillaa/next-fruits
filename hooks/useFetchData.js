import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error('Something is wrong');
  }
};

const useFetchData = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(fetchDataReducer, {
    isLoading: true,
    error: null,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios(url);

        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: err });
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl];
};

export default useFetchData;