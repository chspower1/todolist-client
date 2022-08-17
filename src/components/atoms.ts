import { atom } from "recoil";

export interface IToDo {
    id: string;
    text: string;
    date: string;
    category: Categories;
}

export enum Categories {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE",
}

export const toDosState = atom<IToDo[]>({
    key: "toDos",
    default: [],
});
export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});