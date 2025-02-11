import { View, Text, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import IntroItem from '../screens/IntroItem'
import Slides from '../common/data/slides'
import { Avatar } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Introduction() {
    const ref = React.useRef(null);
    const navigation = useNavigation() as any;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        return <View style={{ paddingHorizontal: 20, backgroundColor:Colors.bg}} >
            <View style={{
                flexDirection: 'row', justifyContent: 'center',marginTop:20
            }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            height: 1.5,
                            width: 30,
                            backgroundColor: Colors.primary,
                            alignItems: 'center',

                        },]}
                    />
                ))}
            </View>
            <View>
                {currentSlideIndex == 0 ? (
                    <View style={{ marginTop: 20 }}>
                        <View style={{ alignSelf: 'center', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20, backgroundColor: '#EA1763' }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>Functionality</Text>
                        </View>
                        <TouchableOpacity onPress={goNextSlide}
                            style={[style.btn2, { marginVertical: 20, alignSelf: 'center', backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.m12, { color: Colors.primary, marginBottom: 20, textDecorationLine: 'underline', textAlign: 'center' }]}>Skip</Text>
                        </TouchableOpacity>
                    </View>

                ) : currentSlideIndex == 1 ? (
                    <View style={{ marginTop: 20 }}>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20, backgroundColor: '#EA8917', alignSelf: 'center' }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>Security</Text>
                        </View>
                        <TouchableOpacity onPress={goNextSlide}
                            style={[style.btn2, { marginVertical: 20, alignSelf: 'center', backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.m12, { color: Colors.primary, marginBottom: 20, textDecorationLine: 'underline', textAlign: 'center' }]}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                ) :
                    <View style={{ marginTop: 20 }}>
                        <View style={{ paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20, backgroundColor: '#5B17EA', alignSelf: 'center' }}>
                            <Text style={[style.m12, { color: Colors.secondary }]}>Accesibility</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Login1')}
                                style={[style.btn, { flex: 1, backgroundColor: Colors.active }]}>
                                <Text style={[style.btntxt]}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('LFinger')}
                            style={{ marginLeft: 10, height: 60, width: 60, borderRadius: 24, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s1.png')} resizeMode='stretch' style={{ height: 26, width: 24 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'center' }}>
                            <Text style={[style.m12, { color: Colors.active }]}>Don’t have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline', }]}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e:any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            //@ts-ignore
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:Colors.bg }}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id+''}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />

        </SafeAreaView>
    )
}