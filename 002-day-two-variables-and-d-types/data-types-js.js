"use strict"

//There are 8 different datatypes in Javascript (Including Objects)

// 1 - Number - Number actually represents both integer and floating point values
let n = 344
alert(n)



//2 - BigInt
    //(<2^53-1)
    //-(>2^53-1)

alert(1274758603284555543356454745656745546833555467647555454454554646476477839636354326278219101544413442424241411123545556565663636365542442424242424545454545)

alert(1274758603284555543356454745656745546833555467647555454454554646476477839636354326278219101544413442424241411123545556565663636365542442424242424545454545n)

//NaN
//NaN ("Not a Number") é normalmente encontrado quando o resultado de uma operação aritmética não pode ser expresso como um número. É também o único valor em JavaScript que não é igual a si mesmo (MDN).

//3 - String
//similar a uma cadeia de caracteres

let str = "I am 20 years old"
alert(str)

//String com crase (Backtick)
let age = 20
let textWithVariable =  `I am ${age} years old`
alert(textWithVariable)

//4 - Boolean
//Retorna valores true ou false
let checked = true
alert(checked)


//5 - Null value
//usado quando desejamos que uma variável armazene um valor nulo
//representa nada, vazio, ou valor desconhecido
let variavelComNull = null
alert(variavelComNull)

//6 - Undefined value
//default quando declaramos a vaiável, mas na verdade ainda não atribuímos nenhum valor a ela
let variavelComUndefined = undefined
alert(variavelComUndefined)

//7 - Symbol
//symbol types são usados para criar identificadores únicos 
//vamos ver em detalhes mais à frente no curso

// 8 - Objects
//Objetos são um tipo de dados especial - todos os tipos anteriores são chamados primitivos
//Objetos são um tipo chave-valor
//vamos ver em detalhes mais à frente no curso


