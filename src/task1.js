
process.stdin.on('data', (chunk) => {
    if (chunk !== null) {
        let word = chunk.toString();
        let invertedWord = [...word].reverse().join('');
        process.stdout.write(invertedWord);
    }
    process.stdout.write('\n');
});