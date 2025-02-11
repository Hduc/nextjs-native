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

export default function ADLink() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>1/ <Text style={{ color: Colors.active }}>2</Text></Text>}
                        centerTitle={true}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Linking device 🔗 </Text>

                        <Text style={[style.m12, { color: Colors.disable ,textAlign:'center',marginTop:5}]}>Press and hold the reset button for 5s until the indicator blinks.</Text>
                        <Image source={require('../../assets/image/a68.png')} resizeMode='stretch' style={{ height: 180, width: 180, marginTop: 60 ,alignSelf:'center'}}></Image>

                        <Text style={[style.b16, { color: Colors.active ,textAlign:'center',marginTop:60}]}>Connecting..</Text>
                        <Text style={[style.title, { color: Colors.primary ,textAlign:'center'}]}>36%</Text>


                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('ADLocation')}
                    style={{ width:width/2,alignSelf:'center' ,marginBottom:25}}>
                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}