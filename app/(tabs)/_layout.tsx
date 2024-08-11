import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'
const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-1'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-5 h-5'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color: color }}>{name}</Text>
        </View>
    )

}
const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 70,


                    }
                }
            }
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            name={'Home'}
                            color={color}
                            focused={focused}

                        />
                    )
                }}
            />
            <Tabs.Screen
                name='bookmark'
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            name={'Bookmark'}
                            color={color}
                            focused={focused}

                        />
                    )
                }}
            />
            <Tabs.Screen
                name='create'
                options={{
                    title: 'create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            name={'Create'}
                            color={color}
                            focused={focused}

                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            name={'Profile'}
                            color={color}
                            focused={focused}

                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})