(function () {
  const consoleOutput = document.getElementById("consoleOutput");

  //salavar as funções originais do console
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;

  // função auxiliar para a parte do text area
  function appendLog(message, type = "log") {
    const timestamp = new Date().toLocaleDateString();
    const logMessage = `[${timestamp}] [${type.toLocaleUpperCase()}] ${message}\n`;
    consoleOutput.value += logMessage;
    consoleOutput.scrollTop = consoleOutput.scrollHeight; //para poder rolar para a ultima mensagem
  }

  //sobrescrever os métodos do console
  console.log = (...args) => {
    appendLog(args.join(" "), "log");
    originalLog(...args);
  };

  console.error = (...args) => {
    appendLog(args.join(" "), "error");
    originalError(...args);
  };

  console.warn = (...args) => {
    appendLog(args.join(" "), "warn");
    originalWarn(...args);
  };

  console.log("Captura do console iniciada.");
})();
