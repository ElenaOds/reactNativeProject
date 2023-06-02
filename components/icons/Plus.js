import Svg, { Path } from "react-native-svg";
import { View } from "react-native";

const Plus = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 40, borderRadius: 20, backgroundColor: '#FF6C00' }}>
            <Svg 
              width={14}
              height={14}
              viewBox="0 0 14 14"
              >
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z" fill="white"/>
            </Svg>
        </View>
    );
};

export default Plus;