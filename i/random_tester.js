var time = setInterval(roll, 0.0000001);
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
function roll() {
		i1 = (Math.floor(Math.random() * 10));
	$("#num1").html(i1);
		i2 = (Math.floor(Math.random() * 10));
	$("#num2").html(i2);
		i3 = (Math.floor(Math.random() * 10));
	$("#num3").html(i3);
		i4 = (Math.floor(Math.random() * 10));
	$("#num4").html(i4);
		i5 = (Math.floor(Math.random() * 10));
	$("#num5").html(i5);
	if ((i1==i2)&&(i3==i4)&&(i3==i5)&&(i2==i3)){
		$("#score").html("x5");
		x5+=1;
		i++;		
	}
	else if ((i1==i2)&&(i2==i3)&&(i3==i4) || (i1==i3)&&(i4==i3)&&(i5==i4) || (i1==i4)&&(i4==i2)&&(i5==i1) || (i3==i2)&&(i5==i4)&&(i4==i3)){
		$("#score").html("x4");
		x4+=1;
		i++;
	}
	else if ((i1==i2)&&(i2==i3)&&(i3==i1) || (i3==i4)&&(i4==i5)&&(i5==i3) || (i4==i5)&&(i2==i4)&&(i2=i5) || (i2==i3)&&(i4==i2)&&(i4==i3) || (i1==i4)&&(i5==i4)&&(i5==i1) || (i1==i2)&&(i5==i1)&&(i5==i2) || (i1==i2)&&(i4==i2)&&(i4==i1) || (i2==i3)&&(i5==i2)&&(i3==i5) || (i1==i3)&&(i4==i1)&&(i3==i4) || (i5==i1)&&(i3==i1)&&(i5==i3)){
		$("#score").html("x3");
		x3+=1;
		i++;		
	}
	else if ((i1==i2) || (i2==i3) || (i3==i4) || (i4==i5) || (i5==i3) || (i5==i2) || (i5==i1) || (i4==i2) || (i4==i1) || (i1==i3)) {
		$("#score").html("x2");
		x2+=1;
		i++;
	}
	else {
		$("#score").html("x1");
		x1+=1;
		i++;		
	}
	$("#x1").html(x1 + " ( " + (x1/i*100) + " ) ");
		$("#x2").html(x2 + " ( " + (x2/i*100) + " ) ");
			$("#x3").html(x3 + " ( " + (x3/i*100) + " ) ");
		$("#x4").html(x4 + " ( " + (x4/i*100) + " ) ");
	$("#x5").html(x5 + " ( " + (x5/i*100) + " ) ");
		$("#iii").html(i);
	switch(i1){
		case 1:
			i11++;
			break;
		case 2:
			i12++;
			break;
		case 3:
			i13++;
			break;
		case 4:
			i14++;
			break;	
		case 5:
			i15++;
			break;
		case 6:
			i16++;
			break;
		case 7:
			i17++;
			break;
		case 8:
			i18++;
			break;
		case 9:
			i19++;
			break;
		case 0:
			i10++;
			break;
	}
		$("#x10").html(i10 + " ( " + (i10/i*100) + " ) ");
		$("#x11").html(i11 + " ( " + (i11/i*100) + " ) ");
		$("#x12").html(i12 + " ( " + (i12/i*100) + " ) ");
		$("#x13").html(i13 + " ( " + (i13/i*100) + " ) ");
		$("#x14").html(i14 + " ( " + (i14/i*100) + " ) ");
		$("#x15").html(i15 + " ( " + (i15/i*100) + " ) ");
		$("#x16").html(i16 + " ( " + (i16/i*100) + " ) ");
		$("#x17").html(i17 + " ( " + (i17/i*100) + " ) ");
		$("#x18").html(i18 + " ( " + (i18/i*100) + " ) ");
		$("#x19").html(i19 + " ( " + (i19/i*100) + " ) ");


		if ((i10/i*100)>=10) {
			$("#x10").css({"color" : "#00ff99"});    
		}
		else{
			$("#x10").css({"color" : "aqua"});			
		}

		if ((i11/i*100)>=10) {
			$("#x11").css({"color" : "#00ff99"});
		}
		else{
			$("#x11").css({"color" : "aqua"});		
		}

		if ((i12/i*100)>=10) {
			$("#x12").css({"color" : "#00ff99"});
		}
		else{
			$("#x12").css({"color" : "aqua"});			
		}

		if ((i13/i*100)>=10) {
			$("#x13").css({"color" : "#00ff99"});
		}
		else{
			$("#x13").css({"color" : "aqua"});
		}

		if ((i14/i*100)>=10) {
			$("#x14").css({"color" : "#00ff99"});
		}
		else{
			$("#x14").css({"color" : "aqua"});
		}

		if ((i15/i*100)>=10) {
			$("#x15").css({"color" : "#00ff99"});
		}
		else{
			$("#x15").css({"color" : "aqua"});
		}

		if ((i16/i*100)>=10) {
			$("#x16").css({"color" : "#00ff99"});
		}
		else{
			$("#x16").css({"color" : "aqua"});
		}

		if ((i17/i*100)>=10) {
			$("#x17").css({"color" : "#00ff99"});
		}
		else{
			$("#x17").css({"color" : "aqua"});
		}

		if ((i18/i*100)>=10) {
			$("#x18").css({"color" : "#00ff99"});
		}
		else{
			$("#x18").css({"color" : "aqua"});
		}

		if ((i19/i*100)>=10) {
			$("#x19").css({"color" : "#00ff99"});
		}
		else{
			$("#x19").css({"color" : "aqua"});
		}

		/////////////////////////////////////////////
		if (((x1/i*100)>= 30 ) && ((x1/i*100)< 31)) {
			$("#x1").css({"color" : "#00ff99"});			
		}
		else{
			$("#x1").css({"color" : "orange"});			
		}
		if (((x2/i*100)>= 60 ) && ((x2/i*100)< 51.2)) {
			$("#x2").css({"color" : "#00ff99"});			
		}
		else{
			$("#x2").css({"color" : "orange"});			
		}
		if (((x3/i*100)>= 8 ) && ((x3/i*100)< 8.15)) {
			$("#x3").css({"color" : "#00ff99"});			
		}
		else{
			$("#x3").css({"color" : "orange"});			
		}
		if (((x4/i*100)>= 0.35 ) && ((x4/i*100)< 0.4)) {
			$("#x4").css({"color" : "#00ff99"});			
		}
		else{
			$("#x4").css({"color" : "orange"});			
		}
		if (((x5/i*100)>= 0.012 ) && ((x5/i*100)< 0.015)) {
			$("#x5").css({"color" : "#00ff99"});			
		}
		else{
			$("#x5").css({"color" : "orange"});			
		}

}
$("#button").click(function(){
	roll();

});

