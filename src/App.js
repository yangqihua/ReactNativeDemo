import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [
	{
		label: '首页',
		screen: 'home',
		icon: require('../img/list.png'),
		title: '趣购',
	},
	{
		label: '每周推荐',
		screen: 'example.Actions',
		icon: require('../img/swap.png'),
		title: '每周推荐',
	},
	{
		label: '榜单',
		screen: 'example.Actions',
		icon: require('../img/swap.png'),
		title: '榜单',
	},
	{
		label: '我的',
		screen: 'example.Actions',
		icon: require('../img/swap.png'),
		title: '我的',
	}
];

// this will start our app
Navigation.startTabBasedApp({
	tabs,
	animationType: 'slide-down',
	tabsStyle: {
		tabBarButtonColor: '#9B9696',
		tabBarSelectedButtonColor: '#fe2a43',
		tabBarBackgroundColor: '#ffffff',
		tabFontFamily: 'BioRhyme-Bold',
		tabBarHideShadow: false
	},
	appStyle: {
		orientation: 'portrait',

		tabBarButtonColor: '#9B9696',
		tabBarSelectedButtonColor: '#fe2a43',
		tabBarBackgroundColor: '#ffffff',

		navBarButtonColor: '#ffffff',
		navBarTextColor: '#ffffff',
		navBarBackgroundColor: '#fe2a43',
		navigationBarColor: '#003a66',
		statusBarColor: '#fe2a43',
		tabFontFamily: 'Avenir-Medium',

		forceTitlesDisplay: true,
		tabBarTranslucent:false,
		navBarTitleTextCentered: true,

		navBarHeight: 52, // Optional, set the navBar height in pixels.
		// topTabsHeight: 52, // Optional, set topTabs height in pixels.
		navBarTextFontSize:17,

		statusBarHideWithNavBar:true,

		// ios
		keepStyleAcrossPush: false,
		navBarLeftButtonFontSize:11,

		// statusBarTextColorSchemeSingleScreen: 'light',
		// statusBarBlur:true,
		// navBarHidden:true,
	},
});
