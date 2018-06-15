//.replace(/\s/g,'')
//"EAAAAUaZA8jlABAKn9ZAO0ZCOwS0JWvw3vVki7RIHN4BRoqdflUwgiaBzg8ohYSJGuSlALUZBwvqtQanCc0GVjuNFsjdZCTj4Je1rMKnHwZAtZAUOJOrx0Re0YJRv0qNS252DQ6CP7B5zX4arlDhJE2VhE9a50HwWeMZD"
// 1635186650133848_1992113581107818/comments
// https://graph.facebook.com/1635186650133848_1992113581107818/comments?access_token=EAAAAUaZA8jlABAKn9ZAO0ZCOwS0JWvw3vVki7RIHN4BRoqdflUwgiaBzg8ohYSJGuSlALUZBwvqtQanCc0GVjuNFsjdZCTj4Je1rMKnHwZAtZAUOJOrx0Re0YJRv0qNS252DQ6CP7B5zX4arlDhJE2VhE9a50HwWeMZD
!function(chr){
var title = {
	title:"Bay ra khỏi đảo",
	contexts:["link"],
	onclick: kickmem
};
var title1 = {
	title:"kích hàng loạt",
	contexts:["link"],
	onclick: thamsat
};
var p  = {
	"DeepWebAndHorror":"1635186650133848",
	"UDG 2": "283525572138849"

};
var access = "EAAAAUaZA8jlABAMLNp87nO0RZCZCzbEdaS577hxwuTkF15j7WQOZCHhR4qrWnZC3inZCVpBwa6kzwUJom02LrlPZBi1jZASXqHpJQsuaZBBKeWL3PZAWxkccYP2joAhWHwt4RzeDAtNMTnmCQ0CV4qAQisLHb0agg7QukZD";
chr.contextMenus.create(title);
chr.contextMenus.create(title1);
function kickmem(info){
	 var links = JSON.parse(JSON.stringify(info));
	var urls = links.linkUrl;
	var idgr = "";
	for (var key in p) {
    if (p.hasOwnProperty(key)) {
     	if(urls.indexOf(key) >31|| urls.indexOf(p[key]) >31)
     	{
     		idgr = idgr + p[key];
     	}  
     }
	}	
	chr.tabs.query({active:true, currentWindow:true},function(tabs){
			chr.tabs.sendMessage(tabs[0].id,{inoshu:"flycolor",url: urls,idgr:idgr})
	});
};
function thamsat(info) {
	var links1 = JSON.parse(JSON.stringify(info));
	var idgr = "";
	for (var key in p) {
    if (p.hasOwnProperty(key)) {
     	if(links1.linkUrl.indexOf(key) >31|| links1.linkUrl.indexOf(p[key]) >31)
     	{
     		idgr = idgr + p[key];
     	}  
     }
	}	

	var urls1 = links1.linkUrl.slice(59,(58+17));
	fetch("https://graph.facebook.com/v3.0/1635186650133848_"+urls1+"/comments?access_token="+access+"&limit=10000").then(function(response){
		return response.text();
	}).then(function(response){
		var  mess = JSON.parse(response);
		console.log(mess);
		mess.data.map(function(current,index){
				var messe = (current.message === "." || current.message === "," || current.message ==="\\" || current.message.length === 1) ? true : false 
				if(messe === true){ var urls2 =  "https://www.facebook.com/"+current.from.id;
							//	console.log(urls2);
					chr.tabs.query({active:true, currentWindow:true},function(tabs){	
						chr.tabs.sendMessage(tabs[0].id,{inoshu:"flycolor",url: urls2 ,idgr:idgr })
					});
				};
			})

	});

};
var nhac = true;var myAudio = new Audio();       
	myAudio.src = "tin_nhan.mp3";
function parm(a){
	
//	console.log(a);
var query = a.split("&");
//console.log(query);
var thread =query[1].split('=');
//console.log(thread); 
 //var kiem_tra = /\[[0-9]{16}\]/igm;
 //var id = thread[0].match(kiem_tra);
	var id = true ,id_chat =["1565701733498203","1578413225581902","1311412618898540","1159610944089417","1695581537134772","1522953104447975","361071880735175","1363688050384520","2130602223632793","1371774676193359","1232499180154240","1433021776795214"] ;
	for (var i = 0; i <id_chat.length; i++ ){
		if(thread[0].indexOf(id_chat[i]) !== -1){
			id = false;			
		}		
	}	

 if(id === true){
//	 console.log("đúng");
	 if(nhac == true){
			myAudio.play();
			nhac = false;
			setTimeout(function(){
				
				nhac = false ; 
				
				
			},myAudio.duration);
			
		}
	}		
}

chr.webRequest.onBeforeRequest.addListener(function(e){
	if(e.url == "https://www.facebook.com/ajax/mercury/delivery_receipts.php?dpr=1")
	{
		parm(decodeURIComponent(String.fromCharCode.apply(null,new Uint8Array(e.requestBody.raw[0].bytes))));
		
		
		//console.log();
		//console.log(e.requestBody.raw[0].bytes);
	} 
} ,{urls:["*://*.facebook.com/*"],types:["xmlhttprequest"]},["blocking","requestBody"]);
}(chrome);
/*
chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab.url);
    });
  });
});
chrome.tabs.onCreated.addListener(function() {alert('hello new tab')});

/*
$("#show-alter #content-3 h3 span")[0].innerText;

$("#show-alter h2 span")[0].innerText;


*/