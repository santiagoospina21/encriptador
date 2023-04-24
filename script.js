const inputTexto = document.querySelector(".input-texto");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

const contenedorArea = document.querySelector(".contendor-textarea");

//ENCRIPTAR

const vocales = ["a", "e", "i", "o", "u"];

const encriptArray = ["ai", "enter", "imes", "ober", "ufat"];

const encriptar = (palabra) => {
  const palabraArray = palabra.toLowerCase().split("");

  palabraArray.forEach((letra, i) => {
    const indice = vocales.indexOf(letra);

    if (indice >= 0) {
      palabraArray[i] = encriptArray[indice];
    }
  });

  console.log(palabraArray.join(""));
  return palabraArray.join("");
};

encriptar("gato perro y marrano");

//DESENCRIPTAR

const desencriptar = (fraseEncriptada) => {
  const resultado = [];
  let startIndex = 0;

  //Crear array
  while (startIndex < fraseEncriptada.length) {
    let foundMatch = false;

    encriptArray.forEach((encript) => {
      if (fraseEncriptada.toLowerCase().startsWith(encript, startIndex)) {
        resultado.push(encript);
        startIndex += encript.length;
        foundMatch = true;
      }
    });

    if (!foundMatch) {
      resultado.push(fraseEncriptada.toLowerCase()[startIndex]);
      startIndex++;
    }
  }

  //Remplazar
  resultado.forEach((element, i) => {
    const indice = encriptArray.indexOf(element);

    if (indice >= 0) {
      resultado[i] = vocales[indice];
    }
  });

  return resultado.join("");
};

desencriptar("gaitober penterrrober y mairrainober");

desencriptar(
  "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
);

//DOM

const clearFields = () => {
  inputTexto.value = "";
  contenedorArea.innerHTML = "";
};

const addTextArea = (texto) => {
  contenedorArea.insertAdjacentHTML(
    "afterbegin",
    `<textarea class="textarea-display"></textarea>
    <button class ="btn-copiar">Copiar</button>`
  );
  const displayArea = document.querySelector(".textarea-display");
  btnCopy = document.querySelector(".btn-copiar");
  displayArea.value = texto;
  copyClipboard(texto);
};

const copyClipboard = (texto) => {
  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(texto);
  });
};

btnEncriptar.addEventListener("click", () => {
  const texto = encriptar(inputTexto.value);
  clearFields();
  addTextArea(texto);
});

btnDesencriptar.addEventListener("click", () => {
  const texto = desencriptar(inputTexto.value);
  clearFields();
  addTextArea(texto);
});
