import React, {useEffect, useRef} from "react";
import {Animated} from "react-native";

const SlideUpView = (props) => {
    const slideAni = useRef(new Animated.Value(props.fromValue)).current; // Initial value for opacity: 0
    useEffect(() => {
        Animated.timing(slideAni, {
            toValue: props.toValue,
            duration: props.duration,
            useNativeDriver: true,
        }).start();
    }, [slideAni]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                transform: [{translateY: slideAni}], // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};
export default SlideUpView;

// You can then use your `FadeInView` in place of a `View` in your components:
