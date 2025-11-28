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

export function ConstructEnum(str: string): Status{
    switch (str){
        case Status.COMPLETED:
            return Status.COMPLETED
        case Status.IN_PROGRESS:
            return Status.IN_PROGRESS
        case Status.PENDING:
            return Status.PENDING
        default:
            return Status.PENDING
    }
}
