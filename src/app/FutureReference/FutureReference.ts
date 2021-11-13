
/**
  ACADEMIND
 1.Created a Project
 2.created custom component
 3.Imported the component in app.module.ts
 4.Started adding event listeners
 post-create.compnent.html
 added text-area
 5.Read the user input and used property binding to add it to the variable and displayed it using the interpolation.
 6.Started to style by adding angular material. ng add @angular/material
npm install -g @angular/cli can also be used it seems.
7. Adding angular material will add @angular/material and @angular/cdk in package.json
8.Created a component to function as header and added angular toolbar which is simiar to ionic
and imported ionic toolbar component
9.created another component posts-list to display the content or act as body tag
10.using mat-accordion here to display the data first check with dummy default data
11.Read user data and use two way binding to add it to the variable at post-create .html and
post-create .ts
12.create event emitter to emit an event in the post-create component and respond to the event in
event-list.compo.ts event emitter and Output does this job.
13 *** .Move to app.component.html and receive the event and assign it to an empty array using an fucntion so that
we can use it to show them in our component. **
14. ***Make the array of post-list.component bindeable as it is supposed to receive the input from the post-create component
use @Input() to do it after importing the input from @angular/core***
15.Starting with the optimization (i.e) creating an blueprint so that we can understand the data types used in our project and the
project structure incase we work with it after sometime ....create an interface. Here it is posts.model.ts
16.Making use of the interface that we have created in several components like app.component.ts and post-create.component.ts
17.Post-create.component.html is refactored made use of forms as it will gave space for validation and so on.Import FormsModule in app.module.ts
ng model in post-create.component.html is no longer needed
**/
