"use client";

import { Provider } from "react-redux";

import { useRef } from "react";
import { store } from "@/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
