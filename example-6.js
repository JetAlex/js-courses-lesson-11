/*
#### Задача 6

 Реализуйте класс **Student** (Студент), который будет наследовать от класса **User**,
 подобно тому, как это сделано в теоретической части урока.
 Этот класс должен иметь следующие свойства: **name** (имя, наследуется от User),
 **surname** (фамилия, наследуется от User), **year** (год поступления в вуз).
 * Класс должен иметь метод **getFullName()** (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
 * Также класс должен иметь метод **getCourse()**, который будет выводить текущий курс студента (от 1 до 5).
 * Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

Вот так должен работать наш класс:

```javascript
var student = new Student('Иван', 'Иванов', 2015);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иван Иванов'
console.log(worker.year); //выведет 2015console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2018
```

Вот так должен выглядеть класс **User**, от которого наследуется наш **Student**:

```javascript
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
```
*/

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
   super(name, surname);
   this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

var student = new Student('Иван', 'Иванов', 2015);

console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2015
console.log(student.getCourse()); //выведет 4 - третий курс, так как текущий год 2019



