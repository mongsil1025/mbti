/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Description } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function DescriptionUpdateForm(props) {
  const {
    id,
    description,
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
    type: undefined,
    mbti: undefined,
    data: undefined,
    display_name: undefined,
  };
  const [type, setType] = React.useState(initialValues.type);
  const [mbti, setMbti] = React.useState(initialValues.mbti);
  const [data, setData] = React.useState(initialValues.data);
  const [display_name, setDisplay_name] = React.useState(
    initialValues.display_name
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...descriptionRecord };
    setType(cleanValues.type);
    setMbti(cleanValues.mbti);
    setData(cleanValues.data);
    setDisplay_name(cleanValues.display_name);
    setErrors({});
  };
  const [descriptionRecord, setDescriptionRecord] = React.useState(description);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Description, id) : description;
      setDescriptionRecord(record);
    };
    queryData();
  }, [id, description]);
  React.useEffect(resetStateValues, [descriptionRecord]);
  const validations = {
    type: [],
    mbti: [],
    data: [],
    display_name: [{ type: "Required" }],
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
          type,
          mbti,
          data,
          display_name,
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
            Description.copyOf(descriptionRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DescriptionUpdateForm")}
    >
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        defaultValue={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              mbti,
              data,
              display_name,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <SelectField
        label="Mbti"
        placeholder="Please select an option"
        isDisabled={false}
        value={mbti}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mbti: value,
              data,
              display_name,
            };
            const result = onChange(modelFields);
            value = result?.mbti ?? value;
          }
          if (errors.mbti?.hasError) {
            runValidationTasks("mbti", value);
          }
          setMbti(value);
        }}
        onBlur={() => runValidationTasks("mbti", mbti)}
        errorMessage={errors.mbti?.errorMessage}
        hasError={errors.mbti?.hasError}
        {...getOverrideProps(overrides, "mbti")}
      >
        <option
          children="Istj"
          value="ISTJ"
          {...getOverrideProps(overrides, "mbtioption0")}
        ></option>
        <option
          children="Istp"
          value="ISTP"
          {...getOverrideProps(overrides, "mbtioption1")}
        ></option>
        <option
          children="Infj"
          value="INFJ"
          {...getOverrideProps(overrides, "mbtioption2")}
        ></option>
        <option
          children="Intj"
          value="INTJ"
          {...getOverrideProps(overrides, "mbtioption3")}
        ></option>
        <option
          children="Isfj"
          value="ISFJ"
          {...getOverrideProps(overrides, "mbtioption4")}
        ></option>
        <option
          children="Isfp"
          value="ISFP"
          {...getOverrideProps(overrides, "mbtioption5")}
        ></option>
        <option
          children="Infp"
          value="INFP"
          {...getOverrideProps(overrides, "mbtioption6")}
        ></option>
        <option
          children="Intp"
          value="INTP"
          {...getOverrideProps(overrides, "mbtioption7")}
        ></option>
        <option
          children="Estj"
          value="ESTJ"
          {...getOverrideProps(overrides, "mbtioption8")}
        ></option>
        <option
          children="Esfp"
          value="ESFP"
          {...getOverrideProps(overrides, "mbtioption9")}
        ></option>
        <option
          children="Enfp"
          value="ENFP"
          {...getOverrideProps(overrides, "mbtioption10")}
        ></option>
        <option
          children="Entp"
          value="ENTP"
          {...getOverrideProps(overrides, "mbtioption11")}
        ></option>
        <option
          children="Esfj"
          value="ESFJ"
          {...getOverrideProps(overrides, "mbtioption12")}
        ></option>
        <option
          children="Estp"
          value="ESTP"
          {...getOverrideProps(overrides, "mbtioption13")}
        ></option>
        <option
          children="Enfj"
          value="ENFJ"
          {...getOverrideProps(overrides, "mbtioption14")}
        ></option>
        <option
          children="Entj"
          value="ENTJ"
          {...getOverrideProps(overrides, "mbtioption15")}
        ></option>
      </SelectField>
      <TextField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        defaultValue={data}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mbti,
              data: value,
              display_name,
            };
            const result = onChange(modelFields);
            value = result?.data ?? value;
          }
          if (errors.data?.hasError) {
            runValidationTasks("data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("data", data)}
        errorMessage={errors.data?.errorMessage}
        hasError={errors.data?.hasError}
        {...getOverrideProps(overrides, "data")}
      ></TextField>
      <TextField
        label="Display name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={display_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              mbti,
              data,
              display_name: value,
            };
            const result = onChange(modelFields);
            value = result?.display_name ?? value;
          }
          if (errors.display_name?.hasError) {
            runValidationTasks("display_name", value);
          }
          setDisplay_name(value);
        }}
        onBlur={() => runValidationTasks("display_name", display_name)}
        errorMessage={errors.display_name?.errorMessage}
        hasError={errors.display_name?.hasError}
        {...getOverrideProps(overrides, "display_name")}
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
