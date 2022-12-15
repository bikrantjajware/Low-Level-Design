export interface Account{
    name?: string
    id?: string
    get:() => object
    create: (client:string) => object
    delete(id:string) : void
}