import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name: 'formatDate'
})
export class MomentPipe implements PipeTransform{
    
    transform(date: any, args?: any[]) {
        let data = new Date(date);
        return moment(data).format('DD/MM/YYYY');
    }

}