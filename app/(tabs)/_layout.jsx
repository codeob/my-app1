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
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 16,
          marginBottom: 24,
          height: 64,
          paddingBottom: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          borderWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarItemStyle: {
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 4,
        },
        tabBarActiveTintColor: 'violet',
        tabBarInactiveTintColor: 'rgba(128, 128, 128, 0.6)',
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
                padding: 6,
                borderRadius: 12,
                backgroundColor: focused ? 'rgba(128, 0, 128, 0.1)' : 'transparent',
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
                padding: 6,
                borderRadius: 12,
                backgroundColor: focused ? 'rgba(128, 0, 128, 0.1)' : 'transparent',
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
                padding: 6,
                borderRadius: 12,
                backgroundColor: focused ? 'rgba(128, 0, 128, 0.1)' : 'transparent',
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
                padding: 6,
                borderRadius: 12,
                backgroundColor: focused ? 'rgba(128, 0, 128, 0.1)' : 'transparent',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;