import { Framework7Parameters } from 'framework7/types';
import { App as F7App, View } from 'framework7-react';
import { paths } from '@/config/paths';
import { AppProvider } from '@/providers/App';
import { routes } from '@/routes';
import { globalStore } from '@/stores';
import 'react-circular-progressbar/dist/styles.css';

const f7params: Framework7Parameters = {
  routes,
  name: 'App',
  theme: 'ios',
  view: {
    browserHistory: true,
    browserHistorySeparator: '',
    unloadTabContent: true,
    iosSwipeBack: false,
    preloadPreviousPage: false,
  },
  navbar: {
    mdCenterTitle: true,
  },
  statusbar: {
    enabled: false,
    iosOverlaysWebView: false,
  },
  dialog: {
    title: 'My App',
    buttonOk: 'Ok',
    buttonCancel: 'Cancel',
  },
  iosTranslucentBars: false,
};

export const App = () => {
  return (
    <AppProvider>
      <F7App {...f7params} store={globalStore}>
        <View
          main
          url={paths.root}
          // onViewInit={async () => {
          //   if (theme) {
          //     await store.dispatch('setGlobalThemeId', { themeId: theme });
          //   }
          // }}
        />
      </F7App>
    </AppProvider>
  );
};
