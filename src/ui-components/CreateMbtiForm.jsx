/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Mbti } from "../models";
import { schema } from "../models/schema";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Radio,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function CreateMbtiForm(props) {
  const { EnergyInput, group2934492844, overrides, ...rest } = props;
  const buttonOnClick = useDataStoreCreateAction({
    fields: {},
    model: Mbti,
    schema: schema,
  });
  return (
    <Flex
      gap="32px"
      direction="column"
      width="453px"
      height="586px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateMbtiForm")}
    >
      <Badge
        display="block"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="unset"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        color="rgba(54,94,61,1)"
        fontFamily="Inter"
        fontWeight="600"
        fontSize="14px"
        textAlign="left"
        lineHeight="14px"
        size="default"
        variation="success"
        children="Hello!"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Insert name"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Divider
        width="unset"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider34492914")}
      ></Divider>
      <Flex
        gap="143px"
        direction="row"
        width="unset"
        height="42px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "MbtiRadioForm34492814")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="136px"
          height="37px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Energy"
          {...getOverrideProps(overrides, "Energy")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="123px"
            height="42px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 2934492844")}
          >
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - -41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              radioGroup={EnergyInput}
              children="I"
              {...getOverrideProps(overrides, "Radio34492845")}
            ></Radio>
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - 41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="E"
              {...getOverrideProps(overrides, "Radio34492846")}
            ></Radio>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="143px"
        direction="row"
        width="unset"
        height="42px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "MbtiRadioForm34492948")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="136px"
          height="37px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Recognition"
          {...getOverrideProps(overrides, "Recognition")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="123px"
            height="42px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 2934492950")}
          >
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - -41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="S"
              {...getOverrideProps(overrides, "Radio34492951")}
            ></Radio>
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - 41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="N"
              {...getOverrideProps(overrides, "Radio34492952")}
            ></Radio>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="143px"
        direction="row"
        width="unset"
        height="42px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "MbtiRadioForm34492963")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="136px"
          height="37px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Decision"
          {...getOverrideProps(overrides, "Decision")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 421")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="123px"
            height="42px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 2934492965")}
          >
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - -41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="F"
              {...getOverrideProps(overrides, "Radio34492966")}
            ></Radio>
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - 41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="T"
              {...getOverrideProps(overrides, "Radio34492967")}
            ></Radio>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="143px"
        direction="row"
        width="unset"
        height="42px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "MbtiRadioForm34492978")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="136px"
          height="37px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Live Pattern"
          {...getOverrideProps(overrides, "Live Pattern")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 422")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="123px"
            height="42px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 2934492980")}
          >
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - -41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="P"
              {...getOverrideProps(overrides, "Radio34492981")}
            ></Radio>
            <Radio
              display="flex"
              gap="16px"
              direction="row"
              width="41px"
              height="42px"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="calc(50% - 20.5px - 41px)"
              padding="0px 0px 0px 0px"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="J"
              {...getOverrideProps(overrides, "Radio34492982")}
            ></Radio>
          </Flex>
        </Flex>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider34492928")}
      ></Divider>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Create Mbti"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
