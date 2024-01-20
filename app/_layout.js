// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import { Stack } from 'expo-router'

// export default function _layout {
  
//     return (
//       <Stack 
//       screenOptions={{
//         headerShown:false
//       }}
//       >
//         <Stack.Screen
//         name='Exercises' options={{presentation:'fullScreenModal'}}/>
//       </Stack>
//     )
  
// }
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function _layout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Exercises'
                options={{presentation:'fullScreenModal'}}
            />
            {/* Other Stack.Screen components go here */}
        </Stack.Navigator>
    );
}

