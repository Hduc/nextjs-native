import { Platform, View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
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

export default function SC2() {
    const navigation = useNavigation() as any;
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>2 <Text style={{ color: Colors.active }}>/ 2</Text></Text>}
                        leading={<TouchableOpacity style={[style.icon]} onPress={() => navigation.navigate('SC1')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity onPress={() => this.RBSheet.open()} style={[style.icon2]}  >
                            <RBSheet ref={ref => {
                                this.RBSheet = ref;
                            }}
                                height={400}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: Colors.secondary
                                    },
                                }}>
                                <View style={{ backgroundColor: Colors.secondary, paddingHorizontal: 20, paddingTop: 20 }}>
                                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>4</Text>
                                            </View>
                                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Tasks</Text>
                                        </View>

                                        <View style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={require('../../assets/image/s17.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Run devices</Text>
                                            <Icon name='add' size={20} color={Colors.disable} />
                                        </View>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={require('../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Run automations</Text>
                                            <Icon name='add' size={20} color={Colors.disable} />
                                        </View>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name='notifications' size={20} color={Colors.orange} />
                                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Send notification</Text>
                                            <Icon name='add' size={20} color={Colors.disable} />
                                        </View>
                                        <View style={{ marginBottom: 20, paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={require('../../assets/image/s19.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Delay the action</Text>
                                            <Icon name='add' size={20} color={Colors.disable} />
                                        </View>

                                    </ScrollView>
                                </View>
                            </RBSheet>
                            <Icon name='ellipsis-horizontal' size={20} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, marginTop: 20, textAlign: 'center' }]}>Go to Office </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>2</Text>
                                </View>
                                <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>If</Text>
                            </View>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Add condition</Text>
                        </View>

                        <View style={{ paddingHorizontal: 15, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icons name='clock-time-three' size={20} color={Colors.purple} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>Schedule 09:30AM</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 3 }]}>Mon, Thu</Text>
                                </View>
                                <Icon name='close-circle' size={20} color={Colors.primary} />
                            </View>
                            <View style={[style.divider, { backgroundColor: Colors.ibor, marginVertical: 25 }]}></View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='location' size={20} color={Colors.orange} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>Leave from</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 3 }]}>Jl. Candra, Jakarta Timur</Text>
                                </View>
                                <Icon name='close-circle' size={20} color={Colors.primary} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>1</Text>
                                </View>
                                <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Then</Text>
                            </View>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Add task</Text>
                        </View>

                        <View style={{ paddingHorizontal: 15, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s5.png')} resizeMode='stretch' style={{ height: 20, width: 20, tintColor: '#00C5C5' }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Close smart lock</Text>
                                <Text style={[style.b12, { color: Colors.disable, marginTop: 3 }]}>Front gate</Text>
                            </View>
                            <Icon name='close-circle' size={20} color={Colors.primary} />
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('SC1')}
                        style={[style.btn, { backgroundColor: Colors.active, marginVertical: 20 }]}>
                        <Text style={[style.btntxt]}>Save</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}