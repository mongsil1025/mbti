/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SpH4Headline(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SpH4Headline")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="34px"
        fontWeight="400"
        color="rgba(38,50,56,1)"
        lineHeight="39.84375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.1px"
        width="360px"
        height="40px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="H4 Headline"
        {...getOverrideProps(overrides, "H4 Headline")}
      ></Text>
    </View>
  );
}