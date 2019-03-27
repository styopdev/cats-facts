import { Action } from '@ngrx/store';

export enum ActionTypes {
  SET_FACTS = 'FACT'
}
 
export class SET_FACTS implements Action {
  readonly type = ActionTypes.SET_FACTS;
  readonly payload; 
}