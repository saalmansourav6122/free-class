const feedback = [
    { comment: "Love the burgs", rating: 4 },
    { comment: "Horrible Service", rating: 2 },
    { comment: "Smoothies are great, liked the burger too", rating: 5 },
    { comment: "Ambiance needs work", rating: 3 },
    { comment: "I DONT LIKE BURGERS", rating: 1 },
    { comment: "I DONT love BURGERS", rating: 6 },
  ];

//   const findBurger = feedback.find((e)=>{
//     const n = e.comment.includes("burger");
//     console.log(n)
// });
// console.log(findBurger)
// function findByWord(word) {
//       return function (singleFeedback) {
//         return singleFeedback.comment.includes(word)
//       }
//     }
//     const burgRating = feedback.find(findByWord("love"));
//     console.log(burgRating);

// const filterFood = feedback.filter((r)=>r.rating !==5)
// console.table(filterFood)

// function filterByMinRating(minRating) {
//   return function (singleFeedback) {
//      return singleFeedback.rating > minRating
//    }
//  }

// const goodReview = feedback.filter(function (singleFeedback) {
//   if (singleFeedback.rating >= 4) {
//     return true;
//   } 
// });

// console.table(goodReview)

const numbers = [78, 2, 100, 3, 200, 400, 155, 1];

const n = feedback.sort(function(f,l){
    return f-l;
})
console.table(n)