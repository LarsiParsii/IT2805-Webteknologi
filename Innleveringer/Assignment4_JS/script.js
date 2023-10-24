/* Part 2 */
console.log('PART 2');
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

/* Part 3 */
console.log('PART 3');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (i in numbers) {
    let number = numbers[i];
    let output = "";
    if (!(number % 3)) { output += 'eple'; }
    if (!(number % 5)) { output += 'kake'; }
    if (output === '') { output = number; }  // Dersom output er tom, kan ingen av de forrige betingelsene ha vært sanne
    console.log(output);
}

/* Part 4 */
document.getElementById('title').innerText = 'Hello, JavaScript';

/* Part 5 */
const magicStyle = document.getElementById('magic').style;
function changeDisplay() {
    magicStyle.display = 'none';
}

function changeVisibility() {
    magicStyle.display = 'block';
    magicStyle.visibility = 'hidden';
}

function reset() {
    magicStyle.removeProperty('display');
    magicStyle.removeProperty('visibility');
}

document.getElementById("button-change-display").addEventListener('click', changeDisplay);
document.getElementById("button-change-visibility").addEventListener('click', changeVisibility);
document.getElementById("button-reset").addEventListener('click', reset);

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let ul = document.getElementById('tech');
for (i in technologies) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(technologies[i]));
    ul.appendChild(li);
}