function calcularPedido() {
    const hamburguer1 = parseInt(document.getElementById('hamburguer1').value) || 0;
    const hamburguer2 = parseInt(document.getElementById('hamburguer2').value) || 0;
    const hamburguer3 = parseInt(document.getElementById('hamburguer3').value) || 0;
    const hamburguer4 = parseInt(document.getElementById('hamburguer4').value) || 0;
    const hamburguer5 = parseInt(document.getElementById('hamburguer5').value) || 0;
    const hamburguer6 = parseInt(document.getElementById('hamburguer6').value) || 0;
    const hamburguer7 = parseInt(document.getElementById('hamburguer7').value) || 0;
    const hamburguer8 = parseInt(document.getElementById('hamburguer8').value) || 0;

    const total = (hamburguer1 * 36) + (hamburguer2 * 27) + (hamburguer3 * 23) + (hamburguer4 * 7) + (hamburguer5 * 38) + (hamburguer6 * 42) + (hamburguer7 * 64) + (hamburguer8 * 110);
    let frete = 15;

    if (total > 80) {
        frete = 0;
    }

    const valorFinal = total + frete;
    
    let detalhes = 'Você pediu: ';
    if (hamburguer1 > 0) {
        detalhes += `${hamburguer1} Hambúrguer Clássico `;
    }
    if (hamburguer2 > 0) {
        detalhes += `${hamburguer2} Hambúrguer Especial `;
    }
    if (hamburguer2 > 0) {
        detalhes += `${hamburguer3} Hambúrguer Ligth `;
    }
    if (hamburguer4 > 0) {
        detalhes += `${hamburguer4} Coxinha de Frango `;
    }
    if (hamburguer5 > 0) {
        detalhes += `${hamburguer5} Combo Simples `;
    }
    if (hamburguer6 > 0) {
        detalhes += `${hamburguer6} Combo Clássico `;
    }
    if (hamburguer7 > 0) {
        detalhes += `${hamburguer7} Combo Duplo `;
    }
    if (hamburguer8 > 0) {
        detalhes += `${hamburguer8} Combo Triplo `;
    }

    detalhes += `- Total: R$ ${valorFinal.toFixed(2)} (frete: R$ ${frete}).`;
    
    localStorage.setItem('detalhesPedido', detalhes);
    
    window.open('obrigado.html', '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const detalhesPedido = localStorage.getItem('detalhesPedido');
    if (detalhesPedido && document.getElementById('detalhesPedido')) {
        document.getElementById('detalhesPedido').innerText = detalhesPedido;
    }
});