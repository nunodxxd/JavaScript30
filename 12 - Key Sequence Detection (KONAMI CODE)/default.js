const pressed = [];
const code = 'nuno';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-code.length -1, pressed.length - code.length);
    if(pressed.join('').includes(code)){
        console.log('Nice code!');
        cornify_add();
    }
});