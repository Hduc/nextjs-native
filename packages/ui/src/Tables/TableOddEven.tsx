import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS, GlobalStyleSheet } from '../@Interface/Style';

interface Column {
    label: string;
    field: string;
    flex?: number;
    numberOfLines?: number;
}

interface TableOddEvenProps {
    data: Record<string, any>[];
    columns: Column[];
}

const TableOddEven: React.FC<TableOddEvenProps> = ({ data, columns }) => {
    const { colors, dark } = useTheme();
    
    return (
        <View
            style={{
                ...GlobalStyleSheet.card,
                backgroundColor: colors.card,
                padding: 5,
                ...GlobalStyleSheet.shadow,
            }}
        >
            <View style={styles.headerRow}>
                {columns.map((col, index) => (
                    <Text key={index} style={[styles.theadItem, { color: colors.text, flex: col.flex || 1 }]}>
                        {col.label}
                    </Text>
                ))}
            </View>
            {data.map((row, rowIndex) => (
                <View
                    key={rowIndex}
                    style={[styles.row, rowIndex % 2 === 0 && { backgroundColor: dark ? colors.background : '#eee' }]}
                >
                    {columns.map((col, colIndex) => (
                        <Text
                            key={colIndex}
                            style={[styles.tbodyItem, { color: COLORS.title, flex: col.flex || 1 }]}
                            numberOfLines={col.numberOfLines || 1}
                        >
                            {row[col.field]}
                        </Text>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
    },
    theadItem: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        ...FONTS.font,
    },
    tbodyItem: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        ...FONTS.font,
        ...FONTS.fontMedium,
    },
});

export default TableOddEven;