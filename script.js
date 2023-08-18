function threeSum(arr, target) {
// write your code here
	let c=0;
  for(let i=0;i<arr.length;i++){
	  for(let j=i+1;j<arr.length;j++){
		  for(let k=j+1;k<arr.length;k++){
			  if(arr[i]+arr[j]+arr[k]==target){
				c++;	  
			  }
		  }
	  }
  }
	console.log(c);
}

module.exports = threeSum;
