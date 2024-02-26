import { Router } from 'framework7/types';
import {
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  f7,
} from 'framework7-react';
import { FC, useState } from 'react';
import { PageTemplate } from '@/components/Template';

interface LoginPageProps {
  f7router: Router.Router;
}

export const LoginPage: FC<LoginPageProps> = ({ f7router }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    f7.dialog.alert(`Username: ${username}<br>Password: ${password}`);
  };

  return (
    <PageTemplate
      showNavbar={false}
      showToolbar={false}
      noNavbar
      noSwipeback
      loginScreen
      name={''}
      title={''}
    >
      <LoginScreenTitle>Framework7</LoginScreenTitle>
      <List form>
        <ListInput
          label="Username"
          type="text"
          placeholder="Your username"
          value={username}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <List inset>
        <ListButton onClick={signIn}>Sign In</ListButton>
        <BlockFooter>
          Some text about login information.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BlockFooter>
      </List>
    </PageTemplate>
  );
};
