import React from 'react'
import {StyleSheet, View,Text} from 'react-native'
import DownwardArrow from '@material-ui/icons/ExpandMoreOutlined'
import DoubleSidedArrow from '@material-ui/icons/DoubleArrowSharp'

function WorkTripsRow() {
    return (
        <View style={styles.workTripRow}>

            <View style={styles.row1}>
                <View>
                    <Text style={{color:'#000a14',fontSize:'20px'}}>RUH</Text>
                    <Text style={{color:'grey',fontSize:'10px'}}>FROM 22-12-2020</Text>
                </View>
                <View>
                    <View style={{backgroundColor:'#000a14',borderRadius:'100px'}}><span style={{color:'white'}}><DoubleSidedArrow/></span></View>
                    <Text style={{color:'grey',fontSize:'10px'}}>3 Days</Text>
                </View>
                <View>
                    <Text style={{color:'#000a14',fontSize:'20px'}}>RUH</Text>
                    <Text style={{color:'grey',fontSize:'10px'}}>FROM 22-12-2020</Text>
                </View>
            </View>

            <View style={styles.row2}>
                <View>
                    <Text style={{color:'grey',fontWeight:'bold'}}>BTCODE</Text>
                    <Text style={{color:'grey',fontSize:'10px'}}>#ALFA3290</Text>
                </View>
                <View>
                    <Text style={{color:'grey',fontWeight:'bold'}}>PROJECT</Text>
                    <Text style={{color:'grey',fontSize:'10px'}}>#ELSSHRM</Text>
                </View>
            </View>
            <View style={styles.row3}>
                <Text style={{color:'white'}} >DETAILS </Text><span style={{color:'white'}}><DownwardArrow/></span>
            </View>
           
            
        </View>
    )
}
const styles=StyleSheet.create({
    workTripRow:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        backgroundColor:'white',
        // margin:'10px'
    },
    row1:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:'5px'
    },
    row2:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:'5px'
    },
    row3:{
        backgroundColor:'#000a14',
        margin:'20px',
        width:'100px',
        borderTopEndRadius:'5px',
        borderTopLeftRadius:'5px',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
})
export default WorkTripsRow
