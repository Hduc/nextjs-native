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

export default function ActiveD() {

    const navigation = useNavigation() as any;
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [ison, setIson] = useState(true);
    const toggle = () => setIson(previousState => !previousState);
    const [ison1, setIson1] = useState(true);
    const toggle1 = () => setIson1(previousState => !previousState);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity onPress={() => navigation.navigate('SearchR')}
                            style={[style.icon2]}>
                            <Icon name='search' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 10 }]}>Active devices</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>1</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Security camera</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View>
                                    <ImageBackground source={require('../../assets/image/a30.png')} resizeMode='stretch' style={{ height: height / 5.2, width: width / 1.5 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Text style={[style.b12, { color: Colors.txt, textAlign: 'center' }]}>Living Room</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View>
                                    <ImageBackground source={require('../../assets/image/a31.png')} resizeMode='stretch' style={{ height: height / 5.2, width: width / 1.5, marginLeft: 12 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Text style={[style.b12, { color: Colors.txt, textAlign: 'center' }]}>BedRoom</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>1</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Office</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Go to the room</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: Colors.input,  width: width / 2.5, borderRadius: 24, marginTop: 20, padding: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={[style.b12, { color: Colors.primary }]}>On</Text>
                                <Switch
                                    trackColor={{ false: Colors.disable1, true: Colors.primary }}
                                    thumbColor={isEnabled ? Colors.secondary : Colors.secondary}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <Image source={require('../../assets/image/a29.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: 15 }}></Image>
                            <Text style={[style.b12, { color: Colors.active, textAlign: 'center', marginTop: 8 }]}>Router</Text>
                            <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>2 Connected</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>1</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Living Room</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Go to the room</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom:20}}>
                            <View style={{ backgroundColor: Colors.input, width: width / 2.5, borderRadius: 24, marginTop: 20, padding: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={[style.b12, { color: Colors.primary }]}>On</Text>
                                    <Switch
                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                        thumbColor={ison1 ? Colors.secondary : Colors.secondary}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggle1}
                                        value={ison1}
                                    />
                                </View>
                                <Image source={require('../../assets/image/a27.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: 15 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, textAlign: 'center', marginTop: 8 }]}>Smart Lamp</Text>
                                <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>Warm</Text>
                            </View>

                            <View style={{ backgroundColor: Colors.input,  width: width / 2.5, borderRadius: 24, marginTop: 20, padding: 15, marginLeft: 12 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={[style.b12, { color: Colors.primary }]}>On</Text>
                                    <Switch
                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                        thumbColor={ison ? Colors.secondary : Colors.secondary}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggle}
                                        value={ison}
                                    />
                                </View>
                                <Image source={require('../../assets/image/a28.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: 15 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, textAlign: 'center', marginTop: 8 }]}>CCTV</Text>
                                <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>standby</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}