import { Store } from 'framework7/types';

export type State = {
  theme: 'light' | 'dark';
};

// Getter modification
export type Getter = {
  getTheme: ({ state }: Store) => string;
};

export const initialState: State = {
  theme: 'light',
};
