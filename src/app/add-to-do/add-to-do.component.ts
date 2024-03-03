import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {
  statuses: string[] = ['pending', 'in-progress', 'completed']
  todoList: any[] = [];
  todoData: any = {
    title: '',
    dueDate: null,
    status: 'pending'

  }
  isUpdate: boolean = false;
  constructor(private dialogRef: MatDialogRef<AddToDoComponent>, private sharedService: SharedService, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    if (data) {
      this.isUpdate = true;
      this.todoData = data;
    }
  }

  ngOnInit(): void {
    this.getTodoList()
  }

  getTodoList(): void {
    this.todoList = this.sharedService.getTodoList();
  }

  submit(form: NgForm): void {
    if (form.invalid) return;

    if (this.isUpdate) {
      this.todoList = this.todoList.map((element: any) => {
        if (this.data.id === element.id) {
          return this.todoData;
        }else{
          return element
        }
        
      })
    }
    else {
      
      this.todoData = {
        ...this.todoData,
        id: new Date().getTime()
      }
      this.todoList.push(this.todoData)
    }
    // ===============
    // let temp = this.sharedService.getTodoList();
    // temp = temp.find((item: any) => (item.status === this.todoData.status && item.title === this.todoData.title))
    // if (temp) {
    //   alert("Cant add same value twice");
    //   return;
    // }
    // =============

    const response = this.sharedService.addTodoList(this.todoList)
    this.dialogRef.close(response)
  }
  close() {
    this.dialogRef.close()
  }
}
