export interface TaskTypes {
    _id: string;
    slNo: number;
    title: string;
    description: string;
    state: "todo" | "in-progress" | "done";
};