var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j > i; j--) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
            }
        }
    }
    console.log(nums)
    return nums;
};

//removeDuplicates([1,2,3,1,3,2,4,5,6,7,2,3,5,6,7,8,9,8,9,1,2,3]);

var largestDivisibleSubset = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    let arr = [];
    // let j = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % nums[i] === 0) {
                if (arr.length === 0) {
                    arr.push(nums[i]);
                    arr.push(nums[j]);
                } else if (arr.length === 2 && (nums[i] + nums[j] > arr[0] + arr[1])) {
                    arr[0] = nums[i];
                    arr[1] = nums[j];
                }
            }
        }
    }
    return arr;
};

// console.log(largestDivisibleSubset([5, 4, 3, 2, 1]));

let a = [12, 23, 34, 45, 56, 67, 77, 89, 90];

var dichotomyFun = function (arrs, searchNum) {
    let start = 0, end = arrs.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + (end - start) / 2)); //需要向下取整，以免值有小数时下标值错误；
        console.log("mid====>>>",mid);
        if (searchNum < arrs[mid]) {
            end = mid - 1;
        } else if (arrs[mid] > searchNum) {
            start = mid + 1;
        } else {
            return mid
        }
    }
    return -1; // 不存在
}

//console.log(dichotomyFun(a, 12));

// 数据源
let obj = {
    name:'jw',
    age: {
        age:18
    }
}
function observer(obj){
    if(typeof obj == 'object'){
        for(let key in obj){
            defineReactive(obj,key,obj[key]);
        }
    }
}
function defineReactive(obj,key,value){
    observer(value); // 判断value是不是一个对象 如果是对象 会继续监控
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            observer(val); // 如果设置的值是对象 需要在进行这个对象的监控
            console.log('数据更新了')
            value = val;
        }
    })
}
observer(obj);
obj.age = {name:1};

