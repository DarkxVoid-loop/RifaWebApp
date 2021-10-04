import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class EmprestimosService {

    public eventId = new BehaviorSubject<number>(0);

    setEventId(id: number) {
        this.eventId.next(id);
    }

}