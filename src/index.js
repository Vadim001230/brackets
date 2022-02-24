module.exports = function check(str, bracketsConfig) {
  let obj = Object.fromEntries(bracketsConfig);
  let stack = [];
  str = str.split('');
  
  for (let i of str) {
    if (obj[stack[stack.length-1]] === i) {
        stack.pop(); 
      } else { 
        stack.push(i);
      }
  }
    return stack.length ? false : true;
}
