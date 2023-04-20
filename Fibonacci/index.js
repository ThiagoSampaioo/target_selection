var n = 5;
var r;
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i <= 100; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
fibonacci.includes(n) ? r = 'pertence' : r='não pertence';
console.log(r)
