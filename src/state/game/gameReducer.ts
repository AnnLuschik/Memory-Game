import {
  SELECT_CARD_SKIRT, SELECT_GAME_LEVEL, CHANGE_GAME_STATUS,
  SET_GAME_RESULT, SET_TOP_RESULTS, GameActionTypes,
} from './actions';
import {
  LevelTypes, Levels, StatusTypes, ResultTime, ICommonResults,
} from './types';

type GameParams = {
  skirt: string
  level: LevelTypes
  cardsNumber: Levels
};

interface GameState {
  gameParams: GameParams
  status: StatusTypes
  result: ResultTime
  topResults: ICommonResults
}

const initialState: GameState = {
  gameParams: {
    skirt: '',
    level: 'low',
    cardsNumber: Levels.low,
  },
  status: 'non-started',
  result: {
    min: 0, sec: 0,
  },
  topResults: {
    low: [],
    medium: [],
    high: [],
  },
};

export function gameReducer(state = initialState, action: GameActionTypes):GameState {
  switch (action.type) {
    case SELECT_CARD_SKIRT: {
      return {
        ...state,
        gameParams: {
          ...state.gameParams,
          skirt: action.payload,
        },
      };
    }

    case SELECT_GAME_LEVEL: {
      return {
        ...state,
        gameParams: {
          ...state.gameParams,
          level: action.payload,
          cardsNumber: Levels[action.payload],
        },
      };
    }

    case CHANGE_GAME_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }

    case SET_GAME_RESULT: {
      return {
        ...state,
        result: action.payload,
      };
    }

    case SET_TOP_RESULTS: {
      return {
        ...state,
        topResults: action.payload,
      };
    }

    default: return state;
  }
}
