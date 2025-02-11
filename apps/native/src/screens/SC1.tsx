import { Platform, View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
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

export default function SC1() {
    const navigation = useNavigation() as any;
    const [show, setshow] = useState(false);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<Text style={[style.m14, { color: Colors.primary }]}>1 <Text style={{ color: Colors.active }}>/ 2</Text></Text>}
                        leading={<TouchableOpacity style={[style.icon]} onPress={() => navigation.navigate('Condition')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, marginTop: 20, textAlign: 'center' }]}>Schedule🗓</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>Set the time to execute the automation</Text>

                        <Text style={[style.b16, { color: Colors.active, marginTop: 20, }]}>Repeat days</Text>
                        <View style={[style.txtinput, { marginTop: 10 }]}>
                            <Text style={[style.m12, { color: Colors.active, flex: 1 }]}>Mon, Thu</Text>
                            <Icon name='caret-down' size={20} color={Colors.active} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.b16, { color: Colors.active, flex: 1 }]}>Execution time</Text>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Reset</Text>
                        </View>

                        {show ? <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flex: 0.5, padding: 15, backgroundColor: Colors.active, borderRadius: 24 }}>
                                <Text style={[style.m12, { color: '#FFFFFF50' }]}>05</Text>
                                <Text style={[style.m12, { color: '#FFFFFF60' }]}>06</Text>
                                <Text style={[style.m12, { color: '#FFFFFF70' }]}>07</Text>
                                <Text style={[style.m12, { color: '#FFFFFF80' }]}>08</Text>
                            </View>
                            <View style={{ flex: 0.5, marginHorizontal: 10, padding: 15, backgroundColor: Colors.active, borderRadius: 24 }}>
                                <Text style={[style.m12, { color: '#FFFFFF50' }]}>26</Text>
                                <Text style={[style.m12, { color: '#FFFFFF60' }]}>27</Text>
                                <Text style={[style.m12, { color: '#FFFFFF70' }]}>28</Text>
                                <Text style={[style.m12, { color: '#FFFFFF80' }]}>29</Text>
                            </View>
                            <View style={{ flex: 1 }}>

                            </View>
                        </View>
                            : null
                        }

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View style={[style.inputContainer, { flex: 1 }]}>
                                <Text style={[style.m12, { color: Colors.active, }]}>06</Text>
                            </View>
                            <View style={[style.inputContainer, { flex: 1, marginHorizontal: 10 }]}>
                                <Text style={[style.m12, { color: Colors.active, }]}>30</Text>
                            </View>
                            <TouchableOpacity onPress={() => setshow(!show)}
                                style={[style.txtinput, { flex: 1 }]}>
                                <Text style={[style.m12, { color: Colors.active, flex: 1 }]}>AM</Text>
                                <Icon name='caret-down' size={20} color={Colors.active} />
                            </TouchableOpacity>
                        </View>

                        {show ? <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flex: 0.5, padding: 15, backgroundColor: Colors.active, borderRadius: 24 }}>
                                <Text style={[style.m12, { color: '#FFFFFF80' }]}>09</Text>
                                <Text style={[style.m12, { color: '#FFFFFF70' }]}>10</Text>
                                <Text style={[style.m12, { color: '#FFFFFF60' }]}>11</Text>
                                <Text style={[style.m12, { color: '#FFFFFF50' }]}>12</Text>
                            </View>
                            <View style={{ flex: 0.5, marginHorizontal: 10, padding: 15, backgroundColor: Colors.active, borderRadius: 24 }}>
                                <Text style={[style.m12, { color: '#FFFFFF80' }]}>31</Text>
                                <Text style={[style.m12, { color: '#FFFFFF70' }]}>32</Text>
                                <Text style={[style.m12, { color: '#FFFFFF60' }]}>33</Text>
                                <Text style={[style.m12, { color: '#FFFFFF50' }]}>34</Text>
                            </View>
                            <View style={{ flex: 1 }}>

                            </View>
                        </View>
                            : null
                        }
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('SC2')}
                        style={[style.btn2, { backgroundColor: Colors.active, marginVertical: 20, alignSelf: 'center' }]}>
                        <Text style={[style.btntxt]}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}