import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const IconName = [
  {

    image: require("./images/coupon.png"),
    text: "Coupon"
  },
  {

    image: require("./images/ads.png"),
    text: "   Ads"
  },
  {

    image: require("./images/quatation.png"),
    text: "Quatation"
  },
  {

    image: require("./images/brochure.png"),
    text: "Brochure"
  }
]

const content = [
  {
    icon: require("./images/about.png"),
    heading: "About Us",
    contents: "All kind of IT services that vow your success"
  },
  {
    icon: require("./images/service.jpg"),
    heading: "Service",
    contents: "We provide truly prominent IT solutions"
  },
  {
    icon: require("./images/mangement.jpg"),
    heading: "Management",
    contents: "Know more about our management"
  },

  {
    icon: require("./images/technology.jpg"),
    heading: "Technology",
    contents: "Discover our range of Tecnologies"
  },
  {
    icon: require("./images/contact.jpg"),
    heading: "Contact Us",
    contents: "Get in touch with us for more information"
  },
  {
    icon: require("./images/hosting.png"),
    heading: "Hosting",
    contents: "Hosting with powerful Linux platform"
  },
]


function TopView() {
  return (
    IconName.map((item, index) => (


      <View style={{ flex: 1 }} key={index}>
        <View style={Styles.iconlistview}>
          <Image source={item.image} style={Styles.iconImage} />
        </View>
        <View>
          <Text style={{ color: 'black' }}>{item.text}</Text>
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

export default function App() {
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
          style={Styles.mainlist}/>

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
    height: '80%',
    width: '100%',
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "center"
  },
  subcontainer3: {
    height: '20%',
    width: '100%',
    backgroundColor: "white"
  },
  subcontainer4: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
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
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: .5,
    borderColor: 'black'
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
    color: 'black',
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