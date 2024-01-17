import {heroes} from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h1>Heroes: </h1>
            <hr>
            <h2>${hero1.name}</h2>
            <h2>${hero2.name}</h2>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }

    const heroID = '5d86371fd55e2e2a30fe1ccb2';
    const heroID2 = '5d86371fd55e2e2a30fe1cc4';

    /* Forma 1 */
    // findHero(heroID).then((hero1) => {
    //     findHero(heroID2).then((hero2) => {
    //         renderTwoHeroes(hero1, hero2);
    //     }).catch(renderError)
    // }).catch(renderError);

    /*Forma 2*/
    // let hero1;
    // findHero(heroID).then(hero => {
    //     hero1 = hero;
    //     return findHero(heroID2);
    // }).then(hero => {
    //     renderTwoHeroes(hero1, hero);
    // }).catch(renderError);

    /** Promise All */ //Recomendado
    Promise.all([findHero(heroID), findHero(heroID2)]).then(([h1, h2]) => {
        renderTwoHeroes(h1, h2);
    }).catch(renderError);

};

/**
 * 
 * @param {String} heroID 
 * @returns {Promise}
 */
const findHero = (heroID) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(x => x.id === heroID);
        if(hero){
            resolve(hero);
            return;
        }
        reject(`Hero with ID ${heroID} not found`);
    });
    
};