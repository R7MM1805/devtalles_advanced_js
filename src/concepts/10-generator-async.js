import {heroes} from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {
    const heroGenerator = getHeroGenerator();
    let isFinished = false;
    do{
        let {value, done} = await heroGenerator.next();
        isFinished = done;
        if(isFinished) break;
        element.innerText = value;
    }while(!isFinished);
};

async function* getHeroGenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }
    return 'No more heroes';
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => 
        {
            resolve()
        }, 1000);
    });
}