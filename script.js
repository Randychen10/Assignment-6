document.getElementById('submitBtn').addEventListener('click', function() {
    var text = document.getElementById('textInput').value;
    var words = text.split(/\s+/); // Split by white space
    var wordFreq = {};

    // Count frequency of each word
    words.forEach(function(word) {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    // Sort by frequency
    var sortedWords = Object.keys(wordFreq).sort(function(a, b) {
        return wordFreq[b] - wordFreq[a];
    });

    // Output top 5 words and their frequencies
    var output = '<table><tr><th>Word Name</th><th>Word Frequency</th></tr>';
    for (var i = 0; i < Math.min(sortedWords.length, 5); i++) {
        var word = sortedWords[i];
        var frequency = wordFreq[word];
        output += '<tr><td>' + word + '</td><td>' + frequency + '</td></tr>';
    }
    output += '</table>';

    document.getElementById('output').innerHTML = output;

    // Console log the word frequency object
    console.log(wordFreq);
});
