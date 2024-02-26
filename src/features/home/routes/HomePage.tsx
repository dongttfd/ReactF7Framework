import { Router } from 'framework7/types';
import { Button } from 'framework7-react';
import { FC } from 'react';
import { Head } from '@/components/Head';
import { PageTemplate } from '@/components/Template';
import { paths } from '@/config/paths';
interface HomePageProps {
  f7router: Router.Router;
  f7route: Router.Route;
}

export const HomePage: FC<HomePageProps> = ({ f7router, f7route }) => {
  return (
    <PageTemplate name={f7route.name} title={f7route.name}>
      <Head title={f7route.name} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
      <Button text="About" href={paths.about} />
      <Button text="User" href={paths.user} />
    </PageTemplate>
  );
};
