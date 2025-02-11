import { Platform, View, Text, FlatList, SafeAreaView, Dimensions, Switch, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function RoomE() {
    const navigation = useNavigation() as any;
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ImageBackground source={require('../../assets/image/s22.png')} resizeMode='stretch' style={{ flex: 1, marginTop: -10 }}>
                    <View style={{ flex: 1 }}>
                        <AppBar
                            elevation={0}
                            style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 50, }}
                            leading={<TouchableOpacity style={[style.icon, { backgroundColor: '#F0F0F090', borderWidth: 0 }]}
                                onPress={() => navigation.navigate('RoomD')}>
                                <Icon name='chevron-back' size={20} color={Colors.active} />
                            </TouchableOpacity>}
                            trailing={<View style={[style.icon2]} >
                                <Image source={require('../../assets/image/s2.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            </View>}
                        />
                        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 5 }}>
                            <View style={[style.icon2, {}]} >
                                <Image source={require('../../assets/image/s23.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#F0F0F0', marginTop: -100, }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, marginHorizontal: 20 }}>
                            <Text style={[style.title, { color: Colors.active, textAlign: 'center', }]}>Kitchen</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>0</Text>
                                    </View>
                                    <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Devices</Text>
                                </View>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Add devices</Text>
                            </View>

                            <Image source={require('../../assets/image/s27.png')} resizeMode='stretch' style={{ marginTop: 40, alignSelf: 'center', height: 90, width: 90 }} />

                            <Text style={[style.title, { color: Colors.active ,textAlign:'center',}]}>No devices</Text>
                            <Text style={[style.m12, { color: Colors.disable ,textAlign:'center',marginTop:5,marginHorizontal:20,marginBottom:20}]}>You haven't added a device. You need to add device first by clicking “Add device”</Text>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}