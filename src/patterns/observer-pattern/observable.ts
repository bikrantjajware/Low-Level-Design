import { Observer } from "./observer";

export interface Observable{
    data: object
    observers: Observer[]
    add: (o: Observer) => void
    remove: (o: Observer) => void
    notify: () => void
    getData : ()=> object
    setData?: (input:object)=> void
}

export class OBSERVABLE implements Observable{
    observers: Observer[];
    data: object;
    constructor(data: object){
        this.data = data;
        this.observers = [];
    }
    add (o: Observer) {
        console.log('adding observer',o.id);
        this.observers.push(o);
    }
    getData(){
        return this.data
    }
    notify () {
        console.log('notifying  observers...');
        for(const observer of this.observers){
            observer.update();
        }
    } 
    remove(o : Observer) {
        this.observers = this.observers.filter(observer => observer !== o)
    }
    setData(input: object) {
        console.log('updating data');
        this.data = input
        this.notify();
    }
}