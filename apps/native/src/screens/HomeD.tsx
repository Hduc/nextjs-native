import { Platform, View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import { Avatar } from 'react-native-paper';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Style from '../theme/style';
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function HomeD() {

    const navigation = useNavigation() as any;
    const [visible1, setVisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MHome')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity onPress={() => this.RBSheet.open()}
                            style={[style.icon2]}>
                            <RBSheet ref={ref => {
                                this.RBSheet = ref;
                            }}
                                height={320}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: Colors.bg,
                                    }
                                }}>
                                <View style={{ marginHorizontal: 20, backgroundColor: Colors.bg, marginTop: 20 }}>

                                    <Text style={[style.title, { color: Colors.txt, textAlign: 'center' }]}>Delete Tebet ?</Text>
                                    <Text style={[style.m12, { color: Colors.disable, marginTop: 5, textAlign: 'center', marginHorizontal: 20 }]}>After the home is deleted, all members will be deleted, data will be emptied, and all devices will be unpaired.</Text>

                                    <TouchableOpacity onPress={() => this.RBSheet.close()} style={{ marginTop: 40 }}>
                                        <View style={[style.btn, { backgroundColor: Colors.input }]}>
                                            <Text style={[style.btntxt, { color: Colors.primary }]}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.RBSheet.close()} style={{ marginBottom: 25, marginTop: 12 }}>
                                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                                            <Text style={[style.btntxt]}>Cancel</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            </RBSheet>
                            <Icon name='trash' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <TextInput placeholder='Tebet'
                            placeholderTextColor={Colors.active}
                            selectionColor={Colors.primary}
                            style={[style.title, { color: Colors.txt,textAlign:'center',textDecorationColor:Colors.primary,textDecorationLine:'underline' }]}
                        />

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <View style={{ flex: 1, backgroundColor: Colors.orange, paddingHorizontal: 15, borderRadius: 24, paddingTop: 5, paddingBottom: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View>
                                        <Image source={require('../../assets/image/a19.png')} resizeMode='stretch' style={{ height: 20, width: 20, marginTop: 10 }}></Image>
                                        <Text style={[style.b12, { color: Colors.secondary, marginTop: 16 }]}>Usage</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Text style={[style.title, { color: Colors.secondary }]}>312</Text>
                                        <Text style={[style.m12, { color: Colors.secondary }]}>kwh</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: 10 }}></View>
                            <View style={{ flex: 1, backgroundColor: Colors.primary, padding: 15, borderRadius: 24 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View>
                                        <Image source={require('../../assets/image/a40.png')} resizeMode='stretch' style={{ height: 20, width: 20, }}></Image>
                                        <Text style={[style.b12, { color: Colors.secondary, marginTop: 16 }]}>Devices</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Text style={[style.title, { color: Colors.secondary }]}>8</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Home address</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('EditAddress')}>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <ImageBackground source={require('../../assets/image/a35.png')} resizeMode='stretch' style={{ height: height / 3.9, width: width - 40 }}>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                        <Text style={[style.m12, { color: Colors.txt }]}>Jl. Flamboyan, Jakarta Selatan, Indonesia</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>6</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Rooms</Text>
                            <TouchableOpacity>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Select</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={{}}>
                                    <ImageBackground source={require('../../assets/image/a41.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9, }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a42.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a25.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a43.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a26.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <ImageBackground source={require('../../assets/image/a44.png')} resizeMode='stretch' style={{ height: height / 6.2, width: width / 3.9 }}>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <View style={{ backgroundColor: Colors.input, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, padding: 20 }}>
                                                <Image source={require('../../assets/image/a24.png')} resizeMode='stretch' style={{ height: 20, width: 20, alignSelf: 'center', marginTop: -5 }}></Image>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>

                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: Colors.active, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary }]}>3</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Member</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('InviteM')}>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Invite member</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>George Martin</Text>
                                <Text style={[style.m10, { color: Colors.disable, marginTop: 4 }]}>george123@email.com</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a45.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Richard Eddy</Text>
                                <Text style={[style.m10, { color: Colors.disable, marginTop: 4 }]}>richard@email.com</Text>
                            </View>
                            <Icon name='close-circle' size={22} color={Colors.primary}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                            <Image source={require('../../assets/image/a46.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Willie Engelmann</Text>
                                <Text style={[style.m10, { color: Colors.disable, marginTop: 4 }]}>engelmaan23@email.com</Text>
                            </View>
                            <Icon name='close-circle' size={22} color={Colors.primary}></Icon>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}