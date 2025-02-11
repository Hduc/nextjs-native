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

export default function Country() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>1/ <Text style={{ color: Colors.active }}>4</Text></Text>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('RSuccess')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Select your country👇</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>


                        <View style={[style.txtinput, { marginTop: 30, paddingBottom: 3 }]}>
                            <TextInput placeholder='Search country'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                            <Icon name='search' size={20} color={Colors.active}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, paddingHorizontal:15}}>
                            <Image source={require('../../assets/image/a7.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.active ,marginLeft:15}]}>Honduras</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 ,paddingHorizontal:15}}>
                            <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.active ,marginLeft:15}]}>Hungary</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 ,paddingHorizontal:15}}>
                            <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.active ,marginLeft:15}]}>Iceland</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 ,paddingHorizontal:15}}>
                            <Image source={require('../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.active ,marginLeft:15}]}>India</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 ,backgroundColor:Colors.primary,borderRadius:24,padding:15}}>
                            <Image source={require('../../assets/image/a11.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.secondary ,marginLeft:15,flex:1}]}>Indonesia</Text>
                            <Icon name='checkmark-circle-sharp' size={24} color={Colors.secondary}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 ,paddingHorizontal:15}}>
                            <Image source={require('../../assets/image/a12.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.active ,marginLeft:15}]}>Iran</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 ,paddingHorizontal:15,marginBottom:20}}>
                            <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: 30, width: 30 }}></Image>
                            <Text style={[style.b12, { color: Colors.active ,marginLeft:15}]}>Iraq</Text>
                        </View>



                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Name')}
                    style={{ width:width/2,alignSelf:'center',position:'absolute',bottom:30 }}>
                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}