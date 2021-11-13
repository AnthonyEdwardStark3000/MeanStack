import { Component,Input } from "@angular/core";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent
{
  // lists=[
  //   {
  //     uname:'soomeone',
  //     age:21
  //   },
  //   {
  //     uname:'teo',
  //     age:21
  //   },
  //   {
  //     uname:'three',
  //     age:42
  //   },
  // ] Created to check the iteration through the elements

 @Input() lists=[
   {
     title:'',
     content:''
   }
 ];
}
