import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Message() {
  return (
    <View style={Styles.container}>
      <Text>Message page</Text>
    </View>
  )
}
const Styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'
    

    }
})
