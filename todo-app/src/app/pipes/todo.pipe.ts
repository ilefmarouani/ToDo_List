import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Pipe({
    name: 'todoPipe',
    standalone: true
})
export class TodoPipe implements PipeTransform {

    transform(todos: Todo[]): Todo[] {
        if (!todos) return [];

        const currentTime = new Date().getTime();
        const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;

        return todos.map(todo => {
            const endDate = new Date(todo.end_date).getTime();
            const timeDiff = endDate - currentTime;

            // Si la date d'échéance est à moins de 2 jours, on marque le todo
            if (timeDiff > 0 && timeDiff <= twoDaysInMs) {
                return { ...todo, urgent: true };
            }
            return { ...todo, urgent: false };
        });
    }

}
