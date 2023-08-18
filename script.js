function threeSum(arr, target) {
// write your code here
	let c=0;
  for(let i=0;i<arr.length;i++){
	  for(let j=0;j<arr.length;j++){
		  for(let k=0;k<arr.length;k++){
			  if(arr[i]+arr[j]+arr[k]==target &&i!==j && j!==k){
				c++;	  
			  }
		  }
	  }
  }
	return c;
}

module.exports = threeSum;
