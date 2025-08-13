import { ScrollView, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="bg-black flex-1">
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        className="px-5"
      >
        <Image
          source={require("../../assets/Image1.jpeg")}
          className="w-40 h-40 mb-5"
        />
      </ScrollView>
    </View>
  );
}
