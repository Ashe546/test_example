const stringLength = (str) => {
    let strLength = str.split('').length;
    if (strLength < 1 || strLength > 10) {
      console.log('error')
    }
    return strLength;
}



module.exports = stringLength;
