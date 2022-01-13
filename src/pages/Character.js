import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    console.log(character);

    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodes: <pan>${character.episode.length}</span></h3>
                <h3>Status: <pan>${character.status}</span></h3>
                <h3>Species: <pan>${character.species}</span></h3>
                <h3>Gender: <pan>${character.gender}</span></h3>
                <h3>Origin: <pan>${character.origin.name}</span></h3>
                <h3>Las Location: <pan>${character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view
}

export default Character;