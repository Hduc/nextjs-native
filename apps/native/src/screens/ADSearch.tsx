import { Platform, View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import { Avatar } from 'react-native-paper';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ADSearch() {

    const navigation = useNavigation() as any;
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [ison, setIson] = useState(true);
    const toggle = () => setIson(previousState => !previousState);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.input }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <AppBar
                    color={Colors.input}
                    elevation={0}
                    leading={<View></View>}
                    style={{ marginHorizontal: 15 ,marginTop:30}}
                    trailing={<TouchableOpacity onPress={() => navigation.navigate('AddDevice')}
                        style={[style.icon, { backgroundColor: Colors.active }]}>
                        <Icon name='close' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={[style.txtinput, { marginTop: 15, paddingBottom: 3, backgroundColor: Colors.secondary, marginHorizontal: 20 }]}>
                    <TextInput placeholder='Bulb'
                        placeholderTextColor={Colors.disable}
                        selectionColor={Colors.primary}
                        style={[style.m14, { color: Colors.txt, flex: 1, }]}
                    />
                    <Icon name='search' size={20} color={Colors.active}></Icon>
                </View>

                <View style={[style.main, { marginTop: 20, backgroundColor: Colors.input }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 22 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>1</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Category</Text>
                        </View>

                        <View style={{ width: width / 2.4, backgroundColor: Colors.secondary, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28, marginTop: 20 }}>
                            <Image source={require('../../assets/image/a54.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Light bulb</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 22 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>3</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Devices</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, backgroundColor: Colors.secondary, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a57.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Yeelight 1S smart bulb</Text>
                            </View>
                            <View style={{ margin: 7 }}></View>
                            <View style={{ flex: 1, backgroundColor: Colors.secondary, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a58.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Philips A60 wifi smart bulb</Text>
                            </View>
                        </View>

                        <View style={{ width:width/2.3, backgroundColor: Colors.secondary, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, marginTop:14}}>
                            <Image source={require('../../assets/image/a59.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3.2 }}></Image>
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Yeelight 1S smart bulb</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}