import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ProfileState = {
  description: string;
  id: string;
  fname: string;
  lname: string;
  profileImage: string | null;

  setId: (value: string) => void;
  setFName: (value: string) => void;
  setLName: (value: string) => void;
  setDescription: (value: string) => void;
  setProfileImage: (image: string | null) => void;
  clearData: () => void;
};

const useProfileStore = create<ProfileState>()(
  devtools(
    persist(
      (set) => ({
        id: "",
        fname: "",
        lname: "",
        description: "",
        profileImage: null,
        setId: (value) => set(() => ({ id: value })),
        setFName: (value) => set(() => ({ fname: value })),
        setLName: (value) => set(() => ({ lname: value })),
        setDescription: (value) => set(() => ({ description: value })),
        setProfileImage: (image) => set(() => ({ profileImage: image })),
        clearData: () =>
          set(() => ({
            id: "",
            fname: "",
            lname: "",
            description: "",
            profileImage: null,
          })),
      }),
      {
        name: "profile-storage",
      }
    )
  )
);

export default useProfileStore;
