let cargos = ["Administrador", "Medico", "Advogado", "Analista de Sistema"];

// Muda o cargo sem mexer no codigo principal
cargos[1] = "Contador"

// Adiciona mais um item no final da lista
cargos.push("Devops")

// Apaga o item anterior da lista
cargos.pop()

console.log(cargos)