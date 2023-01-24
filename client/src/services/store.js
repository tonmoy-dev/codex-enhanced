import { create } from "zustand";

export const demoChatlog = [
  {
    user: "me",
    text: "Hi there!",
  },
  {
    user: "gpt",
    text: "How can I help you?",
  },
];

export const useStore = create((set) => ({
  // chatlogs
  appChatlog: [...demoChatlog],
  setAppChatlog: (payload) => set((state) => ({ appChatlog: payload })),
}));
