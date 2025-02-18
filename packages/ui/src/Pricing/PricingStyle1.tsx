import React from 'react';
import { Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../@Interface/Style';
import Button from '../Button';

interface PricingStyle1Props {
    price: string;
    plan: string;
    billingCycle: string;
    features: string[];
    buttonText: string;
}

const PricingStyle1: React.FC<PricingStyle1Props> = ({ price, plan, billingCycle, features, buttonText }) => {
    return (
        <View
            style={{
                padding: 30,
                borderRadius: SIZES.radius,
                borderWidth: 1,
                borderColor: COLORS.primary,
                backgroundColor: COLORS.card,
                maxWidth: 320,
                width: '100%',
            }}
        >
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ ...FONTS.h3, color: COLORS.title }}>{price}</Text>
                <Text style={{ ...FONTS.font, ...FONTS.fontBold, marginBottom: 10, color: COLORS.title }}>{plan}</Text>
                <Text style={{ ...FONTS.font, color: COLORS.text }}>{billingCycle}</Text>
            </View>
            <View style={{ marginBottom: 25 }}>
                {features.map((feature, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 5,
                        }}
                    >
                        <FeatherIcon style={{ marginRight: 8 }} color={COLORS.primary} name="check-circle" size={18} />
                        <Text style={{ ...FONTS.font, color: COLORS.text }}>{feature}</Text>
                    </View>
                ))}
            </View>
            <Button title={buttonText} />
        </View>
    );
};

export default PricingStyle1;
