 function verificaSenhas() {
            var senha = document.getElementById("idSenha");
            var confirma = document.getElementById("idConf");

            // Se um dos campos estiver vazio, o HTML (required) já vai avisar.
            // Retornamos true para não interferir.
            if (senha.value === "" || confirma.value === "") {
                return true; 
            }

            // Compara os valores
            if (senha.value !== confirma.value) {
                alert("Senhas estão diferentes!");
                // Retorna false para IMPEDIR o envio do formulário
                return false; 
            }

            // Se forem iguais, permite o envio
            return true;
        }