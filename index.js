import {AppRegistry} from 'react-native';
import 'node-libs-react-native/globals';
import {App} from './src/index.ios.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent('Passman', () => App);
