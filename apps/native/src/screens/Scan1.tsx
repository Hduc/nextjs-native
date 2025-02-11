import { Platform, View, Text, FlatList, SafeAreaView, Dimensions, Switch, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Scan1() {
    const navigation = useNavigation() as any;
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.active }]}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ImageBackground source={require('../../assets/image/s40.png')} resizeMode='stretch' style={{ flex: 1, marginTop: -10 }}>
                    <AppBar
                        elevation={0}
                        centerTitle={true}
                        title='Scan QR'
                        titleStyle={[style.b14, { color: Colors.secondary }]}
                        style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 50, }}
                        leading={<TouchableOpacity style={[style.icon, { backgroundColor: '#F0F0F090', borderWidth: 0 }]}
                            onPress={() => navigation.navigate('Scan')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<View style={[style.icon2, { backgroundColor: Colors.purple }]} >
                            <Image source={require('../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                        </View>}
                    />
                    <View style={{ marginTop: 30, marginHorizontal: 20, padding: 15, borderRadius: 24, backgroundColor: '#00000050' }}>
                        <Text style={[style.m12, { color: Colors.secondary, textAlign: 'center' }]}>You can use scan QR to accept a home invitation and to add smart devices</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Scan2')}
                        style={{ flex: 1, }}></TouchableOpacity>
                    <View style={{ margin: 20, backgroundColor: Colors.secondary, borderRadius: 24, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/image/s41.png')} resizeMode='stretch' style={{ height: height / 7, width: width / 3 }} />
                        <View style={{ padding: 10 }}>
                            <Text style={[style.b12, { color: Colors.active }]}>Tebet</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVeTop: 5,marginBottom:8 }}>
                                <Text style={[style.b12, { color: Colors.active }]}>6 <Text style={[style.m12, { color: Colors.disable }]}>rooms</Text></Text>
                                <Text style={[style.b12, { color: Colors.active, marginLeft: 10 }]}>3 <Text style={[style.m12, { color: Colors.disable }]}>member</Text></Text>
                            </View>
                            <Image source={require('../../assets/image/s42.png')} resizeMode='stretch' style={{ height: 30, width: 74 }} />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}