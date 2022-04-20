import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, 
        StyleSheet, 
        View, Text, 
        ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
// import globalStyle from './globalStyle';
import axios from 'axios';

import { Theme as T } from './theme';
// import { codeToIcon } from './helpers';

// import Icon from './weatherIcon';

import ForecastHourly from './components/ForecastHourly';
import CurrentConditions from './components/CurrentConditions';
import WeatherDetails from './components/WeatherDetails';
import ForecastSummary from './components/ForecastSummary';
import SunRiseSet from './components/SunRiseSet';

import Chart from './components/Chart';


export default function App() {
  // Create a state variable for our weather data from the API
  const [data, setData] = useState(null);

  // useEffect Hook function runs when the App component loads and makes our
  // API call to get our weather data. Stores it in the state variable above.
  const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.42&lon=-82.44&units=imperial&appid=e60467cc5cd373bff0d523243f27ceb2";

  useEffect(() => {

    const getWeather = async () => {
      const response = await axios.get(weatherURL);
      setData(response.data);
    };

    getWeather();
  }, [] );


  // Load our "borrowed" weather icons as fonts
  const [loaded] = useFonts({
    icomoon: require('./assets/fonts/icomoon.ttf')
  });

  // Checks to make sure fonts and data from the API are loaded
  // before trying to render the UI
  if(!loaded || !data) {
    return (
      <View style={T.loadingContainer}>
        <Text style={styles.loadText}>Loading Weather Data...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  //Renders the UI
  return (

    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>

        <CurrentConditions current={data.current} today={data.daily[0]} />
        
        <SunRiseSet current={data.daily[0]} />

        <Chart hourly={data.hourly} />

        <ForecastHourly hourly={data.hourly} />

        <StatusBar style="auto" hidden />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: T.containerBg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadText: {
    color: 'white'
  },
  safeView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: T.containerBg,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 0
  },
  heading: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 12
  }
});
