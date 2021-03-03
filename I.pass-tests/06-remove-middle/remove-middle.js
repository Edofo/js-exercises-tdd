function removeMiddle(words) {
    let i = Math.round(words.length / 2);
    const word = words[i-1];
    words = words.splice(i-1, 1);
    return [word];
}

module.exports = removeMiddle;