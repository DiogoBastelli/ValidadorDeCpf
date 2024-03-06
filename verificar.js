var soma = 0
var soma2 = 0

cpf = prompt("Digite seu cpf")
let cpfVetor = cpf.split('')

// if (cpf.length !== 11 || !cpf.match(/^\d+$/)) {
//     alert('Insira um CPF válido');
// }

for (i=0;i<=8;i++){
    soma = soma + (cpf[i]) * (10 - i);
}
//alert(soma)


let digito1 = 11 - (soma % 11);

if (digito1 > 9) {
    digito1 = 0
}

//alert(digito1)

cpf = cpf + digito1
let cpfVetor2 = cpf.split('')
//alert("cpf com o digito1 " + cpf)

for (i=0;i <= 9 ;i++){
     soma2 = soma2 + (cpf[i]) * (11 - i) 
 }

let digito2 = 11 - (soma2 % 11);
//alert(digito2)
if (digito2 > 9) {
    digito2 = 0;
}

//cpf = cpf + digito2

//alert(digito2)

//alert(cpf)

//alert(cpf)

 if (digito1 == (cpf[9]) && digito2 == (cpf[10])) {
     alert('CPF válido');
 } else {
     alert('CPF inválido');
 }