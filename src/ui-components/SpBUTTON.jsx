/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SpBUTTON(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="168px"
      height="17px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SpBUTTON")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="500"
        color="rgba(38,50,56,1)"
        textTransform="uppercase"
        lineHeight="16.40625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.6px"
        width="168px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="BUTTON"
        {...getOverrideProps(overrides, "TXT Medium 14 sp")}
      ></Text>
    </View>
  );
}
