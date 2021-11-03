import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
//import {allActionCreators} from "../store/reducers/action-creators";
import { allActionCreators } from "../store/redusers/action-creators";
import {useMemo} from "react";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActionCreators, dispatch);
}