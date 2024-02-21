import { useAppSelector } from "@/store/store";

export const useAuthSelector = () => useAppSelector((state) => state.user);
