var Tabcama = new Array(4);

Tabcama[0] = ["Cama de Solteiro", "Simples", "108 x 154 x 210(AxLxP)", "CamaSolt_150", 325];
Tabcama[1] = ["Cama de Solteiro", "Bicama", "70 x 80 x 193(AxLxP)", "BicamaSolteiro_150", 470];
Tabcama[2] = ["Camas de Casal", "Simples", "108 x 154 x 210(AxLxP)", "CamaCasalSimples_150", 680];
Tabcama[3] = ["Camas de Casal", "Com gavetas", "48 x 145 x 195(AxLxP)", "CamaCasalGavetas_150", 1900];

function MostrarTabCamas(tipo) {
    // 1. Abre a janela

   
var larg = 300;
var alt = 385;
var posX = window.screenX + (window.outerWidth - larg) / 2;
var posY = window.screenY + (window.outerHeight - alt) / 2; 

var jan = window.open("", Tabcama[tipo][0],
   "location=no,status=no," +
    "width=" + larg + ",height=" + alt + ","
      + "left=" + posX + ",top=" + posY);

    // 2. Verifica se a janela abriu (não foi bloqueada)
    if (!jan) {
        alert("Por favor, permita pop-ups para este site.");
        return;
    }

    // 3. Monta todo o HTML em uma única string
    var html = "<!DOCTYPE html>" +
        "<html><head><title>DOReMI SOlFÁ-móveis</title>" +
        "<link rel='stylesheet' type='text/css' href='style.css'>" +
        "<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Karla|Stoke'>" +
        "</head><body>" +
        "<div class='apresentacao'>" +
        "<h3>" + Tabcama[tipo][0] + "</h3>" +
        "<p>" + Tabcama[tipo][1] + "</p>" +
        "<p><img src='ImagensAD2/" + Tabcama[tipo][3] + ".jpg' /></p>" +
        "<div>" +
        "<p>" + Tabcama[tipo][2] + "</p>" +
        "<p>Preço: R$ " + Tabcama[tipo][4] + ",00</p></div>" +
        "<form>" +
        "<input type='button' value='Fechar' onclick='window.close();' />" +
        "</form></div>" +
        "</body></html>";

    // 4. Escreve o HTML na janela
    jan.document.open();
    jan.document.write(html);
    jan.document.close();

    // 5. Dá o foco para a nova janela
    jan.focus();
}