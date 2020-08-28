import React from 'react'
import {View, Text} from 'react-native'
import Header from './Header'
import Content from './Content'


const Home=()=>{
    return (
        <View>
            {/* Header */}
            <Header/>
            {/* Body part */}
            <Content />
           
        </View>
    )
}

export default Home
