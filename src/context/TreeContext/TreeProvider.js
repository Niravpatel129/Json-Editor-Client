import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '../../Service/fetcher';
import TreeContext from './TreeContext';

const API_URL = '/users/random_user';

const TreeProvider = ({ children }) => {
  const { data, error } = useSWR(API_URL, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });
  const [json, setJson] = useState(data);

  useEffect(() => {
    setJson(data);
  }, [data]);

  return <TreeContext.Provider value={{ json, error, setJson }}>{children}</TreeContext.Provider>;
};

export default TreeProvider;
