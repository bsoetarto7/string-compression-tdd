module.exports = function (stringValue){
  if(typeof stringValue !== 'string'){
    throw new Error('Input value is not a string')
  }else if(stringValue.length === 0){
    throw new Error('Please input a string')
  }
}