import { Component } from '@angular/core';
import { Post } from 'posts.model'; //importing my own created interface.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanstack';

  // storedposts:any =[]; Initially my post array.
  storedposts:Post[] =[]; //using my interface
  onPostAdded(post: any)
  {
    // this.storedposts.push(1); this will throw error as this is not the type that we have declared in interface Post.If storedposts:any is used like the one above this error would not have identified by ts.
    this.storedposts.push(post);
  }
}
