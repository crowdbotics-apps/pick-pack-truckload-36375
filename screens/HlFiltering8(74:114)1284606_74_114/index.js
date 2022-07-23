import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_74_115}>
        <Text style={styles.Text_74_115}>
          Pick &amp; Pack &amp; Truck load{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f563c20a-cccf-48fb-98f0-642ca1d4b4b1"
        }}
        style={styles.ImageBackground_74_116}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_74_117}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("74_78"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bef6cfb8-b5d5-4488-992f-085b78d85ee9"
          }}
          style={styles.ImageBackground_74_118}
        />
        <View style={styles.View_74_121}>
          <Text style={styles.Text_74_121}>Back</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_74_122}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("27_48"))
        }
      >
        <View style={styles.View_74_123}>
          <Text style={styles.Text_74_123}>Menu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_74_124}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("74_168"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0bea029-8896-4aca-b147-677fc6b399e7"
          }}
          style={styles.ImageBackground_74_125}
        />
        <View style={styles.View_74_128}>
          <Text style={styles.Text_74_128}>Skip</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_74_129}>
        <Text style={styles.Text_74_129}>(5.1)</Text>
      </View>
      <View style={styles.View_74_130}>
        <View style={styles.View_74_131} />
      </View>
      <View style={styles.View_74_132} />
      <TouchableOpacity
        style={styles.TouchableOpacity_74_133}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("74_168"))
        }
      >
        <View style={styles.View_74_134} />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_74_115: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_74_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_74_116: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("9%")
  },
  TouchableOpacity_74_117: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_74_118: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_74_121: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_74_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_74_122: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("107%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_74_123: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_74_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_74_124: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_74_125: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_74_128: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_74_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_74_129: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_74_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.35200000762939454,
    textTransform: "none"
  },
  View_74_130: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_74_131: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_74_132: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("35%")
  },
  TouchableOpacity_74_133: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_74_134: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
