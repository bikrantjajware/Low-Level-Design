import { AccountProxy } from "./account-impl";

export function main(){
    const accountProxy = new AccountProxy();
    const user1 = accountProxy.create('ADMIN');
    const user2 = accountProxy.create('USER');
}