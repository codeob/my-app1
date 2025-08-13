import { ImageBackground } from 'expo-image';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0f0D23', // bg-[#0f0D23]
          borderRadius: 9999, // rounded-full for cylindrical shape
          marginHorizontal: 16, // mx-4
          marginBottom: 24, // mb-6
          height: 64, // h-16
          paddingBottom: 0, // pb-0
          elevation: 8, // shadow-md
          shadowColor: '#000', // shadow-black
          shadowOffset: { width: 0, height: 4 }, // shadow-offset-y-4
          shadowOpacity: 0.3, // shadow-opacity-30
          shadowRadius: 8, // shadow-radius-8
          borderWidth: 0, // border-0
          position: 'absolute', // absolute
          bottom: 0, // bottom-0
          left: 0, // left-0
          right: 0, // right-0
          flexDirection: 'row', // flex flex-row
          alignItems: 'center', // items-center
          justifyContent: 'space-evenly', // justify-evenly
        },
        tabBarItemStyle: {
          height: '100%', // h-full
          justifyContent: 'center', // justify-center
          alignItems: 'center', // items-center
          paddingVertical: 4, // py-1
          flex: 1, // flex-1
        },
        tabBarActiveTintColor: 'violet', // text-violet-500
        tabBarInactiveTintColor: 'rgba(128, 128, 128, 0.6)', // text-gray-500/60
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="home"
              color={color}
              size={28}
              style={{
                padding: 8, // p-2
                borderRadius: 9999, // rounded-full
                backgroundColor: focused ? 'violet' : 'transparent', // bg-violet-500 when focused
                transform: focused ? [{ scale: 1.1 }] : [{ scale: 1 }], // scale-110 when focused
                transition: 'all 0.2s ease-in-out', // transition-all duration-200 ease-in-out
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="search"
              color={color}
              size={28}
              style={{
                padding: 8, // p-2
                borderRadius: 9999, // rounded-full
                backgroundColor: focused ? 'violet' : 'transparent', // bg-violet-500 when focused
                transform: focused ? [{ scale: 1.1 }] : [{ scale: 1 }], // scale-110 when focused
                transition: 'all 0.2s ease-in-out', // transition-all duration-200 ease-in-out
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="bookmark"
              color={color}
              size={28}
              style={{
                padding: 8, // p-2
                borderRadius: 9999, // rounded-full
                backgroundColor: focused ? 'violet' : 'transparent', // bg-violet-500 when focused
                transform: focused ? [{ scale: 1.1 }] : [{ scale: 1 }], // scale-110 when focused
                transition: 'all 0.2s ease-in-out', // transition-all duration-200 ease-in-out
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="person"
              color={color}
              size={28}
              style={{
                padding: 8, // p-2
                borderRadius: 9999, // rounded-full
                backgroundColor: focused ? 'violet' : 'transparent', // bg-violet-500 when focused
                transform: focused ? [{ scale: 1.1 }] : [{ scale: 1 }], // scale-110 when focused
                transition: 'all 0.2s ease-in-out', // transition-all duration-200 ease-in-out
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;