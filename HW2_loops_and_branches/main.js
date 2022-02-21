let numberN = +prompt(`Введіть початкове значення`);
let numberM = +prompt(`Введіть кінцеве значення`);

while (!Number.isInteger(numberN)) {
    numberN = +prompt(`Початкове значення не є числом або не є цілим числом, будь-ласка введіть ціле число`);
    console.log(numberN)
}
while (!Number.isInteger(numberM)) {
    numberM = +prompt(`Кінцеве значення не є числом або не є цілим числом, будь-ласка введіть ціле число`);
    console.log(numberM)
}
while (numberN >= numberM) {
    numberN = +prompt(`Початкове значення є більше або рівне кінцевому, введіть початкове значення`);
    numberM = +prompt(`Початкове значення є більше або рівне кінцевому, введіть кінцеве значення`);
}

let evenOrOdd = confirm('Чи бажаєте пропускати парні числа?', true);
console.log(evenOrOdd)
let sum = 0;
for (let i = numberN; i <= numberM; i++) {
    if (evenOrOdd && i % 2 == 0) {
        continue;
    }
    else {
        sum += i;
    }
}
if (evenOrOdd) {
    document.writeln(`Сума непарних чисел в проміжку від ${numberN} до ${numberM} рівна ${sum}`)
}
else {
    document.writeln(`Сума чисел в проміжку від ${numberN} до ${numberM} рівна ${sum}`)
}
