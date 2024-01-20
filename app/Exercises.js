import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FetchExercisesByBodypart } from '../api/ExerciseDB';
import { demo } from '../constants';
import { StatusBar } from 'expo-status-bar';
// 
export default function Exercises() {
//     const navigation=useNavigation();
//     const item=useLocalSearchParams();
//     const router=useRouter();
//     const [exercises,setExercises]=useState(demo)
   
//     useEffect(()=>{
//         //  if(item)getExercises(item.name);
//     },[item]);
//     const getExercises=async(bodypart)=>{
//         let data=await FetchExercisesByBodypart(bodypart)
//         console.log('get data:',data)
//     }
//   return (
//     <ScrollView>
//         <StatusBar style='light' />
//         <Image 
//         source={item.image}
//         />
//     </ScrollView>
//   )
    return (
        <Text>hello</Text>
    )
}
// import React, { useState, useEffect } from 'react';
// import { ScrollView, StatusBar, Image, TouchableOpacity, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { FetchExercisesByBodypart } from '../api/ExerciseDB';
// import { demo } from '../constants';
// import {widthPercentageToDP as wp, heightPercentageToDP0 as hp} from 'react-native-responsive-screen';

// const Stack = createStackNavigator();

// export default function Exercises() {
//     const navigation = useNavigation();
//     const route = useRoute();
//     const [exercises, setExercises] = useState(demo);
//     const item = route.params;

//     useEffect(() => {
//         if(item) getExercises(item.name);
//     }, [item]);

//     const getExercises = async (bodypart) => {
//         let data = await FetchExercisesByBodypart(bodypart);
//         setExercises(data);
//     }

//     return (
//         <ScrollView>
//             <StatusBar style="light" />
//             <Image 
//                 // source={item.image}
//                 style={{width: wp(100), height: hp(45)}}
//                 className="rounded-b-[40px]"
//             />
//             <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//                 className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
//                 style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
//             >
//                 <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
//             </TouchableOpacity>

//             {/* exercises */}
//             <View className="mx-4 space-y-3 mt-4">
//                 <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">
//                     {item.name} exercises
//                 </Text>
//                 <View className="mb-10">
//                     {/* <ExerciseList data={exercises} /> */}
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }
