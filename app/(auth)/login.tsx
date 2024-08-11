import { Alert, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '../../constants/images'
import FormFiled from '../../components/FormFiled'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { login } from '../../libs/appwrite'
const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleSignIn = async () => {
        router.replace('/home')
        // if (form.email && form.password) {
        //     try {

        //         console.log(form);
        //         setIsSubmiting(true)
        //         const result = await login(form.email, form.password)

        //         //set the user to global state

        //         router.replace('/home')

        //     } catch (error) {
        //         console.log(error);

        //     } finally {
        //         setIsSubmiting(false)
        //     }
        // } else {
        //     Alert.alert('Error', 'please fill all the fields')
        // }
    }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-[100%] h-[70vh] justify-center items-center'>
                    <View className='w-[95%]'>
                        <Image
                            source={images.logo}
                            className='w-[100px] h-[70px] mb-6'
                            resizeMode='contain'
                        />
                        <Text className='text-xl text-slate-100 '>Login to Aura</Text>
                        <FormFiled
                            title="Email"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            otherStyles='mt-7'
                            placeholder='Email'
                        />
                        <FormFiled
                            title="password"
                            value={form.password}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            otherStyles='mt-7'
                            placeholder='Password'
                        />
                        <CustomButton
                            title='Login'
                            handlePress={handleSignIn}
                            containerStyles='w-full mt-7'
                            isLoading={isSubmiting}
                        />
                        <View className='justify-center pt-5 flex-row gap-2'>
                            <Text className='text-sm font-pregular text-gray-200'>
                                Don't have an account?
                            </Text>
                            <Link className='text-sm font-pregular text-secondary' href='/signup'>Sign Up</Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login
