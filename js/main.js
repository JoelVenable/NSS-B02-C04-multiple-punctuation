let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, bang, numBangs) {
  let buildMeUp = "",
    bangs = "";
  if (bang === undefined) bang = "!";
  if (numBangs === undefined) numBangs = 1;

  for (let i = 0; i < numBangs; i++) {
    bangs += bang;    
  }

  for (let i = 0; i < theWordArray.length; i++) {
    /*
        If the current value of `i` divided by 3 has no
        remainder, add an exclamation point to the end of
        the word and then concatenate it to `buildMeUp`.

        Otherwise, just concatenate the word itself.
     */
    buildMeUp += theWordArray[i];
    if ((i + 1) % 3 === 0) {
      buildMeUp += bangs + " "
    } else {
      buildMeUp += " "
    }
    // Print buildMeUp to the console
    console.log(buildMeUp);
  }

}

addExcitement(sentence, "?",4)