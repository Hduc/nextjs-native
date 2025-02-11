import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView,Platform } from 'react-native'
import React, { useState } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Login1() {

    const navigation = useNavigation() as any;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isFocused, setIsFocused] = useState<boolean| string>(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Introduction')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity 
                            style={[style.icon2]}>
                            <Icon name='help' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center' ,marginTop:40}]}>Welcome back George👋</Text>

                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{height:100,width:100,alignSelf:'center',marginTop:40}}></Image>
                        <Text style={[style.m12,{color:Colors.disable,textAlign:'center',marginTop:10}]}>george123@email.com</Text>

                        <View style={[style.txtinput, { borderColor: isFocused === 'Password' ? Colors.active : Colors.input, marginTop: 40,borderWidth:1 ,paddingBottom:3}]}>
                            <TextInput placeholder='Password'
                                onFocus={() => setIsFocused('Password')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.m12,{color:Colors.primary,textDecorationLine:'underline',textAlign:'right',marginTop:10}]}>Change account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[style.m12,{color:Colors.primary,textDecorationLine:'underline',textAlign:'right',marginTop:10}]}>Recovery password</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',marginTop:70}}>
                        <TouchableOpacity style={{flex:1 }} onPress={() => navigation.navigate('MyTabs')}>
                            <View style={[style.btn, {backgroundColor:Colors.active}]}>
                                <Text style={[style.btntxt]}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{margin:5}}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('LFinger')}
                        style={{height:60,width:60,alignItems:'center',justifyContent:'center',borderRadius:24,backgroundColor:Colors.primary}}>
                            <Image source={require('../../assets/image/finger.png')} resizeMode='stretch' style={{height:30,width:24,marginBottom:-6}}></Image>
                        </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}>
                            <Text style={[style.m14,{color:Colors.active}]}>Don’t have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={[style.m14,{color:Colors.primary}]}>Register</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}