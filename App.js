import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeStackScreen from './screens/HomeStackScreen';
import AboutScreen from './screens/AboutScreen';

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'md-home' : 'md-home';
						} else if (route.name === 'About') {
							iconName = focused
								? 'md-information-circle-outline'
								: 'md-information-circle-outline';
						}

						// You can return any component that you like here!
						return (
							<Ionicons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
				})}
				tabBarOptions={{
					activeTintColor: '#ffffff',
					inactiveTintColor: 'gray',
					style: {
						backgroundColor: '#2957AD',
					},
				}}
			>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="About" component={AboutScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const Tab = createBottomTabNavigator();
