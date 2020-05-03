import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import moment from 'moment';

const CaseCard = ({ data }) => {
	const { Country, Cases, Status, Date } = data;
	return (
		<View style={styles.container}>
			{/* <Text>{Country ? Country : ''}</Text> */}
			<Text>Cases: {Cases ? Cases : 0}</Text>
			<Text>Date: {moment(Date ? Date : '').format('MMMM Do YYYY')}</Text>
		</View>
	);
};

export default CaseCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		marginTop: 10,
		padding: 10,
	},
});
