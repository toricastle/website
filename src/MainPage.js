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

import heart from "../../my-app/src/photos/hnb.png";

import gen from "../../my-app/src/photos/lol1.png";
import robotnb from "../../my-app/src/photos/robot1.png";
import leaves from "../../my-app/src/photos/le.JPG";
import li from "../../my-app/src/photos/li.png";
import email from "../../my-app/src/photos/email.png";
import res from "../../my-app/src/photos/Resume.pdf";
import life from "../../my-app/src/photos/life.png";
import k from "../../my-app/src/photos/kon.png";
import game from "../../my-app/src/photos/game1.png";
import AM from "../../my-app/src/AboutMe";
import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainPage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* INTRO */}
        <ImageBackground style={styles.nameBox} source={leaves}>
          <View style={styles.threeTexts}>
            <Text style={styles.nameText}>Hi, I'm Victoria</Text>
            <View style={styles.flexDirRow}>
              <Text style={styles.nameText2}>An aspiring </Text>
              <Text style={styles.nameText22}>Software Engineer</Text>
            </View>

            <Text style={styles.nameText3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <View style={styles.menuBox}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    style={hovered ? styles.menuTextHover : styles.menuText}
                    onPress={() => {
                      Linking.openURL(AM).catch((err) =>
                        console.error("Couldn't load page", err)
                      );
                    }}
                  >
                    About me
                  </TouchableOpacity>
                )}
              </Hoverable>

              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    style={hovered ? styles.menuTextHover : styles.menuText}
                    onPress={() => {
                      OpenAnything.Pdf(res);
                    }}
                  >
                    Resume
                  </TouchableOpacity>
                )}
              </Hoverable>
            </View>
          </View>
        </ImageBackground>

        {/* MENU BOX */}
        <View style={styles.column1}>
          <Text style={styles.eduText}> Education:</Text>
          <View style={styles.mTop}>
            <Text style={styles.text2}>Northeastern University (May 2024)</Text>
          </View>
          <Text style={styles.text2}>
            Candidate For Bachelor Of Computer Science
          </Text>
          <Text style={styles.text2}>
            Concentration in Human-Centered Computing
          </Text>
          <View style={styles.mTop2}>
            <Text style={styles.text22}>Relevant Courses:</Text>
            <Text style={styles.text2}>
              Fundamentals of Computer Science 1&2, Object-Oriented Design,
              Algorithms and Data, Human Computer Interaction, Computer Systems,
              Discrete Structures, Mathematics of Data Models, Foundations of
              Cybersecurity, Tech and Human values.
            </Text>
          </View>

          <Text style={styles.techText}> Technical skills:</Text>
          {/* 2 VIEW IN 1  */}
          <View style={styles.allSkills}>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> React Native</Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Java </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>

            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Git </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Python </Text>
              </View>
              <View style={styles.techBoxB}></View>
              <View style={styles.techBoxGreyB}></View>
            </View>

            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Linux </Text>
              </View>
              <View style={styles.techBoxB}></View>
              <View style={styles.techBoxGreyB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> C </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Adobe XD </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Adobe Illustrator </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> UI/UX Design </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>

            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Figma </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Premiere Pro </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
          </View>
        </View>
        {/* EXPERIENCE/PROJECTS */}
        <View>
          <Text style={styles.title}> My work:</Text>
        </View>
        <View style={styles.workBox}>
          <View style={styles.flexDirCol}>
            <Hoverable onPress={() => navigation.navigate("Generate")}>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover2 : styles.withoutHover2}
                    source={gen}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <View style={styles.lexDirCol}>
              <Text> Project Management &</Text>
              <Text style={styles.marg}>Software Engineering </Text>
            </View>
          </View>

          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover3 : styles.withoutHover3}
                    source={robotnb}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Text> Research </Text>
          </View>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover7 : styles.withoutHover7}
                    source={k}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Text style={styles.workTextMargin}> Translator </Text>
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
              <Text style={styles.workTextMargin}> Project Management,</Text>
              <Text> Website Design & Volunteering</Text>
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

            <Text style={styles.workTextMargin2}> Game Design </Text>
          </View>
        </View>
        <View style={styles.menuBox2}>
          {/* <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity>
                <Image
                  style={hovered ? styles.withHover4 : styles.withoutHover4}
                  source={game}
                />
              </TouchableOpacity>
            )}
          </Hoverable> */}

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
                  style={hovered ? styles.withHoverIn : styles.withoutHoverIn}
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

          {/* <TouchableOpacity
            onPress={() => {
              OpenAnything.Email("vikawb02@gmail.com");
            }}
          >
            <Image style={styles.contactLogo2} source={email} />
          </TouchableOpacity> */}
        </View>
        <Text style={styles.marginT}> Copyright © 2021 Victoria Brennick </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contactLogo: {
    width: 35,
    height: 35,
    // alignItems: "center",
    // justifyContent: "center",
  },
  contactLogo2: {
    width: 43 * 1.1,
    height: 30 * 1.1,
    marginRight: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  withoutHover: {
    width: 190,
    height: 180,
    marginTop: 15,
  },
  withHover: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 190,
    height: 180,
    marginTop: 15,
  },
  withoutHover7: {
    width: 205,
    height: 180,
    marginTop: 26,
    marginLeft: 19,
  },
  withHover7: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 205,
    height: 180,
    marginTop: 26,
    marginLeft: 19,
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
    width: 170,
    height: 230,
    // marginTop: 15,
  },
  withHover3: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 170,
    height: 230,
    // marginTop: 15,
  },
  mTop: {
    marginTop: 10,
  },
  mTop2: {
    marginTop: 6,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: windowHeight + 575,
  },
  nameBox: {
    margin: 0,
    alignSelf: "flex-start",
    height: windowHeight - 70,
    width: (windowWidth * 3.75) / 6,
    padding: 10,
    alignItems: "center",
  },
  threeTexts: {
    alignItems: "center",
    marginTop: windowHeight / 2 - 200,
    flex: "column",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 55,
    alignSelf: "center",
    alignItems: "center",
    // FONT !!!!!
    fontFamily: "Roboto-Bold",
    // FONT !!!!!
  },
  nameText2: {
    fontWeight: "bold",
    fontSize: 55,
    marginTop: -2,
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
  },
  nameText22: {
    fontWeight: "bold",
    fontSize: 55,
    marginTop: -2,
    alignSelf: "center",
    color: "green",
    fontFamily: "Roboto-Bold",
  },
  nameText3: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 30,
    alignSelf: "center",
    margin: 80,
    fontFamily: "Roboto-Bold",
  },
  menuBox: {
    // backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: windowWidth / 3,
    padding: 10,
    marginTop: -40,
  },
  menuBox2: {
    // backgroundColor: "purple",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: windowWidth / 7,
    padding: 10,
    marginTop: 110,
    marginRight: -20,
    alignItems: "center",
  },
  workBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 195,
    width: (windowWidth * 36) / 40,
    marginTop: 60,
  },
  workDescriptionsBox: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-evenly",
    //height: windowHeight / 4,
    width: (windowWidth * 36) / 40,
    marginTop: 50,
  },
  menuText: {
    fontSize: 27,
    fontWeight: "bold",
    borderRadius: 9,
    borderWidth: 1,
    padding: 8,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    fontFamily: "Roboto-Bold",
  },

  menuTextHover: {
    fontSize: 27,
    fontWeight: "bold",
    borderRadius: 9,
    borderWidth: 1,
    padding: 8,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 12,
    shadowOpacity: 0.6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    justifyContent: "flex-end",
    width: 1000,
    //alignSelf: "center",
    //alignItems: "center",
    marginTop: 115,
    fontFamily: "Roboto-Bold",
  },
  titleContact: {
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 75,
  },
  column1: {
    flex: "column",
    backgroundColor: "#d3d3d3", // a darker background color
    // backgroundColor: "#f5f5f5", // a lightter background color
    position: "absolute",
    top: 20,
    right: 35,
    width: 490,
    borderRadius: 13,
    paddingLeft: 11,
    paddingRight: 11,
    paddingBottom: 20,
  },
  row1: {
    marginTop: 10,
    marginLeft: 20,
    width: 400,
    flexDirection: "row",
    // backgroundColor: "green",
  },
  eduText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "Roboto-Bold",
  },
  text2: {
    fontSize: 17,
    paddingLeft: 20,
  },
  text22: {
    fontSize: 17,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  techText: {
    marginTop: 17,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  techBoxGrey: {
    // GREY
    height: 27,
    width: 90,
    backgroundColor: "#dcdcdc",
  },
  techBox: {
    // DARK GREEN
    height: 27,
    width: 190,
    backgroundColor: "#2e8b57",
  },

  techBoxGreyB: {
    // GREY
    height: 27,
    width: 150,
    backgroundColor: "#dcdcdc",
  },
  techBoxB: {
    // DARK GREEN
    height: 27,
    width: 130,
    backgroundColor: "#2e8b57",
  },

  techBoxGreyBB: {
    // GREY
    height: 27,
    width: 190,
    backgroundColor: "#dcdcdc",
  },
  techBoxBB: {
    // DARK GREEN
    height: 27,
    width: 90,
    backgroundColor: "#2e8b57",
  },
  techBoxSkillWithName: {
    // LIGHT GREEN
    height: 27,
    width: 130,
    backgroundColor: "#3cb371",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  skillText: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  level: {
    width: 130,
    justifyContent: "flex-end",
    position: "absolute",
    top: 275,
    right: -56,
    color: "#dcdcdc",
  },
  flexDirRow: {
    flexDirection: "row",
  },
  flexDirCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  allSkills: {
    marginTop: 10,
  },
  marg: {
    marginLeft: 6,
  },
  marg2: {
    marginLeft: 88,
  },
  marginT: {
    marginTop: 13,
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
  workTextMargin: {
    marginTop: 23,
  },
  workTextMargin2: {
    marginTop: 23,
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
});

export default MainPage;
