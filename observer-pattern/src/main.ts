import {EmailObserver,MobileObserver } from './observer';
import {OBSERVABLE} from './observable';

function main() {

    const observable1 = new OBSERVABLE({name: 'bikrant'});

    const o1 = new EmailObserver(observable1,'u1@mail.com');
    const o2 = new MobileObserver(observable1,'98782838');
    const o3 = new EmailObserver(observable1,'u2@mail.com');
    
    
    observable1.add(o1);
    observable1.add(o2);
    observable1.add(o3);
    observable1.setData({name: 'raman'});
    observable1.setData({name: 'raju'});

}
main();