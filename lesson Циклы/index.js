let num = 11;

if (num < 49) {
    console.log("Неверно")
} else if (num > 100) {
    console.log("Много")
} else {
    console.log("Верно")
}

(num == 50) ? console.log("Верно") : console.log("Неверно"); 
//тернарный оператор. оператор с тремя аргументами
//бинарный оператор с двумя аргументами
//унарный оператор с одним аргументом(например инкремент или дискремент)
switch (num) {
    case num < 49:
        console.log("Неверно");
        break; //обязательно ставим, для того, что бы код не выполнил все команды разом
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Всё ёще много");
        break;
    case 11: //с оператором switch не работает равенство через ==, нужно записывать значение как оно есть
        console.log("Верно");
        break;

    default:
        console.log("Что-то пошло не так!")
        break;
}