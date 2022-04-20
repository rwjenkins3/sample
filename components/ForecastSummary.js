import { View, Text, StyleSheet } from 'react-native';
import { Theme as T } from '../theme';
import { getWeatherDescription } from '../helpers';

// {"dt":1644253200,"sunrise":1644236966,"sunset":1644274711,"moonrise":1644249960,"moonset":1644210060,"moon_phase":0.22,
// "temp":{"day":39.24,"min":26.53,"max":45.86,"night":28.31,"eve":34.18,"morn":28.35},"feels_like":{"day":34.65,"night":22.26,"eve":30.49,"morn":23.88},
// "pressure":1023,"humidity":71,"dew_point":30.79,"wind_speed":7.14,"wind_deg":270,"wind_gust":17.85,
// "weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":16,"pop":0,"uvi":2.71}


const ForecastSummary = (props) => {

    let description = getWeatherDescription(props.current);


    return (
        <View style={styles.container}>
            <Text style={styles.descText}>{description}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        color: T.cardText,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: T.curve,
    },
    descText: {
        color: 'white',

    }
});

export default ForecastSummary;