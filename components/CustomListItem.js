import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            "https://thumbs.dreamstime.com/b/mouse-face-head-body-kawaii-animal-cute-cartoon-funny-baby-character-black-contour-silhouette-doodle-linear-sketch-pink-cheeks-170791163.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontweight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          ABC
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
