import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NativeBaseProvider, Center } from "native-base";
import BtnComp from "./component/BtnComp";
import Display from "./component/Display";
import EqualComp from "./component/EqualComp";

export default function App() {
  const [number, setNumber] = useState({
    value: 0,
    count: 0,
  });

  const onPressHandle = (num) => {
    if (number.count === 0) {
      setNumber({ count: num });
    } else {
      setNumber({ count: number.count + num });
    }
  };

  const calculation = () => {
    const value = eval(number.count);
    setNumber({ count: value });
  };

  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Center style={{ backgroundColor: "#191919" }} flex={1} paddingTop={150}>
        <Display setNumber={setNumber} count={number.count} />
        <BtnComp
          onPressHandle={onPressHandle}
          firstBtn="1"
          secondBtn="2"
          thirdBtn="-"
          fourthBtn="+"
        />
        <BtnComp
          onPressHandle={onPressHandle}
          firstBtn="3"
          secondBtn="4"
          thirdBtn="/"
          fourthBtn="*"
        />
        <EqualComp
          onPressHandle={onPressHandle}
          calculation={calculation}
          thirdBtn="%"
        />
        <BtnComp
          onPressHandle={onPressHandle}
          firstBtn="7"
          secondBtn="8"
          thirdBtn="9"
          fourthBtn="0"
        />
      </Center>
    </NativeBaseProvider>
  );
}
