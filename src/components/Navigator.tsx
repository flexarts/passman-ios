import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DefaultColors from './DefaultColors';
import SettingsScreen from './screens/SettingsScreen';
import VaultKeyScreen from './screens/VaultKeyScreen';
import CredentialsScreen from './screens/CredentialsScreen';
import CredentialInfoScreen from './screens/CredentialInfoScreen';
import SetupMasterPasswordScreen from './screens/SetupMasterPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import LockScreen from './screens/LockScreen';

const CredentialsNavigator = createStackNavigator({
	CredentialsScreen: { screen: CredentialsScreen },
	VaultKeyScreen: {screen: VaultKeyScreen},
	CredentialInfoScreen: { screen: CredentialInfoScreen }
}, {
	header: null
});

const OptionsNavigator = createStackNavigator({
	OptionsScreen: {screen: SettingsScreen}
}, {
	header: null
});

const TabNavigator = createBottomTabNavigator(
	{
		CredentialsTab: CredentialsNavigator,
		OptionsTab: OptionsNavigator
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'CredentialsTab') {
					iconName = 'key';
				} else if (routeName === 'OptionsTab') {
					iconName = 'cogs';
				}

				return <Text style={{color: tintColor, fontSize: 24}}><FontAwesome name={iconName}/></Text>;
			}
		}),
		tabBarOptions: {
			inactiveTintColor: DefaultColors.grey,
			activeTintColor: DefaultColors.blue,
			borderTopColor: DefaultColors.darkGrey
		}
	}
);

export default createStackNavigator({
	LoginScreen: {screen: LoginScreen},
	SetupMasterPasswordScreen: {screen: SetupMasterPasswordScreen},
	LockScreen: {screen: LockScreen},
	AppNavigator: {screen: TabNavigator}
}, {
	navigationOptions: {
		header: null,
		swipeEnabled: false
	}
});