import { UserState } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        status: false,
        data: undefined,
        message: undefined,
        token: undefined,
        setStatus: (value) => set(() => ({ status: value })),
        setData: (value) => set(() => ({ data: value })),
        setMessage: (value) => set(() => ({ message: value })),
        setToken: (value) => set(() => ({ token: value })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useUserStore;
