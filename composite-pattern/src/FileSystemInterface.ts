export default interface FileSystem{
    filename : string,
    fileSystemList?: FileSystem[],
    ls: () => void,
    add?:(obj: FileSystem | FileSystem[]) => void
}