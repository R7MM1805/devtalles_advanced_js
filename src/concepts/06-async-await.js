import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    console.log('asyncAwaitComponent');
    const h1 = '5d86371fd55e2e2a30fe1ccb1';
    const h2 = '5d86371f97c29d020f1e1f6d';
    try {
        const hero1 = await findHero(h1);
        const hero2 = await findHero(h2);
        element.innerHTML = `${hero1} - ${hero2}`;    
    } catch (error) {
        element.innerHTML = error;
    }
    
};

const findHero = async (heroID) => {
    const hero = heroes.find(x => x.id === heroID);
    if(!hero){
        throw `Hero with id ${heroID} not found`;
    }
    return hero.name;
}