import eevee from '../../public/sprites/eevee.gif';
import pikachu from '../../public/sprites/pikachu.gif';
import bulbasaur from '../../public/sprites/bulbasaur.gif';
import charmander from '../../public/sprites/charmander.gif';
import clefairy from '../../public/sprites/clefairy.gif';
import ditto from '../../public/sprites/ditto.gif';
import jigglypuff from '../../public/sprites/jigglypuff.gif';
import magikarp from '../../public/sprites/magikarp.gif';
import meowth from '../../public/sprites/meowth.gif';
import mew from '../../public/sprites/mew.gif';
import squirtle from '../../public/sprites/squirtle.gif';

function RanSprite() {
    let ranSpriteArray = [{eevee}, {pikachu}, {bulbasaur}, {charmander}, {clefairy}, {ditto}, {jigglypuff}, {magikarp}, {meowth}, {mew}, {squirtle}];
    var num = Math.floor( Math.random() * ranSpriteArray.length );
    var image = ranSpriteArray[num];
    if (image == ranSpriteArray[0]) {
        return (
            <div>
                <img src={eevee} />
            </div>
        );
    } else if (image == ranSpriteArray[1]) {
        return (
            <div>
                <img src={pikachu} />
            </div>
        );
    } else if (image == ranSpriteArray[2]) {
        return (
            <div>
                <img src={bulbasaur} />
            </div>
        );
    } else if (image == ranSpriteArray[3]) {
        return (
            <div>
                <img src={charmander} />
            </div>
        );
    } else if (image == ranSpriteArray[4]) {
        return (
            <div>
                <img src={clefairy} />
            </div>
        );
    } else if (image == ranSpriteArray[5]) {
        return (
            <div>
                <img src={ditto} />
            </div>
        );
    } else if (image == ranSpriteArray[6]) {
        return (
            <div>
                <img src={jigglypuff} />
            </div>
        );
    } else if (image == ranSpriteArray[7]) {
        return (
            <div>
                <img src={magikarp} />
            </div>
        );
    } else if (image == ranSpriteArray[8]) {
        return (
            <div>
                <img src={meowth} />
            </div>
        );
    } else if (image == ranSpriteArray[9]) {
        return (
            <div>
                <img src={mew} />
            </div>
        );
    } else {
        return (
            <div>
                <img src={squirtle} />
            </div>
        );
    }
}

export default RanSprite;