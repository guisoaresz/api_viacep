function clearInfo() {
    document.getElementById('cep').value=("");
    document.getElementById('complemento').value="";
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function cepApi(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('complemento').value=(conteudo.complemento);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else {
        clearInfo();
        alert("CEP não encontrado.");
    }
}
    
function pesquisaCEP(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=cepApi';
            document.body.appendChild(script);
        }
        else {
            clearInfo();
            alert("CEP inválido.");
        }
    }
    else {
        clearInfo();
    }
};