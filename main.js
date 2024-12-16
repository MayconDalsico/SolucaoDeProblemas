"use strict";

const descriptionsPath = "./problems/descriptions.json";

// Atualiza o campo de problema com o valor salvo ou padrão
const getProblem = () =>
  (document.getElementById("problem").value =
    localStorage.getItem("problem") ?? 1000);

// Salva o número do problema no localStorage
const setProblem = (problemNumber) =>
  localStorage.setItem("problem", problemNumber);

// Resolve o problema selecionado
const solveProblem = async () => {
  const input = document
    .getElementById("input")
    .value.split(/\r | \n/)

    /*replace(/ +|\r|\n/g, " ")
    .split(" ");*/

  const problemNumber = document.getElementById("problem").value;
  setProblem(problemNumber);

  try {
    // Importa dinamicamente o módulo do problema
    const { problem } = await import(`./problems/${problemNumber}.js`);
    problem(input);
  } catch (error) {
    console.error("Erro ao resolver o problema:", error);
  }
};

// Carrega os problemas e popula o dropdown
const loadProblems = async () => {
  try {
    const response = await fetch(descriptionsPath);
    const descriptions = await response.json();

    const problemSelect = document.getElementById("problem");
    problemSelect.innerHTML = ""; // Limpa o select para garantir uma nova lista

    // Adiciona uma opção para cada problema no dropdown
    for (const [problemNumber, description] of Object.entries(descriptions)) {
      const option = document.createElement("option");
      option.value = problemNumber;
      option.textContent = `Problema ${problemNumber}`;
      problemSelect.appendChild(option);
    }

    // Define o problema atual salvo no localStorage (ou padrão)
    const savedProblem = localStorage.getItem("problem") || "1000";
    problemSelect.value = savedProblem;

    // Atualiza a descrição com o problema selecionado
    updateDescription(savedProblem, descriptions);
  } catch (error) {
    console.error("Erro ao carregar problemas:", error);
  }
};

// Atualiza a descrição do problema selecionado
const updateDescription = (problemNumber, descriptions) => {
  const descriptionElement = document.getElementById("problemDescription");
  descriptionElement.textContent =
    descriptions[problemNumber] || "Descrição indisponível.";
};

// Evento para atualizar a descrição ao selecionar um problema
document.getElementById("problem").addEventListener("change", async (event) => {
  const problemNumber = event.target.value;

  try {
    // Carrega as descrições e atualiza o texto
    const response = await fetch(descriptionsPath);
    const descriptions = await response.json();
    updateDescription(problemNumber, descriptions);
  } catch (error) {
    console.error("Erro ao atualizar descrição:", error);
  }
});

// Inicializa o sistema
getProblem();
loadProblems();
document.getElementById("solve").addEventListener("click", solveProblem);
