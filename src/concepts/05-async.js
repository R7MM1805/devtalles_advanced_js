import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const heroID = '5d86371fd55e2e2a30fe1cc3';
    findHero(heroID)
    .then(name => element.innerHTML = name)
    .catch(error => element.innerHTML = error);
};

/**
 * 
 * @param {String} heroID 
 * @returns {Promise<String>}
 */
const findHero = async (heroID) => {
    const hero = heroes.find(x => x.id === heroID);
    if(!hero){
        throw `Hero with ID ${heroID} not found`;
    }
    return hero.name;
}