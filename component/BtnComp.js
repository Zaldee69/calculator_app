import { Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const BtnComp = (props) => {
  return (
    <View>
      <View backgroundColor="#292D36" borderTopRadius={40} paddingY={10}>
        <View justifyContent="center" flexDirection="row">
          <TouchableOpacity onPress={() => props.setNumber("")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#26FFD9"
            >
              C
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("(")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#26FFD9"
            >
              (
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle(")")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#26FFD9"
            >
              )
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("/")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#EC6666"
            >
              /
            </Text>
          </TouchableOpacity>
        </View>
        <View justifyContent="center" flexDirection="row">
          <TouchableOpacity onPress={() => props.onPressHandle("7")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              7
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle(8)}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              8
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("9")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              9
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("*")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#EC6666"
            >
              *
            </Text>
          </TouchableOpacity>
        </View>
        <View flexDirection="row" justifyContent="center">
          <TouchableOpacity onPress={() => props.onPressHandle("4")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              4
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("5")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              5
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("6")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              6
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("-")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#EC6666"
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View flexDirection="row" justifyContent="center">
          <TouchableOpacity onPress={() => props.onPressHandle("1")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("2")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("3")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("+")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#EC6666"
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View flexDirection="row" justifyContent="center">
          <TouchableOpacity onPress={() => props.onPressHandle("0")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#DEDEDF"
            >
              0
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle(".")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="white"
            >
              .
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressHandle("%")}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#EC6666"
            >
              %
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={props.calculation}>
            <Text
              rounded="xl"
              m={1}
              bg="#272B33"
              height="20"
              width="20"
              fontSize="3xl"
              textAlign="center"
              lineHeight="3xl"
              color="#EC6666"
            >
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BtnComp;

{
}
