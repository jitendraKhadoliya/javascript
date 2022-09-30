"use strict";
//  object destructuring

const band = {
    bandName: "led zepplin",
    famousSong : "stairwaya to heaven",
    year : 1998,
    anotherSong : "kasshmir"
};

// const bandName1 = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName1);
// console.log(famousSong);

// now let's see band how we can do this same thing using object destructuring

const {bandName:changedBandName , famousSong:changedFamousSong ,...newBandObj } = band;
console.log(changedBandName);
console.log(changedFamousSong);
console.log(newBandObj);


