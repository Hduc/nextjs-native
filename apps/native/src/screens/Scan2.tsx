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

export default function Scan2() {
    const navigation = useNavigation() as any;
  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.active }]}>
    <StatusBar translucent={true} backgroundColor='transparent' />
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ImageBackground source={require('../../assets/image/s43.png')} resizeMode='stretch' style={{ flex: 1, marginTop: -10 }}>
            <AppBar
                elevation={0}
                centerTitle={true}
                title='Scan QR'
                titleStyle={[style.b14, { color: Colors.secondary }]}
                style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 50, }}
                leading={<TouchableOpacity style={[style.icon, { backgroundColor: '#F0F0F090', borderWidth: 0 }]}
                    onPress={() => navigation.navigate('Scan1')}>
                    <Icon name='chevron-back' size={20} color={Colors.active} />
                </TouchableOpacity>}
                trailing={<View style={[style.icon2, { backgroundColor: Colors.purple }]} >
                    <Image source={require('../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                </View>}
            />
            <View style={{ marginTop: 30, marginHorizontal: 20, padding: 15, borderRadius: 24, backgroundColor: '#00000050' }}>
                <Text style={[style.m12, { color: Colors.secondary, textAlign: 'center' }]}>You can use scan QR to accept a home invitation and to add smart devices</Text>
            </View>
            <View  style={{ flex: 1, }}></View>
            <View style={{ margin: 20,padding:15, backgroundColor: Colors.secondary, borderRadius: 24, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../assets/image/s44.png')} resizeMode='stretch' style={{ height: 80, width:80 }} />
                <View style={{ marginLeft:10}}>
                    <Text style={[style.b12, { color: Colors.active }]}>Google Home</Text>
                    <Text style={[style.m12, { color: Colors.disable }]}>Smart home automation</Text>
                    </View>
            </View>
        </ImageBackground>
    </KeyboardAvoidingView>
</SafeAreaView>
  )
}