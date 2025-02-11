import { Platform, View, Text, FlatList, SafeAreaView, Modal, Switch, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function AutoLog() {
    const navigation = useNavigation() as any;
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity style={[style.icon]} onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity onPress={() => setVisible(true)} style={[style.icon2]}  >
                            <Modal transparent={true} visible={visible}>
                                <View style={{
                                    // flex: 1,
                                    backgroundColor: '#000000aa',
                                    height: height
                                }}>
                                    <TouchableOpacity onPress={() => setVisible(false)} activeOpacity={10}
                                        style={[style.modalcontainer, { backgroundColor: 'transparent', width: width - 20, justifyContent: 'center' }]}>
                                        <View style={{ paddingVertical: 10, backgroundColor: Colors.secondary, borderRadius: 10, }}>
                                            <Image source={require('../../assets/image/s21.png')} style={{ height: height / 2, width: width - 40, resizeMode: 'stretch', alignSelf: 'center' }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </Modal>
                            <Icons name='calendar-blank' size={20} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, marginTop: 10, textAlign: 'center' }]}>Automation logs</Text>

                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <View style={{ paddingHorizontal: 20, paddingVertical: 25, borderRadius: 20, backgroundColor: Colors.input, alignItems: 'center' }}>
                                    <Text style={[style.b16, { color: Colors.active }]}>20</Text>
                                    <Text style={[style.m12, { color: Colors.disable, }]}>Sun</Text>
                                </View>
                                <View style={{ marginHorizontal: 10, paddingHorizontal: 20, paddingVertical: 25, borderRadius: 20, backgroundColor: '#00C5C5', alignItems: 'center' }}>
                                    <Text style={[style.b16, { color: Colors.secondary }]}>21</Text>
                                    <Text style={[style.m12, { color: Colors.secondary, }]}>Mon</Text>
                                </View>
                                <View style={{ paddingHorizontal: 20, paddingVertical: 25, borderRadius: 20, backgroundColor: Colors.input, alignItems: 'center' }}>
                                    <Text style={[style.b16, { color: Colors.active }]}>22</Text>
                                    <Text style={[style.m12, { color: Colors.disable, }]}>Tue</Text>
                                </View>
                                <View style={{ marginHorizontal: 10, paddingHorizontal: 20, paddingVertical: 25, borderRadius: 20, backgroundColor: Colors.input, alignItems: 'center' }}>
                                    <Text style={[style.b16, { color: Colors.active }]}>23</Text>
                                    <Text style={[style.m12, { color: Colors.disable, }]}>Wed</Text>
                                </View>
                                <View style={{ paddingHorizontal: 20, paddingVertical: 25, borderRadius: 20, backgroundColor: Colors.input, alignItems: 'center' }}>
                                    <Text style={[style.b16, { color: Colors.active }]}>24</Text>
                                    <Text style={[style.m12, { color: Colors.disable, }]}>Thu</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>3</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Logs</Text>
                        </View>

                        <View style={{ width: 2, height: 50, backgroundColor: Colors.input, marginLeft: 14 }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -40, marginLeft: 11 }}>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.primary }}></View>
                            <Text style={[style.m12, { color: Colors.active, marginHorizontal: 15 }]}>12:54</Text>
                            <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 24, backgroundColor: Colors.input, borderRadius: 24, flexDirection: 'row', }}>
                                <Image source={require('../../assets/image/s20.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>CCTV Security</Text>
                                    <Text style={[style.m10, { color: Colors.disable, }]}>Someone detected</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: 2, height: 100, backgroundColor: Colors.input, marginLeft: 14, marginTop: -37 }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -40, marginLeft: 11 }}>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.primary }}></View>
                            <Text style={[style.m12, { color: Colors.active, marginHorizontal: 15 }]}>12:54</Text>
                            <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 24, backgroundColor: Colors.input, borderRadius: 24, flexDirection: 'row', }}>
                                <Icon name='notifications' size={20} color={Colors.orange} />
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>Notification</Text>
                                    <Text style={[style.m10, { color: Colors.disable, }]}>Your package has arrived</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: 2, height: 100, backgroundColor: Colors.input, marginLeft: 14, marginTop: -37 }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -40, marginLeft: 11 }}>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.primary }}></View>
                            <Text style={[style.m12, { color: Colors.active, marginHorizontal: 15 }]}>12:54</Text>
                            <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 24, backgroundColor: Colors.input, borderRadius: 24, flexDirection: 'row', }}>
                                <Image source={require('../../assets/image/s5.png')} resizeMode='stretch' style={{ tintColor: '#00C5C5', height: 20, width: 20 }} />
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>Go to Office</Text>
                                    <Text style={[style.m10, { color: Colors.disable, }]}>Front gate opened</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: 2, height: 100, backgroundColor: Colors.input, marginLeft: 14, marginTop: -37 }}></View>
                        <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', marginTop: -40, marginLeft: 11 }}>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.primary }}></View>
                            <Text style={[style.m12, { color: Colors.active, marginHorizontal: 15 }]}>12:54</Text>
                            <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 24, backgroundColor: Colors.input, borderRadius: 24, flexDirection: 'row', }}>
                                <Image source={require('../../assets/image/s20.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>CCTV Security</Text>
                                    <Text style={[style.m10, { color: Colors.disable, }]}>Someone detected</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}