export class Document {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public url: string,
    public children: string[],
  ){}
  
//   constructor(id:string, name:string, descript:string, url:string, children: string[]){
//     this.id = id;
//     this.name = name;
//     this.descript = descript;
//     this.url = url;
//     this.children = children;
//  } 
}