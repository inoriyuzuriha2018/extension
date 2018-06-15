var audio = new Audio();
audio.src = "shelter_remix.mp3";
audio.controls = true ; 
audio.loop = true;
audio.autoplay = false;
var canvas , ctx , source , context , analyser , fbc_array , bars , bar_x , bar_width , bar_height,mau;
    //http://tratu.soha.vn/dict/en_vn/Manipulate

function song_am(){
//window.addEventListener("load",initMp3Plaer,false);
initMp3Plaer();
setInterval(function(){
	mau = "rgb("+ Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
},1000);
}
function initMp3Plaer(){
	context = new AudioContext();
 	analyser = context.createAnalyser();
 	canvas = document.getElementById('analyser');
 	ctx = canvas.getContext('2d');
 	source = context.createMediaElementSource(audio);
 	source.connect(analyser);
 	analyser.connect(context.destination);
	canvas.width = window.innerWidth ;
	canvas.height = window.innerHeight;
	framelooper()
}
function framelooper(){
	window.requestAnimationFrame(framelooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
 	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0 , 0 , canvas.width , canvas.height);
	ctx.save();
	ctx.globalCompositeOperation='source-over';
	
	ctx.translate((window.innerWidth/2)+(-5),(window.innerHeight/2)+(-10));
	ctx.scale(0.5,0.5);
	ctx.fillStyle = mau ;
//	ctx.setTransform(0, 0, 0, 0, 500, 300);
	var bass = Math.floor(fbc_array[1]); 
	var radius = 0.45 * window.innerWidth <= 450 ? -(bass * 0.45 + 0.80 * window.innerWidth ) : -(bass * 0.15 + 350);
//	bars = 100;
	for (var i = 0 ; i < 1024 ; i++){
//		bar_x = i * 3  ;
		bar_height =  -(fbc_array[i] /1.0);
		ctx.rotate((180/128) * Math.PI/180);
		ctx.fillRect(0 , radius , 2 , bar_height);
	};
	for ( var i = 0; i < 1024; i++ ){
	
	bar_height =  - (fbc_array[i] /1.0);
	ctx.fillRect(0 ,radius, 2, bar_height);
	ctx.rotate(-(180 / 128) * Math.PI/180);
	
	} ;
	for ( var i = 0; i < 1024; i++ ){				
	bar_height =  - (fbc_array[i] /1.0);
	ctx.rotate((180 / 128) * Math.PI/180);
	ctx.fillRect(0, radius, 2, bar_height);
	} ;
	ctx.restore();
}
