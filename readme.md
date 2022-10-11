
# Knowledge Gate App
By Simon, Markus and Ardit

## Tutorial Typescript

### Create component

```javascript
const name : React.FC = () => {
    return (
        <HTML/>
    )

} 

export default name 
```

### Add props

```javascript 


type Props = {
    onPress: ((event: GestureResponderEvent) => void)
    name: string
    isRight: boolean
}

export const name : React.FC<Props> = ({onPress, backgroundColor, isRight}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.touchable]}
                activeOpacity={0.6}
            >
                <View
                    style={[
                        styles.button,
                        {
                            backgroundColor: backgroundColor,
                        },
                    ]}
                >
                    {isRight
                        ? <ArrowRightIcon size={24} fill={Colors.red.color}/>
                        : <ArrowLeftIcon size={24} fill={Colors.red.color}/>
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
};

```

