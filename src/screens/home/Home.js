/**
 * Created by yangqihua on 2017/11/22.
 */

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollableTabView
				style={{marginTop: 20, }}
				initialPage={1}
				renderTabBar={() => <ScrollableTabBar />}
			>
				<Text tabLabel='Tab #1'>My</Text>
				<Text tabLabel='Tab #2'>favorite</Text>
				<Text tabLabel='Tab #3'>project</Text>
				<Text tabLabel='Tab #3'>project</Text>
				<Text tabLabel='Tab #3'>project</Text>
			</ScrollableTabView>
		);
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// });

export default Home;
