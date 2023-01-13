/*
Statement: Design a Directory system using Composite Design pattern

 


*/

import File from "./file";
import Directory from "./directory";


export function main() {
    const home = new Directory("home");
    const movies = new Directory("movies");
    const projects = new Directory("project");
    home.add(movies);
    home.add(projects);
    const project1 = new File('react-demo');
    projects.add(project1);
    
    const movie1 = new File('inception');
    const movie2 = new File('goodbye');
    const movie3 = new File('vikram vedha');
    movies.add([movie1,movie2,movie3]);
    console.log(home.ls());

}