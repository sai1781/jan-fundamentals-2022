console.log("hi");


/*

var n = prompt("enter the number the values you ");
var arr = new Array(n);
for(var i = 0; i<=n; i++){
	var c = prompt("enter the value");
	arr.push(c);
	}
var max = arr[0];
for(var j=0; j<=i; j++){
	if(max > arr[j]){
		max = arr[j];
		}
	}
	console.log(max); 
*/

// this is the right one downside
var n = prompt("enter the number the values you want");
var arr = new Array(n);
for(var i = 0; i<=n; i++){
	var c = prompt("enter the value");
	arr.push(c);
	}
var max = arr[0];
for(var i=0; i<=arr.length; i++){
	if(max < arr[i]){
		max = arr[i];
		}
	}
	console.log(max);







