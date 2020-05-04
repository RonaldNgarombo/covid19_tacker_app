import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import { mainStyles } from '../mainStyles';

import CountryCard from '../components/CountryCard';
// https://covid19api.com/
// https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest
const HomeScreen = ({ navigation }) => {
	const [covidData, setCovidData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const DATA = {
		Global: {
			NewConfirmed: 82251,
			TotalConfirmed: 3230493,
			NewDeaths: 5007,
			TotalDeaths: 217954,
			NewRecovered: 40226,
			TotalRecovered: 1039749,
		},

		Countries: [
			{
				Country: 'ALA Aland Islands',
				CountryCode: 'AX',
				Slug: 'ala-aland-islands',
				NewConfirmed: 0,
				TotalConfirmed: 0,
				NewDeaths: 0,
				TotalDeaths: 0,
				NewRecovered: 0,
				TotalRecovered: 0,
				Date: '2020-05-03T08:59:26Z',
			},
			{
				Country: 'Afghanistan',
				CountryCode: 'AF',
				Slug: 'afghanistan',
				NewConfirmed: 134,
				TotalConfirmed: 2469,
				NewDeaths: 4,
				TotalDeaths: 72,
				NewRecovered: 21,
				TotalRecovered: 331,
				Date: '2020-05-03T08:59:26Z',
			},
			{
				Country: 'Albania',
				CountryCode: 'AL',
				Slug: 'albania',
				NewConfirmed: 7,
				TotalConfirmed: 789,
				NewDeaths: 0,
				TotalDeaths: 31,
				NewRecovered: 31,
				TotalRecovered: 519,
				Date: '2020-05-03T08:59:26Z',
			},
			{
				Country: 'Uganda',
				CountryCode: 'UG',
				Slug: 'uganda',
				NewConfirmed: 0,
				TotalConfirmed: 48,
				NewDeaths: 0,
				TotalDeaths: 0,
				NewRecovered: 0,
				TotalRecovered: 0,
				Date: '2020-04-05T06:37:00Z',
			},
		],
	};

	// Get a Summary of Covid Data
	const getData = async () => {
		try {
			const response = await axios.get(
				`https://api.covid19api.com/summary`
			);

			setCovidData(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(`
	`);

	// const {
	// 	NewConfirmed,
	// 	TotalConfirmed,
	// 	NewDeaths,
	// 	TotalDeaths,
	// 	NewRecovered,
	// 	TotalRecovered,
	// } = covidData.Global;

	return (
		<View style={styles.container}>
			{covidData.Global ? (
				<FlatList
					data={covidData.Countries}
					renderItem={({ item }) => (
						<CountryCard data={item} navigation={navigation} />
					)}
					keyExtractor={(item) => item.Country}
					ListHeaderComponent={
						<>
							<View style={styles.summary}>
								<View style={{ flex: 1 }}>
									<Text style={styles.summaryText}>
										New Confirmed
									</Text>

									<Text style={styles.summaryText}>
										Total Confirmed{' '}
									</Text>

									<Text style={styles.summaryText}>
										New Deaths{' '}
									</Text>
									<Text style={styles.summaryText}>
										Total Deaths
									</Text>
									<Text style={styles.summaryText}>
										New Recovered
									</Text>
									<Text style={styles.summaryText}>
										Total Recovered{' '}
									</Text>
								</View>

								<View style={{ flex: 1 }}>
									<Text style={styles.summaryText}>
										{covidData.Global.NewConfirmed
											? covidData.Global.NewConfirmed
											: ''}
									</Text>

									<Text style={styles.summaryText}>
										{covidData.Global.TotalConfirmed
											? covidData.Global.TotalConfirmed
											: ''}
									</Text>

									<Text style={styles.summaryText}>
										{covidData.Global.NewDeaths
											? covidData.Global.NewDeaths
											: ''}
									</Text>

									<Text style={styles.summaryText}>
										{covidData.Global.TotalDeaths
											? covidData.Global.TotalDeaths
											: ''}
									</Text>

									<Text style={styles.summaryText}>
										{covidData.Global.NewRecovered
											? covidData.Global.NewRecovered
											: ''}
									</Text>

									<Text style={styles.summaryText}>
										{covidData.Global.TotalRecovered
											? covidData.Global.TotalRecovered
											: ''}
									</Text>
								</View>
							</View>
						</>
					}
				/>
			) : (
				<ActivityIndicator size="large" color="red" />
			)}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: mainStyles.COLOR_FIVE,
		flex: 1,
		padding: 10,
	},
	summary: {
		flex: 1,
		flexDirection: 'row',
	},
	summaryText: {
		fontSize: 20,
	},
});
