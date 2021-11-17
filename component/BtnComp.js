import { Flex, VStack, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const BtnComp = (props) => {
  return (
    <Flex>
      <VStack flexDirection="row">
        <TouchableOpacity onPress={() => props.onPressHandle(props.firstBtn)}>
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
            {props.firstBtn}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onPressHandle(props.secondBtn)}>
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
            {props.secondBtn}
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
            {props.thirdBtn}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.onPressHandle(props.fourthBtn)}>
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
            {props.fourthBtn}
          </Text>
        </TouchableOpacity>
      </VStack>
    </Flex>
  );
};

export default BtnComp;
