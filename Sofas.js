/*var tabSofas = [   
    ["", "",
"vazio", ""],

    // Arquivo: Sofa2lugRetratil150.jpg
    ["Sofá 2 lugares", "Retrátil", "Sofa2lugRetratil150", "Linho Cru", "95 x 87-126 x 180 (AxPxL)", 765],

    // Arquivo: SofaCama2lug150.jpg
    ["Sofá 2 lugares", "Sofá-Cama", "SofaCama2lug150", "Linho", "95 x 97-150 x 200 (AxPxL)", 4160],

    // Arquivo: SofaCama2lug150.jpg (Reutilizando a mesma imagem, como no seu código original)
    ["Sofá 3 lugares", "Retrátil", "Sofa3lugRetratil150", "Suede", "108 x 95-150 x 200 (AxPxL)", 1900],

    // Arquivo: Sofa3lugRetratil150.jpg (Corrigido o nome para bater com a pasta)
    ["Sofá 3 lugares", "Retro", "Sofa3lugRetro150", "Veludo", "80 x 76 x 196 (AxPxL)", 1200] 
];

function MostraSofas(ind) {
    var titu = document.getElementById("NomeDes");
    var foto = document.getElementById("ImgDes");
    var prec = document.getElementById("PrcDes");

   titu.innerHTML = "<h2>"
 + tabSofas[ind][0]
+ "</h2><p>"
+ tabSofas[ind][1]
+ "</p>";
 foto.src = "ImagensAD2/" + tabSofas[ind][2]
 + ".png";
 prec.innerHTML = "<p>Preço: R$ "
 + "<span class='preco'>"
 + tabSofas[ind][3]
 + ",00</span></p>";
} */
var tabSofas = [   
    ["", "", "vazio", "", "", ""],

    // Arquivo: Sofa2lugRetratil150.jpg
    ["Sofá 2 lugares", "Retrátil", "Sofa2lugRetratil150", "Linho Cru", "95 x 87-126 x 180 (AxPxL)", 765],

    // Arquivo: SofaCama2lug150.jpg
    ["Sofá 2 lugares", "Sofá-Cama", "SofaCama2lug150", "Linho", "95 x 97-150 x 200 (AxPxL)", 4160],

    // Arquivo: Sofa3lugRetratil150.jpg
    ["Sofá 3 lugares", "Retrátil", "Sofa3lugRetratil150", "Suede", "108 x 95-150 x 200 (AxPxL)", 1900],

    // Arquivo: Sofa3lugRetro150.jpg
    ["Sofá 3 lugares", "Retro", "Sofa3lugRetro150", "Veludo", "80 x 76 x 196 (AxPxL)", 1200] 
];

function MostraSofas(ind) {
    // 1. Pega os elementos do HTML usando os IDs corretos
    var titu = document.getElementById("NomeDes");
    var foto = document.getElementById("ImgDes");
    var prec = document.getElementById("PrcDes");

    // Verifica se o índice existe
    if (!tabSofas[ind]) return;

    // 2. Monta o Nome e o Tipo
    // [0] = Produto, [1] = Tipo
    titu.innerHTML = "<h2>" + tabSofas[ind][0] + "</h2>" + 
                     "<h3>" + tabSofas[ind][1] + "</h3>";

    // 3. Monta a Imagem
    // CORREÇÃO: Usar .jpg (seus arquivos são .jpg) e o nome completo da coluna 2
    foto.src = "ImagensAD2/" + tabSofas[ind][2] + ".png";
    foto.alt = tabSofas[ind][0] + " " + tabSofas[ind][1];

    // 4. Monta a Descrição (Tecido, Tamanho e Preço)
    // [3] = Tecido, [4] = Tamanho, [5] = Preço
    var precoFormatado = tabSofas[ind][5].toFixed(2).replace('.', ',');
    
    prec.innerHTML = "<p><strong>Tecido:</strong> " + tabSofas[ind][3] + "</p>" +
                     "<p><strong>Tamanho:</strong> " + tabSofas[ind][4] + "</p>" +
                     "<p><strong>Preço:</strong> R$ " + precoFormatado + "</p>";
}

