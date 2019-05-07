/*
#### Задача 1

Реализуйте класс **Worker** (Работник), который будет иметь следующие свойства:
**name** (имя), **surname** (фамилия), **rate** (ставка за день работы), **days** (количество отработанных дней).
* Также класс должен иметь метод **getSalary()**, который будет выводить зарплату работника.
* Зарплата - это произведение (умножение) ставки **rate** на количество отработанных дней **days**.

Вот так должен работать наш класс:

```javascript
var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
```

С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.

*/


class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);
var worker2 = new Worker('Петр', 'Петров', 10, 22);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

console.log(worker.getSalary() + worker2.getSalary())
