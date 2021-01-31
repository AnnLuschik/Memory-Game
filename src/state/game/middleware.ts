import { Middleware } from 'redux';
import type { RootState } from '../rootReducer';
import { CHANGE_GAME_STATUS, setTopResults } from './actions';
import type { IResultItem, ICommonResults } from './types';

function selectMinTime(array:IResultItem[], number: number) {
  array.sort((a, b) => {
    const bSec = b.time.min * 60 + b.time.sec;
    const aSec = a.time.min * 60 + a.time.sec;
    return aSec - bSec;
  });
  return array.slice(0, number);
}

const topLength = 5;

export const gameMiddleware:Middleware<
unknown,
RootState
> = (store) => (next) => (action) => {
  if (action.type === CHANGE_GAME_STATUS && action.payload === 'finished') {
    const { name, surname, mail } = JSON.parse(localStorage.getItem('isAuth')!);
    const { game: { result, gameParams: { level } } } = store.getState();

    const currentResult:IResultItem = {
      name: `${name}${surname ? ` ${surname}` : ''}`, contacts: mail, time: result, level,
    };

    let commonResults:ICommonResults = {
      low: [],
      medium: [],
      high: [],
    };

    const resString = localStorage.getItem('results');
    if (resString) {
      const savedResults = JSON.parse(resString);
      const finalResults = selectMinTime([...savedResults[level], currentResult], topLength);
      commonResults = {
        ...savedResults,
        [level]: finalResults,
      };
    } else {
      commonResults = {
        ...commonResults,
        [level]: [currentResult],
      };
    }
    localStorage.setItem('results', JSON.stringify(commonResults));
    store.dispatch(setTopResults(commonResults));
  }
  next(action);
};
