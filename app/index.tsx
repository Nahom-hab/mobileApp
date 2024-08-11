import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
// import { useGlobalContext } from '../context/GlobalProvider'


const App = () => {
    // const { loading, isLoggedIn } = useGlobalContext()

    // if (!loading && isLoggedIn) return <Redirect href='/home' />

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: '100%' }} >
                <View className='w-full justify-center items-center min-h-[90vh] px-4'>
                    <Image
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className='max-w-[380px] w-full h-[300px]'
                        resizeMode='contain'
                    />
                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white text-bold text-center'>
                            Discover Endless possibilities with {' '}
                            <Text className='text-secondary-200'>Aura</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className='absolute  w-[136px] h-[15px] -bottom-2 -right-8'
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-gray-100 mt-7 text-center text-xs'>
                        Discover and share stunning AI-generated art—simply by providing a
                        prompt. Transform your ideas into unique visuals and showcase your
                        creativity with just a few words. Explore endless possibilities
                        and inspire others!
                    </Text>
                    <CustomButton
                        title='Continue with Email'
                        handlePress={() => router.push('/login')}
                        containerStyles='w-full mt-7'
                        isLoading={false}
                    />
                </View>


            </ScrollView>
            <StatusBar
                backgroundColor='#161622'
                style='light'
            />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({})