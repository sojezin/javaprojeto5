let  xb = 500;
let  yb = 400;
let  diametro = 20;
let  raio=diametro/2;
let  xvb = 9;
let  yvb = 9;
let  xr  =  5;
let  yr  =  150;
let  lr  =  7;
let  ar=  80;
let  xri  =  985;
let  yri  =  150;
let  colidiu  =  false;
let  meuspontos  =  0;
let  pontosdooponente  =  0;
let  ponto;
let  raquetada;
let  fundo;

function setup() {
  createCanvas(1000, 800);
  fundo.loop();
}

function draw() {
  background("black");
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraquete();
  mexeraqueteinimigo()
  quicaraquetebola(xr,yr);
  quicaraquetebola(xri,yri);
  pontos();
  placar();
  texto();
}

function  preload(){
  fundo  =  loadSound("Musica.wav");
  ponto  =  loadSound ("PONTO.wav");
  raquetada  =  loadSound ("POC.wav");   
}


function mostrabola(){
  circle(xb,yb,diametro);
} 
function mexebola (){
  xb += xvb;
  yb += yvb;
} 
function quicabola (){
  if (xb + raio > width || xb - raio < 0){
    xvb *= -1
  }
  
 if (yb + raio > height || yb - raio < 0){
    yvb *= -1
  }
}

function  mostraraquete(x,y)  {  rect(x,y,lr,ar);
}

function  mexeraquete()  {
if  (keyIsDown(UP_ARROW))
yr  -=   10;

if  (keyIsDown(DOWN_ARROW))
yr  +=  10;
}

function  mexeraqueteinimigo(){
if  (keyIsDown(87))
yri  -=   10;  //s

if  (keyIsDown(83))
yri  +=  10;  //w
}

function  quicaraquetebola(x,y){
  colidiu  =  collideRectCircle(x,y,lr,ar,xb,yb,raio);

  if(colidiu){xvb *=  -1;
              
}
  }

function  pontos(){
  if  (xb  >  990){meuspontos += 1
  }
   if  (xb  <  10){pontosdooponente += 1
  } 
}

function  placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(20);
  fill("red");
  rect(220,10,40,20);
  fill('white');
  text(meuspontos,240,12);
  fill("darkblue");
  rect(820,10,40,20);
  fill('white');
  text(pontosdooponente,840,12);
}

function  texto(){
  let  frase  =  "MEUS PONTOS"
  let  xf  =  170;
  let  yf  =  40;
  textSize(20);
  textAlign(LEFT,  TOP);
  fill("white");
  text(frase,xf,yf);
  
  let  fraseoponente  =  "PONTOS DO OPONENTE"
  let  xfo  =  735;
  let  yfo  =  40;
  textSize(20);
  textAlign(LEFT,  TOP);
  fill("white");
  text(fraseoponente,xfo,yfo);
  
  
}