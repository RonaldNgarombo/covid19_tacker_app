import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import moment from 'moment';

import { mainStyles } from '../mainStyles';

export default function CountryCard({ data, navigation }) {
	const {
		Country,
		CountryCode,
		Slug,
		NewConfirmed,
		TotalConfirmed,
		NewDeaths,
		TotalDeaths,
		NewRecovered,
		TotalRecovered,
		Date,
	} = data;

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Details', {
						slug: Slug,
						country: Country,
					})
				}
			>
				<View style={styles.country}>
					<View style={{ flex: 1 }}>
						<Text style={styles.textData}>Country </Text>

						<Text style={styles.textData}>Country Code</Text>

						<Text style={styles.textData}>New Confirmed</Text>

						<Text style={styles.textData}>Total Confirmed</Text>

						<Text style={styles.textData}>New Deaths </Text>

						<Text style={styles.textData}>Total Deaths </Text>

						<Text style={styles.textData}>New Recovered</Text>

						<Text style={styles.textData}>TotalRecovered</Text>

						<Text style={styles.textData}>Date</Text>
					</View>

					<View style={{ flex: 1 }}>
						<Text style={styles.textData}>
							{Country ? Country : ''}
						</Text>

						<Text style={styles.textData}>
							{CountryCode ? CountryCode : ''}
						</Text>

						<Text style={styles.textData}>
							{NewConfirmed ? NewConfirmed : 0}
						</Text>

						<Text style={styles.textData}>
							{TotalConfirmed ? TotalConfirmed : 0}
						</Text>

						<Text style={styles.textData}>
							{NewDeaths ? NewDeaths : 0}
						</Text>

						<Text style={styles.textData}>
							{TotalDeaths ? TotalDeaths : 0}
						</Text>

						<Text style={styles.textData}>
							{NewRecovered ? NewRecovered : 0}
						</Text>

						<Text style={styles.textData}>
							{TotalRecovered ? TotalRecovered : 0}
						</Text>

						<Text style={styles.textData}>
							{moment(Date ? Date : '').format('MMMM Do YYYY')}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	country: {
		marginTop: 10,
		backgroundColor: mainStyles.COLOR_TWO,
		padding: 10,
		flex: 1,
		flexDirection: 'row',
		borderRadius: 16,
	},

	textData: {
		color: mainStyles.COLOR_FIVE,
		fontSize: 20,
	},
});
