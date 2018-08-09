import { cloneDeep, isEqual } from "lodash-es";
import * as Stream from "mithril/stream";

export interface IValue<T, U = T> extends Stream.Stream<U> {
  isValid: Stream.Stream<boolean>;
  error: Stream.Stream<string | null>;
}

function getCloneData<T>(value: T): T {
  return cloneDeep(value);
}

function Value<T>(initial: T): IValue<T> {
  const stream: IValue<T> = Stream<T>(getCloneData(initial)) as IValue<T>;

  stream.error = Stream("");
  stream.isValid = stream.error.map((error) => !error);

  return stream;
}

export default Value;
