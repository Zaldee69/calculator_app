import React from "react";
import { VStack, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const EqualComp = (props) => {
  return (
    <VStack flexDirection="row">
      <TouchableOpacity onPress={() => props.onPressHandle(5)}>
        <Text
          m={1}
          rounded="sm"
          bg="#FC7F4A"
          height="20"
          width="20"
          fontSize="3xl"
          textAlign="center"
          lineHeight="3xl"
          color="white"
        >
          5
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPressHandle(6)}>
        <Text
          rounded="sm"
          m={1}
          bg="#FC7F4A"
          height="20"
          width="20"
          fontSize="3xl"
          textAlign="center"
          lineHeight="3xl"
          color="white"
        >
          6
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.onPressHandle(props.thirdBtn)}>
        <Text
          rounded="sm"
          m={1}
          bg="#FC7F4A"
          height="20"
          width="20"
          fontSize="3xl"
          textAlign="center"
          lineHeight="3xl"
          color="white"
        >
          %
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.calculation()}>
        <Text
          rounded="sm"
          m={1}
          bg="#FC7F4A"
          height="20"
          width="20"
          fontSize="3xl"
          textAlign="center"
          color="white"
          lineHeight="3xl"
        >
          =
        </Text>
      </TouchableOpacity>
    </VStack>
  );
};

export default EqualComp;
