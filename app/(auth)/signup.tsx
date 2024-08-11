import { Animated, Image, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '../../constants/images';
import FormFiled from '../../components/FormFiled';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { register } from '../../libs/appwrite';

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        username: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        username: ''
    });
    const [shakeAnimation] = useState(new Animated.Value(0));
    const [generalError, setGeneralError] = useState('');

    const validateForm = () => {
        let valid = true;
        const newErrors = { email: '', password: '', username: '' };

        if (!form.email || !form.password || !form.username) {
            newErrors.username = 'Please fill all the fields';
            valid = false;
        } else {
            if (!emailRegex.test(form.email.trim())) {
                newErrors.email = 'Please enter a valid email address';
                valid = false;
            }

            if (form.password.length < 8) {
                newErrors.password = 'Password must be at least 8 characters long';
                valid = false;
            }
        }

        if (!valid) {
            shakeAnimation.setValue(0);
            Animated.spring(shakeAnimation, {
                toValue: 1,
                useNativeDriver: true,
                friction: 2,
                tension: 100
            }).start();
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSignIn = async () => {
        if (validateForm()) {
            try {
                setIsSubmitting(true)
                const userinfo = await register(form.email.trim(), form.password, form.username);
                router.replace('/home')
            } catch (error) {
                setGeneralError('An error occurred while signing up. Please try again.');
                console.error('Sign Up Error:', error.message);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-[100%] h-[85vh] justify-center items-center'>
                    <View className='w-[95%]'>
                        <Image
                            source={images.logo}
                            className='w-[100px] h-[70px] mb-6'
                            resizeMode='contain'
                        />
                        <Text className='text-xl text-slate-100'>Sign Up to Aura</Text>
                        <FormFiled
                            title="Username"
                            value={form.username}
                            handleChangeText={(e) => setForm({ ...form, username: e })}
                            otherStyles='mt-7'
                            placeholder='Username'
                        />
                        {errors.username ? (
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateX: shakeAnimation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -10]
                                            })
                                        }
                                    ]
                                }}
                            >
                                <Text className='ml-10 text-sm text-red-500'>{errors.username}</Text>
                            </Animated.View>
                        ) : null}

                        <FormFiled
                            title="Email"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            otherStyles='mt-7'
                            placeholder='Email'
                        />
                        {errors.email ? (
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateX: shakeAnimation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -10]
                                            })
                                        }
                                    ]
                                }}
                            >
                                <Text className='ml-3 text-sm text-red-500'>{errors.email}</Text>
                            </Animated.View>
                        ) : null}

                        <FormFiled
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            otherStyles='mt-7'
                            placeholder='Password'
                        />
                        {errors.password ? (
                            <Animated.View
                                style={{
                                    transform: [
                                        {
                                            translateX: shakeAnimation.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -10]
                                            })
                                        }
                                    ]
                                }}
                            >
                                <Text className='ml-3 text-sm text-red-500'>{errors.password}</Text>
                            </Animated.View>
                        ) : null}

                        {generalError ? (
                            <Text className='text-sm text-red-500 mt-3'>{generalError}</Text>
                        ) : null}

                        <CustomButton
                            title='Sign Up'
                            handlePress={handleSignIn}
                            containerStyles='w-full mt-7'
                            isLoading={isSubmitting}
                        />
                        <View className='justify-center pt-5 flex-row gap-2'>
                            <Text className='text-sm font-pregular text-gray-200'>
                                Don't have an account?
                            </Text>
                            <Link className='text-sm font-pregular text-secondary' href='/login'>Login</Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;
