const numbers = [1,2,3,4,5,6,7,8,9];
const number1 = numbers.splice(4,3);

console.log(numbers);
console.log(number1);

const names = ["tamim","sakib","muusfiq","mahmuddhlha"];

const playerfind = names.findIndex((name) =>(name === "sakib"?true:false));

console.log(names[playerfind]);

const playerfind1 = names.findIndex(function(n){
    if(n=== "tamim"){
        return true;
    }else{
        return false;
    }
});
console.log(names[playerfind1])

const comments = [
    { text: "hello", id: 234 },
    { text: "some thing want wrong", id: 238 },
    { text: "win Bangladsh", id: 237 },
    { text: "Naturan bangladesh", id: 236 },
  ];
console.log(comments);
  const commentFind = comments.findIndex(function(comment){
      if(comment.id === 237){
          return true;
      }else{
          return false;
      }
  });
  console.log(comments[commentFind].text)