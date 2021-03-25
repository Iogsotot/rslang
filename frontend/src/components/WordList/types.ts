import { Word } from '../../models/word';

export interface WordListState {
  words: Word[];
  page: number;
  group: number;
  loading: boolean;
  error: null | string;
  translate: boolean;
  displayButtons: boolean;
}

interface FetchWordListAction {
  type: WordListActionTypes.FETCH_WORD_LIST;
}

interface FetchWordListSuccessAction {
  type: WordListActionTypes.FETCH_WORD_LIST_SUCCESS;
  payload: Word[];
}

interface FetchWordListErrorAction {
  type: WordListActionTypes.FETCH_WORD_LIST_ERROR;
  payload: string;
}

interface GetWordListPage {
  type: WordListActionTypes.GET_WORD_LIST_PAGE;
  payload: number;
}

interface ShowWordTranslate {
  type: WordListActionTypes.SHOW_WORD_TRANSLATE;
  payload: boolean;
}

interface ShowWordButtons {
  type: WordListActionTypes.SHOW_WORD_BUTTONS;
  payload: boolean;
}

interface GetWordListGroup {
  type: WordListActionTypes.GET_WORD_LIST_GROUP;
  payload: number;
}

export enum WordListActionTypes {
  FETCH_WORD_LIST = 'FETCH_WORD_LIST',
  FETCH_WORD_LIST_SUCCESS = 'FETCH_WORD_LIST_SUCCESS',
  FETCH_WORD_LIST_ERROR = 'FETCH_WORD_LIST_ERROR',
  GET_WORD_LIST_PAGE = 'GET_WORD_LIST_PAGE',
  GET_WORD_LIST_GROUP = 'GET_WORD_LIST_GROUP',
  SHOW_WORD_TRANSLATE = 'SHOW_WORD_TRANSLATE',
  SHOW_WORD_BUTTONS = 'SHOW_WORD_BUTTONS',
}

export type WordListAction =
  FetchWordListAction
  | FetchWordListSuccessAction
  | FetchWordListErrorAction
  | GetWordListPage
  | GetWordListGroup
  | ShowWordTranslate
  | ShowWordButtons;
