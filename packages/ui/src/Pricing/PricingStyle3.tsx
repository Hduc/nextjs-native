import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../@Interface/Style';
import Button from '../Button';

interface PricingStyle3Props {
    price: string;
    plan: string;
    description: string;
    features: string[];
    buttonText: string;
}

const PricingStyle3: React.FC<PricingStyle3Props> = ({ price, plan, description, features, buttonText }) => {
    const theme = useTheme();

    return (
        <View
            style={{
                padding: 30,
                paddingTop: 50,
                borderRadius: SIZES.radius,
                borderWidth: 10,
                borderColor: COLORS.card,
                backgroundColor: theme.dark ? COLORS.primaryLight : "#E4FFF8",
                maxWidth: 320,
                width: '100%',
                shadowColor: "rgba(0,0,0,.6)",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
            }}
        >
            <View
                style={{
                    height: 70,
                    position: 'absolute',
                    right: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingTop: 3,
                    borderTopLeftRadius: 40,
                    borderBottomLeftRadius: 40,
                    paddingRight: 20,
                    backgroundColor: COLORS.primaryLight,
                }}
            >
                <Text style={{ ...FONTS.h3, lineHeight: 32, color: COLORS.title }}>{price}</Text>
                <Text style={{ ...FONTS.font, color: COLORS.text, marginLeft: 5 }}>/m</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ ...FONTS.h4, color: COLORS.title, marginBottom: 4 }}>{plan}</Text>
                <Text style={{ ...FONTS.font, fontSize: 16, color: COLORS.text, lineHeight: 22 }}>{description}</Text>
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
                        <View
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                marginRight: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.secondary,
                            }}
                        >
                            <FeatherIcon color={COLORS.white} name="check" size={14} />
                        </View>
                        <Text style={{ ...FONTS.font, color: COLORS.text }}>{feature}</Text>
                    </View>
                ))}
            </View>
            <Button title={buttonText} />
        </View>
    );
};

export default PricingStyle3;