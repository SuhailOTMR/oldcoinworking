import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './user/userSlice'
import ReferralReducer from './user/referralSlice'
import WalletReducer from './user/walletSlice'
import WithdrawReducer from './user/withdrawSlice'
import OfferReducer from './user/offerSlice'
import SurveyReducer from './user/surveySlice'
import popupReducer from './user/popupSlice';

export default configureStore({
  reducer: {
    user: UserReducer,
    referal: ReferralReducer,
    wallet: WalletReducer,
    withdraw: WithdrawReducer,
    offer: OfferReducer,
    survey: SurveyReducer,
    popup: popupReducer,
  },
})