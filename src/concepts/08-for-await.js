import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
    console.time('Start');
    console.log('forAwaitComponent');
    const heroesIds = heroes.map(x => x.id);
    const heroesPromises = getHeroesAsync(heroesIds);
    for await (const hero of heroesPromises){
        element.innerHTML += `${hero.name}<br/>`;
    }
    console.timeEnd('Start');
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 2000)
    });

    return heroes.find( hero => hero.id === id );
}