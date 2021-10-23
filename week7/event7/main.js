/* function doSomething(){
    console.log('Something Happened!');
    }
    addEventListener('click', doSomething); */

    /* function doSomething(event){
        console.log(event.type);
        } 
        addEventListener('click', doSomething);*/

        /* function doSomething(event){
            console.log(event.target);
            }
            addEventListener('click', doSomething); */

            /* function doSomething(event){
                console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
                } 
                addEventListener('click', doSomething);*/

                const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() =>
console.log('click') );
clickParagraph.addEventListener('mousedown',() =>
console.log('down') );
clickParagraph.addEventListener('mouseup',() =>
console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('click', highlight);
function highlight(event){
event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!') );

addEventListener('keydown',highlight);

addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
    console.log('Action canceled!');
    }
    });

    addEventListener('click', (event) => {
        if (event.shiftKey) {
        console.log('A Shifty Click!');
        }
        });

        const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
console.log('Enjoy this while it lasts!');
onceParagraph.style.backgroundColor = 'pink';
onceParagraph.removeEventListener('click',remove);
}

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
event.preventDefault();
console.log('Broken Link!');
});

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul1'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li2'),true);
// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul3'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li4'),false );

liElement.addEventListener('click', (event) => {
    console.log('clicked on li5');
    event.stopPropagation(); }, false);

    ulElement.addEventListener('click',highlight);