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

export default function Address() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: '#F0F0F0' }]}>
            <ImageBackground source={require('../../assets/image/a15.png')}  style={{flex:1}}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={[style.main, { marginTop: 30, backgroundColor: 'transparent' }]}>
                        <AppBar
                            color={'#F0F0F0'}
                            elevation={0}
                            centerTitle={true}
                            title={<Text style={[style.m14, { color: Colors.primary }]}>3/ <Text style={{ color: Colors.active }}>4</Text></Text>}
                            leading={<TouchableOpacity onPress={() => navigation.navigate('Name')}
                                style={[style.icon]}>
                                <Icon name='chevron-back' size={24} color={Colors.active} />
                            </TouchableOpacity>}
                        />

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Home address📍</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                            <View style={[style.txtinput, { paddingBottom: 3, flex: 1,backgroundColor:Colors.secondary }]}>
                                <TextInput placeholder='Search country'
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

                        {/* <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        </ScrollView> */}

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Room')}
                    style={{ width: width / 2, alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </ImageBackground>
        </SafeAreaView>
    )
}