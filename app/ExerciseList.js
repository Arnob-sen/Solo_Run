import { View, Text } from 'react-native'
import React from 'react'
import { FlatList,TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen'
export default function ExerciseList({data}) {
  return (
    <View>
      
    <FlatList
    data={data}
    keyExtractor={item => item.name}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:60 ,paddingTop:20}}
    renderItem={({item,index})=><ExerciseCard  item={item} index={index}/>}
    columnWrapperStyle={{justifyContent:'space-between'}}
    removeClippedSubviews={false}
    />


    </View>
  )
}
const ExerciseCard=({item,index})=>{
    const navigation=useNavigation()
    return(
        <View>
<TouchableOpacity className='flex py-3 space-y-2'
onPress={()=>navigation.navigate('ExerciseDetails',{item})}
>
    
    <View 
    className='bg-neutral-200 shadow rounded-[25px]'
    >
        <Image
        source={{uri:item.gifUrl}}
        contentFit='cover'
        style={{width:wp(44), height:wp(52) }}
        className='rounded-[25px]'
        />

        
    </View>
    <Text style={{fontSize:hp(1.7)}}
    className='text-neutral-700 font-semibold ml-1 tracking-wide'
    >
        {
            item?.name?.length>20?item.name.slice(0,20)+'...':item.name
        }

    </Text>

</TouchableOpacity>

        </View>
       
    )
}
// import { View, Text } from 'react-native'
// import React from 'react'
// import { FlatList,TouchableOpacity } from 'react-native'
// import { Image } from 'expo-image'
// // import { Image } from 'react-native-expo-image-cache'
// import { useNavigation } from '@react-navigation/native'
// import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen'
// export default function ExerciseList({ data }) {
//     const navigation = useNavigation();
  
//     // Function to filter data based on the selected body part
//     const filterData = (selectedBodyPart) => {
//       return data.filter((item) => item.bodyPart === selectedBodyPart);
//     };
  
//     return (
//       <View>
       
//         <FlatList
//           data={filterData('cardio')} 
//           keyExtractor={(item) => item.name}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
//           renderItem={({ item, index }) => <ExerciseCard item={item} index={index} />}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           removeClippedSubviews={false}
//         />
//       </View>
//     );
//   }
  
//   const ExerciseCard = ({ item, index }) => {
//     const navigation = useNavigation();
  
//     return (
//       <TouchableOpacity
//         style={{ flex: 1, paddingVertical: hp(3), paddingHorizontal: wp(2) }}
//         onPress={() => navigation.navigate('ExerciseDetails', { item })}>
//         <View style={{ backgroundColor: 'rgba(170, 170, 170, 0.7)', shadowColor: '#000', borderRadius: 25, overflow: 'hidden', flex: 1 }}>
//           <Image
//             source={{ uri: item.gifUrl }}
//             contentFit="cover"
//             style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
//           />
//         </View>
//         <Text style={{ fontSize: hp(1.7), color: '#333', fontWeight: '600', marginTop: 5 }}>
//           {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
// ExerciseList.js
// ExerciseList.js
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const ExerciseCard = ({ item, index }) => {
//   const navigation = useNavigation();

//   return (
//     <TouchableOpacity
//       style={{ flex: 1, padding: hp(2), alignItems: 'center' }}
//       onPress={() => navigation.navigate('ExerciseDetails', { item })}
//     >
//       <View style={{ backgroundColor: 'lightgray', borderRadius: hp(2), overflow: 'hidden' }}>
//         <Image
//           source={{ uri: item.gifUrl }}
//           style={{ width: wp(44), height: wp(52) }}
//         />
//       </View>
//       <Text style={{ fontSize: hp(1.7), marginTop: hp(1) }} numberOfLines={2}>
//         {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// const ExerciseList = ({ data }) => {
//   console.log('Data in ExerciseList:', data); // Log data to check

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item.name}
//       numColumns={2}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
//       renderItem={({ item, index }) => <ExerciseCard item={item} index={index} />}
//       columnWrapperStyle={{ justifyContent: 'space-between' }}
//       removeClippedSubviews={false}
//     />
//   );
// };



// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { FlatList } from 'react-native';
// import { Image } from 'expo-image';
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// export default function ExerciseList({ data }) {
//   const navigation = useNavigation();

//   // Assuming you have a state to store the selected body part
//   const [selectedBodyPart, setSelectedBodyPart] = React.useState(''); 

//   // Filter exercises based on the selected body part
//   const filteredExercises = data.filter((exercise) => exercise.bodyPart === selectedBodyPart);

//   return (
//     <View>
//       <FlatList
//         data={filteredExercises}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
//         renderItem={({ item, index }) => <ExerciseCard item={item} index={index} />}
//         columnWrapperStyle={{ justifyContent: 'space-between' }}
//         removeClippedSubviews={false}
//       />
//     </View>
//   );
// }

// const ExerciseCard = ({ item, index }) => {
//   const navigation = useNavigation();

//   return (
//     <View>
//       <TouchableOpacity
//         className="flex py-3 space-y-2"
//         onPress={() => navigation.navigate('ExerciseDetails', { item })}
//       >
//         <View className="bg-neutral-200 shadow rounded-[25px]">
//           <Image
//             source={{ uri: item.gifUrl }}
//             contentFit="cover"
//             style={{ width: wp(44), height: wp(52) }}
//             className="rounded-[25px]"
//           />
//         </View>
//         <Text
//           style={{ fontSize: hp(1.7) }}
//           className="text-neutral-700 font-semibold ml-1 tracking-wide"
//         >
//           {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
