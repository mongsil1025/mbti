/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Gradient(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="168px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Gradient")}
    >
      <View
        width="360px"
        height="168px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(0deg, rgba(124,77,255,1), rgba(223,18,178,1))"
        {...getOverrideProps(overrides, "-background")}
      ></View>
    </View>
  );
}
