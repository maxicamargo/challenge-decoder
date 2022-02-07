//Funciones:
//Muestra el mensaje encriptado en el cuadro de texto Msg.
function mostrarMsgEncriptado(){
	msg.value=encriptarMsg(inputTexto.value);
	inputTexto.value ="";
};

//Muestra el mensaje desencriptado en el cuadro de texto Msg.
function mostrarMsgDesencriptado(){
	msg.value=desencriptarMsg(inputTexto.value);
	inputTexto.value ="";
};

//Encripta el mensaje 
function encriptarMsg(texto){
	var textoEncriptado = "";
	for(var letra = 0; letra < texto.length; letra++){
		if(texto[letra]=="e"){
			textoEncriptado = textoEncriptado + "enter";
		}else if(texto[letra]=="i"){
			textoEncriptado = textoEncriptado + "imes";
		}else if(texto[letra] =="a"){
			textoEncriptado = textoEncriptado + "ai";
		}else if(texto[letra]=="o"){
			textoEncriptado = textoEncriptado + "ober";
		}else if(texto[letra]=="u"){
			textoEncriptado = textoEncriptado + "ufat";
		}else{
			textoEncriptado = textoEncriptado + texto[letra];
		};
	};
	return textoEncriptado;
};

//Desencripta el mensaje
function desencriptarMsg(texto){
	var textoDesencriptado = "";
	var contador = 0;
	while(contador < texto.length){
		if(texto[contador]=="e"){
			textoDesencriptado = textoDesencriptado +"e";
			contador= contador + 5; 
		}else if(texto[contador]=="i"){
			textoDesencriptado = textoDesencriptado +"i";
			contador= contador + 4;
		}else if(texto[contador]=="a"){
			textoDesencriptado = textoDesencriptado +"a";
			contador= contador + 2;
		}else if(texto[contador]=="o"){
			textoDesencriptado = textoDesencriptado +"o";
			contador= contador + 4;
		}else if(texto[contador]=="u"){
			textoDesencriptado = textoDesencriptado +"u";
			contador = contador + 4;
		}else{
			textoDesencriptado = textoDesencriptado + texto[contador];
			contador++;
		};
	};
	return textoDesencriptado;
};

//Funcion para copiar el texto mensaje encriptado o desencriptado
function copiarMensaje() {
  	var copiarTexto = document.querySelector("#msg");
  	copiarTexto.select();
  	document.execCommand("copy");
};

//Variables:
var inputTexto = document.querySelector("#input-texto");
var buttonEncriptar = document.querySelector("#btn-encriptar");
var msg = document.querySelector("#msg");
var buttonDesencriptar = document.querySelector("#btn-desencriptar");
var buttonCopiar = document.querySelector("#btn-copy");

//Proceso:
inputTexto.focus();
buttonEncriptar.onclick = mostrarMsgEncriptado;
buttonDesencriptar.onclick = mostrarMsgDesencriptado;
buttonCopiar.onclick = copiarMensaje;
