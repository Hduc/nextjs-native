import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Register() {

    const navigation = useNavigation() as any ;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isFocused, setIsFocused] = useState<boolean | string>(false)
    const [isSelected, setIsSelected] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity
                            style={[style.icon2]}>
                            <Icon name='help' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Let’s get started 👇</Text>

                        <View style={[style.inputContainer, { borderColor: isFocused === 'Full name' ? Colors.active : Colors.input, marginTop: 50, borderWidth: 1, paddingBottom: 3 }]}>
                            <TextInput placeholder='Full name'
                                onFocus={() => setIsFocused('Full name')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                        </View>

                        <View style={[style.inputContainer, { borderColor: isFocused === 'Email' ? Colors.active : Colors.input, marginTop: 20, borderWidth: 1, paddingBottom: 3 }]}>
                            <TextInput placeholder='Email'
                                onFocus={() => setIsFocused('Email')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                        </View>

                        <View style={[style.txtinput, { borderColor: isFocused === 'Password' ? Colors.active : Colors.input, marginTop: 20, borderWidth: 1, paddingBottom: 3 }]}>
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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={() => setIsSelected(!isSelected)}
                                tintColors={{ true: Colors.primary, false: Colors.primary }}
                                boxType={'square'}
                                onTintColor={Colors.primary}
                                onCheckColor={Colors.secondary}
                                onFillColor={Colors.primary}
                            />
                            <Text style={[style.m12, { color: Colors.active, marginLeft: 5 }]}>I agree<Text style={{ color: Colors.primary, textDecorationLine: 'underline' }}>Privacy Policy</Text>and<Text style={{ color: Colors.primary, textDecorationLine: 'underline' }}>User Agreement</Text></Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                            style={{ flex: 1, marginTop: 30 }}>
                            <View style={[style.btn, { backgroundColor: Colors.active }]}>
                                <Text style={[style.btntxt]}>Register</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[style.m14, { color: Colors.disable, textAlign: 'center', marginTop: 20 }]}>Or register with</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/a1.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <Image source={require('../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginHorizontal: 12 }}></Image>
                            <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                        </View>

                        <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                            <Text style={[style.m14, { color: Colors.active }]}>Don’t have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[style.m14, { color: Colors.primary }]}>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}