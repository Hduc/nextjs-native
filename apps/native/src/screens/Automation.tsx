import { View, Text, SafeAreaView, Switch, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, Platform } from 'react-native'
import React, { useState, } from 'react'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Automation() {
    const navigation = useNavigation() as any;

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [ison, setIsOn] = useState(false);
    const toggle = () => setIsOn(previousState => !previousState);
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
                        trailing={<TouchableOpacity onPress={() => navigation.navigate('Condition')} style={[style.icon2]} >
                            <Icon name='add' size={20} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 20 }]}>Automation</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>Automate run task with some conditions.</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: Colors.primary, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 20, width: 20, tintColor: Colors.secondary }} />
                                    <Text style={[style.b12, { color: Colors.secondary, marginTop: 15 }]}>Active</Text>
                                </View>
                                <Text style={[style.title, { color: Colors.secondary }]}>7</Text>
                            </View>
                            <View style={{ marginHorizontal: 8 }}></View>
                            <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: '#00C5C5', flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require('../../assets/image/s15.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                    <Text style={[style.b12, { color: Colors.secondary, marginTop: 15 }]}>Logs</Text>
                                </View>
                                <Text style={[style.title, { color: Colors.secondary }]}>81</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>12</Text>
                                </View>
                                <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Automations</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('AutoLog')}>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Manage</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <View style={{ width: width / 2.5, padding: 15, backgroundColor: '#5B17EA10', borderRadius: 24 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Image source={require('../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                        <Icon name='ellipsis-horizontal' size={20} color={Colors.disable} />
                                    </View>
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 30 }]}>Morning Routine</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 5 }]}>1 task</Text>
                                </View>
                                <View style={{ marginHorizontal: 10, width: width / 2.5, padding: 15, backgroundColor: '#EA176310', borderRadius: 24 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Image source={require('../../assets/image/s19.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                        <Icon name='ellipsis-horizontal' size={20} color={Colors.disable} />
                                    </View>
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 30 }]}>Coffe Break</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 5 }]}>1 task</Text>
                                </View>
                                <View style={{ width: width / 2.5, padding: 15, backgroundColor: '#EA891710', borderRadius: 24 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Icon name='notifications' size={20} color={Colors.orange} />
                                        <Icon name='ellipsis-horizontal' size={20} color={Colors.disable} />
                                    </View>
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 30 }]}>Security</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 5 }]}>1 task</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ paddingHorizontal: 15, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 20, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name='location' size={20} color={Colors.orange} />
                                    <Icons name='clock-time-three' size={20} color={Colors.purple} style={{ marginHorizontal: 7 }} />
                                    <Icon name='arrow-forward' size={20} color={Colors.disable} />
                                    <Image source={require('../../assets/image/s5.png')} resizeMode='stretch' style={{ marginLeft: 7, height: 20, width: 20, tintColor: '#00C5C5' }} />
                                </View>
                                <Switch
                                    trackColor={{ false: Colors.disable, true: Colors.primary }}
                                    thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>Go to Office</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 3 }]}>1 task</Text>
                                </View>
                                <Icon name='chevron-forward' size={20} color={Colors.disable} />
                            </View>
                        </View>

                        <View style={{ marginBottom: 80, paddingHorizontal: 15, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name='cloud' size={20} color={Colors.primary} />
                                    <Icon name='arrow-forward' size={20} color={Colors.disable} style={{ marginHorizontal: 7 }} />
                                    <Image source={require('../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                    <Image source={require('../../assets/image/s19.png')} resizeMode='stretch' style={{ marginHorizontal: 7, height: 20, width: 20 }} />
                                    <Icon name='notifications' size={20} color={Colors.orange} />
                                </View>
                                <Switch
                                    trackColor={{ false: Colors.disable, true: Colors.primary }}
                                    thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggle}
                                    value={ison}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.b12, { color: Colors.active, }]}>Go to Office</Text>
                                    <Text style={[style.b12, { color: Colors.disable, marginTop: 3 }]}>1 task</Text>
                                </View>
                                <Icon name='chevron-forward' size={20} color={Colors.disable} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}