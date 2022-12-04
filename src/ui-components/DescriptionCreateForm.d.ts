/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DescriptionCreateFormInputValues = {
    type?: string;
    mbti?: string;
    data?: string;
};
export declare type DescriptionCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    mbti?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DescriptionCreateFormOverridesProps = {
    DescriptionCreateFormGrid?: FormProps<GridProps>;
    type?: FormProps<TextFieldProps>;
    mbti?: FormProps<SelectFieldProps>;
    data?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DescriptionCreateFormProps = React.PropsWithChildren<{
    overrides?: DescriptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DescriptionCreateFormInputValues) => DescriptionCreateFormInputValues;
    onSuccess?: (fields: DescriptionCreateFormInputValues) => void;
    onError?: (fields: DescriptionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DescriptionCreateFormInputValues) => DescriptionCreateFormInputValues;
    onValidate?: DescriptionCreateFormValidationValues;
}>;
export default function DescriptionCreateForm(props: DescriptionCreateFormProps): React.ReactElement;
