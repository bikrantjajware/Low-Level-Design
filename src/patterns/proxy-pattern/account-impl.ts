//Account implementation
import { Account } from "./account";

class AccountImpl implements Account{
    id?: string;
    name?: string;
    create(client:string){
        console.log('object created')
        return {};
    }
    delete(){
        return {};
    }
    get(){
        return {};
    }
    
}

export class AccountProxy implements Account{
    account: AccountImpl
    constructor(){
        this.account = new AccountImpl();
    }
    
    create(client:string){
        console.log('pre processing...')
        if(client === 'ADMIN')
            this.account.create(client);
        else
            console.log('Not Allowed');
        console.log('post processing...')
        return {};
    }
    delete(){
        //similar implementation
        return {};
    }
    get(){
        //return object for all clients
        return {};
    }
    
}