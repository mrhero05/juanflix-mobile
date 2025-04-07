import { View, Text } from 'react-native'
import React from 'react'

const TitleDescription = ({title, description}) => {
  return (
    <View className="w-full pt-[50px]">
      <Text className="text-3xl font-bold text-customYellow text-center">{title}</Text>
      <Text className="text-center text-white pt-1">{description}</Text>
    </View>
  )
}

export default TitleDescription