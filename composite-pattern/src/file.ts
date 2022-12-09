import FileSystem from "./FileSystemInterface";

export default class File implements FileSystem{
    filename: string;
    constructor(name:string){
        this.filename = name
    }
     ls () {
        console.log('f ',this.filename)
    }
}