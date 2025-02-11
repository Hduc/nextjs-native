import { Platform, View, Text, FlatList, SafeAreaView, Dimensions, Switch, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
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

export default function RoomD() {
    const navigation = useNavigation() as any;

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [ison, setIsOn] = useState(false);
    const toggle = () => setIsOn(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(true);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(true);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(true);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    const [isEnabled5, setIsEnabled5] = useState(true);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);

    const [ison1, setIsOn1] = useState(false);
    const toggle1 = () => setIsOn1(previousState => !previousState);

    const [ison2, setIsOn2] = useState(false);
    const toggle2 = () => setIsOn2(previousState => !previousState);

    const [ison3, setIsOn3] = useState(false);
    const toggle3 = () => setIsOn3(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ImageBackground source={require('../../assets/image/s22.png')} resizeMode='stretch' style={{ flex: 1, marginTop: -10 }}>
                    <View style={{ flex: 1 }}>
                        <AppBar
                            elevation={0}
                            style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 50, }}
                            leading={<TouchableOpacity style={[style.icon, { backgroundColor: '#F0F0F090', borderWidth: 0 }]}
                                onPress={() => navigation.navigate('ADLocation')}>
                                <Icon name='chevron-back' size={20} color={Colors.active} />
                            </TouchableOpacity>}
                            trailing={<TouchableOpacity onPress={() => navigation.navigate('RoomE')} style={[style.icon2]} >
                                <Image source={require('../../assets/image/s2.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>}
                        />
                        <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginTop: 5 }}>
                            <View style={[style.icon2, { backgroundColor: Colors.primary }]} >
                                <Image source={require('../../assets/image/s23.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#F0F0F0', marginTop: -100, }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, marginHorizontal: 20 }}>
                            <Text style={[style.title, { color: Colors.active, textAlign: 'center', }]}>Living room</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>8</Text>
                                    </View>
                                    <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Devices</Text>
                                </View>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Turn on all</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <TouchableOpacity onPress={() => this.RBSheet2.open()}
                                    style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, borderRadius: 24 }}>

                                    <RBSheet ref={ref => {
                                        this.RBSheet2 = ref;
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
                                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                                        <Text style={[style.subtitle, { color: Colors.active, }]}>Smart Lamp</Text>
                                                        <Text style={[style.m12, { color: Colors.disable, }]}>Philips A60</Text>
                                                    </View>
                                                    <Switch
                                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                                        thumbColor={isEnabled3 ? Colors.secondary : '#f4f3f4'}
                                                        ios_backgroundColor="#3e3e3e"
                                                        onValueChange={toggleSwitch3}
                                                        value={isEnabled3}
                                                    />
                                                </View>
                                                <Image source={require('../../assets/image/s33.png')} resizeMode='stretch' style={{ height: height / 3, width: width / 1.4, alignSelf: 'center', marginTop: 20 }} />
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                                                    <View style={[style.icon2]}>
                                                        <Icon name='remove' size={20} color={Colors.secondary} />
                                                    </View>
                                                    <View style={{ alignItems: 'center' }}>
                                                        <Text style={[style.title, { color: Colors.active, fontSize: 40 }]}>65<Text style={[style.m12, { color: Colors.disable }]}>%</Text></Text>
                                                        <Text style={[style.b12, { color: Colors.active, }]}>Brigtness</Text>
                                                    </View>
                                                    <View style={[style.icon2]}>
                                                        <Icon name='add' size={20} color={Colors.secondary} />
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                                    <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: Colors.input, flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Icons name='timer' size={20} color={Colors.primary} />
                                                            <Text style={[style.b12, { color: Colors.active, marginTop: 15 }]}>Timer</Text>
                                                        </View>
                                                        <View style={{ alignItems: 'flex-end' }}>
                                                            <Text style={[style.title, { color: Colors.active }]}>5</Text>
                                                            <Text style={[style.m12, { color: Colors.disable }]}>hours</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ marginHorizontal: 8 }}></View>
                                                    <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: Colors.input, flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Image source={require('../../assets/image/s32.png')} resizeMode='stretch' style={{ height: 20, width: 20, }} />
                                                            <Text style={[style.b12, { color: Colors.active, marginTop: 15 }]}>Lumen</Text>
                                                        </View>
                                                        <View style={{ alignItems: 'flex-end' }}>
                                                            <Text style={[style.title, { color: Colors.active }]}>270</Text>
                                                            <Text style={[style.m12, { color: Colors.disable }]}>lm</Text>
                                                        </View>
                                                    </View>
                                                </View>

                                            </ScrollView>
                                        </View>
                                    </RBSheet>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.b12, { color: Colors.primary, flex: 1 }]}>On</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                        />
                                    </View>
                                    <Image source={require('../../assets/image/s24.png')} resizeMode='stretch' style={{ marginTop: 20, height: 20, width: 20, alignSelf: 'center' }} />
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 5, textAlign: 'center' }]}>Smart Lamp</Text>
                                    <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>warm</Text>
                                </TouchableOpacity>
                                <View style={{ marginHorizontal: 10 }}></View>
                                <TouchableOpacity onPress={() => this.RBSheet1.open()}
                                    style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, borderRadius: 24 }}>

                                    <RBSheet ref={ref => {
                                        this.RBSheet1 = ref;
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
                                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                                        <Text style={[style.subtitle, { color: Colors.active, }]}>Air conditioner</Text>
                                                        <Text style={[style.m12, { color: Colors.disable, }]}>Samsung AR18</Text>
                                                    </View>
                                                    <Switch
                                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                                        thumbColor={isEnabled2 ? Colors.secondary : '#f4f3f4'}
                                                        ios_backgroundColor="#3e3e3e"
                                                        onValueChange={toggleSwitch2}
                                                        value={isEnabled2}
                                                    />
                                                </View>
                                                <Image source={require('../../assets/image/s28.png')} resizeMode='stretch' style={{ height: height / 3, width: width / 1.4, alignSelf: 'center', marginTop: 20 }} />
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                    <View style={{ flex: 1 }}>
                                                        <View style={[style.icon2]}>
                                                            <Icon name='remove' size={20} color={Colors.secondary} />
                                                        </View>
                                                    </View>
                                                    <View style={[style.icon2]}>
                                                        <Icon name='add' size={20} color={Colors.secondary} />
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <View style={{ flex: 1, height: 90, backgroundColor: Colors.primary, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Image source={require('../../assets/image/s29.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                                        <Text style={[style.b12, { color: Colors.secondary }]}>Cooling</Text>
                                                    </View>
                                                    <View style={{ marginHorizontal: 10, flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Image source={require('../../assets/image/s30.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Heating</Text>
                                                    </View>
                                                    <View style={{ flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Image source={require('../../assets/image/s31.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Airwave</Text>
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                                    <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: Colors.input, flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Icons name='timer' size={20} color={Colors.primary} />
                                                            <Text style={[style.b12, { color: Colors.active, marginTop: 15 }]}>Timer</Text>
                                                        </View>
                                                        <View style={{ alignItems: 'flex-end' }}>
                                                            <Text style={[style.title, { color: Colors.active }]}>12</Text>
                                                            <Text style={[style.m12, { color: Colors.disable }]}>hours</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ marginHorizontal: 8 }}></View>
                                                    <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: Colors.input, flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Icon name='water' size={20} color='#00C5C5' />
                                                            <Text style={[style.b12, { color: Colors.active, marginTop: 15 }]}>Humidity</Text>
                                                        </View>
                                                        <View style={{ alignItems: 'flex-end' }}>
                                                            <Text style={[style.title, { color: Colors.active }]}>40</Text>
                                                            <Text style={[style.m12, { color: Colors.disable }]}>%</Text>
                                                        </View>
                                                    </View>
                                                </View>

                                            </ScrollView>
                                        </View>
                                    </RBSheet>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m12, { color: Colors.disable, flex: 1 }]}>Off</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggle}
                                            value={ison}
                                        />
                                    </View>
                                    <Image source={require('../../assets/image/s25.png')} resizeMode='stretch' style={{ marginTop: 20, height: 20, width: 20, alignSelf: 'center' }} />
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 5, textAlign: 'center' }]}>Air Conditioner</Text>
                                    <Text ></Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <TouchableOpacity onPress={() => this.RBSheet4.open()}
                                    style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, borderRadius: 24 }}>

                                    <RBSheet ref={ref => {
                                        this.RBSheet4 = ref;
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
                                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                                        <Text style={[style.subtitle, { color: Colors.active, }]}>Smart TV</Text>
                                                        <Text style={[style.m12, { color: Colors.disable, }]}>LG C1 Oled</Text>
                                                    </View>
                                                    <Switch
                                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                                        thumbColor={isEnabled5 ? Colors.secondary : '#f4f3f4'}
                                                        ios_backgroundColor="#3e3e3e"
                                                        onValueChange={toggleSwitch5}
                                                        value={isEnabled5}
                                                    />
                                                </View>
                                                <Image source={require('../../assets/image/s38.png')} resizeMode='stretch' style={{ height: height / 4.4, width: width / 2, alignSelf: 'center', marginTop: 20 }} />
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -20, justifyContent: 'space-between' }}>
                                                    <View style={{ padding: 15, backgroundColor: Colors.active, borderRadius: 20, alignItems: 'center' }}>
                                                        <Icon name='add' size={20} color={Colors.secondary} />
                                                        <Text style={[style.b12, { color: Colors.secondary, marginVertical: 50 }]}>Vol</Text>
                                                        <Icon name='remove' size={20} color={Colors.secondary} />
                                                    </View>
                                                    <View style={{ padding: 15, backgroundColor: Colors.active, borderRadius: 20, alignItems: 'center' }}>
                                                        <Icon name='add' size={20} color={Colors.secondary} />
                                                        <Text style={[style.b12, { color: Colors.secondary, marginVertical: 50 }]}>Ch</Text>
                                                        <Icon name='remove' size={20} color={Colors.secondary} />
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <View style={{ flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Icons name='volume-mute' size={20} color='#00C5C5' />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Mute</Text>
                                                    </View>
                                                    <View style={{ marginHorizontal: 10, flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Icons name='play-pause' size={20} color={Colors.purple} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Play</Text>
                                                    </View>
                                                    <View style={{ flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Icon name='mic' size={20} color={Colors.primary} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Assistant</Text>
                                                    </View>
                                                </View>

                                                <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <View style={{ flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Image source={require('../../assets/image/s36.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Back</Text>
                                                    </View>
                                                    <View style={{ marginHorizontal: 10, flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Image source={require('../../assets/image/s37.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Home</Text>
                                                    </View>
                                                    <View style={{ flex: 1, height: 90, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Icon name='list' size={20} color={Colors.orange} />
                                                        <Text style={[style.b12, { color: Colors.active }]}>Menu</Text>
                                                    </View>
                                                </View>

                                            </ScrollView>
                                        </View>
                                    </RBSheet>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m12, { color: Colors.disable, flex: 1 }]}>Off</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggle1}
                                            value={ison1}
                                        />
                                    </View>
                                    <Image source={require('../../assets/image/s26.png')} resizeMode='stretch' style={{ marginTop: 20, height: 20, width: 20, alignSelf: 'center' }} />
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 5, textAlign: 'center' }]}>Smart TV</Text>
                                    <Text ></Text>
                                </TouchableOpacity>
                                <View style={{ marginHorizontal: 10 }}></View>
                                <TouchableOpacity onPress={() => this.RBSheet3.open()}
                                    style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, borderRadius: 24 }}>

                                    <RBSheet ref={ref => {
                                        this.RBSheet3 = ref;
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
                                                    <View style={{ marginLeft: 10, flex: 1 }}>
                                                        <Text style={[style.subtitle, { color: Colors.active, }]}>CCTV</Text>
                                                        <Text style={[style.m12, { color: Colors.disable, }]}>Mi home security camera</Text>
                                                    </View>
                                                    <Switch
                                                        trackColor={{ false: Colors.disable, true: Colors.primary }}
                                                        thumbColor={isEnabled4 ? Colors.secondary : '#f4f3f4'}
                                                        ios_backgroundColor="#3e3e3e"
                                                        onValueChange={toggleSwitch4}
                                                        value={isEnabled4}
                                                    />
                                                </View>
                                                <Image source={require('../../assets/image/s34.png')} resizeMode='stretch' style={{ height: height / 2, width: width - 40, alignSelf: 'center', marginTop: 20 }} />
                                                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
                                                    <View style={[style.icon2]}>
                                                        <Icon name='mic' size={20} color={Colors.secondary} />
                                                    </View>
                                                    <View style={{ flex: 1, marginHorizontal: 20, backgroundColor: Colors.input, padding: 15, borderRadius: 24 }}>
                                                        <Icon name='chevron-up' size={20} color={Colors.active} style={{ alignSelf: 'center' }} />
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, justifyContent: 'space-between' }}>
                                                            <Icon name='chevron-back' size={20} color={Colors.active} />
                                                            <Image source={require('../../assets/image/s35.png')} resizeMode='stretch' style={{ height: 70, width: 70, alignSelf: 'center', }} />
                                                            <Icon name='chevron-forward' size={20} color={Colors.active} />
                                                        </View>
                                                        <Icon name='chevron-down' size={20} color={Colors.active} style={{ alignSelf: 'center' }} />
                                                    </View>
                                                    <View style={[style.icon2]}>
                                                        <Icon name='list' size={20} color={Colors.secondary} />
                                                    </View>
                                                </View>

                                            </ScrollView>
                                        </View>
                                    </RBSheet>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.b12, { color: Colors.primary, flex: 1 }]}>On</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={isEnabled1 ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch1}
                                            value={isEnabled1}
                                        />
                                    </View>
                                    <Image source={require('../../assets/image/s20.png')} resizeMode='stretch' style={{ marginTop: 20, height: 20, width: 20, alignSelf: 'center' }} />
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 5, textAlign: 'center' }]}>CCTV</Text>
                                    <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>standby</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>
                                <View style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, borderRadius: 24 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m12, { color: Colors.disable, flex: 1 }]}>Off</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={ison2 ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggle2}
                                            value={ison2}
                                        />
                                    </View>
                                    <Image source={require('../../assets/image/s25.png')} resizeMode='stretch' style={{ marginTop: 20, height: 20, width: 20, alignSelf: 'center' }} />
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 5, textAlign: 'center' }]}>Air Conditioner</Text>
                                    <Text ></Text>
                                </View>
                                <View style={{ marginHorizontal: 10 }}></View>
                                <View style={{ flex: 1, padding: 15, backgroundColor: Colors.secondary, borderRadius: 24 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m12, { color: Colors.disable, flex: 1 }]}>Off</Text>
                                        <Switch
                                            trackColor={{ false: Colors.disable, true: Colors.primary }}
                                            thumbColor={ison3 ? Colors.secondary : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggle3}
                                            value={ison3}
                                        />
                                    </View>
                                    <Image source={require('../../assets/image/s25.png')} resizeMode='stretch' style={{ marginTop: 20, height: 20, width: 20, alignSelf: 'center' }} />
                                    <Text style={[style.b12, { color: Colors.active, marginTop: 5, textAlign: 'center' }]}>Air Conditioner</Text>
                                    <Text ></Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}