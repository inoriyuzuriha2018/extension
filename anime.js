var so= 0;
trang_chu();
console.log("hello world");
function rest(){
	console.log("đã click vào đây");

}
function rut_gon(links1){
	return links1.slice(52 , links1.length);	
}
function trang_chu(){
fetch("http://tinanime.com/the-loai/tin-tuc-anime",{
 method: "GET",
 headers: {
				"Content-type": "Content-Type: text/html; charset=utf-8"	
		}        
}).then(function(e){
	console.log(e);
	return e.text();
}).then(function(a){
//	console.log(a); 
var data = $(a).find(".section")[0];

//var data = $(".section")[0];
$("body").append(data);
var links = $("body").find(".item-thumbnail a"),
	linkss = $("body").find(".item-title");
//	console.log( $("body").find(".fa.fa-youtube-play"));
	for(var i = 0 ; i < linkss.length; i++ ){
	//console.log(links[i].href);
	var tins = links[i].href;
	links[i].setAttribute("value",rut_gon(tins));
	links[i].removeAttribute("href");
	linkss[i].parentNode.removeAttribute("href");
	linkss[i].parentNode.setAttribute("value",rut_gon(tins))
}
});
}
function getVieo(ids){
	ids.forEach(function(id , index){
		fetch("http://tinanime.com/api/videos/"+id+"/false",{
			 method: "GET",
   			headers: {
				"Content-type": "application/json"
				}        
}).then(function(e){
	return e.text();
}).then(function(a){
	//console.log(a);
	var c = JSON.parse(a);
	//console.log(c);
	var Hd = c.sources.length;
	console.log(Hd);	
	var  URLvideo = [];
	var qualitys = [];
	for (var x = 0 ; x< Hd ; x++){
		URLvideo.push(c.sources[x].src);
		qualitys.push(c.sources[x].quality);
	};
	var NumberVideo = document.querySelectorAll(".player.note-video-clip");
	var NumberVideos = document.querySelectorAll(".player.note-video-clip").length;
	var watchVieo = document.createElement("video");
	NumberVideo[so].appendChild(watchVieo);
	for(var z = 0 ; z<Hd ; z++){
		var button1 = document.createElement("button");
		button1.value=	URLvideo[z] ;
		button1.innerText = qualitys[z];
		NumberVideo[so].appendChild(button1);

		};
		var button2= document.createElement("button");
		button2.innerText = "Play";
		button2.value = " Play";
		var att=document.createAttribute("data");
		att.value ="play";
		button2.setAttributeNode(att);
		NumberVideo[so].appendChild(button2);
	so++;
//	console.log(URLvideo);
//	console.log(qualitys);
	document.body.addEventListener("click" , function(e){
		var xemVideo = e.target.parentNode.firstChild.nextSibling;
		if(e.target.value == undefined){
			console.log("không phải");
		}else if(e.target.getAttribute("data")=="play"){
			xemVideo.play();
			e.target.innerText = "pasue";
			e.target.setAttribute("data","pasue");
		}else if(e.target.getAttribute("data")=="pasue"){
			xemVideo.pause();
			e.target.innerText = "play";
			e.target.setAttribute("data","play");
		}
		else{
		xemVideo.controls= true;	
		xemVideo.width = 500;
		xemVideo.src = e.target.value;
		}	
//		console.log(e.target.parentNode.firstChild.nextSibling);

			})
		})
	})
}


function get_tin(tin2){
	if(tin2 === null && tin2 === undefined){
		console.log("lỗi");
	}else{
	console.log(tin2);
	fetch("http://tinanime.com/"+ tin2,{
 			method: "GET",
   			headers: {
				"Content-type": "Content-Type: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
			}        
}).then(function(e){
	return e.text();
}).then(function(a){
	var data = $(a).find(".news-content")[0];
	console.log($("body").append(data));
	var	NumberVideo = document.querySelectorAll(".player.note-video-clip");
	var NumberVideos = document.querySelectorAll(".player.note-video-clip").length;
	if(NumberVideos === undefined){
		console.log("Không có video");
	
	}else{
	var IdVideo = [];//push
	for (var x = 0 ; x< NumberVideo.length; x++){
		//console.log(NumberVideo[x].getAttribute("id"));
		IdVideo.push(NumberVideo[x].getAttribute("id"));
		}
	getVieo(IdVideo);
	}
});
}
}

!function (){	
document.body.addEventListener("dblclick",function(e){
//    console.log(e.target);
    if(document.getElementsByClassName("section")[0] !== undefined){
  //console.log(e.target.nodeName);
    if(e.target.nodeName !=="BUTTON"){	
    var b = e.target; 
    console.log(b.getAttribute("value"));
    document.body.removeChild(document.getElementsByClassName("section")[0]);
   get_tin(b.getAttribute("value"))
    		}
	    }
	})


}()
!function(){
	var nghe = document.getElementById("rest");
	console.log(nghe);
nghe.addEventListener("click", function(){
	console.log("đã click");
if(document.body.lastChild.getAttribute("class")=="section" || document.body.lastChild.getAttribute("class")=="wrapper"){
				document.body.removeChild(document.body.lastChild);
				trang_chu();
			}
	})

}()






























var a = "https://mp3.zing.vn/xhr"+(document.getElementById("zplayerjs-wrapper").getAttribute("data-xml"));

fetch(a,{
	"method":"GET"
}).then((a)=>{
	console.log(a)
})


