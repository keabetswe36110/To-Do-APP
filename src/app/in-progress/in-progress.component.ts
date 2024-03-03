import { Component ,OnInit} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit{
  constructor(private sharedServices: SharedService) { }
  displayedColumns: string[] = ['title', 'dueDate', 'status', 'delete', 'edit'];
  dataSource: any = [];
  OnlyCompleted: any[] = [];

  ngOnInit(): void {
    this.sharedServices.getTodoList().map((item: { status: string; }) => {
      if (item.status === 'in-progress') {
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
    let deletes = allTodo.filter((el: any) => el.title != obj.title );
    console.log(24235,deletes);
    this.sharedServices.addTodoList(deletes);
    
    // this.dataSource =deletes;
  }
  refreshPage(): void {
    window.location.reload()
  
  }
  
}

