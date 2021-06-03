import useSWR from 'swr';
import fetcher from '../../Service/fetcher';

const API_URL = '/cannabis/random_cannabis?size=1';

const NodeTree = () => {
  const { data, error } = useSWR(API_URL, fetcher);
  // console.log(data, error);

  const renderJson = () => {
    if (!data) return;

    return Object.entries(data[0]).map(([key, value], index) => {
      return (
        <h1 key={index}>
          {key}: {value}
        </h1>
      );
    });
  };

  return <>{renderJson()}</>;
};

export default NodeTree;
