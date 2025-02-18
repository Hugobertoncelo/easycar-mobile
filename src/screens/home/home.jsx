import { ImageBackground, Text } from "react-native";
import icons from "../../constants/icons.js";

function Home() {
  return (
    <ImageBackground
      source={icons.bg}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
    ></ImageBackground>
  );
}

export default Home;
