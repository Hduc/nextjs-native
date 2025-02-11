import { Platform, View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import { Avatar } from 'react-native-paper';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Room() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>4/ <Text style={{ color: Colors.active }}>4</Text></Text>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Address')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Add rooms 🛋</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                        <View style={[style.txtinput, { paddingBottom: 3, flex: 1, }]}>
                            <TextInput placeholder='Room name'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                        </View>
                        <View style={{ margin: 7 }}></View>
                        <TouchableOpacity style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 24, backgroundColor: Colors.primary }}>
                            <Icon name='add-sharp' size={20} color={Colors.secondary}></Icon>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('../../assets/image/a16.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 15, flex: 1 }]}>Office</Text>
                            <Icon name='close-circle' size={22} color={Colors.primary}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a17.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 15, flex: 1 }]}>Living Room</Text>
                            <Icon name='close-circle' size={22} color={Colors.primary}></Icon>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a18.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 15, flex: 1 }]}>BedRoom</Text>
                            <Icon name='close-circle' size={22} color={Colors.primary}></Icon>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => this.RBSheet.open()} style={{ marginBottom: 25, marginTop: 20 }}>
                        <RBSheet ref={ref => {
                            this.RBSheet = ref;
                        }}
                            height={300}
                            openDuration={100}
                            customStyles={{
                                container: {
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    backgroundColor: Colors.bg,
                                }
                            }}>
                            <View style={{ marginHorizontal: 20, backgroundColor: Colors.bg, marginTop: 20 }}>

                                <Text style={[style.title, { color: Colors.txt ,textAlign:'center'}]}>Setup home completed 🎉  </Text>
                                <Text style={[style.m12, { color: Colors.disable, marginTop: 5, textAlign: 'center' ,marginHorizontal:40 }]}>You can add another home from <Text style={{ color: Colors.primary }}>Manage home</Text> menu.</Text>
                                
                                <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('MyTabs')}} style={{ marginBottom: 25, marginTop: 50 }}>
                                    <View style={[style.btn, { backgroundColor: Colors.primary }]}>
                                        <Text style={[style.btntxt]}>Continue setup home</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </RBSheet>

                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}