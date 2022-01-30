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
import robotnb from "../../my-app/src/photos/robot1.png";
import k from "../../my-app/src/photos/kon.png";
import life from "../../my-app/src/photos/life.png";
import game from "../../my-app/src/photos/game1.png";
import pic from "../../my-app/src/photos/pic12.jpg";
import r from "../../my-app/src/photos/rag12.png";
import b from "../../my-app/src/photos/b4.png";
import kons from "../../my-app/src/photos/kons.png";
import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Translator extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Scontainert}>
        <View style={styles.containert}>
          <Image style={styles.logo1t} source={kons} />
          <Text style={styles.text1t}> My work @ Konstanta+</Text>
          {/* <Text style={styles.text22}>
            Designing Conversational Agents for healthcare and beyond
          </Text> */}
          <View style={styles.flexDirRowt}>
            <Text style={styles.text2t}>Konstanta's website: </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://pkbc.ru/").catch((err) =>
                  console.error("Couldn't load page", err)
                );
              }}
            >
              <Text style={styles.text3t}>https://pkbc.ru/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.descriptionViewt}>
            <Text style={styles.posTitleTextt}>Translator</Text>
            <Text style={styles.posTitleTextDatet}>(Sep 2018 - Mar 2020)</Text>

            <Text style={styles.descriptionTextt}>
              Constanta + is engaged in the design of compost sites, provides
              composting technology, has its own scientific department engaged
              in the development and production of microbiological fertilizers
              and biological products for composting for the purpose of
              processing organic agricultural waste into organic fertilizers and
              biological products for land reclamation from oil and chemical
              pollution.
            </Text>
          </View>
          <Text style={styles.smwTextt}>See more work:</Text>
          <View style={styles.workBoxt}>
            <View style={styles.flexDirColt}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover3t : styles.withoutHover3t
                      }
                      source={gene}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Generate </Text>
            </View>
            <View style={styles.flexDirColt}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover5t : styles.withoutHover5t
                      }
                      source={robotnb}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Research </Text>
            </View>
            <View style={styles.flexDirColt}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHovert : styles.withoutHovert}
                      source={life}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <View style={styles.flexDirColt}>
                <Text style={styles.marg1t}> Project Management,</Text>
                <Text>Website Design & Volunteering</Text>
              </View>
            </View>
            <View style={styles.flexDirColt}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover4t : styles.withoutHover4t
                      }
                      source={game}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text style={styles.marg1t}> Game Design </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.backViewt}>
            <Image style={styles.backImaget} source={b} />
            <Text style={styles.backTextt}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pict: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewt: {
    position: "absolute",
    top: 70,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  backImaget: {
    width: 27,
    height: 27,
  },
  backTextt: {
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 6,
  },
  logo1t: {
    width: 282,
    height: 110,
    marginTop: 30,
  },
  spacert: {
    width: 80,
    height: 100,
  },
  Scontainert: {
    height: windowHeight + 140,
    backgroundColor: "#f0f8ff",
  },

  containert: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  container2: {
    flexDirection: "row",
    width: 900,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 53,
  },
  text1t: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 19,
  },
  text22t: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  text2t: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
  },
  text3t: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
    color: "#0645AD",
  },
  flexDirRowt: {
    flexDirection: "row",
  },
  workBoxt: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 5,
  },

  flexDirColt: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHovert: {
    width: 180,
    height: 180,
    marginTop: 25,
  },
  withHovert: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 180,
    height: 180,
    marginTop: 25,
  },
  withoutHover2t: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3t: {
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withHover3t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withoutHover4t: {
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withHover4t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withoutHover5t: {
    width: 200,
    height: 230,
    marginTop: 10,
  },
  withHover5t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 230,
    marginTop: 10,
  },
  posTitleTextt: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 20,
    // color: "#FE4A71",
  },
  posTitleTextDatet: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    //marginTop: ,
  },
  descriptionViewt: {
    width: 370,
    marginTop: 20,
  },
  descriptionTextt: {
    fontSize: 14,
    marginTop: 12,
  },

  smwTextt: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 65,
  },
  posTextt: {
    color: "#FE4A71",
  },
  marg1t: {
    marginTop: 12,
  },
});

export default Translator;
