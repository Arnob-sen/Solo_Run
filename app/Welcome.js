import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated , { FadeIn, FadeInDown, FadeOut }  from 'react-native-reanimated';
import { useRouter } from 'expo-router';
function WelcomeScreen({navigation}) {
    return(
    <View className='flex-1 flex justify-end' >
      
      <StatusBar style="light" />
      <Image className='h-full w-full absolute' source={require('../assets/welcome.png')} />
      <LinearGradient
      colors={['transparent','#18181b']}
      style={{width:wp(100),height:hp(70)}}
      start={{x:0.5, y:0}}
      end={{x:0.5,y:0.8}}
      className='flex justify-end pb-12 space-y-8'
      >

        <Animated.View entering={FadeInDown.delay(500).springify()} className='flex items-center '>
          <Text className='text-white font-bold -tracking-wide' style={{fontSize:hp(5)}}>
            Best <Text className='text-rose-500'> Worktouts</Text>
          </Text>
          <Text className='text-white font-bold -tracking-wide' style={{fontSize:hp(5)}}>
            For you
          </Text>
        </Animated.View>
         <Animated.View entering={FadeInDown.delay(600).springify()}>
    <TouchableOpacity
    onPress={()=>navigation.navigate('Home')}
    style={{height:hp(7),width:wp(80)}}
    className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
    >
      <Text style={{fontSize:hp(3)}} className='text-white font-bold tracking-widest'>
        Start Now!
      </Text>


    </TouchableOpacity>

        </Animated.View>


      </LinearGradient>
    </View>
  );
}
export default WelcomeScreen