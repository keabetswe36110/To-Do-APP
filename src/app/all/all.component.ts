import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { AddToDoComponent } from '../add-to-do/add-to-do.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  displayedColumns: string[] = ['title', 'dueDate', 'status', 'delete', 'edit'];
  dataSource: any = [];
  dialogRef: any;

  constructor(private sharedService: SharedService, private dialog: MatDialog, private snackbar: MatSnackBar) {

  }
  ngOnInit(): void {
    console.log(this.sharedService.getTodoList());
    this.sharedService.todoList$.subscribe({
      next: (response) => this.dataSource = response,
      error: (error) => console.log(error),
      complete: () => { }
    })

  }
  delete(todo1: string) {
    let deletes = this.sharedService.getTodoList()
    deletes = deletes.filter((item: any) => item.title != todo1
    )
    this.sharedService.addTodoList(deletes);
  }

  editTodo(todo: any): void {
    const dialogRef = this.dialog.open(AddToDoComponent, {
      data: todo
    })

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.snackbar.open('update was cancelled', 'OK', { duration: 3000 })
      } else {
        this.snackbar.open(result, 'OK', { duration: 3000 })
      }

    });

  }
  close() {
    this.dialogRef.close()
  }

}

