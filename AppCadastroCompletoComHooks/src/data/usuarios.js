const usuariosMock = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    nome: gerarNomeAleatorio(),
    email: gerarEmailAleatorio(),
    telefone: gerarTelefoneAleatorio(),
    urlFotoPerfil: `https://loremflickr.com/320/240?random=${i + 1}`
}));

function gerarNomeAleatorio() {
    const nomes = ["Gabriel", "Ana", "Carlos", "Fernanda", "Lucas", "Mariana", "Rafael", "Juliana", "Eduardo", "Camila"];
    const sobrenomes = ["Silva", "Souza", "Oliveira", "Pereira", "Santos", "Ferreira", "Almeida", "Costa", "Martins", "Mendes"];

    return `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`;
}

function gerarEmailAleatorio() {
    const dominios = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com", "teste.com"];

    return `${gerarNomeAleatorio().toLowerCase().replace(" ", ".")}@${dominios[Math.floor(Math.random() * dominios.length)]}`;
}

function gerarTelefoneAleatorio() {
    const ddds = ["11", "21", "31", "41", "51", "61", "71", "81", "91"];
    const numero = `${Math.floor(90000 + Math.random() * 10000)}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    return `(${ddds[Math.floor(Math.random() * ddds.length)]}) ${numero}`;
}

export default usuariosMock;