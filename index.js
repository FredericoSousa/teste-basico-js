const pessoas = [
	{ id: 1, nome: 'João', idade: 20, sexo: 'M' },
	{ id: 2, nome: 'Maria', idade: 35, sexo: 'F' },
	{ id: 3, nome: 'Ricardo', idade: 40, sexo: 'M' },
	{ id: 4, nome: 'Patricia', idade: 18, sexo: 'F' },
	{ id: 5, nome: 'Fernanda', idade: 19, sexo: 'F' },
	{ id: 6, nome: 'Felipe', idade: 13, sexo: 'M' },
	{ id: 7, nome: 'Luiza', idade: 25, sexo: 'F' },
	{ id: 8, nome: 'Lucas', idade: 16, sexo: 'M' },
	{ id: 9, nome: 'Michael', idade: 45, sexo: 'M' },
	{ id: 10, nome: 'Ana', idade: 15, sexo: 'F' },
];

const profissoes = [
	{ pessoaId: 1, nome: 'Motorista' },
	{ pessoaId: 2, nome: 'Arquiteta' },
	{ pessoaId: 4, nome: 'Dentista' },
	{ pessoaId: 5, nome: 'Advogada' },
	{ pessoaId: 7, nome: 'Desenvolvedora' },
	{ pessoaId: 9, nome: 'Desenvolvedor' },
	{ pessoaId: 10, nome: 'Professora' },
];

// Escreva uma função que retorne a pessoa com maior idade
const getMaisVelho = pessoas => {
	let maior = null;
	pessoas.forEach(p => {
		if (!maior) maior = p;
		else if (p.idade > maior.idade) maior = p;
	});
	return maior;
};

// Escreva uma função que retorne somente as maiores de 18 anos

const getMaioresDeIdade = pessoas => {
	return pessoas.filter(p => p.idade > 18);
};

// Escreva uma função que retorne somente as mulheres

const getMulheres = pessoas => {
	return pessoas.filter(p => p.sexo === 'F');
};

// Escreva uma função que retorne se existe uma pessoa com exatamente 15 anos

const get15Anos = pessoas => {
	return pessoas.some(p => p.idade === 15);
};

// Escreva uma função que relacione as pessoas com as profissões
// Pessoas sem profissoes devem ter a profissão como null

const relacionar = (pessoas, profissoes) => {
	return pessoas.map(p => {
		const profissao = profissoes.find(pr => pr.pessoaId === p.id);
		return { ...p, profissao: profissao ? profissao.nome : null };
	});
};

// Escreva uma função que retorne somente o nome e a idade das pessoas sem profissão

const getSemProfissao = pessoas => {
	return pessoas.map(p => {
		const { nome, idade, profissao } = p;
		if (!profissao) return { nome, idade };
	});
};

console.log('Mais velho');
console.table([getMaisVelho(pessoas)]);
console.log('Maiores de 18');
console.table(getMaioresDeIdade(pessoas));
console.log('Mulheres');
console.table(getMulheres(pessoas));
console.log('15 anos');
console.log(get15Anos(pessoas));
console.log('Relacionar Profissoes');
console.table(relacionar(pessoas, profissoes));
console.log('Sem Profissao');
console.table(getSemProfissao(pessoas));
