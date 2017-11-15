module.exports = function (stringValue){
  if(typeof stringValue !== 'string'){
    throw new Error('Input value is not a string')
  }else if(stringValue.length === 0){
    throw new Error('Please input a string')
  }else if(/\d/.test(stringValue)){
    throw new Error('Please input a string')
  }else{
    let i = 0;
    return stringValue.split('').reduce((acc,cur,currentIndex, arr) => {
      if(acc.length === 0){
        i++;
        acc = cur
      }else if(acc.indexOf(cur) > -1 && currentIndex === arr.length-1 && cur === arr[currentIndex-1]){
        acc = `${acc}${i+1}` 
      }else if(currentIndex === arr.length-1){
        acc = `${acc}${i}${cur}1` 
      }else if(cur === arr[currentIndex-1]){
        i++
      }else{
        acc = `${acc}${i}${cur}`
        i = 1
      }
      return acc
    },'')
  }
}