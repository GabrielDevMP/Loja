
var PASTA = "ImagensAD2/";
var EXT = ".png"; // unica maneira de alterar a extensão das imagens, caso seja necessário

var tabSofas = [
    // [produto, tipo, arquivo da imagem, tecido, medidas, preço]
    ["", "", "vazio_150", "", "", 0],
    ["Sofá 2 lugares", "Retrátil",  "Sofa2lugRetratil150", "Linho Cru", "95 x 87-126 x 180 (AxPxL)",  765],
    ["Sofá 2 lugares", "Sofá-Cama", "SofaCama2lug150",     "Linho",     "95 x 97-150 x 200 (AxPxL)", 4160],
    ["Sofá 3 lugares", "Retrátil",  "Sofa3lugRetratil150", "Suede",     "108 x 95-150 x 200 (AxPxL)", 1900],
    ["Sofá 3 lugares", "Retrô",     "Sofa3lugRetro150",    "Veludo",    "80 x 76 x 196 (AxPxL)",     1200]
];

function MostraSofas(ind) {
    var s = tabSofas[ind];
    var titu = document.getElementById("NomeDes");
    var foto = document.getElementById("ImgDes");
    var info = document.getElementById("PrcDes");

    titu.innerHTML = "<h2>" + s[0] + "</h2><p>" + s[1] + "</p>";

    foto.src = PASTA + s[2] + EXT;
    foto.alt = s[0] + " " + s[1];

    if (ind === 0) {
        info.innerHTML = "<p></p>";
        return;
    }

    info.innerHTML =
        "<p><strong>Tecido:</strong> " + s[3] + "</p>" +
        "<p><strong>Tamanho:</strong> " + s[4] + "</p>" +
        "<p><strong>Preço:</strong> R$ <span class='preco'>" +
        s[5].toLocaleString("pt-BR", { minimumFractionDigits: 2 }) +
        "</span></p>";
}

