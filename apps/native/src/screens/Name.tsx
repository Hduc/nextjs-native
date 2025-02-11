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

export default function Name() {

    const navigation = useNavigation() as any;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { marginTop: 30, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>2/ <Text style={{ color: Colors.active }}>4</Text></Text>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Country')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Your home name 🏠</Text>
                    <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' ,marginTop:5,marginHorizontal:20}]}>Choose a nickname for this home to help identify it later.</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={[style.txtinput, { marginTop: 30, paddingBottom: 3 }]}>
                            <TextInput placeholder='Tebet'
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Address')}
                    style={{ width: width / 2, alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                        <View style={[style.btn, { backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}