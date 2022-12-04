/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Mbti } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MbtiUpdateFormInputValues = {
    name?: string;
    energy?: string;
    recognition?: string;
    decision?: string;
    life_pattern?: string;
    full_text?: string;
};
export declare type MbtiUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    energy?: ValidationFunction<string>;
    recognition?: ValidationFunction<string>;
    decision?: ValidationFunction<string>;
    life_pattern?: ValidationFunction<string>;
    full_text?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MbtiUpdateFormOverridesProps = {
    MbtiUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    energy?: FormProps<SelectFieldProps>;
    recognition?: FormProps<SelectFieldProps>;
    decision?: FormProps<SelectFieldProps>;
    life_pattern?: FormProps<SelectFieldProps>;
    full_text?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MbtiUpdateFormProps = React.PropsWithChildren<{
    overrides?: MbtiUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mbti?: Mbti;
    onSubmit?: (fields: MbtiUpdateFormInputValues) => MbtiUpdateFormInputValues;
    onSuccess?: (fields: MbtiUpdateFormInputValues) => void;
    onError?: (fields: MbtiUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MbtiUpdateFormInputValues) => MbtiUpdateFormInputValues;
    onValidate?: MbtiUpdateFormValidationValues;
}>;
export default function MbtiUpdateForm(props: MbtiUpdateFormProps): React.ReactElement;
