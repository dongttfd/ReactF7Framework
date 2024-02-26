import { createStore } from 'framework7/lite';
import { StoreObject } from 'framework7/modules/store/store';
import { Getter, State, initialState } from './initialState';

interface Store extends StoreObject {
  state: State;
  getters: Getter;
}

export const globalStore: Store = createStore({
  state: initialState,
  actions: {
    setTheme: ({ state }: Store, { theme }: State) => {
      state.theme = theme;
    },
  },
  getters: {
    theme({ state }: Store) {
      return state.theme;
    }
  }

})
