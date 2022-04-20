import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Theme as T } from '../theme';

import HourWeather from './HourWeather';


const ForecastHourly = (props) => {
  return (
    <View>
        <Text style={styles.heading}>Hourly Forecast</Text>
        <ScrollView style={styles.container} horizontal={true} nestedScrollEnabled={true}>

            { props.hourly.map( (hour, index) => {
                return <HourWeather key={index} thisHour={hour} />;
            } ) }


        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    width: '100%',
    backgroundColor: 'black',
    color: T.cardText,
    padding: 10,
    borderRadius: T.curve,
    marginTop: T.vSpacing,
    flexDirection: 'row'
},
heading: {
    fontSize: 24,
    color: 'white',
    marginTop: T.vSpacing,
    marginBottom: 0
},
});

export default ForecastHourly;