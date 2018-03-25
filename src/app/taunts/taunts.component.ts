import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taunts',
  templateUrl: './taunts.component.html',
  styleUrls: ['./taunts.component.css']
})
export class TauntsComponent implements OnInit {
	messages = ["poink","awjdiod","jeikfm","äeifamefk"];
	send(message: string):void{
		this.messages.push(message);
	}
  constructor() { }

  ngOnInit() {
  }

}
