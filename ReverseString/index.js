let name = 'sampaio';
let reverseString = '';
  for (let i = name.length - 1; i >= 0; i--) {
    reverseString += name[i];
  }
console.log(`
O nome "${name}" invertido fica assim: ${reverseString}`);