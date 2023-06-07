const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

const ignoredWords = ['a', 'an', 'the'];

function sortBands(bands) {
  return bands.sort((a, b) => {
    const wordA = ignoreWords(a);
    const wordB = ignoreWords(b);
    return wordA.localeCompare(wordB);
  });
}

function ignoreWords(name) {
  const words = name.split(' ');
  const ignoredWordsFiltered = words.filter(word => !ignoredWords.includes(word.toLowerCase()));
  return ignoredWordsFiltered.join(' ');
}

function generateArticleList() {
  const bandList = document.getElementById('band');
  const sortedBands = sortBands(bands);
  
  sortedBands.forEach((band) => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
  });
}

// Call the function to generate the article list
generateArticleList();
