import { Component, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { TauntsComponent } from '../taunts/taunts.component';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
