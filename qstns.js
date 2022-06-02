//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
let nums = [2,7,11,15]
 const target =9


var twoSum = function(nums, target) {
    let object ={}
    for(let i=0;i<nums.length;i++){
        let diff =Math.abs(target - nums[i])//7
        if(object[diff]!==undefined) {
            return [object[diff],i]
            
        }
        else{
            object[nums[i]]=i
        }
        
        
    }
 };
 console.log(twoSum(nums, target));

 


 var twoSum = function(nums, target) {
    for(let i =0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] ==target){
                return[i,j]
            }
        }
    }
 };


 /* Write a javascript program to check two numbers
 and return true if one of the number is 100 or if the sum
 of the two number is 100*/


 const get100 =(a,b) => a=== 100 || b=== 100 || (a+b)=== 100;
  console.log(get100(100,0));
  console.log(get100(0,100));

  console.log(get100(30,34));
  console.log(get100(60,13));

  console.log(get100(30,70));
  console.log(get100(60,40));


  /* write a javascript program to get the extension
  of a file name*/

  const filename =(str) => str.slice
  (str.lastIndexOf('.'));
  console.log(filename('index.html'));
  console.log(filename('javascript.index.js'));

  /* write a javascript program to replace every character
  in a given string with the character following
  it in the alphabet*/

  const moveCharsForvard = (str) =>
     str
     .split('')
     .map(char => String.fromCharCode(char.charCodeAt (0) + 1))
     .join('');
     
     
     console.log(moveCharsForvard('abcdef'));