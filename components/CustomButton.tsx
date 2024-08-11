import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={.7}
            disabled={isLoading}
            className={`w-full  bg-secondary-200 rounded-xl h-[50px] justify-center items-center ${containerStyles}`}>
            <Text className='text-primary font-psemibold text-lg p-1 '>{title}</Text>
        </TouchableOpacity >
    )
}

export default CustomButton

