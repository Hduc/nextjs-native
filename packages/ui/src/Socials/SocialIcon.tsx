import React from 'react';
import { ColorValue, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, GlobalStyleSheet } from '../@Interface/Style';

interface SocialIconProps {
    color: ColorValue | undefined;
    square: any;
    rounded: any;
    btnSm: any;
    btnLg: any;
    icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}

export const SocialIcon = (props: SocialIconProps) => {
    return (
        <>
            <TouchableOpacity
                style={[{
                    height:40,
                    width:40,
                    backgroundColor:props.color ? props.color : COLORS.primary,
                    borderRadius:props.square ? 0 : props.rounded ? 30 : SIZES.radius,
                    alignItems:'center',
                    justifyContent:'center',
                    marginHorizontal:4,
                }, props.btnSm && {
                    height:35,
                    width:35,
                }, props.btnLg && {
                    height:45,
                    width:45,
                }]}
            >
                {props.icon}
            </TouchableOpacity>
        </>
    );
};

