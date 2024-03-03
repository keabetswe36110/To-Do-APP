import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddToDoComponent } from '../add-to-do/add-to-do.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent {
  // selectedItem ..we're declaring a variable and initiating it to zero because we want the item that is selected to be on index 0 of the array by default
  // navItem..is an array of object since we dont wanna hard Code items to be on the navigation bar so we store it in an array then use *ngFor to iterate through it in html
  // 
  selectedItem: number = 0;
  navItem: any[] = [{ label: 'all', route: '/home/all' },
  { label: 'in-progress', route: '/home/in-progress' },
  { label: 'pending', route: '/home/pending' },
  { label: 'completed', route: '/home/completed' },
  ];
  // constructor runs when an application starts,so we use constructor to inject and run any initial code that is needed.
  constructor(private router: Router, private dialog: MatDialog, private snackbar: MatSnackBar,private sharedservice:SharedService) {
    // we are using a find method to check if the selected index url is the same as the router url
    // if true we want to set the number called selectedItem 
    this.navItem.find((item, i) => {
      if (item.route === this.router.url)
        this.selectedItem = i;
    });
  }
  // function to hilight the links.
  // log(i: number): void {
  //   console.log(i)
  //   this.selectedItem = i;
  //   this.router.navigate([`/home/${this.navItem[i]}`])
  
  addToDo(): void {
    const dialogRef = this.dialog.open(AddToDoComponent)

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.snackbar.open('Action was cancelled', 'OK',{duration:3000})
      } else {
        this.sharedservice.refreshTodoList()
        console.log(`Dialog result: ${result}`);
        this.snackbar.open(result, 'OK',{duration:3000})
      }

    });
    // .afterClosed(result => console.log(result  ))
  }
}
