import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Box } from "native-base";

const Display = (props) => {
  return (
    <Box
      flex={0.6}
      justifyContent="flex-end"
      alignItems="flex-end"
      pr={3}
      pb={3}
      bg="#FC7F4A"
      height={150}
      width="340"
      rounded="xl"
      mb={5}
    >
      <Text style={{ fontSize: 36, color: "#fff", paddingBottom: 20 }}>
        {props.count}
      </Text>
      <TouchableOpacity onPress={() => props.setNumber({ count: 0 })}>
        <Text style={{ textAlign: "right", fontSize: 20, color: "#ffff" }}>
          Clear
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Display;
