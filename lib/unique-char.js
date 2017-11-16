module.exports = function (stringValue){
  stringValue.trim().replace(/\s+/g, '');
  if(typeof stringValue === 'string' && stringValue.length){
    let uniqueChar = '';
    return stringValue.split('').filter((currentValue, index, array) => {
      if(array.indexOf(currentValue) === array.lastIndexOf(currentValue)){
        return currentValue
      }
    }).join('');
  }
  throw new Error('Please input a valid string')
}