import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum MbtiEnum {
  ISTJ = "ISTJ",
  ISTP = "ISTP",
  INFJ = "INFJ",
  INTJ = "INTJ",
  ISFJ = "ISFJ",
  ISFP = "ISFP",
  INFP = "INFP",
  INTP = "INTP",
  ESTJ = "ESTJ",
  ESFP = "ESFP",
  ENFP = "ENFP",
  ENTP = "ENTP",
  ESFJ = "ESFJ",
  ESTP = "ESTP",
  ENFJ = "ENFJ",
  ENTJ = "ENTJ"
}

export enum LifePattern {
  J = "J",
  P = "P"
}

export enum Decision {
  T = "T",
  F = "F"
}

export enum Recognition {
  N = "N",
  S = "S"
}

export enum Energy {
  E = "E",
  I = "I"
}

type DescriptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MbtiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDescription = {
  readonly id: string;
  readonly type?: string | null;
  readonly mbti?: MbtiEnum | keyof typeof MbtiEnum | null;
  readonly data?: string | null;
  readonly display_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDescription = {
  readonly id: string;
  readonly type?: string | null;
  readonly mbti?: MbtiEnum | keyof typeof MbtiEnum | null;
  readonly data?: string | null;
  readonly display_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Description = LazyLoading extends LazyLoadingDisabled ? EagerDescription : LazyDescription

export declare const Description: (new (init: ModelInit<Description, DescriptionMetaData>) => Description) & {
  copyOf(source: Description, mutator: (draft: MutableModel<Description, DescriptionMetaData>) => MutableModel<Description, DescriptionMetaData> | void): Description;
}

type EagerMbti = {
  readonly id: string;
  readonly name: string;
  readonly energy: Energy | keyof typeof Energy;
  readonly recognition: Recognition | keyof typeof Recognition;
  readonly decision: Decision | keyof typeof Decision;
  readonly life_pattern: LifePattern | keyof typeof LifePattern;
  readonly full_text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMbti = {
  readonly id: string;
  readonly name: string;
  readonly energy: Energy | keyof typeof Energy;
  readonly recognition: Recognition | keyof typeof Recognition;
  readonly decision: Decision | keyof typeof Decision;
  readonly life_pattern: LifePattern | keyof typeof LifePattern;
  readonly full_text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mbti = LazyLoading extends LazyLoadingDisabled ? EagerMbti : LazyMbti

export declare const Mbti: (new (init: ModelInit<Mbti, MbtiMetaData>) => Mbti) & {
  copyOf(source: Mbti, mutator: (draft: MutableModel<Mbti, MbtiMetaData>) => MutableModel<Mbti, MbtiMetaData> | void): Mbti;
}