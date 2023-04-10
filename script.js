let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	let ans = [];
	for(let i=0;i<arr.length;i++){
		ans[i]=++arr[i];
	}
	return ans;
}

alert(incrementArray(arr));
