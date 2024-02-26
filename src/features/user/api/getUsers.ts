import { useQuery } from 'react-query';
import { UserType } from '../types';
import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';


export const getUsers = (): Promise<UserType[]> => {
  // return axios.get(`/users`);
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};

type QueryFnType = typeof getUsers;

type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useUsers = ({ config }: UseUsersOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
};
