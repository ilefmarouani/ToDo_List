export interface Todo {
    _id?: string;
    todoId?: number;
    name: string;
    description: string;
    done: boolean;
    creation_date: Date;
    end_date: Date;
    urgent?: boolean;  // Ajouté par le pipe todoPipe
    userId?: string;
}
