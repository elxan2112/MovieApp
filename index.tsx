import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/reduxToolkit';
import React from 'react';

const AppContainer = () =>
    <Provider store={store}>
            <App/>
    </Provider>;

AppRegistry.registerComponent(appName, () => AppContainer);
