import Svg, { Circle, Rect, Polyline } from 'react-native-svg';
import { View, StyleSheet, Text } from 'react-native';



export default function Chart(props) {

    let points = "";
    let step = 500 / 26;

    let x = 2;

    points += x.toString()+',120 ';

    props.hourly.map((hour) => {
        points += x.toString()+','+(118 - (hour.pop*100)) +' ';
        x += step;
    });

    points += x.toString()+',120 ';
    points += '2,120 ';

    // console.log(points);



    return (
        <View style={styles.container}>
            <Text style={styles.bigTitle}>Precipitation Chart</Text>
            <Svg height="100" width="100%" viewBox="0 0 500 100" {...props} style={{marginBottom: 0, paddingBottom: 0}}>
                <Polyline points={points} fill="lightblue" stroke="white" strokewidth="2" />
            </Svg>
            <View style={styles.popContainer}>
                <Text style={styles.data}>11am</Text>
                <Text style={styles.data}>5pm</Text>
                <Text style={styles.data}>11pm</Text>
                <Text style={styles.data}>5am</Text>
                <Text style={styles.data}>11am</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        margin: 5,
        padding: 0
    },
    data: {
        color: 'white',
        fontSize: 14,
        marginTop: 0,
        paddingTop: 0
    },
    bigTitle: {
        color: 'white',
        fontSize: 18
    },
    popContainer: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});