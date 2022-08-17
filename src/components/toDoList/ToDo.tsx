import { Categories, IToDo } from "./../atoms";
import { deleteToDo, updateCategory } from "src/api/api";
import { useState } from "react";

export default function ToDo(toDoProps: IToDo) {
    const [onDel, setOnDel] = useState(false);
    const [toDo, setToDo] = useState(toDoProps);

    //현재 ToDo 지우기
    const onClickDel = () => {
        deleteToDo(toDo.id);
        setOnDel(true);
    };
    // 카테고리 바꾸기
    const onClickCategory = (newCategory: Categories) => {
        updateCategory(toDo.id, newCategory);
        setToDo((prev) => ({
            ...prev,
            category: newCategory,
        }));
    };
    return (
        <>
            {onDel ? null : (
                <ul key={toDo.id}>
                    <li>
                        <div>
                            <span>{toDo.text}</span>
                            <span>{toDo.date}</span>
                        </div>

                        {toDo.category === "TO_DO" || (
                            <button
                                name={Categories.TO_DO}
                                onClick={() => onClickCategory(Categories.TO_DO)}
                            >
                                할거야!
                            </button>
                        )}
                        {toDo.category === "DOING" || (
                            <button
                                name={Categories.DOING}
                                onClick={() => onClickCategory(Categories.DOING)}
                            >
                                하는중!
                            </button>
                        )}
                        {toDo.category === "DONE" || (
                            <button
                                name={Categories.DONE}
                                onClick={() => onClickCategory(Categories.DONE)}
                            >
                                다했어!
                            </button>
                        )}
                        <button name={Categories.TO_DO} onClick={() => onClickDel()}>
                            삭제!
                        </button>
                    </li>
                </ul>
            )}
        </>
    );
}
