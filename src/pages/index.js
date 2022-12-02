import { lazy } from "react";

export{ default as Login } from './Login/Login'
export{ default as SignUp } from './signup/SignUp'
export{ default as Dashboard } from './Dashboard/Dashboard'
export{ default as PlaceDetailPage } from './PlaceDetailPage/PlaceDetailPage'
export const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
export{ default as ReviewPage} from './ReviewPage/ReviewPage'
export{ default as Teams} from './Teams/Teams'