/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function StrokeSecondary(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="280px"
      height="88px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "StrokeSecondary")}
    >
      <View
        width="280px"
        height="88px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        border="1px SOLID rgba(56,192,93,1)"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        opacity="0.5400000214576721"
        {...getOverrideProps(overrides, "-stroke")}
      ></View>
    </View>
  );
}
