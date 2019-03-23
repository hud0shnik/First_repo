
var i = 0;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var i10 = 0;
var i11 = 0;
var i12 = 0;
var i13 = 0;
var i14 = 0;
var i15 = 0;
var i16 = 0;
var i17 = 0; 
var i18 = 0;
var i19 = 0;
var ioo = "err";
function roll() {
	i1 = (Math.floor(Math.random() * 10));
	smile(i1);
	$("#num1").html(ioo);
	
	i2 = (Math.floor(Math.random() * 10));
	smile(i2);
	$("#num2").html(ioo);

	i3 = (Math.floor(Math.random() * 10));
	smile(i3);
	$("#num3").html(ioo);

	i4 = (Math.floor(Math.random() * 10));
	smile(i4);
	$("#num4").html(ioo);

	i5 = (Math.floor(Math.random() * 10));
	smile(i5);
	$("#num5").html(ioo);
	if ((i1==i2)&&(i3==i4)&&(i3==i5)&&(i2==i3)){
		$("#score").html("x5");
		x5+=1;
		i++;		
	}
	else if (((i3==i4)&&(i4==i5)&&(i5==i3)&&(i1==i2)) || ((i1==i4)&&(i4==i5)&&(i1==i5)&&(i2==i3)) || ((i1==i2)&&(i2==i5)&&(i5==i1)&&(i3==i4)) || ((i1==i2)&&(i3==i2)&&(i3==i1)&&(i4==i5)) || ((i2==i4)&&(i4==i5)&&(i5==i2)&&(i1==i3)) || ((i2==i3)&&(i3==i5)&&(i5==i2)&&(i1==i4)) || ((i2==i3)&&(i4==i3)&&(i4==i2)&&(i1==i5)) || ((i1==i3)&&(i3==i5)&&(i5==i1)&&(i2==i4)) || ((i1==i2)&&(i4==i2)&&(i4==i1)&&(i3==i5)) || ((i1==i3)&&(i4==i3)&&(i4==i1)&&(i2==i5))){
		$("#score").html("FULL");
		//x+=1;
		i++;		
	}
	else if (((i1==i2)&&(i2==i3)&&(i3==i4)) || ((i1==i3)&&(i4==i3)&&(i5==i4)) || ((i1==i4)&&(i4==i2)&&(i5==i1)) || ((i3==i2)&&(i5==i4)&&(i4==i3))){
		$("#score").html("x4");
		x4+=1;
		i++;
	}
	else if (((i3==i4)&&(i4==i5)&&(i5==i3)) || ((i1==i4)&&(i4==i5)&&(i1==i5)) || ((i1==i2)&&(i2==i5)&&(i5==i1)) || ((i1==i2)&&(i3==i2)&&(i3==i1)) || ((i2==i4)&&(i4==i5)&&(i5==i2)) || ((i2==i3)&&(i3==i5)&&(i5==i2)) || ((i2==i3)&&(i4==i3)&&(i4==i2)) || ((i1==i3)&&(i3==i5)&&(i5==i1)) || ((i1==i2)&&(i4==i2)&&(i4==i1)) || ((i1==i3)&&(i4==i3)&&(i4==i1))){
		$("#score").html("x3");
		x3+=1;
		i++;		
	}
	else if (((i1==i2)&&(i3==i4)) || ((i1==i2)&&(i3==i5)) || ((i1==i2)&&(i5==i4)) || ((i3==i2)&&(i1==i5)) || ((i3==i2)&&(i1==i4)) || ((i3==i2)&&(i5==i4)) || ((i5==i2)&&(i3==i4)) || ((i1==i5)&&(i3==i4)) || ((i1==i3)&&(i5==i4)) || ((i1==i3)&&(i2==i4)) || ((i1==i3)&&(i2==i5)) || ((i1==i4)&&(i2==i5)) || ((i1==i4)&&(i3==i5)) || ((i1==i5)&&(i2==i4)) || ((i4==i2)&&(i3==i5))) {
		$("#score").html("x2 x2");
		x2+=1;
		i++;
	}
	else {
		$("#score").html("x1");
		x1+=1;
		i++;		
	}
	

      //          -----  0  &#127817;      1 &#127818;       2   &#127820;           3    &#127821;       4  &#127822;           5 &#127822;      
      //               6  &#127825;            7  &#127826;         8  &#127827;        9 &#127815;
}
function smile(x){
	switch(x){
		case 0:
			ioo = "&#127817;"
			break;
		case 1:
			ioo = "&#127817;"
			break;
		case 2:
			ioo = "&#127820;"
			break;
		case 3:
			ioo = "&#127821;"
			break;
		case 4:
			ioo = "&#127822;"
			break;
		case 5:
			ioo = "&#127822;"
			break;
		case 6:
			ioo = "&#127825;"
			break;
		case 7:
			ioo = "&#127826;"
			break;
		case 8:
			ioo = "&#127827;"
			break;
		case 9:
			ioo = "&#127827;"
			break;
		default:
			ioo = "eror"
	}	 
}
$("#but").click(function(){
	roll();

});

