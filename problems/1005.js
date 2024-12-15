export function problem(lines){

  const [nota1, nota2] = lines;
  const peso1 = 3.5;
  const peso2 = 7.5;

  const MEDIA = (nota1*peso1 + nota2*peso2) / (peso1+peso2);

  console.log(`MEDIA = ${MEDIA.toFixed(5)}`)


}