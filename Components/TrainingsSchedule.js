import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import DownwardArrow from '@material-ui/icons/ExpandMoreOutlined'


function TrainingsSchedule() {
    return (
        <View style={styles.trainingsSchedule}>
            <View style={styles.trainingsSchedule__row1}>
                <View>
                    <Text style={{color:'white',fontSize:'30px',fontWeight:'bold',color:'#000a14'}}>DYNAMIC AX</Text>
                    <Text style={styles.trainingsSchedule__text2}>REQUEST ID 32780</Text>
                    <Text style={styles.trainingsSchedule__text2}>FROM 01-08-2020</Text>
                </View>
                <View>
                    <Text style={styles.trainingsSchedule__text2}><span style={{backgroundColor:'#000a14',borderRadius:'5px',fontWeight:'bold',padding:'2px',color:'white'}}>10 PARTICIPANTS</span></Text>
                    <Text style={styles.trainingsSchedule__text2}>TO: 18-08-2020</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={{fontSize:'10px',fontWeight:'bold',color:'white'}}>DETAILS </Text>
                <span style={{color:'white'}}><DownwardArrow/></span>
            </View>
            <hr/>
        </View>
            
        
    )
}
const styles=StyleSheet.create({
    trainingsSchedule:{
        // flexDirection:'row'
        backgroundColor:'white'
    },
    trainingsSchedule__row1:{
        flexDirection:'row',
        justifyContent:'space-between',
        // margin:'5px',
        
    },
    trainingsSchedule__text2:{
        margin:'3px',
        color:'darkgray',
        fontSize:'10px'
    },
    details:{
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
export default TrainingsSchedule
