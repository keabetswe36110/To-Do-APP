import { Component ,OnInit} from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit{
  displayedColumns: string[] = ['title', 'dueDate', 'status','delete','edit'];
  dataSource:any = [];
  OnlyPending : any []= [];

  constructor(private SharedService : SharedService){}

  ngOnInit(): void {
    
    this.SharedService.getTodoList().map((item: { status: string; }) =>{
      if(item.status === 'pending'){
        this.OnlyPending.push(item)
      }
    })

    this.dataSource = this.OnlyPending;
    

  }  

}
