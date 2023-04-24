import React from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";

export default function HomePage({navigation}) {
    return (
        <View style={Styles.container}>
            <View style={Styles.subcontainer1}>
                <Image source={require("../../images/Home.jpg")} style={Styles.homeimage} />
            </View>

            <View style={Styles.subcontainer2}>

                <Text style={Styles.welcometext}>Welcome</Text>
                <Text style={Styles.contenttext}>To India's trusted globel website development</Text>
                <Text style={Styles.contenttext}>company that provides full-cycle software</Text>
                <Text style={Styles.contenttext}>development services,e-commerce & Mobile</Text>
                <Text style={Styles.contenttext}>App development</Text>

            </View>
            <View style={Styles.subcontainer3}>
                <View style={Styles.subcontainer4}>
                    <TouchableHighlight style={Styles.buttonview} onPress={()=>navigation.navigate("bottom")} underlayColor={'white'}>
                        <Text style={Styles.buttontext}>Get started</Text>
                    </TouchableHighlight>
                    <Text>2020 woxro Technology Solutions Pvt. Ltd.</Text>

                </View>


            </View>

        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subcontainer1: {
        height: '40%',
        width: '100%',
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: "center"
    },
    subcontainer2: {
        height: '40%',
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
    homeimage: {
        height: '80%',
        width: '90%'

    },
    welcometext: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10

    },
    contenttext: {
        fontSize: 17,
        color: '#000000',
        fontWeight: 'normal',
        margin: 1,
    },
    buttonview: {
        height: '25%',
        width: '80%',
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70

    },
    buttontext: {
        fontSize: 20,
        color: '#000000'
    }

})
