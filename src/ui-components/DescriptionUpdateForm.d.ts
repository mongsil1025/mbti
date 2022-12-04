/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Description } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DescriptionUpdateFormInputValues = {
    type?: string;
    mbti?: string;
    data?: string;
};
export declare type DescriptionUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    mbti?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DescriptionUpdateFormOverridesProps = {
    DescriptionUpdateFormGrid?: FormProps<GridProps>;
    type?: FormProps<TextFieldProps>;
    mbti?: FormProps<SelectFieldProps>;
    data?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DescriptionUpdateFormProps = React.PropsWithChildren<{
    overrides?: DescriptionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    description?: Description;
    onSubmit?: (fields: DescriptionUpdateFormInputValues) => DescriptionUpdateFormInputValues;
    onSuccess?: (fields: DescriptionUpdateFormInputValues) => void;
    onError?: (fields: DescriptionUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DescriptionUpdateFormInputValues) => DescriptionUpdateFormInputValues;
    onValidate?: DescriptionUpdateFormValidationValues;
}>;
export default function DescriptionUpdateForm(props: DescriptionUpdateFormProps): React.ReactElement;
