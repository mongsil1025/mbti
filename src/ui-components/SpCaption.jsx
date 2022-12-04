/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SpCaption(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="168px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SpCaption")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(38,50,56,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.25px"
        width="168px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Caption"
        {...getOverrideProps(overrides, "Caption")}
      ></Text>
    </View>
  );
}
