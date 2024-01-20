import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { bodyParts } from '../constants';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { demo } from '../constants';
import ExerciseList from './ExerciseList';
// import { useRouter } from 'expo-router';
export default function BodyParts() {
  return (
 <View className='mx-3'>
   <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700' >Exercises</Text>
 <FlatList
 data={bodyParts}
 keyExtractor={item => item.name}
 numColumns={2}
 showsVerticalScrollIndicator={false}
 contentContainerStyle={{paddingBottom:50 ,paddingTop:20}}
 renderItem={({item,index})=><BodyPartCard  item={item} index={index}/>}
 columnWrapperStyle={{justifyContent:'space-between'}}
 removeClippedSubviews={false}
 />


 </View>
)
}
// const BodyPartCard=({item,index})=>{

//   return(
//     <View>
//       <Text>hello</Text>
//     </View>
//   )
// }


  // const router=useRouter();
//   return (
//     <View className='mx-3'>
//       <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700' >Exercises</Text>
//     <FlatList
//     data={bodyParts}
//     keyExtractor={item => item.name}
//     numColumns={2}
//     showsVerticalScrollIndicator={false}
//     contentContainerStyle={{paddingBottom:50 ,paddingTop:20}}
//     renderItem={({item,index})=><BodyPartCard router={router} item={item} index={index}/>}
//     columnWrapperStyle={{justifyContent:'space-between'}}
//     removeClippedSubviews={false}
//     />


//     </View>
//   )
// }
const BodyPartCard=({item,index})=>{
  const navigation=useNavigation()
  return(
      <View>
          <TouchableOpacity style={{width:wp(44),height:wp(52)}}
           onPress={() => navigation.navigate('Exercises',{item})}
          // onPress={()=>router.push({pathname:'/Exercises',params:item})}
          className='flex justify-end p-4 mb-4'
          >
              <Image
              source={item.image}
              resizeMode='cover'
              style={{width:wp(44),height:wp(52) }}
              className='rounded-[35px] absolute'
              />
      <LinearGradient
      colors={['transparent','rgba(0,0,0,0.9)']}
      style={{width:wp(44),height:hp(15)}}
      start={{x:0.5,y:0}}
      end={{x:0.5,y:1}}
      className='absolute bottom-0 rounded-b-[35px]'

          />
          <Text
          style={{fontSize:hp(2.3)}}
          className='text-white font-semibold text-center tracking-wide'
          >{item?.name}</Text>


          </TouchableOpacity>
      </View>
  )
}

// // const BodyPartCard = ({ item, index }) => {
// //     return (
// //         <View style={{ marginBottom: 4 }}>
// //             <TouchableOpacity style={{ width: wp(44), height: wp(52), justifyContent: 'flex-end', padding: 4 }}>
// //                 <Image
// //                     source={item.image}
// //                     resizeMode='cover'
// //                     style={{ width: wp(44), height: wp(52), borderRadius: 35, position: 'absolute' }}
// //                 />
// //             </TouchableOpacity>
// //         </View>
// //     )
// // }
// export default function BodyParts() {
//      return (
//     <View className='mx-3'>
//       <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700' >Exercises</Text>
//     <FlatList
//     data={bodyParts}
//     keyExtractor={item => item.name}
//     numColumns={2}
//     showsVerticalScrollIndicator={false}
//     contentContainerStyle={{paddingBottom:50 ,paddingTop:20}}
//     renderItem={({item,index})=><BodyPartCard  item={item} index={index}/>}
//     columnWrapperStyle={{justifyContent:'space-between'}}
//     removeClippedSubviews={false}
//     />


//     </View>
//   )
// }
// const BodyPartCard=({item,index})=>{
//   const navigation=useNavigation()
//   return(
//       <View>
//           <TouchableOpacity style={{width:wp(44),height:wp(52)}}
//            onPress={() => navigation.navigate('Exercises',{item})}
//           // onPress={()=>router.push({pathname:'/Exercises',params:item})}
//           className='flex justify-end p-4 mb-4'
//           >
//               <Image
//               source={item.image}
//               resizeMode='cover'
//               style={{width:wp(44),height:wp(52) }}
//               className='rounded-[35px] absolute'
//               />
//       <LinearGradient
//       colors={['transparent','rgba(0,0,0,0.9)']}
//       style={{width:wp(44),height:hp(15)}}
//       start={{x:0.5,y:0}}
//       end={{x:0.5,y:1}}
//       className='absolute bottom-0 rounded-b-[35px]'

//           />
//           <Text
//           style={{fontSize:hp(2.3)}}
//           className='text-white font-semibold text-center tracking-wide'
//           >{item?.name}</Text>


//           </TouchableOpacity>
//       </View>
//   )
// }
// import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { bodyParts } from '../constants';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function BodyParts() {
//   const navigation = useNavigation();

//   const navigateToExercises = (item) => {
//     navigation.navigate('Exercises', { item });
//   };

//   return (
//     <View className='mx-3'>
//       <Text style={{ fontSize: hp(3) }} className='font-semibold text-neutral-700'>
//         Exercises
//       </Text>
//       <FlatList
//         data={bodyParts}
//         keyExtractor={(item) => item.name}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
//         renderItem={({ item, index }) => <BodyPartCard item={item} index={index} onPress={() => navigateToExercises(item)} />}
//         columnWrapperStyle={{ justifyContent: 'space-between' }}
//         removeClippedSubviews={false}
//       />
//     </View>
//   );
// }

// const BodyPartCard = ({ item, index, onPress }) => {
//   return (
//     <View>
//       <TouchableOpacity
//         style={{ width: wp(44), height: wp(52) }}
//         onPress={onPress}
//         className='flex justify-end p-4 mb-4'>
//         <Image source={item.image} resizeMode='cover' style={{ width: wp(44), height: wp(52) }} className='rounded-[35px] absolute' />
//         <LinearGradient
//           colors={['transparent', 'rgba(0,0,0,0.9)']}
//           style={{ width: wp(44), height: hp(15) }}
//           start={{ x: 0.5, y: 0 }}
//           end={{ x: 0.5, y: 1 }}
//           className='absolute bottom-0 rounded-b-[35px]'
//         />
//         <Text
//           style={{ fontSize: hp(2.3) }}
//           className='text-white font-semibold text-center tracking-wide'>
//           {item?.name}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const BodyPartCard=({item,index})=>{

//   return(
//     <View>
//       <Text>hello</Text>
//     </View>
//   )
// }


  // const router=useRouter();
//   return (
//     <View className='mx-3'>
//       <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700' >Exercises</Text>
//     <FlatList
//     data={bodyParts}
//     keyExtractor={item => item.name}
//     numColumns={2}
//     showsVerticalScrollIndicator={false}
//     contentContainerStyle={{paddingBottom:50 ,paddingTop:20}}
//     renderItem={({item,index})=><BodyPartCard router={router} item={item} index={index}/>}
//     columnWrapperStyle={{justifyContent:'space-between'}}
//     removeClippedSubviews={false}
//     />


//     </View>
//   )
// }


// // const BodyPartCard = ({ item, index }) => {
// //     return (
// //         <View style={{ marginBottom: 4 }}>
// //             <TouchableOpacity style={{ width: wp(44), height: wp(52), justifyContent: 'flex-end', padding: 4 }}>
// //                 <Image
// //                     source={item.image}
// //                     resizeMode='cover'
// //                     style={{ width: wp(44), height: wp(52), borderRadius: 35, position: 'absolute' }}
// //                 />
// //             </TouchableOpacity>
// //         </View>
// //     )
// // }
