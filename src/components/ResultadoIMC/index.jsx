import PropTypes from 'prop-types';

const ResultadoIMC = ({ imc, classificacao }) => {
    return (
        <div>
            <h2>Seu IMC é: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
        </div>
    );
};

ResultadoIMC.propTypes = {
    imc: PropTypes.number.isRequired,
    classificacao: PropTypes.string.isRequired
};

export default ResultadoIMC;
