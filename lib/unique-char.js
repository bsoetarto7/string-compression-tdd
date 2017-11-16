module.exports = function (stringValue){
  stringValue.trim().replace(/\s+/g, '');
  if(typeof stringValue === 'string' && stringValue.length){

  }
  throw new Error('Please input a valid string')
}