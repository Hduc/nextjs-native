import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS } from '../@Interface/Style';



interface IProps {
    active?: unknown;
    onToggle?: (arg0: boolean) => any;
}
 
export const ToggleStyle1 = (props: IProps) => {
    
    const {colors} = useTheme();

    const [active , setActive] = useState(false);

    const offset = useSharedValue(0);
    const toggleStyle = useAnimatedStyle(() => { 
        return {
            transform: [
                { 
                    translateX:  offset.value
                }
            ],
        };
    });
    useEffect(() => {
        if(props.active){
            setActive(true);
            offset.value = withSpring(28)
        }
    },[props.active])

    return (
        <>
            <TouchableOpacity
                onPress={() => { 
                    props.onToggle && props.onToggle(active);
                    setActive(!active);
                    if(active){
                        offset.value = withSpring(0)
                    }else{
                        offset.value = withSpring(28)
                    }
                }}
                style={[{
                    height:32,
                    width:60,
                    backgroundColor : active ? COLORS.success : '#e8e9ea',
                    borderRadius:30,
                }]}
            >
                <Animated.View
                    style={[toggleStyle,{
                        height:28,
                        width:28,
                        backgroundColor:"#fff",
                        borderRadius:30,
                        top:2,
                        left:2,
                    }]}
                />
            </TouchableOpacity>
        </>
    );
};
