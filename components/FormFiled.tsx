import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'


export default function FormFiled({ title, handleChangeText, value, otherStyles, placeholder }) {
    const [showPassword, setShowPassword] = useState(false)

    return (

        <View className={` space-y-2 ${otherStyles}`}>
            <Text className=' text-gray-100 font-pmedium text-sm'>{title}</Text>
            <View className='border-2 border-black-200 w-full h-14 px-4 flex-row bg-black-100 
            rounded-2xl focus:border-secondary items-center'>
                <TextInput
                    className='flex-1 text-white  font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'password' && !showPassword}
                />
                {title === 'password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            className='w-6 h-6'
                            resizeMode='contain'
                            source={showPassword ? icons.eyeHide : icons.eye}
                        />

                    </TouchableOpacity>
                )}
            </View>
        </View>

    )
}