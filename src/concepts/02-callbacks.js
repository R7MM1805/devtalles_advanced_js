import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = (element) => {
    const heroID = '5d86371f9f80b591f499df32';
    const heroID2 = '5d86371fd55e2e2a30fe1ccb';
    findHero(heroID, (error, hero) =>{
        if(error){
            element.innerHTML = error;
            return;
        }
        findHero(heroID2, (error, hero2) =>{
            if(error){
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero.name} / ${hero2.name}`;
        });
    });
};

/**
 * 
 * @param {String} heroID 
 * @param { ( error: String?, hero: Object ) => void } callback 
 */
const findHero = (heroID, callback) => {
    const hero = heroes.find(x => x.id === heroID);
    if(!hero){
        callback(`Hero with ID ${heroID} not found`);
        return;
    }
    callback(null, hero);
}