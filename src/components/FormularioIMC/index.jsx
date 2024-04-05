import { useState } from 'react';
import PropTypes from 'prop-types';

const FormularioIMC = ({ calcularIMC }) => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC(altura, peso);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="alturaInput">Altura (cm): </label>
                <input
                    type="number"
                    id="alturaInput" // Adicione um id ao input
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="pesoInput">Peso (kg): </label>
                <input
                    type="number"
                    id="pesoInput" // Adicione um id ao input
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            <button type="submit">Calcular</button>
        </form>
    );
};

FormularioIMC.propTypes = {
    calcularIMC: PropTypes.func.isRequired
};

export default FormularioIMC;