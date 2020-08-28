import React from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'
import DownwardArrow from '@material-ui/icons/ExpandMoreOutlined'

const Content=()=> {
    return (
        <View style={styles.content}>
            {/* 1st row */}
            <View style={styles.content__row1}>
                <View style={styles.content__row1Text}>
                <Text style={{color:'darkgrey',fontSize:'10px'}}>Good Day, Sheikh</Text>
                <Text style={{color:'white',fontSize:'15px',fontWeight:'bold'}}>What do you want<br/> to do today?</Text>
                </View>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8IzSdPiZXi39TFFIoA2FU_JseySlMftKnZQ&usqp=CAU',}} style={styles.content__row1Image}/>
            </View>

            {/* 2nd row */}

            <View style={styles.content__row2}>
                <View style={styles.content__row2Text}>
                    <Text style={{fontSize:'18px'}}>Leave Account</Text>
                    <Text style={{fontSize:'12px'}}>Your Leave balance account!</Text>
                    <br/><br/> 
                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text style={{fontSize:'12px'}}>See Details</Text><span style={{fontSize:'small'}}><DownwardArrow/></span></View>
                </View>
                <View style={styles.content__row2Image}>
                    <Text style={{color:'white',fontSize:'30px'}}>10</Text>
                </View>
            </View>

            {/* 3rd row */}
            <View style={styles.content__row3}>
                <View style={styles.content__row3Rows}>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'https://icon-library.com/images/personal-information-icon/personal-information-icon-1.jpg'}} style={styles.content__row3Images} />
                        <Text>Personal Info</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/005/419/original/employment.png'}} style={styles.content__row3Images} />
                        <Text>Employment</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'data:image/png;base64,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'}} style={styles.content__row3Images} />
                        <Text>Attendance</Text>
                    </View>
                </View>

                <View style={styles.content__row3Rows}>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'https://cdn3.iconfinder.com/data/icons/business-683/64/Invoice-bill-receipt-payment-shopping-statement-payslip-512.png'}} style={styles.content__row3Images} />
                        <Text>Pay slips</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'https://www.pinclipart.com/picdir/middle/366-3663692_icon-request-for-pro-request-for-proposal-icon.png'}} style={styles.content__row3Images} />
                        <Text>Requests</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/project-management-8/500/Approval-2-512.png'}} style={styles.content__row3Images} />
                        <Text>Approvals</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    content:{
        backgroundColor:'lightgray',
        flex:1,
    },
    content__row1:{
        backgroundColor:'#000a14',
        padding:'10px',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-between',
        height:'100px',
        // zIndex:-1
    },
    content__row1Text:{
        marginLeft:'10px'
    },
    content__row1Image:{
        height:'60px',
        width:'60px',
        borderRadius:'100px',
        marginRight:'20px',
        borderWidth:'1px',
        borderColor:'black',
        marginBottom:'10px'
    },
    content__row2:{
        backgroundColor:'white',
        borderRadius:'8px',
        margin:'10px',
        flexDirection:'row',
        
        // alignItems:'center',
        justifyContent:'space-between'
    },
    content__row2Image:{
        backgroundColor:'black',
        padding:'20px',
        margin:'15px',
        borderRadius:'100px'
    },
    content__row2Text:{
        margin:'5px',
    },
    content__row3:{
        backgroundColor:'white',
        borderRadius:'8px',
        margin:'10px',
        height:'175px',
        justifyContent:'center'
    },
    content__row3Rows:{
        justifyContent:'space-between',
        flexDirection:'row',
        margin:'10px'
    },
    
    content__row3Images:{
        height:'30px',
        width:'30px'
    }
})
export default Content
