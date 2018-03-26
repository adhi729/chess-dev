import { Component, OnInit } from '@angular/core';
import { board_square } from '../class_defs/board_square_item';
import { boardIniState } from '../class_defs/board_state';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {
	squares: board_square[] = [] ;
	customStyle(square: board_square): any {
		let tempColor = (square.id.x+square.id.y)%2 ? true : false;
		let tempActive = (square.status == "active")? true : false;
		let square_width = window.innerWidth/10;
		let square_height = window.innerHeight/10;
		return {
			'background-color' : tempColor ? 'lightBlue' : 'Blue',
			'width': String(square_width)+'px',
			'height': String(square_width)+'px',
			'top': String(square.id.x*square_width)+'px',
			'left': String(square.id.y*square_width)+'px',
			'position': 'absolute',
			'overflow': 'hidden',
			'box-shadow': tempActive? 'inset 0px 0px 5px 5px black': 'none',
		}
	}
	getID(square: board_square): string{
		let id = String(square.id.y)+String(square.id.x);
		return id
	}
	addSquares(squares: board_square[]): void{
		if (sessionStorage.length > 0) {
			this.squares = JSON.parse(sessionStorage.getItem('key')) ;
		}else {
			this.squares = squares;
		}
	};
	private MoveCount :{king: boolean; rook_right: boolean; rook_left: boolean;} = {king: false, rook_left: false, rook_right: false};
	private makeMoveSquare : board_square = null;
	private activeSquares: number[] = [];
	private piecesTake = [[],[]];
	private findMoves(x: number,y: number,piece:string): void {
		
		let index_id :{x_id : number; y_id: number} = {x_id : x, y_id : y};
		switch (piece.slice(0,-9)) {
			case "pawn":
				if (x = 6) {
					this.activeSquares.push(x*8+y-1,x*8+y+7)
				} else {
					this.activeSquares.push(x*8+y-1)
				}
				break;
			
			case "rook":
				if (index_id.x_id - 1 > 0){
					for (var i = index_id.x_id - 1; i > 0; i--) {
						if (this.squares[i*8 + index_id.y_id - 9].piece == "" ){
							this.activeSquares.push(i*8 + index_id.y_id - 9)
						} else {
							if (piece.slice(-9,-3) != this.squares[i*8 + index_id.y_id - 9].piece.slice(-9,-3) ){
								this.activeSquares.push(i*8 + index_id.y_id - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1< 7){
					for (var i = index_id.x_id + 1; i <= 8; i++) {
						if (this.squares[i*8 + index_id.y_id - 9].piece == "" ){
							this.activeSquares.push(i*8 + index_id.y_id - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + index_id.y_id - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + index_id.y_id - 9)
							}
							break;
						}
					}
				}
				if (index_id.y_id - 1< 7){
					for (var i = index_id.y_id + 1; i <= 8; i++) {
						if (this.squares[index_id.x_id*8 + i - 9].piece == "" ){
							this.activeSquares.push(index_id.x_id*8 + i - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[index_id.x_id*8 + i - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(index_id.x_id*8 + i - 9)
							}
							break;
						}
					}
				}
				if (index_id.y_id - 1 > 0){
					for (var i = index_id.y_id - 1; i > 0; i--) {
						if (this.squares[index_id.x_id*8 + i - 9].piece == "" ){
							this.activeSquares.push(index_id.x_id*8 + i - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[index_id.x_id*8 + i - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(index_id.x_id*8 + i - 9)
							}
							break;
						}
					}
				}
				break;

			case "bishop":
				if (index_id.x_id - 1 > 0 && index_id.y_id - 1 > 0){
					for (let i = index_id.x_id - 1,j = index_id.y_id -1; i>0 && j>0; i--,j--){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 < 7 && index_id.y_id - 1 < 7){
					for (let i = index_id.x_id + 1,j = index_id.y_id + 1; i<=8 && j<=8; i++,j++){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 > 0 && index_id.y_id - 1 < 7){
					for (let i = index_id.x_id - 1,j = index_id.y_id + 1; i>0 && j<=8; i--,j++){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 < 7 && index_id.y_id - 1 > 0){
					for (let i = index_id.x_id + 1,j = index_id.y_id - 1; i<=8 && j>0; i++,j--){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				break;
			case "horse":
				let possible: {x_id : number; y_id: number}[] = [
					{x_id : x+1, y_id : y+2},
					{x_id : x+1, y_id : y-2},
					{x_id : x-1, y_id : y+2},
					{x_id : x-1, y_id : y-2},
					{x_id : x+2, y_id : y+1},
					{x_id : x+2, y_id : y-1},
					{x_id : x-2, y_id : y+1},
					{x_id : x-2, y_id : y-1}];
				for(let poss of possible) {
					if(poss.x_id>0&&poss.x_id<=8&&poss.y_id>0&&poss.y_id<=8){
						if (this.squares[poss.x_id*8+poss.y_id-9].piece == "" ){
							this.activeSquares.push(poss.x_id*8+poss.y_id-9)
						} else {
							if (piece.slice(-8,-3) != this.squares[poss.x_id*8+poss.y_id-9].piece.slice(-8,-3) ){
								this.activeSquares.push(poss.x_id*8+poss.y_id-9)
							}
						}
					}
				}
				break;	
			case "queen":
				if (index_id.x_id - 1 > 0 && index_id.y_id - 1 > 0){
					for (let i = index_id.x_id - 1,j = index_id.y_id -1; i>0 && j>0; i--,j--){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 < 7 && index_id.y_id - 1 < 7){
					for (let i = index_id.x_id + 1,j = index_id.y_id + 1; i<=8 && j<=8; i++,j++){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 > 0 && index_id.y_id - 1 < 7){
					for (let i = index_id.x_id - 1,j = index_id.y_id + 1; i>0 && j<=8; i--,j++){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 < 7 && index_id.y_id - 1 > 0){
					for (let i = index_id.x_id + 1,j = index_id.y_id - 1; i<=8 && j>0; i++,j--){
						if (this.squares[i*8 + j - 9].piece == "" ){
							this.activeSquares.push(i*8 + j - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + j - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + j - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 > 0){
					for (var i = index_id.x_id - 1; i > 0; i--) {
						if (this.squares[i*8 + index_id.y_id - 9].piece == "" ){
							this.activeSquares.push(i*8 + index_id.y_id - 9)
						} else {
							if (piece.slice(-9,-3) != this.squares[i*8 + index_id.y_id - 9].piece.slice(-9,-3) ){
								this.activeSquares.push(i*8 + index_id.y_id - 9)
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1< 7){
					for (var i = index_id.x_id + 1; i <= 8; i++) {
						if (this.squares[i*8 + index_id.y_id - 9].piece == "" ){
							this.activeSquares.push(i*8 + index_id.y_id - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[i*8 + index_id.y_id - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(i*8 + index_id.y_id - 9)
							}
							break;
						}
					}
				}
				if (index_id.y_id - 1< 7){
					for (var i = index_id.y_id + 1; i <= 8; i++) {
						if (this.squares[index_id.x_id*8 + i - 9].piece == "" ){
							this.activeSquares.push(index_id.x_id*8 + i - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[index_id.x_id*8 + i - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(index_id.x_id*8 + i - 9)
							}
							break;
						}
					}
				}
				if (index_id.y_id - 1 > 0){
					for (var i = index_id.y_id - 1; i > 0; i--) {
						if (this.squares[index_id.x_id*8 + i - 9].piece == "" ){
							this.activeSquares.push(index_id.x_id*8 + i - 9)
						} else {
							if (piece.slice(-8,-3) != this.squares[index_id.x_id*8 + i - 9].piece.slice(-8,-3) ){
								this.activeSquares.push(index_id.x_id*8 + i - 9)
							}
							break;
						}
					}
				}
				break;
			case "king":
				let possibles: {x_id : number; y_id: number}[] = [
					{x_id : x+1, y_id : y+1},
					{x_id : x+1, y_id : y},
					{x_id : x+1, y_id : y-1},
					{x_id : x, y_id : y+1},
					{x_id : x, y_id : y-1},
					{x_id : x-1, y_id : y+1},
					{x_id : x-1, y_id : y},
					{x_id : x-1, y_id : y-1}];
				for(let poss of possibles) {
					if(poss.x_id>0&&poss.x_id<=8&&poss.y_id>0&&poss.y_id<=8){
						console.log()
						if(!this.checkCheck(poss.x_id,poss.y_id)){
							if (this.squares[poss.x_id*8+poss.y_id-9].piece == "" ){
								this.activeSquares.push(poss.x_id*8+poss.y_id-9)						
							} else {
								if (piece.slice(-8,-3) != this.squares[poss.x_id*8+poss.y_id-9].piece.slice(-8,-3) ){
									this.activeSquares.push(poss.x_id*8+poss.y_id-9)
								}
							}
						}	
					}
				}
				break;

		}
	}

	private checkCheck(x: number,y: number): boolean{
		let index_id :{x_id : number; y_id: number} = {x_id : x, y_id : y};
				if (index_id.x_id - 1 > 0 && index_id.y_id - 1 > 0){
					for (let i = index_id.x_id - 1,j = index_id.y_id -1; i>0 && j>0; i--,j--){
						if (this.squares[i*8 + j - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[i*8+j-9].piece.slice(-8,-3)){
								if(this.squares[i*8+j-9].piece.slice(0,-9) == "queen" ||this.squares[i*8+j-9].piece.slice(0,-9) == "bishop" ){
									console.log(i,j,"check from bishop/queen")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 < 7 && index_id.y_id - 1 < 7){
					for (let i = index_id.x_id + 1,j = index_id.y_id + 1; i<=8 && j<=8; i++,j++){
						if (this.squares[i*8 + j - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[i*8+j-9].piece.slice(-8,-3)){
								if(this.squares[i*8+j-9].piece.slice(0,-9) == "queen" ||this.squares[i*8+j-9].piece.slice(0,-9) == "bishop" ){
									console.log(i,j,"check from bishop/queen")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 > 0 && index_id.y_id - 1 < 7){
					for (let i = index_id.x_id - 1,j = index_id.y_id + 1; i>0 && j<=8; i--,j++){
						if (this.squares[i*8 + j - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[i*8+j-9].piece.slice(-8,-3)){
								if(this.squares[i*8+j-9].piece.slice(0,-9) == "queen" ||this.squares[i*8+j-9].piece.slice(0,-9) == "bishop" ){
									console.log(i,j,"check from bishop/queen")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 < 7 && index_id.y_id - 1 > 0){
					for (let i = index_id.x_id + 1,j = index_id.y_id - 1; i<=8 && j>0; i++,j--){
						if (this.squares[i*8 + j - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[i*8+j-9].piece.slice(-8,-3)){
								if(this.squares[i*8+j-9].piece.slice(0,-9) == "queen" ||this.squares[i*8+j-9].piece.slice(0,-9) == "bishop" ){
									console.log(i,j,"check from bishop/queen")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1 > 0){
					for (var i = index_id.x_id - 1; i > 0; i--) {
						if (this.squares[i*8 + index_id.y_id - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[i*8+index_id.y_id-9].piece.slice(-8,-3)){
								if(this.squares[i*8+index_id.y_id-9].piece.slice(0,-9) == "queen" ||this.squares[i*8+index_id.y_id-9].piece.slice(0,-9) == "rook" ){
									console.log(i,index_id.y_id,"check from rook/queen_01")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.x_id - 1< 7){
					for (var i = index_id.x_id + 1; i <= 8; i++) {
						if (this.squares[i*8 + index_id.y_id - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[i*8+index_id.y_id-9].piece.slice(-8,-3)){
								if(this.squares[i*8+index_id.y_id-9].piece.slice(0,-9) == "queen" ||this.squares[i*8+index_id.y_id-9].piece.slice(0,-9) == "rook" ){
									console.log(i,index_id.y_id,"check from rook/queen_01")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.y_id - 1< 7){
					for (var j = index_id.y_id + 1; j <= 8; j++) {
						if (this.squares[index_id.x_id*8 + j - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[index_id.x_id*8+j-9].piece.slice(-8,-3)){
								if(this.squares[index_id.x_id*8+j-9].piece.slice(0,-9) == "queen" ||this.squares[index_id.x_id*8+j-9].piece.slice(0,-9) == "rook" ){
									console.log(index_id.x_id,j,"check from rook/queen_03")
									return true;
								}
							}
							break;
						}
					}
				}
				if (index_id.y_id - 1 > 0){
					for (var j = index_id.y_id - 1; j > 0; j--) {
						if (this.squares[index_id.x_id*8 + j - 9].piece != "" ){
							if(this.squares[index_id.x_id*8+index_id.y_id-9].piece.slice(-8,-3) != this.squares[index_id.x_id*8+j-9].piece.slice(-8,-3)){
								if(this.squares[index_id.x_id*8+j-9].piece.slice(0,-9) == "queen" ||this.squares[index_id.x_id*8+j-9].piece.slice(0,-9) == "rook" ){
									console.log(index_id.x_id,j,"check from rook/queen_03")
									return true;
								}
							}
							break;
						}
					}
				}
		return false;
	}

	private commitMove(id_1: number, id_2: number): void{
		if (this.squares[id_2].piece.length != 0 ){
			this.piecesTake[0].push(this.squares[id_2].piece);
			this.squares[id_2].piece = this.squares[id_1].piece;
			this.squares[id_1].piece = "";
		} else{
			this.squares[id_2].piece = this.squares[id_1].piece;
			this.squares[id_1].piece = "";
		}
	}
	changeStatus(id: number): void{
		if( this.squares[id].status.length == 0){
			this.squares[id].status = "active";
		} else {
			this.squares[id].status = "";
		}
	}

	moveMe(square: board_square): void{
		if (this.makeMoveSquare == null) {
			this.makeMoveSquare = square;
			square.status = "active";
			this.findMoves(square.id.x, square.id.y, square.piece);
			for (let key of this.activeSquares)	{
			this.changeStatus(key)
			}
			
		} else{
			if (square !=  this.makeMoveSquare && square.status == "active" ){
				this.squares[square.id.x*8 + square.id.y-9].piece = this.squares[this.makeMoveSquare.id.x*8+this.makeMoveSquare.id.y - 9].piece;
				
				this.squares[this.makeMoveSquare.id.x*8+this.makeMoveSquare.id.y - 9].piece = "";
				let hello: boolean = this.checkCheck(1,5);
				if (hello == true){alert("check")} 
			};
			this.squares[this.makeMoveSquare.id.x*8+this.makeMoveSquare.id.y - 9].status = "" ;
			for (let key of this.activeSquares)	{
			this.changeStatus(key);
			}
			this.makeMoveSquare = null;
			this.activeSquares= [];
		};
		//sessionStorage.setItem('key',JSON.stringify(this.squares));
		
	}
	getPiece(x :string): string{
		return this.squares[parseInt(x.slice(1,2))*8 + parseInt(x.slice(0,1))-9].piece.slice(0,-3);
		
	}; 
  constructor() { }

  ngOnInit() {
  	let	boards: board_square[] = [];
	/*for (let i = 1; i <9 ; i++) {
		for (let j = 1; j < 9; j++) {
			let new_square: board_square = {
				id: {x:i,y:j},
				piece: "queen_white"
			};
			boards.push(new_square);
		}
	}*/
	boards = boardIniState;
	this.addSquares(boards);
  }
}
