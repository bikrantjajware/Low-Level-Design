import { Observable } from "./observable";
export interface Observer{
    id?: number
    mail?: string
    mobile?: string
    update():void
}

export class EmailObserver implements Observer{
    observable: Observable
    mail: string
    constructor(o:Observable,mail: string){
        this.observable = o;
        this.mail = mail;
    }
    update(): void {
        console.log('updated observer',this.mail,'with data = ');
        console.log(this.observable.getData());
    }
}
export class MobileObserver implements Observer{
    observable: Observable
    mobile: string
    constructor(o:Observable,mobile: string){
        this.observable = o;
        this.mobile = mobile;
    }
    update(): void {
        console.log('updated observer',this.mobile,'with data = ');
        console.log(this.observable.getData());
    }
}