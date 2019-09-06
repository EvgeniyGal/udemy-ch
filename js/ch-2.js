const scoresMarkTeam = [89, 120, 103];
const scoresJohnTeam = [116, 94, 123];


function calcAverageScore(arr) {
  let amountScore = 0;
  for (let i = 0; i < arr.length; i++) {
    amountScore += arr[i];
  }
  return amountScore / arr.length;
}

console.assert(calcAverageScore([1, 2, 3]) === 2, 'Some thing vrong in calcAverageScore');


const averScoredMark = calcAverageScore(scoresMarkTeam);
const averScoredJohn = calcAverageScore(scoresJohnTeam);

console.log(`The winner is ${averScoredMark > averScoredJohn ? 'Mark\'s'
  : 'John\'s'} team. They average score is: ${averScoredMark > averScoredJohn
  ? averScoredMark : averScoredJohn}`);

const scoresMaryTeam = [97, 134, 105];
const averScoredMary = calcAverageScore(scoresMaryTeam);

if (averScoredMark > averScoredJohn && averScoredMark > averScoredMary) {
  console.log(`The winner is Mark's team. They average score is: ${averScoredMark}`);
}

if (averScoredJohn > averScoredMark && averScoredJohn > averScoredMary) {
  console.log(`The winner is John's team. They average score is: ${averScoredJohn}`);
}

if (averScoredMary > averScoredMark && averScoredMary > averScoredMark) {
  console.log(`The winner is Mary's team. They average score is: ${averScoredMary}`);
}

/*
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the
winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take
into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
Like before, log the average winner to the console. HINT: you will need the
&& operator to take the decision. If you can't solve this one, just watch the
solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in
 mind there might be draws.
*/
