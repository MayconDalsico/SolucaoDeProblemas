export function problem(lines){

  const number = lines[0];
  const horasTrabalhadas = lines[1];
  const valorPorHora = lines[2];
  const salario = horasTrabalhadas * valorPorHora;

  console.log(`NUMBER = ${number}`);
  console.log(`SALARY = U$ ${salario.toFixed(2)}`);


}