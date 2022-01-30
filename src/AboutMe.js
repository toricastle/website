import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import * as OpenAnything from "react-native-openanything";

import li from "../../my-app/src/photos/li.png";
import email from "../../my-app/src/photos/email.png";
import r from "../../my-app/src/photos/rag12.png";
import b from "../../my-app/src/photos/b4.png";
import { Hoverable } from "react-native-web-hover";
import back from "../../my-app/src/photos/bg.jpg";
import pp from "../../my-app/src/photos/pp.jpg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class AboutMe extends React.Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          style={styles.backPic}
          resizeMode="repeat"
          source={back}
        >
          <View style={styles.container}>
            {/* <Text style={styles.aboutMeText}> About me </Text> */}
            {/* row container */}

            <View style={styles.textContainer}>
              <View style={styles.row1}>
                <Image style={styles.profilePic} source={pp} />
                <View style={styles.spacer}> </View>
                <View style={styles.allText}>
                  <Text style={styles.des}>
                    When I'm not coding, I'm hiking and out in nature. On this
                    page I added some pictures from my recent travels.
                  </Text>
                  <Text style={styles.des1}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.menuBox2}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL("https://google.com").catch((err) =>
                        console.error("Couldn't load page", err)
                      );
                    }}
                  >
                    <Image
                      style={
                        hovered ? styles.withHoverIn : styles.withoutHoverIn
                      }
                      source={li}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    onPress={() => {
                      OpenAnything.Email("vikawb02@gmail.com");
                    }}
                  >
                    <Image
                      style={hovered ? styles.withHoverE : styles.withoutHoverE}
                      source={email}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
            </View>
          </View>
        </ImageBackground>
        <TouchableOpacity style={styles.backView}>
          <Image style={styles.backImage} source={b} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backView: {
    position: "absolute",
    top: 70,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 27,
    borderWidth: 2,
  },
  backImage: {
    width: 27,
    height: 27,
  },
  backText: {
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 6,
  },
  containera: {
    display: "flex",
    alignItems: "center",
  },
  aboutMeText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  backPic: {
    height: windowHeight,
    width: windowWidth,
  },
  spacer: {
    height: 2,
    width: 30,
  },
  profilePic: {
    width: 190,
    height: 190,
    borderRadius: 190,
  },
  allText: {
    alignItems: "center",
    justifyContent: "center",
  },
  des: {
    width: 315,
  },
  des1: {
    width: 315,
    marginTop: 8,
  },
  textContainer: {
    backgroundColor: "white",
    height: 450,
    width: 665,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 150,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  withoutHoverIn: {
    width: 35,
    height: 35,
  },
  withHoverIn: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    width: 35,
    height: 35,
  },
  withoutHoverE: {
    width: 43,
    height: 30,
  },
  withHoverE: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 43,
    height: 30,
  },
  menuBox2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: windowWidth / 7,
    padding: 10,
    marginTop: -76,
    marginRight: -10,
    alignItems: "center",
  },
});

export default AboutMe;
