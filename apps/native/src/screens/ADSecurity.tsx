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

export default function ADSecurity() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: 'transparent' }]}>
                    <AppBar
                        color={Colors.secondary}
                        elevation={0}
                        centerTitle={true}
                        title='Security'
                        titleStyle={[style.b14, { color: Colors.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('AddDevice')}
                            style={[style.icon, {}]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 22 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>8</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Video camera</Text>
                        </View>

                        <View style={{ flexDirection: 'row',  marginTop: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a60.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Mi home security camera</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a61.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Mi home security camera 360° 1080P</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row',  marginTop: 14 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a62.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Mi home security camera 360° 2K</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a63.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Mi home security camera 360° 2K pro</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row',  marginTop: 14 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a64.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>IMI home security camera</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a65.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>IMILAB security N series</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row',  marginTop: 14 ,marginBottom:20}}>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a66.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Arlo ultra 2 wireless security camera</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ADLink')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 20, }}>
                                <Image source={require('../../assets/image/a67.png')} resizeMode='stretch' style={{ height: height / 12, width: width / 3 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10, textAlign: 'center', marginTop: 5 }]}>Arlo pro 4 wireless security camera</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}