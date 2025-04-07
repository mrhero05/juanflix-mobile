import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { colors } from '@utils/Constants'

const YellowButton = ({title, ...props}) => {
  return (
    <Button
        style={[styles.buttomStyles]}
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
        borderColor: colors.customGray,
        borderWidth: 1
    }
})
export default YellowButton