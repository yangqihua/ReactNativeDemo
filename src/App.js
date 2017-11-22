import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [
	{
		label: '首页',
		screen: 'home.Home',
		icon: require('../img/app/home/home.png'),
		title: '趣购',
	},
	{
		label: '每周推荐',
		screen: 'home.Recommend',
		icon: require('../img/app/home/recommend.png'),
		title: '每周推荐',
	},
	{
		label: '榜单',
		screen: 'home.Top',
		icon: require('../img/app/home/top.png'),
		title: '榜单',
	},
	{
		label: '我的',
		screen: 'home.Me',
		icon: require('../img/app/home/me.png'),
		title: '我的',
	}
];

// this will start our app
Navigation.startTabBasedApp({
	tabs,
	animationType: 'slide-down',
	tabsStyle: {
		tabBarSelectedButtonColor: '#fe2a43',
		tabBarBackgroundColor: '#ffffff',
		tabFontFamily: 'BioRhyme-Bold',
		tabBarHideShadow: false
	},
	appStyle: {
		orientation: 'portrait',

		tabBarButtonColor: '#9f9a9a',
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

		navBarHeight: 48, // Optional, set the navBar height in pixels.
		// topTabsHeight: 52, // Optional, set topTabs height in pixels.
		navBarTextFontSize:17,

		// statusBarHideWithNavBar:true,
		// statusBarHidden:true,

		// ios
		// keepStyleAcrossPush: false,
		// navBarLeftButtonFontSize:11,
		// statusBarBlur:true,

		// statusBarTextColorSchemeSingleScreen: 'light',
		// statusBarBlur:true,
		// navBarHidden:true,
	},
});
