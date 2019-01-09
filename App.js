import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import AppContainer from './src/components/navigation/AppNavigator';
import { containerNoPadding } from './src/styles/Style';

export default class App extends React.Component {

  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => Promise.all([
      Asset.loadAsync([
				// TODO: require these globally?
        require('./src/assets/images/last-call-logo.png'),
        require('./src/assets/images/last-call-logo.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
	
	render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
		}
		
		return (
			<View style={containerNoPadding}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<AppContainer
					// onNavigationStateChange={} // TODO
				/>
			</View>
		);
	}
}
