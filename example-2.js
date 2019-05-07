/*
#### Задача 2

Модифицируйте класс **Worker** из предыдущей задачи следующим образом:
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

```javascript
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
```

*/

function Worker (name, surname, rate, days) {
  this.getName = () => {
    return name;
  };

  this.getSurname = () => {
    return surname;
  };

  this.getRate = () => {
    return rate;
  };

  this.getDays = () => {
    return days;
  };

  this.getSalary = () => {
    return rate * days;
  };
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
