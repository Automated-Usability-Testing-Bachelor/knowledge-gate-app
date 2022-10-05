import {Text, View} from "react-native";
import { SparklesIcon } from "react-native-heroicons/solid";
import logo from "../assets/logos/Primary_Logo/KGG_PrimaryLogo_Black_RGB.svg";
import Svg, {SvgUri, SvgXml} from "react-native-svg";

function TestComponent() {
    return (
        <View>
            <Text>Test Component</Text>
            <SparklesIcon height={50} width={50} color={"#000000"}/>
            <SvgUri
                width="50"
                height="50"
                uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
            />
        </View>
    );
}


export default TestComponent;