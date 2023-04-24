import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Technologys,Maincontent } from "./src/Datas";


const Iconslist = () => {
  return (
    Technologys.map((item, index) => (
      <View style={Styles.icon} key={index}>
        <TouchableOpacity style={Styles.button} onPress={() => { display(index) }}>
          <View style={Styles.iconBackground} >
            <Image source={item.Timage} style={Styles.backgroundicon} />
          </View>
          <Text style={{ fontSize: 12, color: 'black', marginTop: 8, marginLeft: 10 }}>{item.Tname}</Text>
        </TouchableOpacity>
      </View>
    ))

  )
}
const renderItem = ({ item }) => {
  return (
    <View style={Styles.contentlist}>
      <View style={Styles.subContentlist}>
        <Text style={Styles.contentText}>{item.Datacontent}</Text>
      </View>
      <View style={Styles.contentImageview}>
        <Image source={item.Dataimage} style={Styles.contentImage} />
      </View>


    </View>
  )
}



export default function App() {

  const [Data, setData] = useState("")

  display = (index) => {

    setData(Technologys[index].Discription)


  }

  return (
    <View style={Styles.container}>
      <View style={Styles.subcontainer1}>
        <View style={{ width: '100%', height: '30%' }}>
          <Text style={Styles.headingText}>Technology and blog</Text>
        </View>
        <View style={Styles.iconlistView}>
          <Iconslist />


        </View>

      </View>
      <View style={Styles.subcontainer2}>
        <View style={Styles.displayText}>
          <Text style={{ color: 'red' }}>{Data}</Text>
        </View>


      </View>
      <View style={Styles.subcontainer3}>
        <FlatList data={Maincontent} renderItem={renderItem} />

      </View>

    </View>
  )
}



const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subcontainer1: {
    height: '20%',
    width: '100%',
    backgroundColor: "white",

  },
  subcontainer2: {
    height: '10%',
    width: '100%',
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "center"
  },

  subcontainer3: {
    height: '70%',
    width: '100%',
    backgroundColor: "white"
  },
  headingText:
  {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    margin: 2,
    marginLeft: 20,
    marginTop: 5
  },
  icon: {
    width: '20%',
    height: '100%'
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconBackground: {
    height: '50%',
    width: '70%',
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  backgroundicon: {
    height: '70%',
    width: '70%',
    borderRadius: 100
  },



  iconlistView: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    backgroundColor: 'white'
  },

  contentlist: {
    height: 80,
    width: '95%',
    margin: 8,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: .5,
    borderColor: 'gray'
  },
  subContentlist: {
    height: 78,
    width: '75%',
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomStartRadius: 10
  },
  contentText: {
    color: "black",
    fontSize: 12
  },
  contentImageview: {
    height: 78,
    width: '25%',
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: 'white',
    justifyContent: "flex-end",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  contentImage: {
    height: 78,
    width: '100%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },


  displayText: {
    height: '70%',
    width: '95%',
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: .5,
    borderColor: 'gray'
  }
}) 