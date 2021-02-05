import {
  LevelTypes, ResultTime, StatusTypes, ICommonResults,
} from './types';

export const SELECT_CARD_BACK = 'SELECT_CARD_BACK';
export const SELECT_GAME_LEVEL = 'SELECT_GAME_LEVEL';

export const CHANGE_GAME_STATUS = 'CHANGE_GAME_STATUS';

export const SET_GAME_RESULT = 'SET_GAME_RESULT';
export const SET_TOP_RESULTS = 'SET_TOP_RESULTS';

interface SelectCardBackAction {
  type: typeof SELECT_CARD_BACK
  payload: string
}

interface SelectGameLevelAction {
  type: typeof SELECT_GAME_LEVEL
  payload: LevelTypes
}

interface ChangeGameStatusAction {
  type: typeof CHANGE_GAME_STATUS
  payload: StatusTypes
}

interface SetGameResultAction {
  type: typeof SET_GAME_RESULT
  payload: ResultTime
}

interface SetTopResultsAction {
  type: typeof SET_TOP_RESULTS
  payload: ICommonResults
}

export type GameActionTypes = SelectCardBackAction
| SelectGameLevelAction
| ChangeGameStatusAction
| SetGameResultAction
| SetTopResultsAction;

export function selectCardBack(data: string): SelectCardBackAction {
  return {
    type: SELECT_CARD_BACK,
    payload: data,
  };
}

export function selectGamelevel(data: LevelTypes): SelectGameLevelAction {
  return {
    type: SELECT_GAME_LEVEL,
    payload: data,
  };
}

export function changeGameStatus(status: StatusTypes):ChangeGameStatusAction {
  return {
    type: CHANGE_GAME_STATUS,
    payload: status,
  };
}

export function setGameResult(data: ResultTime):SetGameResultAction {
  return {
    type: SET_GAME_RESULT,
    payload: data,
  };
}

export function setTopResults(data: ICommonResults):SetTopResultsAction {
  return {
    type: SET_TOP_RESULTS,
    payload: data,
  };
}
