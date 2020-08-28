import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationIcon from '@material-ui/icons/Notifications'
import BellIcon from '@material-ui/icons/Mic'

function Header() {
    return (
        <View style={styles.header}>
            <MenuIcon/>
            <Text style={styles.header__text}>ELSSHRM</Text>
            <View style={styles.header__right}>
                <BellIcon/>
                <NotificationIcon/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:'#000a14',
        color:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'15px'
    },
    header__right:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'20px'
    },
    header__text:{
        color:'white',
        fontWeight:'500',
        fontSize:'18px'
    }
    
})
export default Header
