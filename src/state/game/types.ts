export enum Levels {
  low = 10,
  medium = 18,
  high = 24,
}

export type LevelTypes = keyof typeof Levels;

export type StatusTypes = 'non-started' | 'started' | 'finished';

export type ResultTime = {
  min: number
  sec: number
};

export interface IResultItem {
  level: LevelTypes
  name: string
  time: ResultTime
  contacts: string
}

export interface ICommonResults {
  low: IResultItem[]
  medium: IResultItem[]
  high: IResultItem[]
}
