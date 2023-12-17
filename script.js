function countWords() {
  const textContainer = document.getElementById('text-container');
  const words = textContainer.textContent.trim().split(/\s+/);
  const wordCount = words.length !== 1 || words[0] !== '' ? words.length : 0;

  displayWordCount(wordCount);

  highlightLongestWord(textContainer ,  words);
}

function displayWordCount(count) {
  const displayDiv = document.getElementById('display_div');
  displayDiv.innerHTML = `<h2>The number of words: ${count}</h2>`;
}

function highlightLongestWord(textContainer , words) {
  // const words = textContainer.textContent.trim().split(/\s+/);

  var longestWord = getLongest(words);

  const regex = new RegExp(longestWord, 'g');
  const highlightedText = textContainer.textContent.replace(regex, `<span class="highlighted-word">${longestWord}</span>`);
  textContainer.innerHTML = highlightedText;
}
function getLongest(words){
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].trim().length > longestWord.trim().length) {
      longestWord = words[i].trim();
    }
  }
  return longestWord;
}
function removeHighlights() {
  const textContainer = document.getElementById('text-container');
  const spans = textContainer.querySelectorAll('.highlighted-word');
  spans.forEach(span => {
    span.outerHTML = span.innerHTML;
  });
}

// function removeHighlights() {
//   const textContainer = document.getElementById('text-container');
//   textContainer.innerHTML = textContainer.textContent;
// }
//////////////////////
