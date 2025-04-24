<h1 align="center"><strong>DSA</strong></h1>

<br/>
<h4><strong>What is Data Structure</strong></h3>
🚩Way to organize data so that we can use this data efficiently.

📝 Example:

```js
🔴 //unoganized data
[8,2,1,,0,4,3,7,8]

🟢 //organized data
[1,2,3,4,5,6,7,8]
```




<br/><br/>
<hr/>
<br/><br/>

<h4><strong>What is Algorithm</strong></h3>
🚩step of a process to arrange data

📝 Example:

```js
🔴 //unoganized data
const unorganizedData = [8,2,1,,0,4,3,7,8]

🟢 //organized data

let organizedData = unorganizedData.sort((a,b) => a-b)

console.log(organizedData)

//output
[1,2,3,4,5,6,7,8]
```

<br/><br/>
<hr/>
<br/><br/>


<h4 align="center"><u><strong>Data structures type</strong><u></h3>

![image](https://github.com/user-attachments/assets/8e19d708-b52c-4dc3-b22a-2c55a4092d65)


<br/><br/>
<hr/>
<br/><br/>

<h4 align="center"><u><strong>Operation of Data structure</strong><u></h3>
<u>
  <li>Traversal</li>
  <li>Insertion</li>
  <li>Deletion</li>
  <li>Searching</li>
  <li>Sorting</li>
  <li>Merging</li>
</u>

Different Algorithm can be use for operations


<br/><br/>
<hr/>
<br/><br/>

<h4 align="center"><u><strong>Operation of Data structure</strong><u></h3>  
<u>
  <li>Array</li>
  <li>Stack</li>
  <li>Queue</li>
  <li>Tree</li>
  <li>Graph</li>
  <li>Insertion</li>
  <li>Recursion</li>
  <li>Search</li>
  <li>Sorting</li>
  <li>Merge</li>
  <li>Map</li>
  <li>Set</li>
</u>


<br/><br/>
<hr/>
<br/><br/>

<h4 align="center"><u><strong>Logical Part</strong><u></h3>  
<u>
  <li>Nested Loopes</li>
  <li>Low and Highest values</li>
  <li>Objects</li>
  <li>Update specific Value</li>
  <li>Etc</li>
</u>



<br/><br/>
<hr/>
<br/><br/>

<h3><u><strong>Home Work</strong><u></h3>  
<br/>
<h4><u><strong>Array Traversing and Accessing</strong><u></h3>  
<u>
  <li>Make Html page write basic array</li>
  <li>Traversing with loop</li>
  <li>Accessing elements</li>
  <li>Access element with text input and button validations</li>

</u>


<br/>
Examples or HW Answer:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

   
  </head>
  <body>
    <div>
      <p>My List of Arr</p>
      <div  id ="arrList"></div>

      </div>
    </div>

    <div style="margin-top: 10px; display: flex; justify-content: center;">
      <input type="text" id="index" placeholder="Enter index" />
      <button id="btn">Get Value</button>
      <p id="result"></p>

 <script>
      const arr = [
        44, 1, 5, 6, 1, 4, 6, 3, 7, 8, 9, 41, 25, 62, 14, 53, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ];
// traversing with loop
      for (let i = 0; i < arr.length; i++) {
        // document.write(`arr index ${i} : ${arr[i]} <br>`);
     document.getElementById("arrList").innerHTML += `arr index ${i} : ${arr[i]} <br>`;

      }
    
      // Access element with text input and button validations
      document.getElementById("btn").addEventListener("click", async() => {
        const input = document.getElementById("index").value;
        console.log(input);
          if(parseInt(input) >= 0 && parseInt(input) < arr.length && !isNaN(parseInt(input))){
              alert(`arr index ${input} : ${arr[input]}`); {
               const errInput= await prompt(`please enter a valid index under ${arr.length}`);
            if(errInput >= 0 && errInput < arr.length && !isNaN(errInput)){
                alert(`arr index ${errInput} : ${arr[errInput]}`);}
            else {
                 const reErrInput= await prompt(`please enter a valid index under ${arr.length}`);
                    alert(`arr index ${reErrInput} : ${arr[reErrInput]}`);
                  }
            }
            }
        });
        
    </script>

  </body>
</html>


```

