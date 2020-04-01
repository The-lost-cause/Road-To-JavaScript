// SOME And EVERY Method on an Array

const songs = [
    {song: 'Shape of Yoy', timesStreamed: 2.384 , wonGrammy: true},
    {song: 'One Dance', timesStreamed: 1.384 , wonGrammy: false},
    {song: 'Rockstar', timesStreamed: 1.781 , wonGrammy: false},
    {song: 'Closer', timesStreamed: 1.688 , wonGrammy: false}
];

const hasWonGrammy = songs.some(some => some.wonGrammy);
console.log(hasWonGrammy);

const allMegaHits = songs.every(some => some.timesStreamed > 1.5);
console.log(allMegaHits);
