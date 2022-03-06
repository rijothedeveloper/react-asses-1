function addCommas(num) {
    const value = Math.abs(num);
    const stringNumFraction = value.toString();
    const intFractArray = stringNumFraction.split(".");
    let stringNum = intFractArray[0];
    let commaIndex = stringNum.length - 3;
    let commaCount  = Math.floor(stringNum.length / 3);
    while (commaCount>0) {
        stringNum = stringNum.slice(0,commaIndex)+","+stringNum.slice(commaIndex);
        commaIndex -= 3
        commaCount--;
    }
    if (num < 0) {
        stringNum = "-"+stringNum;
    }
    // attach if there is a fractional part
    if(intFractArray.length>1) {
        stringNum = stringNum+"."+intFractArray[1]
    }
    return stringNum
}

module.exports = addCommas;