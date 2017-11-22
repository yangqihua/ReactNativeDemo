import React from 'react';
import {PixelRatio,ScrollView,StyleSheet} from 'react-native';
import Row from '../../components/Row';

class TopTabs extends React.Component {
  static navigatorStyle = {
    topTabTextColor: '#ffffff',
    selectedTopTabTextColor: '#fe2a43',

    // Icons
    topTabIconColor: '#ffffff',
    selectedTopTabIconColor: '#fe2a43',

    // Tab indicator
    selectedTopTabIndicatorHeight: PixelRatio.get() * 2,
    selectedTopTabIndicatorColor: '#fe2a43',
  };

	render() {
		return (
			<ScrollView style={styles.container}>
				<Row title={'Push Screen'}/>
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
export default TopTabs;
