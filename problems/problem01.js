const arr = ["atik", "anis", "rakib", "shamim", "shamim", "rakib", "rakib"]

// const findStudent = (arr, stName) => {
//     const student = arr.find((name) => name === stName);
//     return student;
// }



const findStudent = (arr, stName) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === stName) {
            return "found : " + arr[i];
        }
    }
}
console.log(findStudent(arr, "atik"))