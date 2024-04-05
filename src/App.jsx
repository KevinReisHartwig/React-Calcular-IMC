import { useState } from 'react';
import FormularioIMC from './components/FormularioIMC';
import ResultadoIMC from './components/ResultadoIMC';

function App() {
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    if (!altura || !peso) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    const classificacaoIMC = getClassificacaoIMC(imcCalculado);

    setIMC(imcCalculado.toFixed(2));
    setClassificacao(classificacaoIMC);
  };

  const getClassificacaoIMC = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 24.9 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 29.9 && imc < 34.9) {
      return 'Obesidade grau I';
    } else if (imc >= 34.9 && imc < 39.9) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <FormularioIMC calcularIMC={calcularIMC} />
      {imc && <ResultadoIMC imc={imc} classificacao={classificacao} />}
    </div>
  );
}

export default App;