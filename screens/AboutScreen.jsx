import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
	StyleSheet,
	Text,
	View,
	Image,
	useWindowDimensions,
} from 'react-native';

const SettingsScreen = () => {
	return (
		<View style={{}}>
			<Image
				source={require('../assets/gadro2-min.jpg')}
				style={{
					width: useWindowDimensions().width,
					height: 400,
				}}
			/>

			<Text>
				Developed with{' '}
				<Ionicons name="md-heart" color="red" size={40} /> The Code
				Artisan
			</Text>

			<Text>Twitter</Text>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({});
