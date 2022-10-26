import { PixelRatio } from 'react-native'
import Colors from '../../constants/Colors'

const getFontSize = () => {
  if (PixelRatio.get() <= 3) {
    return 16
  }

  return 20
}

export default {
  headerStyle: {
    backgroundColor: Colors.warmGrey.color,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.blue.color
  },
  headerTitleStyle: {
    color: Colors.blue.color,
    fontFamily: 'Sans-SemiBold',
    fontSize: getFontSize()
  }
}
