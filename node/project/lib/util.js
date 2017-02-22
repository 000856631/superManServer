var Util = {};

Util.getRandomNum = function (min, max) {
    if(!min){
        min = 0;
    }

    if(!max){
        max = 1;
    }

    var len = max - min;
    var rand = Math.random() * len;
    var ran_num = (min + rand);
    return ran_num;
}

Util.getRandomNumRound = function(min, max){
    return Math.round(Util.getRandomNum(min, max));
}

Util.getRandomNumFloor = function(min, max){
    return Math.floor(Util.getRandomNum(min, max));
}

Util.getRandomNumCeil = function(min, max){
    return Math.ceil(Util.getRandomNum(min, max));
}

module.exports = Util;