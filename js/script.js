// Função para adicionar um registro à tabela
function adicionarRegistro() {
    // Obter os valores dos campos do formulário
    var texto = document.getElementById("texto").value;
    var data = document.getElementById("data").value;
    var numero = document.getElementById("numero").value;
    var checkbox = document.getElementById("checkbox").checked;
    var radio = document.getElementById("radio").checked ? "Sim" : "Não";
    

    // Criar uma nova linha na tabela
    var table = document.getElementById("registros").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    // Inserir células na nova linha com os valores dos campos
    var cellTexto = newRow.insertCell(0);
    var cellData = newRow.insertCell(1);
    var cellNumero = newRow.insertCell(2);
    var cellCheckbox = newRow.insertCell(3);
    var cellRadio = newRow.insertCell(4);
    
    // Preencher as células com os valores dos campos
    cellTexto.innerHTML = texto;
    cellData.innerHTML = data;
    cellNumero.innerHTML = numero;
    cellCheckbox.innerHTML = checkbox ? "Sim" : "Não";
    cellRadio.innerHTML = radio;
    
    // Limpar os campos do formulário
    document.getElementById("registroForm").reset();
    alert ('Seu cadastro foi efetuado com sucesso! ✔')
}

// Event listener para o envio do formulário
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário
    adicionarRegistro(); // Adicionar o registro à tabela
});

// Event listener para o botão de limpar
document.getElementById("limparButton").addEventListener("click", function() {
    document.getElementById("registroForm").reset(); // Limpar os campos do formulário
});

// Event listener para o botão de salvar
document.getElementById("salvarButton").addEventListener("click", function() {
    adicionarRegistro(); // Adicionar o registro à tabela
});
