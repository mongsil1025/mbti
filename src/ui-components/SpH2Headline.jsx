/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SpH2Headline(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="71px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SpH2Headline")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="60px"
        fontWeight="300"
        color="rgba(38,50,56,1)"
        lineHeight="70.3125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="360px"
        height="71px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="H2 Headline"
        {...getOverrideProps(overrides, "H2 Headline")}
      ></Text>
    </View>
  );
}
