arr = new Array();
arr[0] = new Array(-1,-1,-1);
arr[1] = new Array(-1,-1,-1);
arr[2] = new Array(-1,-1,-1);

let tellturn = document.getElementById("tellTurn");
tellturn.innerText ="O will start the game !!!"

b = 1;

chances = 0;
function check(){
    if(b==1){
        tellturn.innerText = "X's Turn";
        
        b=0;
    }  
    else{
        b=1;
        tellturn.innerText = "O's Turn";
    }


    for(i = 0 ; i < 3 ; i++){
		if(arr[i][0] ==  1 &&  arr[i][1] ==  1 &&  arr[i][2] ==  1 ){
			return 1;
		}
		if(arr[i][0] == 0 && arr[i][1] ==  0 &&  arr[i][2] ==  0){	
			return 0;
		}
	}
	//checking for column
	for( i = 0 ; i < 3 ; i++){
		if(arr[0][i] ==  1 &&  arr[1][i] ==  1 &&  arr[2][i] ==  1 ){
			return 1;
		}
		if(arr[0][i] ==  0 &&  arr[1][i] ==  0 &&  arr[2][i] ==  0 ){	
			return 0;
		}
	}
	//checking for diagonal
	if(arr[0][0] ==  1 &&  arr[1][1] ==  1 &&  arr[2][2] ==  1 ){
		return 1;
	}
	if(arr[0][0] ==  0 &&  arr[1][1] ==  0 &&  arr[2][2] ==  0 ){
		return 0;
	}
    return -1;

}

function change(row,col){
    let curr = document.getElementsByClassName("cont");
    let countvar = 3*row + col;
    let currbox = curr[countvar];
    
    
    if(check(arr) == - 1 && chances < 9){
        
        if(arr[row][col] == -1){
            chances++;
            if(b == 1){
                arr[row][col] = 1;
                currbox.innerText = "X";
            }
            else{
                arr[row][col] = 0;
                currbox.innerText = "O";
            }
        }
        else{
            if(b==1){
                // tellturn.innerText = "X's Turn";
                b=0;
            }  
            else{
                b=1;
                // tellturn.innerText = "O's Turn";
            }
        }
    }
    curr = document.getElementsByClassName("cont");
    countvar = 3*row + col;
    currbox = curr[countvar];
    if(check(arr) == 0){
        currbox.innerText = "O";
        alert("0 wins the game");
        restart();

    }
    else if(check(arr) == 1){
        currbox.innerText = "X";
        alert("X wins the game");
        restart();
    }
    if(chances >= 9){
        alert("Nobody wins");
        restart();
    }

}
function magic(row,col){
    let curr = document.getElementsByClassName("cont");
    let countvar = 3*row + col;
    let currbox = curr[countvar];
    //This  function creates and effect of red blue warning type styles
    
    
    if(currbox[row,col] == -1){
        
    }


}
function restart(){
    arr = new Array();
    arr[0] = new Array(-1,-1,-1);
    arr[1] = new Array(-1,-1,-1);
    arr[2] = new Array(-1,-1,-1);


    let curr = document.getElementsByClassName("cont");
    for(i = 0 ; i < 9 ;i++){
        curr[i].innerText = "";
    }
    chances = 0;
    let tellturn = document.getElementById("tellTurn");
    tellturn.innerText ="O will start the game !!!"
}
