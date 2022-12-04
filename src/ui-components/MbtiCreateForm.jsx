/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Mbti } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function MbtiCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    energy: undefined,
    recognition: undefined,
    decision: undefined,
    life_pattern: undefined,
    full_text: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [energy, setEnergy] = React.useState(initialValues.energy);
  const [recognition, setRecognition] = React.useState(
    initialValues.recognition
  );
  const [decision, setDecision] = React.useState(initialValues.decision);
  const [life_pattern, setLife_pattern] = React.useState(
    initialValues.life_pattern
  );
  const [full_text, setFull_text] = React.useState(initialValues.full_text);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setEnergy(initialValues.energy);
    setRecognition(initialValues.recognition);
    setDecision(initialValues.decision);
    setLife_pattern(initialValues.life_pattern);
    setFull_text(initialValues.full_text);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    energy: [{ type: "Required" }],
    recognition: [{ type: "Required" }],
    decision: [{ type: "Required" }],
    life_pattern: [{ type: "Required" }],
    full_text: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="0px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          energy,
          recognition,
          decision,
          life_pattern,
          full_text,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Mbti(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "MbtiCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              energy,
              recognition,
              decision,
              life_pattern,
              full_text,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <RadioGroupField
        label="Energy"
        name="energy"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              energy: value,
              recognition,
              decision,
              life_pattern,
              full_text,
            };
            const result = onChange(modelFields);
            value = result?.energy ?? value;
          }
          if (errors.energy?.hasError) {
            runValidationTasks("energy", value);
          }
          setEnergy(value);
        }}
        onBlur={() => runValidationTasks("energy", energy)}
        errorMessage={errors.energy?.errorMessage}
        hasError={errors.energy?.hasError}
        {...getOverrideProps(overrides, "energy")}
      >
        <Radio
          children="E"
          value="E"
          {...getOverrideProps(overrides, "energyRadio0")}
        ></Radio>
        <Radio
          children="I"
          value="I"
          {...getOverrideProps(overrides, "energyRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Recognition"
        name="recognition"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              energy,
              recognition: value,
              decision,
              life_pattern,
              full_text,
            };
            const result = onChange(modelFields);
            value = result?.recognition ?? value;
          }
          if (errors.recognition?.hasError) {
            runValidationTasks("recognition", value);
          }
          setRecognition(value);
        }}
        onBlur={() => runValidationTasks("recognition", recognition)}
        errorMessage={errors.recognition?.errorMessage}
        hasError={errors.recognition?.hasError}
        {...getOverrideProps(overrides, "recognition")}
      >
        <Radio
          children="N"
          value="N"
          {...getOverrideProps(overrides, "recognitionRadio0")}
        ></Radio>
        <Radio
          children="S"
          value="S"
          {...getOverrideProps(overrides, "recognitionRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Decision"
        name="decision"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              energy,
              recognition,
              decision: value,
              life_pattern,
              full_text,
            };
            const result = onChange(modelFields);
            value = result?.decision ?? value;
          }
          if (errors.decision?.hasError) {
            runValidationTasks("decision", value);
          }
          setDecision(value);
        }}
        onBlur={() => runValidationTasks("decision", decision)}
        errorMessage={errors.decision?.errorMessage}
        hasError={errors.decision?.hasError}
        {...getOverrideProps(overrides, "decision")}
      >
        <Radio
          children="T"
          value="T"
          {...getOverrideProps(overrides, "decisionRadio0")}
        ></Radio>
        <Radio
          children="F"
          value="F"
          {...getOverrideProps(overrides, "decisionRadio1")}
        ></Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Life pattern"
        name="life_pattern"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              energy,
              recognition,
              decision,
              life_pattern: value,
              full_text,
            };
            const result = onChange(modelFields);
            value = result?.life_pattern ?? value;
          }
          if (errors.life_pattern?.hasError) {
            runValidationTasks("life_pattern", value);
          }
          setLife_pattern(value);
        }}
        onBlur={() => runValidationTasks("life_pattern", life_pattern)}
        errorMessage={errors.life_pattern?.errorMessage}
        hasError={errors.life_pattern?.hasError}
        {...getOverrideProps(overrides, "life_pattern")}
      >
        <Radio
          children="J"
          value="J"
          {...getOverrideProps(overrides, "life_patternRadio0")}
        ></Radio>
        <Radio
          children="P"
          value="P"
          {...getOverrideProps(overrides, "life_patternRadio1")}
        ></Radio>
      </RadioGroupField>
      <TextField
        label="Full text"
        descriptiveText=""
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              energy,
              recognition,
              decision,
              life_pattern,
              full_text: value,
            };
            const result = onChange(modelFields);
            value = result?.full_text ?? value;
          }
          if (errors.full_text?.hasError) {
            runValidationTasks("full_text", value);
          }
          setFull_text(value);
        }}
        onBlur={() => runValidationTasks("full_text", full_text)}
        errorMessage={errors.full_text?.errorMessage}
        hasError={errors.full_text?.hasError}
        {...getOverrideProps(overrides, "full_text")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
