import { View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
    const navigation = useNavigation() as any;
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                        <TouchableOpacity onPress={() => setVisible(true)} style={{ height: 60, width: width / 2.8, backgroundColor: Colors.input, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 24 }}>
                            <Text style={[style.m12, { color: Colors.txt }]}>Tebet</Text>
                            <Icon name='caret-down' size={20} color={Colors.active} style={{ marginTop: 4, marginLeft: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisible1(true)}
                            style={[style.icon2]}>
                            <Icon name='add-sharp' size={24} color={Colors.secondary} />
                        </TouchableOpacity>
                    </View>

                    <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 30 }]}>Hello George 👋</Text>
                    <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>Welcome to your home. </Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 40 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ backgroundColor: Colors.purple, flex: 1, borderRadius: 24, paddingVertical: 20, alignItems: 'center' }}>
                                <Icon name='cloud' size={20} color={Colors.secondary}></Icon>
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>27</Text>
                                <Text style={[style.m12, { color: Colors.secondary, marginBottom: 15 }]}>°C</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Jakarta</Text>
                            </View>
                            <View style={{ backgroundColor: Colors.primary, flex: 1, marginHorizontal: 12, borderRadius: 24, paddingVertical: 20, alignItems: 'center' }}>
                                <Icon name='cloud' size={20} color={Colors.secondary}></Icon>
                                <Text style={[style.title, { color: Colors.secondary, marginVertical: 15 }]}>13</Text>
                                <Text style={[style.b12, { color: Colors.secondary, }]}>Active</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Devices</Text>
                            </View>
                            <View style={{ backgroundColor: Colors.orange, flex: 1, borderRadius: 24, paddingVertical: 20, alignItems: 'center' }}>
                                <Image source={require('../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>312</Text>
                                <Text style={[style.m12, { color: Colors.secondary, marginBottom: 15 }]}>kwh</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Usage</Text>
                            </View>
                             <View style={{ backgroundColor: Colors.orange,flex: 1, marginHorizontal: 12, borderRadius: 24, paddingVertical: 20, alignItems: 'center' }}>
                                <Image source={require('../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 20, width: 20 }}></Image>
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>312</Text>
                                <Text style={[style.m12, { color: Colors.secondary, marginBottom: 15 }]}>kwh</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Usage</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>6</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Rooms</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('MHome')}>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20, marginBottom: 80 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={{}}>
                                    <ImageBackground source={require('../../assets/image/a20.png')} resizeMode='stretch' style={{ height: height / 3.1, width: width / 2.5 }}>
                                        <View style={{ backgroundColor: Colors.primary, height: height / 13, width: width / 12, borderTopLeftRadius: 24, borderBottomRightRadius: 24, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../../assets/image/a23.png')} resizeMode='stretch' style={{ height: 16, width: 16 }}></Image>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                                <Text style={[style.b12, { color: Colors.txt, marginTop: 5, textAlign: 'center' }]}>Office</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                                    <Text style={[style.b12, { color: Colors.active }]}>5 <Text style={[style.m12, { color: Colors.disable }]}>Devices</Text></Text>
                                                    <Text style={[style.b12, { color: Colors.active }]}>1 <Text style={[{ color: Colors.primary }]}>On</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a21.png')} resizeMode='stretch' style={{ height: height / 3.1, width: width / 2.5 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a25.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                                <Text style={[style.b12, { color: Colors.txt, marginTop: 5, textAlign: 'center' }]}>Living Room</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                                    <Text style={[style.b12, { color: Colors.active }]}>8 <Text style={[style.m12, { color: Colors.disable }]}>Devices</Text></Text>
                                                    <Text style={[style.b12, { color: Colors.active }]}>2 <Text style={[{ color: Colors.primary }]}>On</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={{}}>
                                    <ImageBackground source={require('../../assets/image/a22.png')} resizeMode='stretch' style={{ height: height / 3.1, width: width / 2.5 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a26.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                                <Text style={[style.b12, { color: Colors.txt, marginTop: 5, textAlign: 'center' }]}>Bedroom</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                                                    <Text style={[style.b12, { color: Colors.active }]}>0 <Text style={[style.m12, { color: Colors.disable }]}>Devices</Text></Text>
                                                    <Text style={[style.b12, { color: Colors.active }]}>0 <Text style={[{ color: Colors.primary }]}>On</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </ScrollView>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true} visible={visible}>
                <View style={{
                    backgroundColor: '#000000aa',
                    height: height
                }}>
                    <TouchableOpacity onPress={() => setVisible(false)} activeOpacity={10}
                    style={{ height: 60, width: width / 2.8, backgroundColor: Colors.input, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 24, alignSelf: 'center', marginTop: 20, marginLeft: 5 }}>
                        <Text style={[style.m12, { color: Colors.txt }]}>Tebet</Text>
                        <Icon name='caret-up' size={20} color={Colors.active} style={{ marginTop: 4, marginLeft: 10 }} />
                    </TouchableOpacity>

                    <View style={[style.modalcontainer, { backgroundColor: 'transparent', width: width / 1.35, borderRadius: 40, marginTop: 30, }]}>
                        <View style={{ marginHorizontal: 10, backgroundColor: Colors.secondary, padding: 20, borderRadius: 40 }}>

                            <View style={{ height: 60, backgroundColor: '#00C5C520', borderRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Tebet</Text>
                                <Icon name='checkmark-circle' size={22} color={'#00C5C5'}></Icon>
                            </View>

                            <Text style={[style.m12, { color: Colors.active, marginHorizontal: 20, paddingVertical: 25 }]}>Villa</Text>

                            <View style={[style.divider, { backgroundColor: Colors.input, height: 1.5 }]}></View>

                            <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Manage home</Text>
                                <Image source={require('../../assets/image/a32.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </View>

                        </View>
                    </View>
                </View>

            </Modal>

            <Modal transparent={true} visible={visible1}>
                <View style={{
                    backgroundColor: '#000000aa',
                    height: height
                }}>
                    <TouchableOpacity onPress={() => setVisible1(false)}
                        style={[style.icon2,{alignSelf:'flex-end',marginTop:20,marginRight:20}]}>
                        <Icon name='close' size={24} color={Colors.secondary} />
                    </TouchableOpacity>

                    <View style={[style.modalcontainer, { backgroundColor: 'transparent', width: width / 1.4, borderRadius: 40, marginTop: 20, alignSelf:'flex-end',marginRight:0}]}>
                        <View style={{ marginHorizontal: 10, backgroundColor: Colors.secondary, padding: 15, borderRadius: 40 }}>

                            <TouchableOpacity onPress={() => {setVisible1(false),navigation.navigate('ActiveD')}}
                            style={{ height: 60, borderRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Active device</Text>
                                <Image source={require('../../assets/image/a33.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </TouchableOpacity>

                            <View style={[style.divider, { backgroundColor: Colors.input, height: 1.5, marginTop: 10 }]}></View>

                            <TouchableOpacity onPress={() =>{setVisible1(false),navigation.navigate('AddDevice')}}
                            style={{ height: 60, borderRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Add device</Text>
                                <Image source={require('../../assets/image/a33.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </TouchableOpacity>

                            <View style={[style.divider, { backgroundColor: Colors.input, height: 1.5, marginTop: 10 }]}></View>

                            <TouchableOpacity onPress={() => {setVisible1(false),navigation.navigate('Scan')}}
                            style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 5 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Scan device</Text>
                                <Image source={require('../../assets/image/a34.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </Modal>
        </SafeAreaView>
    )
}