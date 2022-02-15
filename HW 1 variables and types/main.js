const apple = 15.678;
const cherry = 123.965;
const lemon = 90.2345;
const maxPrice = Math.max(apple, cherry, lemon);
const minPrice = Math.min(apple, cherry, lemon);
const total = apple + cherry + lemon;
const totalRound = Math.floor(total);
const roundToHundreds = Math.round(totalRound / 100) * 100
const evenOdd = (totalRound % 2 == 0) ? true : false;
const value = 500;
const rest = value - total;
const arrProduct = [apple, cherry, lemon];
const average = (total / arrProduct.length).toFixed(2);
const discount = (Math.random() * 100).toFixed(0);
const valueWithDiscount = (total / 100 * (100 - discount)).toFixed(2);
const cost = total / 2;
const profit = (cost - discount).toFixed(2);
document.writeln(`
Максимальна ціна: ${maxPrice} <br> 
Мінімальна ціна: ${minPrice} <br> 
Вартість всіх товарів: ${total} <br> 
Вартість всіх товарів округлена до сотень: ${roundToHundreds} <br> 
Булеве значення парне чи непарне число: ${evenOdd} <br> 
Сума решти: ${rest} <br> Середнє значення цін: ${average} <br> 
Сума до оплати зі знижкою  ${discount}%: ${valueWithDiscount} <br> 
Чистий прибуток: ${profit}
`);