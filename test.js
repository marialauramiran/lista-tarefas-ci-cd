function validarTarefa(tarefa) {
    return tarefa.trim() !== "";
}

// Teste 1: tarefa válida
if (!validarTarefa("")) {
    throw new Error("Teste falhou: uma tarefa válida foi rejeitada.");
}

// Teste 2: tarefa vazia
if (validarTarefa("")) {
    throw new Error("Teste falhou: uma tarefa vazia foi aceita.");
}

console.log("Todos os testes foram executados com sucesso!");
