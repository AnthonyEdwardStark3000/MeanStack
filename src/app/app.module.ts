import { PostListComponent } from './FutureReference/post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule} from '@angular/material/input'; //reading the input module from material.
import { MatCardModule} from '@angular/material/card'; //reading the card
 //module from material.
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './../posts/posts-create/post-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
