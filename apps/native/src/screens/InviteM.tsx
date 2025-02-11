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

export default function InviteM() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: 'transparent' }]}>
                    <AppBar
                        color={Colors.secondary}
                        elevation={0}
                        centerTitle={true}
                        title='Invite member'
                        titleStyle={[style.b14, { color: Colors.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('HomeD')}
                            style={[style.icon, {}]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>QR code</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Refresh code</Text>
                            </TouchableOpacity>
                        </View>

                        <Image source={require('../../assets/image/a48.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 2.2, alignSelf: 'center', marginTop: 30 }}></Image>

                        <Text style={[style.m12, { color: '#808080', textAlign: 'center', marginTop: 20, marginHorizontal: 20 }]}>Near the person you’d like to add? have them scan this code or use email invite.</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, }}>
                            <Text style={[style.m12, { color: '#808080', textAlign: 'center', marginHorizontal: 20, }]}>On their phone open Huis, then going to </Text>
                            <Image source={require('../../assets/image/a49.png')} resizeMode='stretch' style={{ height: 20, width: 20, marginLeft: -20 }}></Image>
                        </View>
                        <Text style={[style.m12, { color: '#808080', textAlign: 'center', marginHorizontal: 20, }]}>Manage home  +  Scan QR invitation.</Text>

                        <Text style={[style.b16, { color: Colors.active, marginLeft: 10, marginTop:25}]}>Email invite</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={[style.txtinput, { paddingBottom: 3, flex: 1, backgroundColor: Colors.input }]}>
                                <TextInput placeholder='Email address'
                                    placeholderTextColor={Colors.disable}
                                    selectionColor={Colors.primary}
                                    style={[style.m14, { color: Colors.txt, flex: 1, }]}
                                />
                            </View>
                            <View style={{ margin: 7 }}></View>
                            <TouchableOpacity style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 24, backgroundColor: Colors.primary }}>
                                <Image source={require('../../assets/image/a50.png')} resizeMode='stretch' style={{ height: 20, width: 20, }}></Image>
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.m12, { color: '#808080', textAlign: 'center', marginVertical: 20, marginHorizontal: 20 }]}>After the person you invite accepts the invitation, they’ll appear in the member list.</Text>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}