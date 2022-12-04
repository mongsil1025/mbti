/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MbtiCreateFormInputValues = {
    name?: string;
    energy?: string;
    recognition?: string;
    decision?: string;
    life_pattern?: string;
    full_text?: string;
};
export declare type MbtiCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    energy?: ValidationFunction<string>;
    recognition?: ValidationFunction<string>;
    decision?: ValidationFunction<string>;
    life_pattern?: ValidationFunction<string>;
    full_text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MbtiCreateFormOverridesProps = {
    MbtiCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    energy?: FormProps<RadioGroupFieldProps>;
    recognition?: FormProps<RadioGroupFieldProps>;
    decision?: FormProps<RadioGroupFieldProps>;
    life_pattern?: FormProps<RadioGroupFieldProps>;
    full_text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MbtiCreateFormProps = React.PropsWithChildren<{
    overrides?: MbtiCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MbtiCreateFormInputValues) => MbtiCreateFormInputValues;
    onSuccess?: (fields: MbtiCreateFormInputValues) => void;
    onError?: (fields: MbtiCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MbtiCreateFormInputValues) => MbtiCreateFormInputValues;
    onValidate?: MbtiCreateFormValidationValues;
}>;
export default function MbtiCreateForm(props: MbtiCreateFormProps): React.ReactElement;
