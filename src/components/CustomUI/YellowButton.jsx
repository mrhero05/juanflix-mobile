import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { colors } from '@constants/Colors';

const YellowButton = ({title, ...props}) => {
  return (
    <Button
        style={[styles.buttomStyles]}
        textColor= {colors.customBlack}
        buttonColor= {colors.customYellow}
        {...props}
        >
        {title}
    </Button>
  )
}

const styles = StyleSheet.create({
    buttomStyles: {
        borderRadius: 3,
        fontWeight: '900',
    }
})
export default YellowButton