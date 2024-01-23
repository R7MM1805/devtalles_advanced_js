/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorComponent = (element) => {
    const btnGenerate = document.createElement('button');
    btnGenerate.innerText = 'Click me';
    element.append(btnGenerate);

    const id = generateID();

    const randomGenerate = () => {
        let {value} = id.next();
        btnGenerate.innerText = `Click ${value}`;
    }

    btnGenerate.addEventListener('click', randomGenerate);

};

function* generateID(){
    let currentID = 0;
    while(true){
        yield ++currentID;
    }
}

function* myFirstGenerator(){
    yield 'My first value';
    yield 'My second value';
    yield 'My third value';
    yield 'My fourth value';
    return 'No values';
}