import { lazy } from "react";

export const Login = lazy(() => import("./Login/Login"));
export const SignUp = lazy(() => import("./signup/SignUp"));
export const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
export const PlaceDetailPage = lazy(() => import("./PlaceDetailPage/PlaceDetailPage"));
export const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
export const ReviewPage = lazy(() => import("./ReviewPage/ReviewPage"));
export const Teams = lazy(() => import("./Teams/Teams"));
export const ErrorPage = lazy(() => import("./ErrorPage/ErrorPage"));