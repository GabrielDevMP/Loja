   function incluirProduto() {
        // 1. Obter os elementos do DOM
        var select = document.getElementById("selProduto");
        var textarea = document.getElementById("lisPedArea");
        var inputTotal = document.getElementById("TxtTotal");

        // 2. Obter o valor da opção selecionada e o texto (descrição)
        var valorSelecionado = parseFloat(select.value); // Converte o value para número decimal
        var textoSelecionado = select.options[select.selectedIndex].text;

        // 3. Verificar se uma opção válida foi selecionada (ignora o "-----" que tem value 0)
        if (valorSelecionado > 0) {
            
            // REQUISITO B (Parte 1): Acrescentar a descrição do produto à lista de compras
            // Adiciona o texto no textarea (com quebra de linha \n)
            textarea.value += textoSelecionado + "\n";

            // REQUISITO B (Parte 2): Somar o preço ao valor total
            var totalAtual = parseFloat(inputTotal.value) || 0; // Pega o valor atual ou 0 se estiver vazio
            var novoTotal = totalAtual + valorSelecionado;
            
            // Atualiza o campo total formatado com 2 casas decimais
            inputTotal.value = novoTotal.toFixed(2);

            // REQUISITO B (Parte 3): Voltar o combo box ao estado inicial
            select.selectedIndex = 0; // Seleciona a primeira opção (-----)
        } else {
            alert("Nenhum Produto Selcionado!");
        }
    }