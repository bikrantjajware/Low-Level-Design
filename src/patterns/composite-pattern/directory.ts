import FileSystem from "./src/FileSystemInterface";

export default class Directory implements FileSystem{
    filename: string;
    fileSystemList: FileSystem[]
    constructor(name:string){
        this.filename = name
        this.fileSystemList = []
    }
    ls () {
        console.log('D ',this.filename);
        for(const item of this.fileSystemList){
            item.ls();
        }
    }

    add(fileSystemObject: FileSystem | FileSystem[]){
        if(fileSystemObject instanceof Array){
            for(const file of fileSystemObject){
                this.fileSystemList.push(file);
            }
        }else{
            this.fileSystemList.push(fileSystemObject);
        }
    }
}