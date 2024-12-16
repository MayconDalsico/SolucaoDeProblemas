export function problem(lines){

  const nome = lines[0];
  const salarioFixo = lines[1];
  const totalVendas = lines[2];
  const comissao = Number(totalVendas) * 0.15;
  const salarioTotal = Number(salarioFixo) + Number(comissao);

  console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)

}