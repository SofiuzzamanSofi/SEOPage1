export interface TaskTypes {
    state: "todo" | "in-progress" | "done";
    _id?: string | undefined;
    slNo?: number | undefined;
    title?: string | undefined;
    description?: string | undefined;
}
export interface EditTaskTypes {
    state: string;
    _id?: string | undefined;
    slNo?: number | undefined;
    title?: string | undefined;
    description?: string | undefined;
}

export interface TaskInfoTypes {
    taskList: TaskTypes[] | undefined;
    loading: boolean;
    modifyTask: (data: EditTaskTypes) => Promise<boolean>;
    setReloadData: React.Dispatch<React.SetStateAction<boolean>>
}