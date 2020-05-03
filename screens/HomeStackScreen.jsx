import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: 'COVID 19 Tracker App',
					headerStyle: {
						backgroundColor: '#2957AD',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>

			<HomeStack.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					// title: 'COVID 19 Tracker App',
					headerStyle: {
						backgroundColor: '#2957AD',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;

const styles = StyleSheet.create({});
