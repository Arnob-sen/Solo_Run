import { View, Text,Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import ImageSlider from './ImageSlider'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BodyParts from './BodyParts'
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen'
export default function Home() {
  return (
        <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']} >
            <StatusBar style="dark" />
        <View className='flex-row justify-between items-center mx-5'>
            <View className='space-y-2'>
                <Text className='font-bold tracking-wider text-neutral-700'
                style={{fontSize:hp(4.5)}}
                >
                    READY TO
                </Text>
                <Text className='font-bold tracking-wider text-rose-500'
                style={{fontSize:hp(4.5)}}
                >
                    WORKOUT
                </Text>


            </View>
            <View className='flex justify-center items-center space-y-2'>
                <Image
                source={require('../assets/avatar.png')}
                style={{height:hp(6), width:hp(6) }}
                className='rounded-full'
                />
                <View className='flex justify-center items-center bg-neutral-200 rounded-full border-[3px] border-neutral-300'
                style={{height:hp(5.5),width:hp(5.5)}}
                >
                <Ionicons name="notifications" size={hp(3)} color="gray" />
                </View>
            </View>

        </View>
        <View>
            <ImageSlider/>
        </View>

        <View>
            <BodyParts/>
        </View>
        </SafeAreaView>
  )
}