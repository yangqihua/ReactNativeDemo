/**
 * Created by yangqihua on 2017/11/22.
 */

import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Row from '../../components/Row';

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Row title={'Push Screen'} />
				<Row title={'Push List Screen'}/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Home;
