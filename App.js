import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NativeBaseProvider, View, Text } from "native-base";
import BtnComp from "./component/BtnComp";

export default function App() {
  const [number, setNumber] = useState("");

  const onPressHandle = (num) => {
    if (number === 0) {
      setNumber(num);
    } else {
      setNumber(number + num);
    }
  };

  const calculation = () => {
    if (number.length < 3) {
      return number;
    } else {
      const value = eval(number);
      setNumber(value);
    }
  };

  return (
    <NativeBaseProvider>
      <View
        justifyContent="flex-end"
        alignItems="flex-end"
        pr={3}
        pb={3}
        backgroundColor="#22252D"
        flex={0.6}
      >
        <Text fontSize={30} paddingBottom={5} paddingRight={5} color="#fff">
          {number}
        </Text>
      </View>
      <StatusBar style="auto" />
      <View flex={1} backgroundColor="#22252D">
        <BtnComp
          calculation={calculation}
          setNumber={setNumber}
          onPressHandle={onPressHandle}
        />
      </View>
    </NativeBaseProvider>
  );
}
