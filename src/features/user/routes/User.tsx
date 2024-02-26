import { Router } from 'framework7/types';
import { Button } from 'framework7-react';
import { FC } from 'react';
import { useUsers } from '../api/getUsers';
import { Head } from '@/components/Head';
import { PageTemplate } from '@/components/Template';
import { paths } from '@/config/paths';
interface UserProps {
  f7router: Router.Router;
  f7route: Router.Route;
}

export const User: FC<UserProps> = ({ f7router, f7route }) => {
  const { data: userData } = useUsers();
  return (
    <PageTemplate name={f7route.name} title={f7route.name}>
      <Head title={f7route.name} />
      <Button text="Home" href={paths.root} />
      <ul>{userData?.map(({ name }) => <li key={name}>{name}</li>)}</ul>
    </PageTemplate>
  );
};
