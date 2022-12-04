/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SpH3Headline(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="57px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SpH3Headline")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="48px"
        fontWeight="400"
        color="rgba(38,50,56,1)"
        lineHeight="56.25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="360px"
        height="57px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="H3 Headline"
        {...getOverrideProps(overrides, "H3 Headline")}
      ></Text>
    </View>
  );
}
