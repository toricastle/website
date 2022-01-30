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

import gene from "../../my-app/src/photos/lol1.png";
import k from "../../my-app/src/photos/kon.png";
import life from "../../my-app/src/photos/life.png";
import game from "../../my-app/src/photos/game1.png";
import pic from "../../my-app/src/photos/pic12.jpg";
import r from "../../my-app/src/photos/rag12.png";
import b from "../../my-app/src/photos/b4.png";
import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class RAG extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Scontainer}>
        <View style={styles.container}>
          <Image style={styles.logo1} source={r} />
          <Text style={styles.text1}> My work @ RAG</Text>
          <Text style={styles.text22}>
            Designing Conversational Agents for healthcare and beyond
          </Text>
          <View style={styles.flexDirRow}>
            <Text style={styles.text2}>RAG's website: </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("http://relationalagents.com/index.html").catch(
                  (err) => console.error("Couldn't load page", err)
                );
              }}
            >
              <Text style={styles.text3}>
                http://relationalagents.com/index.html
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View style={styles.descriptionView}>
              <Text style={styles.posTitleText}>Research Assistant</Text>
              <Text style={styles.posTitleTextDate}>(May 2021 - Present)</Text>

              <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
            <View style={styles.spacer}> </View>
            <Image style={styles.pic} source={pic} />
          </View>
          <Text style={styles.smwText}>See more work:</Text>
          <View style={styles.workBox}>
            <View style={styles.flexDirCol}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHover3 : styles.withoutHover3}
                      source={gene}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Generate </Text>
            </View>
            <View style={styles.flexDirCol}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHover5 : styles.withoutHover5}
                      source={k}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Translator </Text>
            </View>
            <View style={styles.flexDirCol}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHover : styles.withoutHover}
                      source={life}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <View style={styles.flexDirCol}>
                <Text> Project Management,</Text>
                <Text>Website Design & Volunteering</Text>
              </View>
            </View>
            <View style={styles.flexDirCol}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHover4 : styles.withoutHover4}
                      source={game}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Game Design </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.backView}>
            <Image style={styles.backImage} source={b} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pic: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backView: {
    position: "absolute",
    top: 70,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
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
  logo1: {
    width: 440,
    height: 90,
  },
  spacer: {
    width: 80,
    height: 100,
  },
  Scontainer: {
    height: windowHeight + 240,
    backgroundColor: "#fffafa",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    width: 900,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 53,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 19,
  },
  text22: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  text2: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
  },
  text3: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
    color: "#0645AD",
  },
  flexDirRow: {
    flexDirection: "row",
  },
  workBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 5,
  },

  flexDirCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHover: {
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withHover: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withoutHover2: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3: {
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withHover3: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withoutHover4: {
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withHover4: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withoutHover5: {
    width: 200,
    height: 180,
    marginTop: 15,
  },
  withHover5: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 180,
    marginTop: 15,
  },
  posTitleText: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 20,
  },
  posTitleTextDate: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    //marginTop: ,
  },
  descriptionView: {
    width: 370,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 12,
  },

  smwText: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 65,
  },
});

export default RAG;
