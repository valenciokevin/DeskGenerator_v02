//Função para editar nome do cliente
function captalizeClientName(str) {
    return str.split(' ') //Divide a string em palavras separadas por espaço
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //Capitaliza a primeira letra
        .join(' '); //Junta as palavras novamente em uma string
}

//Função para mostrar menu de categoria do motivo de contato
function showCategoryInfo(opcao) {
    const inputContainer = document.getElementById('categoryOptionsContainer');
    const inputChat = document.getElementById('chatCategory');
    const inputPhone = document.getElementById('phoneCategory');
    const inputApp = document.getElementById('appCategory');

    //Esconde os campos de entrada
    inputChat.style.display = 'none';
    inputPhone.style.display = 'none';
    inputApp.style.display = 'none';
    inputContainer.style.display = 'block'; //Exibe o container

    //Exibe os campos de entrada correspondentes a opção selecionada
    switch (opcao) {
        case 'chat':
            inputChat.style.display = 'block';
            break;
        case 'phone':
            inputPhone.style.display = 'block';
            break;
        case 'app':
            inputApp.style.display = 'block';
            break;
        default:
            inputContainer.style.display = 'none';
            break;
    }
}