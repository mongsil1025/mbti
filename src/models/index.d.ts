import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type MbtiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMbti = {
  readonly id: string;
  readonly name: string;
  readonly energy: string;
  readonly recognition: string;
  readonly decision: string;
  readonly life_pattern: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMbti = {
  readonly id: string;
  readonly name: string;
  readonly energy: string;
  readonly recognition: string;
  readonly decision: string;
  readonly life_pattern: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mbti = LazyLoading extends LazyLoadingDisabled ? EagerMbti : LazyMbti

export declare const Mbti: (new (init: ModelInit<Mbti, MbtiMetaData>) => Mbti) & {
  copyOf(source: Mbti, mutator: (draft: MutableModel<Mbti, MbtiMetaData>) => MutableModel<Mbti, MbtiMetaData> | void): Mbti;
}