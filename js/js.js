function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador'></div>");
	$("#fundoGame").append("<div id='inimigo1'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo'></div>");

    $("#jogador").addClass("anima1")
    $("#inimigo1").addClass("anima1")
    $("#amigo").addClass("anima3")

    var jogo = {}
    
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
        }
    
    jogo.pressionou = [];
    
    var velocidade=5;
    var posicaoY = parseInt(Math.random() * 334);
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
       
        
        movefundo();
        //Verifica se o usuário pressionou alguma tecla	
	
	    $(document).keydown(function(e){
            jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });


        movejogador(jogo,TECLA);
        moveinimigo1(velocidade,posicaoY);
        

    
	
	}

}

function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-1);
	
} // fim da função movefundo()

function movejogador(jogo, TECLA) {
    
	
	if (jogo.pressionou[TECLA.W]) {
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo-10);
	
	}
	
	if (jogo.pressionou[TECLA.S]) {
		
		var topo = parseInt($("#jogador").css("top"));
		$("#jogador").css("top",topo+10);	
	}
	
	if (jogo.pressionou[TECLA.D]) {
		
		//Chama função Disparo	
	}

    if (topo<=0) {
		
        $("#jogador").css("top",topo+10);
    }

    if (topo>=434) {	
        $("#jogador").css("top",topo-10);
            
    }

} // fim da função movejogador()

function moveinimigo1(velocidade,posicaoY) {

	posicaoX = parseInt($("#inimigo1").css("left"));
	$("#inimigo1").css("left",posicaoX-velocidade);
	$("#inimigo1").css("top",posicaoY);
		
		if (posicaoX<=0) {
		posicaoY = parseInt(Math.random() * 334);
		$("#inimigo1").css("left",694);
		$("#inimigo1").css("top",posicaoY);
			
		}
}

