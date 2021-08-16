const text = 'I like JavaScript. JavaScript is the best';

function replaceAll(str, substr, newSubstr = '') {
    return str.replace(new RegExp(substr, 'g'), newSubstr);
}

console.log(replaceAll(text, 'JavaScript', 'ES2021'));
console.log(text.replaceAll('JavaScript', 'ES2021'));