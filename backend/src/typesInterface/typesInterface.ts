export interface TaskTypes {
    _id: string;
    slNo: number;
    title: string;
    description: string;
    state: "todo" | "in-progress" | "done";
};
export interface TaskImagesTypes {
    _id: string;
    allUrlWithName: [
        {
            name: string,
            url: string,
        }
    ]
};