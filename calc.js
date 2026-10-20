let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";

function appendNumber(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (currentInput === "" && operator !== ".") return;

  currentInput += operator;
  display.textContent = currentInput;
}

function calculate() {
  try {
    // 1. Remove qualquer caractere que não seja
    //Numero,ponto ou operador, isso impede de
    //qualquer tentativa de algum código malicioso
    const cleanInput = currentInput.replace(/[^0-9+\-*/.()%]/g, "");
    if (!cleanInput) {
      throw new Error("Input inválido");
    }
    //Executar o calculo de forma segura
    let result = new Function(`return(${cleanInput})`)();

    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }
    currentInput = result;
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Erro";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.textContent = currentInput;
}
