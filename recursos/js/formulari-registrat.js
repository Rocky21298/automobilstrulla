/* SCRIPTS FORMULARI
 * Presenten missatges d'error 
 * segons les accions de l'usuari
 * i les restriccions dels camps.
 * Guarden les dades en una cookie 
 * que es presenta al premer un boto 
 * que apareix nomes si ja existeix
 * la cookie. 
 * 
 * PAGINA: pagines/qui-som.html
 * ACCIO: botons "modera el forum" i "escriu al blog"*/


window.onload = function () {
  //Permet esperar la carrega complerta del DOM
  //abans d'associar els events
  
      validarDespresOmplir();
      mostraBotoCookie();  
  }
  
  //MISSATGE ERROR NOM
  document.getElementById("fname").addEventListener("blur", mostraErrorNom, false);
  function mostraErrorNom() {
  
      let campNom = document.getElementById('fname');
      let nomExp = /^(?=.{2,20}$)(([A-Za-zÀ-ÖØ-öø-ÿ\s'\-])\2?(?!\2))+$/;
  
      if (nomExp.test(campNom.value)) {
          document.getElementById('errorNom').textContent = " ";
      } else {
          document.getElementById('errorNom').textContent = "Ei, introdueix un nom correcte";
      }
  }
  
  //MISSATGE ERROR COGNOM
  document.getElementById("lname").addEventListener("blur", mostraErrorCognom, false);
  function mostraErrorCognom() {
  
      let campCognom = document.getElementById('lname');
      let cognomExp = /^(?=.{2,20}$)(([A-Za-zÀ-ÖØ-öø-ÿ\s'\-])\2?(?!\2))+$/;
  
      if (cognomExp.test(campCognom.value)) {
          document.getElementById('errorCognom').textContent = " ";
      } else {
          document.getElementById('errorCognom').textContent = "Ei, introdueix un cognom correcte";
      }
  }
  
  //MISSATGE ERROR DATA NAIXEMENT
  document.getElementById("dataNaix").addEventListener("blur", mostraErrorDataNaix, false);
  function mostraErrorDataNaix() {
  
      let campData = document.getElementById('dataNaix');
      let dataExp = /\d{4}-\d{2}-\d{2}/;
  
      if (dataExp.test(campData.value)) {
          document.getElementById('errorData').textContent = " ";
      } else {
          document.getElementById('errorData').textContent = "Ei, introdueix la teva data de naixement";
      }
  }
  
  //MISSATGE ERROR EMAIL
  document.getElementById("mailColaborador").addEventListener("blur", mostraErrorEmail, false);
  function mostraErrorEmail() {
  
      let campEmail = document.getElementById('mailColaborador');
      let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      if (emailExp.test(campEmail.value)) {
          document.getElementById('errorEmail').textContent = " ";
      } else {
          document.getElementById('errorEmail').textContent = "Ei, introdueix un email amb el format: correu@exemple.com";
      }
  }
  
  //MISSATGE ERROR TELEFON
  document.getElementById("telefon").addEventListener("blur", mostraErrorTelefon, false);
  function mostraErrorTelefon() {
  
      let campTel = document.getElementById('telefon');
      let telExp = /^\+376-(8|7|3|4|6)[0-9]{5}$/;
  
      if (telExp.test(campTel.value)) {
          document.getElementById('errorTel').textContent = " ";
      } else {
          document.getElementById('errorTel').textContent = "Ei, introdueix un telèfon d'Andorra amb el format: +376-666610";
      }
  }
  
  //MISSATGE ERROR ADRECA
  document.getElementById("adreca").addEventListener("blur", mostraErrorAdreca, false);
  function mostraErrorAdreca() {
  
      let campAdr = document.getElementById('adreca');
      let adrExp = /^\w{1,5}\.\s[A-Za-zÀ-ú\s'\-]{3,42},\s\d{1,3}$/;
  
      if (adrExp.test(campAdr.value)) {
          document.getElementById('errorAdr').textContent = " ";
      } else {
          document.getElementById('errorAdr').textContent = "Ei, introdueix una adreça amb el format: Av. Bonaventura Riberaygua, 42";
      }
  }
  
  //MISSATGE ERROR POBLACIO
  document.getElementById("poblacio").addEventListener("blur", mostraErrorPoblacio, false);
  function mostraErrorPoblacio() {
  
      let campPob = document.getElementById('poblacio');
      let pobExp = /^[A-Za-zÀ-ú\s'\-]{3,23}$/;
  
      if (pobExp.test(campPob.value)) {
          document.getElementById('errorPob').textContent = " ";
      } else {
          document.getElementById('errorPob').textContent = "Ei, introdueix una població d'Andorra";
      }
  }
  
  //MISSATGE ERROR CODI POSTAL
  document.getElementById("cp").addEventListener("blur", mostraErrorCP, false);
  function mostraErrorCP() {
  
      let campCP = document.getElementById('cp');
      let cpExp = /^AD[1-7]00$/;
  
      if (cpExp.test(campCP.value)) {
          document.getElementById('errorCP').textContent = " ";
      } else {
          document.getElementById('errorCP').textContent = "Ei, selecciona un codi postal";
      }
  }
  
  //MISSATGE ERROR IBAN
  document.getElementById("iban").addEventListener("blur", mostraErrorIban, false);
  function mostraErrorIban() {
  
      let campIban = document.getElementById('iban');
      let ibanExp = /^AD\d{2}\s(0001|0008|0003|0007|0025)\s\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  
      if (ibanExp.test(campIban.value)) {
          document.getElementById('errorIban').textContent = " ";
      } else {
          document.getElementById('errorIban').textContent = "Ei, introdueix un IBAN d'Andorra correcte o no et podrem pagar!";
      }
  }
  
  //MISSATGE ERROR CONTRASENYA
  document.getElementById("password").addEventListener("blur", mostraErrorContrasenya, false);
  function mostraErrorContrasenya() {
  
      let campContra = document.getElementById('password');
      let contraExp = /^(?=.*\d{2,})(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
  
      if (contraExp.test(campContra.value)) {
          document.getElementById('errorPass').textContent = " ";
      } else {
          document.getElementById('errorPass').textContent = "La teva contrasenya ha de tindre mínim una majús, una minús, 2 digits, i una llargada mínima de 6 caràcters";
      }
  }
  
  //VALIDACIO CONTRASENYA
  function validaContrasenya() {
      /* Serveix per "copiar" el valor introduit en el primer input 
       * en el pattern del segon input.
       * No tinc ni idea de que vol dir l'expressio regular d'aqui baix,
       * pero el cas es que funciona i em sembla una solucio elegant 
       * (en aquest cas concret, normalment hauriem d'evitar "jugar" amb
       * la contrasenya introduida)
       * 
       * font: https://stackoverflow.com/a/26439639 */
  
      let str = document.getElementById("password").value;
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  //copiem el pattern a l'input de "confirmar contrasenya":
  document.getElementById("password").addEventListener("input", () => { document.getElementById("confirm").setAttribute("pattern", validaContrasenya()) });
  
  /* en aquest cas, confirmem que coincideixen MENTRE l'usuari l'esta introduint (keyup)
   * i no nomes quan canvia de input (blur), per a fer-ho mes amigable*/
  document.getElementById("confirm").addEventListener("keyup", confirmarContrasenya, false);
  document.getElementById("confirm").addEventListener("blur", confirmarContrasenya, false);
  
  //MISSATGE ERROR VALIDAR CONTRASENYA
  function confirmarContrasenya() {
  
      let contrasenya1 = document.getElementById("password").value;
      let contrasenya2 = document.getElementById("confirm").value;
  
      if (contrasenya1 !== contrasenya2) {
          document.getElementById('errorConfirm').textContent = "! Les contrasenyes no coincideixen. Torna a provar-ho!";
  
      } else {
          document.getElementById('errorConfirm').textContent = "";
      }
  }
  
  //APLICA L'ESTIL CSS DEL ERROR
  function validarDespresOmplir() {
  
      const inputs = document.querySelectorAll('input, select');
      for (let input of inputs) {
            //abans d'enviar, l'event invàlid s'engegarà i aplicarà la clase.
          input.addEventListener('invalid', (event) => {
              input.classList.add('error');
          }, false);
  
          input.addEventListener('blur', (event) => {
              input.checkValidity();
          })
      }
  }
  
  // DESAR I CARREGAR COOKIE
  document.getElementById("colaboraForm").addEventListener("submit", guardaCookie, false);
  document.getElementById("botoCookie").addEventListener("click", mostraCookie, false);
  
  function guardaCookie(event) {
      event.preventDefault();
      var dades = {};
  
      dades.nom = document.forms["colaboraForm"]["fname"].value;
      dades.cognom = document.forms["colaboraForm"]["lname"].value;
      dades.dataNaix = document.forms["colaboraForm"]["dataNaix"].value;
      dades.eMail = document.forms["colaboraForm"]["email"].value;
      dades.telf = document.forms["colaboraForm"]["telefon"].value;
      dades.adreca = document.forms["colaboraForm"]["adreca"].value;
      dades.poblacio = document.forms["colaboraForm"]["poblacio"].value;
      dades.codiPostal = document.forms["colaboraForm"]["cp"].value;
      dades.pais = document.forms["colaboraForm"]["pais"].value;
      dades.iban = document.forms["colaboraForm"]["iban"].value;
      dades.contrasenya = document.forms["colaboraForm"]["password"].value;
  
      document.cookie = JSON.stringify(dades);
      
      //mostra el boto al enregistrar la cookie:
      document.getElementById("botoCookie").style.display = "block";
  }
  
  // mostra el boto nomes si ja hi ha una cookie enregistrada
  function mostraBotoCookie() {
      let cookieValue = document.cookie;
  
      console.log(cookieValue);
      if (cookieValue === "")
          document.getElementById("botoCookie").style.display = "none";
      else
          document.getElementById("botoCookie").style.display = "block";
  }
  
  // escriu els valors de la cookie dins d'un tag tipus <p> inclos al final del modal
  function mostraCookie() {
  
      const cookieValue = document.cookie;
  
      const output = document.getElementById('cookies');
      var dades = JSON.parse(cookieValue);
  
      output.textContent = "DADES COOKIE: " + " Nom i cognom: " + dades.nom + " " + dades.cognom + ", Data de Naixement: " + dades.dataNaix
          + ", Email: " + dades.eMail + ", Telefon: " + dades.telf
          + ", Adreca: " + dades.adreca + ", Poblacio: " + dades.poblacio + ", Codi Postal: " + dades.codiPostal + ", Pais: " + dades.pais
          + ", IBAN: " + dades.iban + ", Contrasenya: " + dades.contrasenya;
  }