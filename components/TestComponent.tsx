import {Text, View} from "react-native";
import {SparklesIcon} from "react-native-heroicons/solid";
import Logo from "../assets/logos/Secondary_Logo/KGG_SecondaryLogo_Black_RGB.svg"
import {SvgUri} from "react-native-svg";

const TestComponent: React.FC = () => {
    return (
        <View>
            <Text>Test Component Ardit</Text>
            <SparklesIcon height={50} width={50} color={"#000000"}/>
            <SvgUri
                width="50"
                height="50"
                uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
            />
            <Logo width={200} height={200} fill={'red'}/>
        </View>
    );
}


export default TestComponent;