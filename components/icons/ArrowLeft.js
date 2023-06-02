import Svg, { Path } from "react-native-svg";

const ArrowLeft = ({focused}) => {
    const stroke = focused ? '#0096FF' : '#212121';
    return (
        <Svg 
            width={24}
            height={24}
            viewBox="0 0 24 24"
            >
            <Path d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
};  

export default ArrowLeft;