import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import WorkTripsRow from './WorkTripsRow'

function WorkTrips() {
    return (
        <View>
            <View style={{backgroundColor:'lightgrey'}}>
                <Text style={{margin:'5px'}}>UPCOMING BUSINESS TRIPS</Text>
            </View>
            
            <WorkTripsRow/>
            <hr/>
            <WorkTripsRow/>
            <hr/>
        </View>
    )
}

export default WorkTrips
