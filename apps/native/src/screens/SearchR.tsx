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

export default function SearchR() {

    const navigation = useNavigation() as any;
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [ison, setIson] = useState(true);
    const toggle = () => setIson(previousState => !previousState);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.input }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <AppBar
                    color={Colors.input}
                    elevation={0}
                    leading={<View></View>}
                    style={{ marginHorizontal: 15 ,marginTop:30}}
                    trailing={<TouchableOpacity onPress={() => navigation.navigate('ActiveD')}
                        style={[style.icon, { backgroundColor: Colors.active }]}>
                        <Icon name='close' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                />

                <View style={[style.txtinput, { marginTop: 15, paddingBottom: 3, backgroundColor: Colors.secondary, marginHorizontal: 20 }]}>
                    <TextInput placeholder='Lamp'
                        placeholderTextColor={Colors.disable}
                        selectionColor={Colors.primary}
                        style={[style.m14, { color: Colors.txt, flex: 1, }]}
                    />
                    <Icon name='search' size={20} color={Colors.active}></Icon>
                </View>

                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.input }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>1</Text>
                        </View>
                        <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Living Room</Text>
                        <TouchableOpacity>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Go to the room</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: Colors.secondary,  width: width / 2.5, borderRadius: 24, marginTop: 20, padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.b12, { color: Colors.primary }]}>On</Text>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={isEnabled ? Colors.secondary : Colors.secondary}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <Image source={require('../../assets/image/a27.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: 15 }}></Image>
                        <Text style={[style.b12, { color: Colors.active, textAlign: 'center', marginTop: 8 }]}>Smart Lamp</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>Warm</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                        <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>1</Text>
                        </View>
                        <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Bedroom</Text>
                        <TouchableOpacity>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Go to the room</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: Colors.secondary,  width: width / 2.5, borderRadius: 24, marginTop: 20, padding: 15 }}>
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
                        <Image source={require('../../assets/image/a27.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: 15 }}></Image>
                        <Text style={[style.b12, { color: Colors.active, textAlign: 'center', marginTop: 8 }]}>Smart Lamp</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>Warm</Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
