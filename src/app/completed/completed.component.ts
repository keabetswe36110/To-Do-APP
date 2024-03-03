import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  constructor(private sharedServices: SharedService) { }
  displayedColumns: string[] = ['title', 'dueDate', 'status', 'delete', 'edit'];
  dataSource: any = [];
  OnlyCompleted: any[] = [];

  ngOnInit(): void {
    this.sharedServices.getTodoList().map((item: { status: string; }) => {
      if (item.status === 'completed') {
        this.OnlyCompleted.push(item)
      }
    })

    this.dataSource = this.OnlyCompleted;
  }

  delete(obj: any) {
    console.log(obj)
    let allTodo = this.sharedServices.getTodoList();
    console.log(1111,allTodo)
    // console.log(allTodo)
    // allTodo.filter((todo: { title: string; }) => todo.title != title);
    let deletes = allTodo.filter((el: any) => {
      el.status !== obj.status && el.title !== obj.title
    } )
   
    this.sharedServices.addTodoList(deletes);
    
    // this.dataSource =deletes;
  }
  refreshPage(): void {
    window.location.reload()

}
}
