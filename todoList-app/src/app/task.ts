export interface Task {
    id: number;
    title: string;
    description?: string;
    category: string;
    status: Status;
}

export enum Status {
    PENDING = 'Pending',
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed'
}
