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

export default function ADLocation() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>2/ <Text style={{ color: Colors.active }}>2</Text></Text>}
                        centerTitle={true}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 20 }]}>Device location📍 </Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>Select a home and a room for your device.</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>2</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Home</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View>
                                    <ImageBackground source={require('../../assets/image/a69.png')} resizeMode='stretch' style={{ height: height / 4.3, width: width / 1.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.primary, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 15, paddingHorizontal: 20 }}>
                                                <View>
                                                    <Text style={[style.b12, { color: Colors.secondary }]}>Tebet</Text>
                                                    <Text style={[style.b12, { color: Colors.secondary, marginTop: 5 }]}>6<Text style={[style.m12, { color: Colors.secondary }]}> Rooms    </Text>3<Text style={[style.m12, { color: Colors.secondary }]}> Member</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View>
                                    <ImageBackground source={require('../../assets/image/a70.png')} resizeMode='stretch' style={{ height: height / 4.3, width: width / 1.9, marginLeft: 12 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 15, paddingHorizontal: 20 }}>
                                                <View>
                                                    <Text style={[style.b12, { color: Colors.txt }]}>Villa</Text>
                                                    <Text style={[style.b12, { color: Colors.txt, marginTop: 5 }]}>6<Text style={[style.m12, { color: Colors.disable }]}> Rooms    </Text>3<Text style={[style.m12, { color: Colors.disable }]}> Member</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>6</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Room</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={() => navigation.navigate('RoomD')} style={{}}>
                                    <ImageBackground source={require('../../assets/image/a41.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9, }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('RoomD')}
                                style={{ marginLeft: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a42.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.primary, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a25.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5, tintColor: Colors.secondary }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('RoomD')} style={{ marginLeft: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a43.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a26.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('RoomD')} style={{ marginLeft: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a44.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>

                            </ScrollView>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('AddDevice')}
                    style={{ marginVertical:20}}>
                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}