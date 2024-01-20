// import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { FetchExercisesByBodypart } from '../api/ExerciseDB';
// import { demo } from '../constants';
// import { StatusBar } from 'expo-status-bar';
// import { router } from 'expo-router';
// import { useRouter,useLocalSearchParams } from 'expo-router';
// 
// const router =useRouter();
// const item=useLocalSearchParams();
// console.log('get data',item);
// export default function Exercises() {
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
    

//     return (
//         <View>
//             <Text>Exercises</Text>
//             <TouchableOpacity 
            
//             // onPress={()=>router.back()}
//             >
//                 <Text>Go Back</Text>
//             </TouchableOpacity>

//         </View>
//     )

// }
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

// import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { FetchExercisesByBodypart } from '../api/ExerciseDB';
// import { demo } from '../constants';
// import { StatusBar } from 'expo-status-bar';


// export default function Exercises() {
//     const navigation=useNavigation();
// const item=useLocalSearchParams();
// console.log('get data',item);
//      return (
//         <View>
//             <Text>Exercises</Text>
//             <TouchableOpacity 
            
//             onPress={()=>navigation.navigate('Home')}
//             >
//                 <Text>Go Back</Text>
//             </TouchableOpacity>

//         </View>
//     )

// }
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FetchExercisesByBodypart } from '../api/ExerciseDB';
import { demo } from '../constants';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ExerciseList from './ExerciseList';

export default function Exercises() {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    console.log('get data', item);
    const [exercise, setExercise] = useState(demo);
    
    useEffect(() => {
        // if(item) getExercises(item.name);
    }, [item]);

    useEffect(() => {
        console.log(exercise);
    }, [exercise]);

    const getExercises = async (bodyPart) => {
        let data = await FetchExercisesByBodypart(bodyPart)
        console.log('get data:', data)
        setExercise(data);
    }

    return (
       <ScrollView>
        <StatusBar style="auto" />
        <Image
        source={item.image} 
        style={{width:wp(100), height:hp(45)}}
        className='rounded-b-[40px]'
        />
        <TouchableOpacity
        className='bg-rose-500 mx-4 rounded-full absolute flex justify-center items-center pr-1'
        style={{height:hp(5.5),width:hp(5.5),marginTop:hp(2)}}
        onPress={()=>navigation.navigate('Home')}
        >
            <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity>
        <View className='mx-4 space-y-4 mt-4'>
            <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>
                {item.name} Exercises
            </Text>
            <View className='mb-10'>
                <ExerciseList data={exercise}/>
            </View>
        </View>
       </ScrollView>
    )
}

// export default function Exercises() {
//     const navigation = useNavigation();
//     const route = useRoute();
//     const { item } = route.params;
//     const [exercise, setExercise] = useState([]);
  
//     useEffect(() => {
//       if (item) getExercises(item.name);
//     }, [item]);
  
//     useEffect(() => {
//       console.log(exercise);
//     }, [exercise]);
  
//     const getExercises = async (bodyPart) => {
//       try {
//         const data = await FetchExercisesByBodypart(bodyPart);
//         setExercise(data);
//       } catch (error) {
//         console.error('Error fetching exercises:', error);
//       }
//     };
  
//     return (
//       <ScrollView>
//         <StatusBar style="auto" />
//         {item.image && typeof item.image === 'object' && item.image.hasOwnProperty('require') ? (
//           <Image source={item.image} style={{ width: '100%', height: 200 }} />
//         ) : null}
//         <TouchableOpacity
//           className='bg-rose-500 mx-4 rounded-full absolute flex justify-center items-center pr-1'
//           style={{ height: 50, width: 50, marginTop: 20 }}
//           onPress={() => navigation.navigate('Home')}>
//           <Ionicons name="caret-back-outline" size={30} color="white" />
//         </TouchableOpacity>
//         <View style={{ margin: 20 }}>
//           <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
//             {item.name} Exercises
//           </Text>
//           <ExerciseList data={exercise} />
//         </View>
//       </ScrollView>
//     );
//   }