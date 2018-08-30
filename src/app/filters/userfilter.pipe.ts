import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'userFilter'})
export class UserFilter implements PipeTransform {
    transform(value: any, term: string): any {
        return value.filter(i => i.first_name.indexOf(term) !== -1);
    }
}