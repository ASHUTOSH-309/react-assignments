import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 1000
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 20
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 30
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 44
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
    }
})
