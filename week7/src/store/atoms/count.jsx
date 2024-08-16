import { atom } from "recoil";


/* Don't create same key for two different atoms */
export const countAtom = atom({
    key: "countAtom",
    default: 0,

})
export const todoAtom = atom({
    key: "todoAtom",
    default: 0,

})

