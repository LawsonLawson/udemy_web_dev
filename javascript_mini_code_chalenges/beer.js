/**
 * Lyrics of the song 99 Bottles of Beer
 */

function main() {
    var beers = 100;

    while (beers >= 0) {
        beers--;
        if (beers > 1) {
            console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer.");
            beers--;
            console.log("Take one down and pass it around, " + beers + " bottles of beer on the wall.");
        }
        else {
            if (beers == 1) {
                console.log(beers + " bottle of beer on the wall, " + beers + " bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
            }
            else if (beers == 0) {
                console.log("No more bottles of beer on the wall, no more bottles of beer.\nGot to the store and buy some more, 99 bottles of beer on the wall.");
            }
        }
    }
}
main();
