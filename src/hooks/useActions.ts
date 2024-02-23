import { rootActions } from "@/store/root-actions";
import { useAppDispatch } from "@/store/store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useAppDispatch();

  const dispatch2 = useDispatch();


  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
