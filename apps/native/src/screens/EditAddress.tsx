import { Platform, View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import { Avatar } from 'react-native-paper';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function EditAddress() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: '#F0F0F0' }]}>
            <ImageBackground source={require('../../assets/image/a47.png')}  style={{flex:1}}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={[style.main, { marginTop: 30, backgroundColor: 'transparent' }]}>
                        <AppBar
                            color={'#F0F0F0'}
                            elevation={0}
                            centerTitle={true}
                            title='Edit address'
                            titleStyle={[style.b14,{color:Colors.txt}]}
                            leading={<TouchableOpacity onPress={() => navigation.navigate('HomeD')}
                                style={[style.icon,{backgroundColor:Colors.secondary,borderColor:Colors.secondary}]}>
                                <Icon name='chevron-back' size={24} color={Colors.active} />
                            </TouchableOpacity>}
                        />

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 45 }}>
                            <View style={[style.txtinput, { paddingBottom: 3, flex: 1,backgroundColor:Colors.secondary }]}>
                                <TextInput placeholder='Jl. Candra, Jakarta Timur'
                                    placeholderTextColor={Colors.disable}
                                    selectionColor={Colors.primary}
                                    style={[style.m14, { color: Colors.txt, flex: 1, }]}
                                />
                                <Icon name='search' size={20} color={Colors.active}></Icon>
                            </View>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 24, backgroundColor: Colors.primary }}>
                                <Image source={require('../../assets/image/a14.png')} resizeMode='stretch' style={{ height: 20, width: 20, }}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeD')}
                    style={{ alignSelf: 'center', position: 'absolute', bottom: 30, }}>
                        <View style={[style.btn, { backgroundColor: Colors.active,width:width-40}]}>
                            <Text style={[style.btntxt]}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </ImageBackground>
        </SafeAreaView>
    )
}