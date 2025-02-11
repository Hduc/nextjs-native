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

export default function RSuccess() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Otp')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: height/2.8 , width: width/1.4, marginTop: 40,alignSelf:'center' }}></Image>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Hurray your account is now registered 🎉 </Text>

                        <Text style={[style.m12, { color: Colors.disable, marginTop: 5 ,textAlign:'center'}]}>Congratulation, you are now registered. Do you want to set up your home first?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Country')}
                        style={{ flex: 1,marginTop:40 }}>
                            <View style={[style.btn, {}]}>
                                <Text style={[style.btntxt]}>Continue setup home</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <Text style={[style.m14, { color: Colors.active }]}>No, I want to </Text>
                            <TouchableOpacity>
                                <Text style={[style.m14, { color: Colors.primary ,textDecorationLine:'underline'}]}>Start exploring</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}