import { Observable } from "./observable";
export interface Observer{
    id: number
    mail?: string
    mobile?: string
    update():void
}

export class EmailObserver implements Observer{
    observable: Observable
    mail: string
    id: number;
    constructor(o:Observable,mail: string,id: number){
        this.observable = o;
        this.mail = mail;
        this.id = id;
    }
    update(): void {
        console.log('updated observer',this.mail,'with data = ');
        console.log(this.observable.getData());
    }
}
export class MobileObserver implements Observer{
    observable: Observable
    mobile: string
    id: number;
    constructor(o:Observable,mobile: string,id: number){
        this.observable = o;
        this.mobile = mobile;
        this.id = id;
    }
    update(): void {
        console.log('updated observer',this.mobile,'with data = ');
        console.log(this.observable.getData());
    }
}