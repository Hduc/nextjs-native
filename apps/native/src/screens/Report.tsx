import { Platform,View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
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

export default function Report() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<View style={{ height: 60, paddingHorizontal: 20, backgroundColor: Colors.input, flexDirection: 'row', alignItems: 'center', borderRadius: 24 }}>
                            <Text style={[style.m12, { color: Colors.active }]}>Tebet</Text>
                            <Icon name='caret-down' size={20} color={Colors.active} style={{ marginLeft: 20 }} />
                        </View>}
                        leading={<Avatar.Image source={require('../../assets/image/s4.png')} size={60} style={{ backgroundColor: Colors.secondary }} />}
                        trailing={<TouchableOpacity style={[style.icon2]}  onPress={() => setVisible(true)}>
                            <Modal transparent={true} visible={visible}>
                                <View style={{
                                    // flex: 1,
                                    backgroundColor: '#000000aa',
                                    height: height
                                }}>
                                    <TouchableOpacity onPress={() => setVisible(false)} activeOpacity={10}
                                    style={[style.modalcontainer, { backgroundColor: 'transparent', width: width - 20, justifyContent:'center'  }]}>
                                        <View style={{ paddingVertical:10,backgroundColor:Colors.secondary,borderRadius: 10,}}>
                                            <Image source={require('../../assets/image/s16.png')} style={{ height: height/2, width: width-40, resizeMode: 'stretch', alignSelf: 'center' }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </Modal>
                            <Icons name='calendar-blank' size={20} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 20 }]}>Electric usage</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>Power consumption and bill report</Text>
                        <Image source={require('../../assets/image/s14.png')} style={{ marginTop: 20, height: height / 3, width: width - 40, resizeMode: 'stretch' }} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: '#EA8917', flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Icons name='flash' size={20} color={Colors.secondary} />
                                    <Text style={[style.b12, { color: Colors.secondary, marginTop: 15 }]}>Today</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[style.title, { color: Colors.secondary }]}>312</Text>
                                    <Text style={[style.m12, { color: Colors.secondary }]}>kwh</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 8 }}></View>
                            <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: '#5B17EA', flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../../assets/image/s15.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                    <Text style={[style.b12, { color: Colors.secondary, marginTop: 15 }]}>Bill</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[style.title, { color: Colors.secondary }]}>$212</Text>
                                    <Text style={[style.m12, { color: Colors.secondary }]}>.20</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.b16, { color: Colors.active, flex: 1 }]}>Monthly expenses</Text>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>See all</Text>
                        </View>

                        <View style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='arrow-top-right' size={20} color={Colors.primary} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>May 2022</Text>
                                <Text style={[style.b12, { color: Colors.active, marginTop: 5 }]}>20%   <Text style={[style.m12, { color: Colors.disable }]}>more from last month</Text></Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, }]}>$476<Text style={[style.m10, { color: Colors.active }]}>.23</Text></Text>
                        </View>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='arrow-bottom-right' size={20} color={Colors.purple} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>May 2022</Text>
                                <Text style={[style.b12, { color: Colors.active, marginTop: 5 }]}>15%   <Text style={[style.m12, { color: Colors.disable }]}>less from last month</Text></Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, }]}>$380<Text style={[style.m10, { color: Colors.active }]}>.98</Text></Text>
                        </View>
                        <View style={{ marginBottom: 80, paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='arrow-bottom-right' size={20} color={Colors.purple} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>May 2022</Text>
                                <Text style={[style.b12, { color: Colors.active, marginTop: 5 }]}>15%   <Text style={[style.m12, { color: Colors.disable }]}>less from last month</Text></Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, }]}>$476<Text style={[style.m10, { color: Colors.active }]}>.23</Text></Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}