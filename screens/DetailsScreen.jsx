import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Alert,
	FlatList,
	ActivityIndicator,
	Dimensions,
	ScrollView,
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import axios from 'axios';
import moment from 'moment';

import { mainStyles } from '../mainStyles';

import CaseCard from '../components/CaseCard';

const DetailsScreen = ({ route, navigation }) => {
	const slug = route.params.slug;
	const country = route.params.country;

	// navigation.setOptions({ title: 'Updated!' })
	navigation.setOptions({ title: country });

	const [countryData, setCountryData] = useState([]);

	const DATA = [
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 1,
			Status: 'confirmed',
			Date: '2020-03-21T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 1,
			Status: 'confirmed',
			Date: '2020-03-22T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 9,
			Status: 'confirmed',
			Date: '2020-03-23T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 12,
			Status: 'confirmed',
			Date: '2020-03-23T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 15,
			Status: 'confirmed',
			Date: '2020-03-23T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 26,
			Status: 'confirmed',
			Date: '2020-03-23T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 30,
			Status: 'confirmed',
			Date: '2020-03-23T00:00:00Z',
		},
		{
			Country: 'Uganda',
			CountryCode: 'UG',
			Province: '',
			City: '',
			CityCode: '',
			Lat: '1.37',
			Lon: '32.29',
			Cases: 35,
			Status: 'confirmed',
			Date: '2020-03-23T00:00:00Z',
		},
	];

	let numberOfCases = [];
	let dateOfCases = [];

	countryData.forEach((data) => {
		numberOfCases.push(data.Cases);
		dateOfCases.push(moment(data.Date).format(`MMM D`));
	});

	// console.log(dateOfCases);

	const URL = `https://api.covid19api.com/dayone/country/${slug}/status/confirmed`;

	useEffect(() => {
		// const abortController = new AbortController
		getData();
	}, []);

	// console.log(countryData.reverse());

	const getData = async () => {
		try {
			const response = await axios.get(URL);
			// console.log(response.data);
			setCountryData(response.data);
		} catch (error) {
			Alert.alert('An Error Occurred', error);
		}
	};

	return (
		<View style={{ backgroundColor: 'white', flex: 1 }}>
			<View style={styles.container}>
				{countryData.length > 0 ? (
					<>
						<View>
							<ScrollView horizontal={true}>
								<LineChart
									data={{
										labels: dateOfCases,
										datasets: [
											{
												data: numberOfCases,
											},
										],
									}}
									width={Dimensions.get('window').width} // from react-native
									height={400}
									yAxisLabel="cases "
									yAxisSuffix=""
									yAxisInterval={1} // optional, defaults to 1
									chartConfig={{
										backgroundColor: '#e26a00',
										backgroundGradientFrom:
											mainStyles.COLOR_TWO,
										backgroundGradientTo:
											mainStyles.COLOR_TWO,
										decimalPlaces: 0, // optional, defaults to 2dp
										color: (opacity = 1) =>
											`rgba(255, 255, 255, ${opacity})`,
										labelColor: (opacity = 1) =>
											`rgba(255, 255, 255, ${opacity})`,
										style: {
											borderRadius: 16,
										},
										propsForDots: {
											r: '4',
											strokeWidth: '2',
											stroke: 'white',
										},
									}}
									bezier
									style={{
										marginVertical: 8,
										borderRadius: 10,
									}}
								/>
							</ScrollView>
						</View>

						<Text>A graph showing COVID 19 data in {slug}</Text>
						<Text>DISCLAIMER</Text>

						<Text>
							COVID 19 data keeps constantly changing and may not
							be accurate in RealTime.
						</Text>

						<Text>
							Secondly, all the data is not mine, but from an
							external api
						</Text>
					</>
				) : (
					<ActivityIndicator size="large" color="red" />
				)}

				{/* <FlatList
					data={countryData.reverse()}
					renderItem={({ item }) => <CaseCard data={item} />}
					keyExtractor={(item, index) => index}
				/> */}
			</View>
		</View>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10,
	},
});
