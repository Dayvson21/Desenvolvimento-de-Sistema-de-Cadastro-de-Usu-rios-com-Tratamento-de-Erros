
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     const dadosUsuario = {
//         nome: document.getElementById("nome").value.trim(),
//         usuario: document.getElementById("usuario").value.trim(),
//         senha: document.getElementById("senha").value.trim(),
//         email: document.getElementById("email").value.trim(),
//         data: document.getElementById("data").value.trim(),
//         idade: document.getElementById("idade").value.trim()
//     }

//     for (let campo in dadosUsuario) {
//         if (dadosUsuario[campo] === "") {
//             alert(`Digite o campo ${campo}!`);
//             return;
//         }
//     }
//     try {
//         localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
//         alert("Cadastro realizado com sucesso!")

//     } catch (error) {
//         console.error("Ocorreu um erro ao salvar:", error.message);
//     }
// });

const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const idade = document.getElementById("idade").value.trim();

    try {
        if (!nome) throw "Digite um nome.";
        if (!usuario) throw "Digite um usuário.";
        if (senha.length < 6) throw "A senha deve ter pelo menos 6 caracteres.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw "Digite um email válido.";
        if (!data) throw "Informe sua data de nascimento.";
        if (!idade || isNaN(idade) || Number(idade) < 18) throw "A idade deve ser um número e maior ou igual a 18.";

    
        localStorage.setItem("usuarioDados", JSON.stringify({ nome, usuario, senha, email, data, idade }));

        alert("Cadastro realizado com sucesso!");
    } catch (erro) {
        alert(erro);
    }
});
