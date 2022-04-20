import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme as T } from '../theme';
import Icon from '../weatherIcon';
import ForecastSummary from './ForecastSummary';

import Sunny from '../assets/images/day-clear.jpg';
import Moon from '../assets/images/night-clear.jpg';


const CurrentConditions = (props) => {

    let currentDt = new Date(props.current.dt * 1000);
    let hour = currentDt.getHours();

    let imageSrc;

    if(hour > 8 && hour < 18) imageSrc = Sunny;
    else imageSrc = Moon;

    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    return (
        <View>
            <Text style={styles.location}>Huntington, WV</Text>
            <Image source={imageSrc} style={styles.heroImage} />
            <View style={styles.container}>
                    <Text style={styles.heroText}>{props.current.weather[0].description.toUpperCase()}</Text>
                    <Text style={styles.heroText}>{days[currentDt.getDay()]}, {months[currentDt.getMonth()]} {currentDt.getDate()}</Text>
            </View>

            <ForecastSummary current={props.today} />

            <Text style={styles.location}>Details</Text>
            <View style={styles.detailRow}>
                    <View style={styles.detailBox}>
                        <Icon name="wi-thermometer" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Tempurature</Text>
                        <Text style={styles.detailData}>{Math.round(props.current.temp)}&deg;F</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-thermometer-internal" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Feels like</Text>
                        <Text style={styles.detailData}>{Math.round(props.current.feels_like)}&deg;F</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-barometer" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Pressure</Text>
                        <Text style={styles.detailData}>{props.current.pressure}</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-day-sunny" style={styles.detailIcon} />
                        <Text style={styles.detailText}>UV Index</Text>
                        <Text style={styles.detailData}>{props.current.uvi}</Text>
                    </View>
                    <View style={styles.detailBox}>
                        <Icon name="wi-humidity" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Humidity</Text>
                        <Text style={styles.detailData}>{props.current.humidity}%</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-alien" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Alien Invation</Text>
                        <Text style={styles.detailData}>~0.1%</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-meteor" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Meteor</Text>
                        <Text style={styles.detailData}>~0.0%</Text>
                    </View>
                    
                </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        color: T.cardText,
        padding: 0,
        paddingTop: 0,
        borderRadius: T.curve,
        marginTop: T.vSpacing
    },
    heroText: {
        color: 'white',
        fontSize: 22,
        marginBottom: 0

    },
    heroImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: T.curve,
        resizeMode: 'cover'
    },
    location: {
        fontSize: 24,
        color: 'white',
        marginTop: T.vSpacing,
        marginBottom: 0
    },
    detailRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%',
    },
    detailBox: {
        marginTop: 0,
        maxHeight: 120,
        borderRadius: 5,
        aspectRatio: 1 / 2.8,
        padding: 12,
        marginTop: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    detailText: {
        color: '#aaa',
        fontSize: 10
    },
    detailIcon: {
        fontSize: 34,
        color: 'white',
        marginBottom: 3
    },
    detailData: {
        fontSize: 18,
        color: '#ddd'
    }
});

export default CurrentConditions;