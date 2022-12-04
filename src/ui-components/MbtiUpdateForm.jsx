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
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function MbtiUpdateForm(props) {
  const {
    id,
    mbti,
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
    const cleanValues = { ...initialValues, ...mbtiRecord };
    setName(cleanValues.name);
    setEnergy(cleanValues.energy);
    setRecognition(cleanValues.recognition);
    setDecision(cleanValues.decision);
    setLife_pattern(cleanValues.life_pattern);
    setFull_text(cleanValues.full_text);
    setErrors({});
  };
  const [mbtiRecord, setMbtiRecord] = React.useState(mbti);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Mbti, id) : mbti;
      setMbtiRecord(record);
    };
    queryData();
  }, [id, mbti]);
  React.useEffect(resetStateValues, [mbtiRecord]);
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
      padding="20px"
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
          await DataStore.save(
            Mbti.copyOf(mbtiRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "MbtiUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={name}
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
      <SelectField
        label="Energy"
        placeholder="Please select an option"
        isDisabled={false}
        value={energy}
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
        <option
          children="E"
          value="E"
          {...getOverrideProps(overrides, "energyoption0")}
        ></option>
        <option
          children="I"
          value="I"
          {...getOverrideProps(overrides, "energyoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Recognition"
        placeholder="Please select an option"
        isDisabled={false}
        value={recognition}
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
        <option
          children="N"
          value="N"
          {...getOverrideProps(overrides, "recognitionoption0")}
        ></option>
        <option
          children="S"
          value="S"
          {...getOverrideProps(overrides, "recognitionoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Decision"
        placeholder="Please select an option"
        isDisabled={false}
        value={decision}
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
        <option
          children="T"
          value="T"
          {...getOverrideProps(overrides, "decisionoption0")}
        ></option>
        <option
          children="F"
          value="F"
          {...getOverrideProps(overrides, "decisionoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Life pattern"
        placeholder="Please select an option"
        isDisabled={false}
        value={life_pattern}
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
        <option
          children="J"
          value="J"
          {...getOverrideProps(overrides, "life_patternoption0")}
        ></option>
        <option
          children="P"
          value="P"
          {...getOverrideProps(overrides, "life_patternoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Full text"
        isRequired={false}
        isReadOnly={false}
        defaultValue={full_text}
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
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
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
