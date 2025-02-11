import { Platform,View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch,Modal } from 'react-native'
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

export default function MHome() {

    const navigation = useNavigation() as any;
    const [visible1, setVisible1] = useState(false)

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
                        trailing={<TouchableOpacity onPress={() => setVisible1(true)}
                            style={[style.icon2]}>
                            <Icon name='add-sharp' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 20 }]}>Manage home</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>2</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Home list</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Select</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('HomeD')}
                        style={{ marginTop: 20 }}>
                            <ImageBackground source={require('../../assets/image/a35.png')} resizeMode='stretch' style={{ height: height / 4.4, width: width - 40 }}>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 15 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                                            <View>
                                                <Text style={[style.b12, { color: Colors.txt }]}>Tebet</Text>
                                                <Text style={[style.b12, { color: Colors.txt, marginTop: 5 }]}>6<Text style={[style.m12, { color: Colors.disable }]}> Rooms    </Text>3<Text style={[style.m12, { color: Colors.disable }]}> Member</Text></Text>
                                            </View>
                                            <Image source={require('../../assets/image/a37.png')} resizeMode='stretch' style={{ height: height / 28, width: width / 5.3 }}></Image>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('HomeD')}
                        style={{ marginTop: 20 }}>
                            <ImageBackground source={require('../../assets/image/a36.png')} resizeMode='stretch' style={{ height: height / 4.4, width: width - 40 }}>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 15 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                                            <View>
                                                <Text style={[style.b12, { color: Colors.txt }]}>Villa</Text>
                                                <Text style={[style.b12, { color: Colors.txt, marginTop: 5 }]}>4<Text style={[style.m12, { color: Colors.disable }]}> Rooms    </Text>1<Text style={[style.m12, { color: Colors.disable }]}> Member</Text></Text>
                                            </View>
                                            <Image source={require('../../assets/image/a38.png')} resizeMode='stretch' style={{ height: height / 28, width: width / 13 }}></Image>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true} visible={visible1}>
                <View style={{
                    // flex: 1,
                    backgroundColor: '#000000aa',
                    height: height
                }}>
                    <TouchableOpacity onPress={() => setVisible1(false)}
                        style={[style.icon2, { alignSelf: 'flex-end', marginTop: 20, marginRight: 23 }]}>
                        <Icon name='close' size={24} color={Colors.secondary} />
                    </TouchableOpacity>

                    <View style={[style.modalcontainer, { backgroundColor: 'transparent', width: width / 1.4, borderRadius: 40, marginTop: 20, alignSelf: 'flex-end', marginRight: 0 }]}>
                        <View style={{ marginHorizontal: 10, backgroundColor: Colors.secondary, padding: 15, borderRadius: 40 }}>

                            <View style={{ height: 60, borderRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Add Home</Text>
                                <Image source={require('../../assets/image/a39.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </View>

                            <View style={[style.divider, { backgroundColor: Colors.input, height: 1.5, marginTop: 10 }]}></View>

                            <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Scan device</Text>
                                <Image source={require('../../assets/image/a34.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </View>

                        </View>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    )
}