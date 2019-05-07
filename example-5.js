/*
#### Задача 5

Реализуйте класс **Validator**, который будет проверять строки.
К примеру, у него будет метод **isEmail** параметром принимает строку и проверяет,
является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false.
Кроме того, класс будет иметь следующие методы: метод **isDomain** для проверки домена,
метод **isDate** для проверки даты и метод **isPhone** для проверки телефона:

```javascript
var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны
```

*/

class Validator {
  isEmail(str) {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(str);
  }

  isDomain(str) {

  }

  isDate(str) {
    return !!Date.parse(str);
  }

  isPhone(str) {
    const reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return reg.test(str);
  }
}

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

