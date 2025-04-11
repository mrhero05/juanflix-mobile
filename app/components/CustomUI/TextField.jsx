import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { colors } from '@utils/Constants'

const TextField = ({title, ...props }) => {
  return (
    <View className="flex-1 mb-[15px]">
        <Text className="text-customGray mb-[8px]">{title}</Text>
        <TextInput 
                textColor={colors.customGray}
                style={styles.input}
                activeUnderlineColor={colors.customGray}
                {...props} 
                placeholderTextColor={colors.customGray} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        height: 40,
        borderColor: colors.customGray,
        borderRadius: 3,
        color: colors.customWhite,
        backgroundColor: colors.customMidBlack,
    }
})

export default TextField