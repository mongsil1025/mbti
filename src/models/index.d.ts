import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MbtiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
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