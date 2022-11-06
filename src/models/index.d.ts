import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

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

type MbtiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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