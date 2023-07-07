const original = [5, 7, 13, 17, 26, 34, 118, 245];
const nova = []


for (let num of original) {
    if (num <= 20 && num >= 10 || num > 100) {
        nova.push(num)
    }
}

console.log(nova)

