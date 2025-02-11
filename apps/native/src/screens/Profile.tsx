import { Platform, View, Text, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profile() {
    const navigation = useNavigation() as any;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ImageBackground source={require('../../assets/image/s12.png')} resizeMode='stretch' style={{ flex: 1, marginTop: -10 }}>
                    <AppBar
                        elevation={0}
                        style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 50, flex: 1 }}
                        leading={<TouchableOpacity style={[style.icon, { backgroundColor: '#F0F0F090', borderWidth: 0 }]}
                            onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<View style={[style.icon2]} >
                            <Image source={require('../../assets/image/s13.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                        </View>}
                    />
                    <View style={{ flex: 1, backgroundColor: '#F0F0F0', marginTop: -40, }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, marginHorizontal: 20 }}>
                            <Text style={[style.title, { color: Colors.active, textAlign: 'center', }]}>George Martin</Text>

                            <View style={[style.txtinput, { backgroundColor: Colors.secondary, marginTop: 20 }]}>
                                <TextInput placeholder='george123@email.com'
                                    placeholderTextColor={Colors.active}
                                    style={[style.m12, { color: Colors.active, flex: 1 }]}
                                />
                            </View>
                            <View style={[style.txtinput, { backgroundColor: Colors.secondary, marginTop: 10 }]}>
                                <TextInput placeholder='••••••••••'
                                    placeholderTextColor={Colors.active}
                                    style={[style.m12, { color: Colors.active, flex: 1 }]}
                                    secureTextEntry={!isPasswordVisible}
                                />
                                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color={Colors.active} />
                                </TouchableOpacity>
                            </View>
                            <View style={[style.txtinput, { backgroundColor: Colors.secondary, marginTop: 10 }]}>
                                <TextInput placeholder='12/5/2000'
                                    placeholderTextColor={Colors.active}
                                    style={[style.m12, { color: Colors.active, flex: 1 }]}
                                />
                                <Icon name='caret-down' size={20} color={Colors.active} />
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                                style={[style.btn, { backgroundColor: Colors.active, marginVertical: 20 }]}>
                                <Text style={[style.btntxt]}>Save</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}