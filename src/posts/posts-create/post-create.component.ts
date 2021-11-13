import { Component, EventEmitter ,Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "posts.model";
@Component({
  selector:'app-post-create',
  templateUrl:"./post-create.component.html",
  styleUrls:['./post-create.component.css'],
})
export class PostCreateComponent
{
  // >usersPost='';
  // # usersInput='';//created to read users input
  // # newpost='';//creted to display the entered value on an button click.
  // buttonclicked=true;
  usertitle='';
  usercontent='';
  // @Output() postCreated= new EventEmitter();  default event emitter.
  @Output() postCreated= new EventEmitter<Post>(); //using my interface to define the type of the emiting event.
  // onAddPost() intitally it was like this but after adding forms and using and form object we are receiving an form obj here
  onAddPost(form: NgForm)
  {
    //*************************************validator to return forms*************************************

    if(form.invalid)
    {
      return;
    }

    //*************************************validator to return forms*************************************

    //*************************************trying an simple toggler*************************************
    //>this.buttonclicked=!this.buttonclicked;
    // >if(this.buttonclicked==true)
    // alert("clicked"); started by adding an simple empty string variable
    // >this.usersPost="Clicked the button";//and the variable is assigned with an value on a key press and will be reflected on a p tag in post-create.component.html
    // >else
    // >this.usersPost="";//and to start with an predefined or with property binding use [value] but it will be replaced by this content.
        //*************************************trying an simple toggler*************************************

        // this.newpost=this.usersInput; // to assign the entered content.

        //*************************************trying to assign the entered title and content*************************************

        const post={
          // title: this.usertitle,
          // content: this.usercontent intitally it was like this.
          title: form.value.title, //accessing the value of the name title in the form argument.
          content: form.value.content,//accessing the value of the name content in the form argument.
        }

        //*************************************trying to assign the entered title and content*************************************

        //*************************************trying to emitt the entered title and content*************************************
        this.postCreated.emit(post);

        //*************************************trying to emiit the entered title and content*************************************



  }
}
