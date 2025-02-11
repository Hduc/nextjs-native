import { Platform, View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch, Modal } from 'react-native'
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

export default function AddDevice() {

    const navigation = useNavigation() as any;
    const [visible1, setVisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity 
                                style={[style.icon2]}>
                                <Image source={require('../../assets/image/a34.png')} resizeMode='stretch' style={{ height: 22, width: 22, tintColor: Colors.secondary }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('ADSearch')}
                                style={[style.icon2, { marginLeft: 10 }]}>
                                <Icon name='search' size={24} color={Colors.secondary} />
                            </TouchableOpacity>
                        </View>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 20 }]}>Add device</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>Auto scanning nearby devices</Text>

                        <Image source={require('../../assets/image/a51.png')} resizeMode='stretch' style={{ width: width / 1.5, height: height / 3.1, alignSelf: 'center', marginTop: 20 }}></Image>

                        <Text style={[style.b16, { color: Colors.txt }]}>Add a device manually</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>4</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Lighting</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a27.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Smart lamp</Text>
                            </View>
                            <View style={{ margin: 7 }}></View>
                            <View style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a52.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Smart lamp</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a53.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Smart lamp</Text>
                            </View>
                            <View style={{ margin: 7 }}></View>
                            <View style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a54.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Smart lamp</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 22 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>7</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Security</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ADSecurity')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a55.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Video camera</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ADSecurity')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a56.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>Smart lock</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 ,marginBottom:20}}>
                            <TouchableOpacity onPress={() => navigation.navigate('ADSecurity')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a28.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>CCTV</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('ADSecurity')}
                            style={{ flex: 1, backgroundColor: Colors.input, borderRadius: 24, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 28 }}>
                                <Image source={require('../../assets/image/a28.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>CCTV</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}