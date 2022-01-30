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
import lb from "../../my-app/src/photos/lb1.png";
import l11 from "../../my-app/src/photos/l11.png";
import l22 from "../../my-app/src/photos/l22.png";
import l33 from "../../my-app/src/photos/l33.png";
import l44 from "../../my-app/src/photos/l44.png";
import l55 from "../../my-app/src/photos/l55.png";
import l66 from "../../my-app/src/photos/l66.png";
import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Lifeboat extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Scontainerl}>
        <View style={styles.containerl}>
          <Image style={styles.logo1l} source={lb} />
          <Text style={styles.text1l}> My work @ Lifeboat</Text>
          {/* <Text style={styles.text22}>
            Designing Conversational Agents for healthcare and beyond
          </Text> */}
          <View style={styles.flexDirRowl}>
            <Text style={styles.text2l}>Lifeboat's website: </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.lifeboatboston.org/").catch(
                  (err) => console.error("Couldn't load page", err)
                );
              }}
            >
              <Text style={styles.text3l}>https://www.lifeboatboston.org/</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text4l}>
            (This is not the website that was designed by my team!){" "}
          </Text>

          <View style={styles.container2l}>
            <View style={styles.descriptionViewl}>
              <Text style={styles.posTitleTextl}>Project Lead</Text>
              <Text style={styles.posTitleTextDatel}>
                (July 2021 - August 2021)
              </Text>
              <Text style={styles.descriptionTextl}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
            {/* IMAGE */}
            <View style={styles.spacerl}> </View>
            <Image style={styles.logoScreenl} source={l33} />
          </View>

          <View style={styles.container2l}>
            <View style={styles.descriptionViewl}>
              <Text style={styles.posTitleTextl}>Website Designer</Text>
              <Text style={styles.posTitleTextDatel}>
                (July 2021 - August 2021)
              </Text>
              <Text style={styles.descriptionTextl}>
                Lifeboat Boston is a developing non-profit organization based in
                the Fenway neighborhood that provides food assistance to
                community residents in several Boston neighborhoods twice a
                week. As part of an effort to integrate more voices and
                knowledge from community members into the work of this
                organization, students will draw upon skills in web design,
                marketing, health and nutrition, and food systems research to
                build a Community Food Board website (translation skills in
                Spanish or Russian will also be valuable for this project).
                Students interested in the development of non-profit
                organizations will research grant opportunities that would allow
                Lifeboat to expand their community mission to establish a soup
                kitchen and medical referral service site.
              </Text>
            </View>
            {/* IMAGE */}
            <View style={styles.spacerl}> </View>
            <Image style={styles.logoScreen2l} source={l22} />
          </View>

          <View style={styles.container2l}>
            <View style={styles.descriptionViewl}>
              <Text style={styles.posTitleTextl}>Volunteering</Text>
              <Text style={styles.posTitleTextDatel}>
                (July 2021 - August 2021)
              </Text>
              <Text style={styles.descriptionTextl}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
            {/* IMAGE */}
            <View style={styles.spacerl}> </View>
            <Image style={styles.logoScreenl} source={l11} />
          </View>

          <Text style={styles.smwTextl}>See more work:</Text>
          <View style={styles.workBoxl}>
            <View style={styles.flexDirColl}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover3l : styles.withoutHover3l
                      }
                      source={gene}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Generate </Text>
            </View>
            <View style={styles.flexDirColl}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover5l : styles.withoutHover5l
                      }
                      source={robotnb}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Research </Text>
            </View>
            <View style={styles.flexDirColl}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHoverl : styles.withoutHoverl}
                      source={k}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>

              <Text style={styles.marg1l}> Translator</Text>
            </View>
            <View style={styles.flexDirColl}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover4l : styles.withoutHover4l
                      }
                      source={game}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Game Design </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.backViewl}>
            <Image style={styles.backImagel} source={b} />
            <Text style={styles.backTextl}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  picl: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewl: {
    position: "absolute",
    top: 70,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  backImagel: {
    width: 27,
    height: 27,
  },
  backTextl: {
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 6,
  },
  logo1l: {
    width: 232,
    height: 80,
    marginTop: 24,
  },
  logoScreenl: {
    width: 700,
    height: 240,
    marginTop: 34,
  },
  logoScreen2l: {
    width: 700,
    height: 200,
    marginTop: 34,
  },
  spacerl: {
    width: 19,
    height: 100,
  },
  Scontainerl: {
    height: windowHeight + 760,
    backgroundColor: "#F2FDF7",
  },

  containerl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container2l: {
    flexDirection: "row",
    width: 800,
    alignItems: "center",
    justifyContent: "space-between",
    justifyContent: "center",
    marginTop: 17,
  },
  text1l: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 19,
  },
  text22l: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  text2l: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
  },
  text3l: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
    color: "#0645AD",
  },
  text4l: {
    // fontWeight: "bold",
    fontSize: 13,
    marginTop: 4,
  },
  flexDirRowl: {
    flexDirection: "row",
  },
  workBoxl: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 15,
  },

  flexDirColl: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHoverl: {
    width: 200,
    height: 170,
    marginTop: 30,
  },
  withHoverl: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 170,
    marginTop: 30,
  },
  withoutHover2l: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3l: {
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withHover3l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withoutHover4l: {
    width: 239,
    height: 180,
    marginTop: 38,
  },
  withHover4l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 239,
    height: 180,
    marginTop: 38,
  },
  withoutHover5l: {
    width: 200,
    height: 230,
    marginTop: 2,
  },
  withHover5l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 230,
    marginTop: 2,
  },
  posTitleTextl: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 20,
    color: "#245a36",
  },
  posTitleTextDatel: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    //marginTop: ,
  },
  descriptionViewl: {
    width: 370,
    marginTop: 20,
  },
  descriptionTextl: {
    fontSize: 14,
    marginTop: 12,
  },

  smwTextl: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 65,
  },
  posTextl: {
    color: "#FE4A71",
  },
  marg1l: {
    marginTop: 25,
  },
});

export default Lifeboat;
