import React from 'react'
import {StyleSheet, View,Text} from 'react-native'
import HistoryIcon from '@material-ui/icons/History'
import TrainingsSchedule from './TrainingsSchedule'

function Trainings() {
    return (
        <View style={styles.trainings}>
            <View style={styles.traings__header}>
                <HistoryIcon />
                <Text>HISTORY</Text>
            </View>
            <hr />
            <TrainingsSchedule/>
            <TrainingsSchedule/>
        </View>
    )
}
const styles=StyleSheet.create({
    trainings:{
        backgroundColor:'lightgray'
    },
    traings__header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        margin:'5px'
    },
    hr:{
        height:'1px',
        borderWidth:'0px',
        backgroundColor:'grey',
        marginTop:'10px',
        marginBottom:'10px'
    }
})

export default Trainings
