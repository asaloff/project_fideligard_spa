import { combineReducers } from 'redux';
import slider from './slider_reducer';
import stockInfo from './stocks_reducer';
import trade from './trade_reducer';

export const fideligardApp = combineReducers({ slider, stockInfo, trade });
