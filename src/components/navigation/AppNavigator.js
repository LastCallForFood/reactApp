import React from 'react';
import { Text } from 'react-native';
import {
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import OfferListScreen from '../screens/OfferListScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import RegisterSubscriberScreen from '../screens/RegisterSubscriber';
import AddOfferScreen from '../screens/AddOfferScreen';
import CurrentOffersScreen from '../screens/CurrentOffersScreen';
import OfferHistoryScreen from '../screens/OfferHistoryScreen';

// supplier tab navigator
const SupplierTabNavigator = createBottomTabNavigator(
	{
		AddOffer: AddOfferScreen,
		CurrentOffers: CurrentOffersScreen,
		OfferHistory: OfferHistoryScreen,
		MyAccount: MyAccountScreen,
		AboutUs: AboutUsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarLabel: () => {
				const { routeName } = navigation.state;
				// tabBarLabel is not styled the same as it is when using .navigationOptions
				const tabBarStyle = { textAlign: 'center', /*color: {tintColor},*/ };
				let text;

				switch (routeName) {
					case 'AddOffer': 			text = 'Add Meal';				break;
					case 'CurrentOffers': text = 'Current Offers';	break;
					case 'OfferHistory':	text = 'Offer History';		break;
					case 'MyAccount': 		text = 'My Account';			break;
					case 'AboutUs': 			text = 'About Us';				break;
					default: 							break;
				}
				return <Text style={tabBarStyle} size={12}>{text}</Text>;
			},
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					// TODO
					case 'AddOffer': 			iconName = 'ios-add';									break;
					case 'CurrentOffers':	break;
					case 'OfferHistory':	break;
					case 'MyAccount': 		break;
					case 'AboutUs':				iconName = 'ios-information-circle';	break;
					default: 							break;
				}
				return <Ionicons name={iconName} size={26} color={tintColor} />;
			},
		}),
	},
);

// subscriber tab navigator
const SubscriberTabNavigator = createBottomTabNavigator(
	{
		BuyMeal: OfferListScreen,
		MyAccount: MyAccountScreen,
		AboutUs: AboutUsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			// TODO: debug the headerTitle field
			headerTitle: () => {
				const { routeName } = navigation.state;
				let text;

				switch (routeName) {
					case 'BuyMeal':		 	text = 'Meals';				break;
					case 'MyAccount': 	text = 'My Account';	break;
					case 'AboutUs': 		text = 'About Us';		break;
					default: 						break;
				}
				return <Text style={{ textAlign: 'center' }} size={12}>{text}</Text>;
			},
			tabBarLabel: () => {
				const { routeName } = navigation.state;
				let text;

				switch (routeName) {
					case 'BuyMeal':		 	text = 'Meals';				break;
					case 'MyAccount': 	text = 'My Account';	break;
					case 'AboutUs': 		text = 'About Us';		break;
					default: 						break;
				}
				// tabBarLabel is not styled the same as it is when using .navigationOptions, not sure why
				return <Text style={{ textAlign: 'center' }} size={12}>{text}</Text>;
			},
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					case 'BuyMeal':		 	iconName = 'ios-cart';								break;
					case 'MyAccount': 	iconName = 'ios-person';							break;
					case 'AboutUs': 		iconName = 'ios-information-circle';	break;
					default: 						break;
				}
				return <Ionicons name={iconName} size={26} color={tintColor} />;
			},
		}),
	},
);

// auth stack navigator (for navigating splash screen & login)
const AuthStackNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		SignIn: LoginScreen,
		SignUp: RegisterSubscriberScreen,
		AboutUs: AboutUsScreen,
		// determined on LoginScreen
		SubscriberTabs: SubscriberTabNavigator,
		SupplierTabs: SupplierTabNavigator,
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

export default createAppContainer(AuthStackNavigator);
