export function problem(lines){

  const [nota1, nota2, nota3] = lines;
  const pesoNota1 = 2;
  const pesoNota2 = 3;
  const pesoNota3 = 5;

  const media = (nota1*pesoNota1 + nota2*pesoNota2 + nota3*pesoNota3)/ (pesoNota1+pesoNota2+pesoNota3);

  console.log(`MEDIA = ${media.toFixed(1)}`)


}