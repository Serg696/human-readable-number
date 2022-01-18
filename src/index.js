module.exports = function toReadable (number) {
	let numbers = [0,1,2,3,4,5,6,7,8,9];
  	let strings = ["zero","one","two","three","four","five", "six", "seven", "eight", "nine"];
	//function toRedable(n){
    	let num = String(number).split('');
    	let res = '';
    	console.log(num);
    	num.forEach((elem)=>{
     		numbers.forEach((item, index)=>{
       	 		if (Number(elem) === item){
          			// console.log(typeof elem + " " + el + " " +strings[ind]);
          			// console.log(elem + " " + index);
          			res += strings[index] + " "
        		}
      		});
    	})
    	if (num.length > 2){
      		res = res.split(" ");
      		res[0] = res[0] + " hundred";
		if (res[1] === "zero"){
        		res = res.filter((item)=> item !== "zero");
      		}
      		res = res.join(" ")
    	}
   	 //console.log(res);
	return res;
};
  

