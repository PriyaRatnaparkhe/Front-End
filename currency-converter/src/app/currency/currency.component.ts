import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
inputValue: number=0;
toGroup:any;
fromGroup:any;
outputDivision:number=0;
isHidden:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
clickEve()
{  
if(this.fromGroup==1 && this.toGroup==4)
{
  let indCur=this.inputValue;
  this.outputDivision=indCur;
  this.isHidden=false;
}

if(this.fromGroup==1 && this.toGroup==5)
{
let usdCur=this.inputValue*0.013;
this.outputDivision=usdCur;
this.isHidden=false;
}

if(this.fromGroup==1 && this.toGroup==6)
{
  let eurCur=this.inputValue*0.012;
  this.outputDivision=eurCur;
  this.isHidden=false;
}



if(this.fromGroup==2 && this.toGroup==4)
{
  let indCur=this.inputValue*74.15;
  this.outputDivision=indCur;
  this.isHidden=false;
}

if(this.fromGroup==2 && this.toGroup==5)
{
let usdCur=this.inputValue;
this.outputDivision=usdCur;
this.isHidden=false;
}

if(this.fromGroup==2 && this.toGroup==6)
{
  let eurCur=this.inputValue*0.88;
  this.outputDivision=eurCur;
  this.isHidden=false;
}


if(this.fromGroup==3 && this.toGroup==4)
{
  let indCur=this.inputValue*84.57;
  this.outputDivision=indCur;
  this.isHidden=false;
}

if(this.fromGroup==3 && this.toGroup==5)
{
let usdCur=this.inputValue*1.14;
this.outputDivision=usdCur;
this.isHidden=false;
}

if(this.fromGroup==3 && this.toGroup==6)
{
  let eurCur=this.inputValue;
  this.outputDivision=eurCur;
  this.isHidden=false;
}

}
}
