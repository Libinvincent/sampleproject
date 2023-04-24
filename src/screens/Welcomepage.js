import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { IconName, content } from "./Datas";


function TopView() {
  return (
    IconName.map((item, index) => (


      <View style={{ flex: 1 }} key={index}>
        <View style={Styles.iconlistview}>
          <Image source={item.image} style={Styles.iconImage} />
        </View>
        <View>
          <Text style={{ color: '#000000' }}>{item.text}</Text>
        </View>
      </View>
    )
    )
  )
}

const renderitem = ({ item }) => {
  return (
    <View style={Styles.listcontainer}>
      <Image source={item.icon} style={Styles.listImage}></Image>
      <Text style={Styles.listHeading}>{item.heading}</Text>
      <Text style={Styles.listText}>{item.contents}</Text>
    </View>
  )

}

export default function WelcomeScreen() {
  return (
    <View style={Styles.container}>
      <View style={Styles.subcontainer1}>
        <View style={Styles.headerview}>
          <Text style={Styles.headertext}>Welcome</Text>
        </View>
        <View style={Styles.contentview}>
          <TopView />
        </View>

      </View>
      <View style={Styles.subcontainer2}>
        <FlatList data={content} renderItem={renderitem} numColumns={2}
          style={Styles.mainlist} />

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
    backgroundColor: "#ffffff",

  },
  subcontainer2: {
    height: '80%',
    width: '100%',
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: "center"
  },
  subcontainer3: {
    height: '20%',
    width: '100%',
    backgroundColor: "#ffffff"
  },
  subcontainer4: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
    margin: 10

  },
  headerview: {
    height: '40%',
    width: "100%"
  },
  contentview: {
    flexDirection: 'row',
    marginLeft: 20,
    height: '60%',
    width: "100%"
  },
  iconlistview: {
    height: '50%',
    width: '50%',
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: .5,
    borderColor: '#000000'
  },
  iconImage: {
    height: '60%',
    width: '60%'
  },
  mainlist: {
    width: '100%',
    height: '100%',
    elevation: 1,

  },


  listcontainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 15

  },
  listImage: {
    height: 70,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  listHeading: {
    fontSize: 20,
    color: '#000000',
    margin: 2,
    marginLeft: 5
  },
  listText: {
    fontSize: 13,
    margin: 1,
    marginLeft: 5,
    color: 'gray',
    marginBottom: 10
  }

})