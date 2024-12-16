'use client';

import { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';

const ReduxStoreProvider = (props: PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxStoreProvider;
