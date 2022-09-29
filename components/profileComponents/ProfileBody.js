import {Text, View, StyleSheet} from "react-native";
import {BlackSansBody1, BlueSerifHeader2} from "../Texts/Headers";
import ReadMore from "react-native-read-more-text";


const AboutText = ({about}) => {
    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.readMore} onPress={handlePress}>
                Read more
            </Text>
        );
    }
    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={styles.readLess} onPress={handlePress}>
                Read less
            </Text>
        );
    }

    return (
        <View>
            <BlueSerifHeader2 text={"About"}/>
            <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
            >
                <Text style={styles.aboutText}>{about}</Text>
            </ReadMore>
        </View>
    );
}

function ProfileBody({text}) {
    return (
        <View style={styles.container}>
            <AboutText about={text.about}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    aboutText: {
        fontSize: 12,
        fontFamily: "Sans-Regular",
    },
    readMore: {
        fontSize: 14,
        color: "blue",
    },
    readLess: {
        fontSize: 14,
        color: "blue",
    }
});

export default ProfileBody;