import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private appService: AppService) { }
demoData:any;
selectedValue:any;
 ngOnInit(): void {
  this.appService.getData().subscribe((data)=>{
this.demoData=data;
  });
  }
recieveMessage($event:any){
this.selectedValue=$event
this.sortData()
}

sortData()
{
  if(this.selectedValue==1)
  {
this.demoData.sort((a:any, b:any)=>(a.name>b.name) ? 1:-1)
  }
  if(this.selectedValue==2)
  {
this.demoData.sort((a:any,b:any)=>(new Date(a.birthDate).valueOf()-new Date(b.birthDate).valueOf()))
  }
}

}
