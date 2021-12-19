import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/combinRed";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
