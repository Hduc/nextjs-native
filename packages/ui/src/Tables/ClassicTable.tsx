import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, GlobalStyleSheet } from '../@Interface/Style';
interface ClassicTableProps {
    tableData: {
        name: string;
        email: string;
        age: number;
    }[]
}
export const ClassicTable = ({ tableData }: ClassicTableProps) => {

    const { colors } = useTheme();



    return (
        <>
            <View
                style={{
                    ...GlobalStyleSheet.card,
                    backgroundColor: colors.card,
                    padding: 5,
                    ...GlobalStyleSheet.shadow,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderColor: colors.border,
                    }}
                >
                    <Text style={{ ...styles.theadItem, color: colors.text, flex: .6, paddingLeft: 15 }}>Name</Text>
                    <Text style={{ ...styles.theadItem, color: colors.text }}>Email</Text>
                    <Text style={{ ...styles.theadItem, color: colors.text, flex: 0.5, textAlign: 'right', paddingRight: 15 }}>Age</Text>
                </View>
                {tableData.map((data, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                flex: 1,
                                alignSelf: 'stretch',
                                flexDirection: 'row',
                            }}
                        >
                            <Text style={{ ...styles.tbodyItem, color: COLORS.title, flex: .6, paddingLeft: 15 }}>{data.name}</Text>
                            <Text numberOfLines={1} style={{ ...styles.tbodyItem, color: COLORS.title }}>{data.email}</Text>
                            <Text style={{ ...styles.tbodyItem, color: COLORS.title, flex: 0.5, textAlign: 'right', paddingRight: 15 }}>{data.age}</Text>
                        </View>
                    )
                })}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    theadItem: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        paddingVertical: 12,
        ...FONTS.font,
    },
    tbodyItem: {
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        paddingVertical: 12,
        ...FONTS.font,
        ...FONTS.fontMedium,
        color: COLORS.title,
    }
})
