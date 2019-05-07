/*
#### Задача 3

Модифицируйте класс **Worker** из предыдущей задачи следующим образом:
для свойства **rate** и для свойства **days** сделайте еще и методы-сеттеры.
Наш класс теперь будет работать так:

```javascript
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
```
*/

function Worker (name, surname, rate, days) {
  const workerName = name;
  const workerSurname = surname;
  let workerRate = rate;
  let workerDays = days;

  this.getName = () => {
    return workerName;
  };

  this.getSurname = () => {
    return workerSurname;
  };

  this.setRate = (rate) => {
    workerRate = rate;
  };

  this.getRate = () => {
    return workerRate;
  };

  this.setDays = (days) => {
    workerDays = days;
  };

  this.getDays = () => {
    return workerDays;
  };

  this.getSalary = () => {
    return workerRate * workerDays;
  };
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
