import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  selectedSort:any;
  constructor() {
    
  }
  @Output() messageFromChild=new EventEmitter<any>();
  ngOnInit(): void {}

getName()
{
  this.selectedSort=1;
  this.messageFromChild.emit(this.selectedSort);
}
getAge()
{
  this.selectedSort=2;
  this.messageFromChild.emit(this.selectedSort);
}
}

