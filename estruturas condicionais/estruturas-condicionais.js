let age = 18;

// If - Else

if(age > 18){
    console.log('Ele é maior de idade');
}else if(age == 18){
    console.log('Ele tem 18 anos');
}else{
    console.log('Ele é menor de idade');
}

// Operador ternario

(age >= 18)?console.log('ele é maior de idade')
:console.log('Ele é menor de idade');


// Switch

let year = 2;

switch(year) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    default:
        console.log('Mês inválido!');
        break;
}
