function howMuchILoveYou(nbpetals){
    const petals = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
    ];
    return petals [(nbpetals-1)%6]
}
console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(4));
console.log(howMuchILoveYou(8));


