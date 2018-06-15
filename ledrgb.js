/*function timeUpdateMusic() {
	// Thời gian toàn bộ của bài nhạc
	durationTime.innerHTML = player.duration;
	// Thời gian hiện tại của bài nhạc
	currentTime.innerHTML = player.currentTime;
	seek.max = player.duration;
	seek.value = player.currentTime;
}
*/
var a = document.getElementById("bocuc1"),
//	c = document.getElementById("tieu_de"),
	playPause = document.getElementById("playPause"),
//	player = document.getElementById('player__source'),
	r = 255,
	g = 0,
	b = 0,
	op = 0.025,
	Video = document.createElement('video'),
	Time1 , Time2,
	imgs = document.createElement('img');
setInterval(function(){
	Time1 = Video.currentTime  - audio.currentTime;
	Time2 = audio.currentTime - Video.currentTime;
	
},500);	
//	console.log(Video.duration);
function audio_video(){
	if(Time1 >= 1 || Time2 >= 1  && audio.currentTime < 53 ) {
		setTimeout(function(){
		audio.currentTime = Video.currentTime +0.5 ;
		},1000);
		
		setTimeout(audio_video,900);		
	}
	else if(Video.duration == Video.currentTime || Video.currentTime > 53){
		Video.pause();
		a.style.backgroundColor = "black";	
		a.removeChild(Video);
		a.appendChild(imgs);
		song_am();
	}else{
		setTimeout(audio_video,1000);		
	}
}

!function(){
		$(function() {
        $('#bocuc1').sakura();
    });

    // windowLoad
//		$(window).load(function() {
       
		Video.src = "shelter1.mp4";
		Video.width = window.innerWidth ;
		Video.height = window.innerHeight;
//		Video.autoplay = true;
		Video.muted = true;
		imgs.setAttribute("id","background");
		imgs.src = "shelter.png";
		console.log(typeof Video.duration);
//		audio.play();
		a.appendChild(Video);	
		Video.addEventListener("loadedmetadata", function(_event) {
            var duration = Video.duration;
            console.log(duration);
		playPause.addEventListener("click",function(){
					audio_video();
				
			})
        });

		
}()
//setTimeout(function(){
//		a.removeChild(Video);
//		},times);	
function playPauseMusic(){
	if (audio.paused) {
		playPause.src =  "pause1.png";
		audio.play();
		Video.play();
	}else {
		playPause.src = "play1.png";
		audio.pause();
		Video.pause();
	}
};
playPause.addEventListener('click', playPauseMusic, false);

function led_mau(){
//	var tieu1= document.getElementById("tieu_de");
//	tieu1.style.left= (window.innerWidth /  2.732);
//	a.style.color = "rgb(" + String(r) + ","+ String(g) + ","+ String(b) + ")";
	a.style.borderColor = "rgb(" + String(r) + ","+ String(g) + ","+ String(b) + ")";
//	c.style.textShadow =  "5px 5px 5px " +  "rgb(" + String(r) + ","+ String(g) + ","+ String(b) + ")";
	if (r ==255)
	{	
		if ( (b+15 ) > 255)
		{
		}
		if((g-15) <0){
	
		}
		if(g <=255 &g >= 15 ){
			g = g-15;
		}
		else{
			b = b+15;
		}
	}	
	if (b == 255)
	{	
		if( (r-15) <0 ){	
		}
		if( r ==0 ){
			g = g+15;
			
		}
		else{
		r = r - 15 ;
		}
		
	}
	if(g == 255){
		
		if(b == 0){
			r = r+15;
		}
		if((b-15) < 0 ){
		}
		else{	
		b = b-15;
		}
	}	
	
}	
setInterval(led_mau ,60 );

/*
function hienlen(){
	c.style.opacity = String(op);	
	if (op < 1){
		op = op + 0.025;
		setTimeout(hienlen , 250);
	}

} 
setTimeout(hienlen , 250);*/