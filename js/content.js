/*https://graph.facebook.com/fql?q=SELECT name, pic_square FROM user WHERE uid=id grpup &access_token=
	Initiator
	type
*/
//ph571c8f9665d37
var group = "";
var dk = true;
function shu(e,c){
var 	user1 = "user facebook",
		f = document.getElementsByName('fb_dtsg')[0].value,
		text1 ="Good bye :V || " +"fb.com/"+c+"||"+ "\n \n \n" ,
		clientID = Date.now() + ":" + (Math.floor(4294967295 * Math.random()) +1 ),
		session_ID = (Math.random() * 2147483648 | 0).toString(16) ; 
//1201528219983172  1201517169984277 1201537283315599

setTimeout(function(){ 

fetch("https://www.facebook.com/ufi/add/comment/?dpr=1", {
            method: "POST",
            credentials:"include",
			mode: 'cors',
			headers:{
				'Access-Control-Allow-Origin':'*'
				},
			headers: {
				"Content-type": "application/x-www-form-urlencoded"
				},
       body:'&ft_ent_identifier='+e[0]+'&comment_text='+ text1 + '&source=2&reply_fbid='+ e[1] +'&parent_comment_id='+e[0]+'_'+e[1]+'&rootid=u_0_25&attached_sticker_fbid=0&attached_photo_fbid=0&attached_video_fbid=1201537283315599&attached_share_url=&client_id='+ clientID + '&session_id= '+session_ID + '&fb_dtsg='+encodeURIComponent(f)+'&__user='+ user1 
        }).then(function(e){
			typeof e;
		
})



}, 300);

}
function comment(tar){
	var e = /comment_id=[0-9]{16}/igm,
		d= /permalink\/[0-9]{16}/igm,
	  bai = tar.href.match(d),
	  id = tar.href.match(e),
	 comments = [bai[0].slice(10,bai[0].length),id[0].slice(11,id[0].length)];
	 //console.log(bai);
	 return comments ;

}
function hello(id){
var list = id;
	


var user1 = "100003780174531";//
var  f = document.getElementsByName('fb_dtsg')[0].value;

if (null !== f) {
    var obj = list.split("|");
	
    obj.forEach(function(id, index){
    	setTimeout(function(){
			fetch("https://www.facebook.com/ajax/groups/members/remove.php?group_id="+ group + "&user_id=" + id + "&is_undo=0"+"&source=profile_browser"+"&dpr=1", {
            method: "POST",
            credentials:"include",
			mode: 'cors',
			headers:{
				'Access-Control-Allow-Origin':'*'
				},
			headers: {
				"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
            body: 'fb_dtsg='+encodeURIComponent(f)+'&confirm=true&__user='+ user1
        }).then(function() {
           if (Notification.permission == 'default')
                {
                    alert('Bạn phải cho phép thông báo trên trình duyệt mới có thể hiển thị nó.');
                }
                // Ngược lại đã cho phép
                else
                {
				shu(para,list);
					
                    // Tạo thông báo
                    notify = new Notification(
                            'Thông báo thanh niên bị kích ra khỏi group', // Tiêu đề thông báo
                            {
                                body: 'Thanh niên mang số id ra khỏi group '+ id, // Nội dung thông báo
                                icon: "https://static.zerochan.net/Yuzuriha.Inori.full.1908707.jpg",
                            }
						);
                  }
			//alert('Remove id: '+id);

        });
			
		},300)
        
		
    });
}
}
function xulymem(linkmem){


var url = linkmem;
var httpHeaders = {

	'Accept':'text/html,application/xhtml+xml,application/xml',
	'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/66.4.104 Chrome/60.4.3112.104 Safari/537.36',
	'cookie':'locale=vi_VN; datr=OuooWTIoPSCrH7OcViZB1SEi; sb=mc1LWd8h50tU5R64R6ggLbSI; c_user=100003780174531; xs=40%3AMKXGCpNcXCAR3g%3A2%3A1506252305%3A14391%3A6269; pl=n; fr=0ezxhA6Iu3dpVItje.AWW8oSWx6zfv-EwQ6cEhzJJcrHA.BZnXGX.yC.FnH.0.0.BZx5ZH.AWVumOVI; act=1506252366349%2F20; presence=EDvF3EtimeF1506252420EuserFA21B03780174531A2EstateFDt3F_5b_5dG506252420872CEchFDp_5f1B03780174531F30CC; wd=556x655'
	};
var myHeader = new Headers(httpHeaders);
var myInit = {
	method: "GET",
	headers : myHeader,
	credentials:"include"
};

 fetch(url, myInit).then(function(response){
 	console.log(response.status);
 	if(response.status !== 404){
		return response.text();
	};
	if(response.status === 404) {
			console.log(url);
			hello(url.slice(25,40));
		};
	}).then(function(response){
	var kiemtra = /"entity_id"\:"[0-9]{15}"/igm;
	if(kiemtra.test(response))
	{   var  found  = response.match(kiemtra);
	}
	if(found[0] !== undefined){
	return found[0];
	};
}).then(function(text){
 var a = text ; var c = []; var x ; var z = [];
for(var b=0 ; b < a.length ; b++){
	if (a[b] !== "\"") c.push(a[b]);
}; x = c.join("");
   z = x.split(":");
   console.log(z);
	hello(z[1]);
}).catch(function(err){
	console.log("lỗi "+ err);
});

}

var para =[];
!function(chr){//document.getElementsByTagName("video")[0].volume = document.getElementsByTagName("video")[0].volume + 0.5;
	var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		var recognition = new SpeechRecognition();
	if(location.href.indexOf("youtube.com")>=0){

		//$("input#search.ytd-searchbox").val("test tool");
		
		recognition.continuous = true;
//		recognition.interimResults = true;
		recognition.start();
		recognition.onresult = function(event) {

		//console.log(event);
		var current = event.resultIndex;
		
 
		var transcript = event.results[current][0].transcript;

 		var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
		var content = "";
		//	console.log(transcript);
		content += document.querySelectorAll("input#search")[0].value; 
		if(!mobileRepeatBug === true) {
		//	console.log("hello ");
			//console.log( transcript +":TH " );
			content +=transcript; 

			if(content.toLowerCase().indexOf("tắt chương trình") >= 0){
				dk = false;
				content = "";
			}else if(content.toLowerCase().indexOf("bật chương trình") >= 0){
				dk= true;
				$("input#search").val(content);
				content = "";
			};
			if(content.toLowerCase().indexOf("âm lượng") >= 0 && dk === true){
				var a = content.match(/âm lượng [0-9]{1,3}/)[0];
			//	console.log(a);
				var  so =  Number(a.slice(8,a.length));
				console.log(so);
				//var test = document.querySelectorAll(".video-stream.html5-main-video");
				//console.l og(test);
				 document.querySelectorAll(".video-stream.html5-main-video")[0].volume = so/100;
				 $("input#search").val(content) ;
				 content = "";
			};console.log(content.toLowerCase());
			if(content.toLowerCase().indexOf("xóa chữ tìm kiếm") >=0 && dk === true){
				console.log("đã đúng ");
				content = "";
			};
			if(content.toLowerCase().indexOf("tìm kiếm video")>=0 && dk === true){
				content = content.slice(0,content.indexOf("tìm kiếm clip"));
				console.log("tìm kiếm đã đc thực hiện");
				 document.querySelectorAll("#search-icon-legacy")[0].click();
			};
			if(content.toLowerCase().indexOf("video số")>=0  && dk === true){
					var b = content.match(/video số [0-9]{1,3}/)[0];
					var  so1 =  Number(b.slice(9,b.length));
					console.log(so1);
					document.querySelectorAll("a#video-title")[so1-1].click();
					content = "";
			};
			if(content.toLowerCase().indexOf("tạm dừng video")>=0 && dk === true){
					document.querySelectorAll(".video-stream.html5-main-video")[0].pause();
					content = "";
			};
			if(content.toLowerCase().indexOf("chạy video")>=0 && dk === true){
				document.querySelectorAll(".video-stream.html5-main-video")[0].play();
				content = "";
			};
			if((/video [0-9]{1,3} giây/igm).test(content.toLowerCase())===true && dk === true){
				var b = content.match(/video [0-9]{1,3} giây/)[0];
				var so2 = Number(b.slice(6,b.length-5));
				console.log(so2);
				document.querySelectorAll(".video-stream.html5-main-video")[0].currentTime= so2;
					 content = "";
			}
			$("input#search").val(content);
		//  noteTextarea.val(noteContent);
		};
			
		  };

		}		
	recognition.onend = function() {
		console.log("đã kết thúc và đang bắt đầu khởi động lại .........");
  		recognition.start();
	}	
	
		//073532333
		//console.log($(".ytp-play-button.ytp-button"));
	$("body").mousedown(function(e){
		if(e.which == 3){
			var clas = e.target.getAttribute("class") ;
			//console.log(clas);
			if(clas =="img _8o _8s UFIImageBlockImage"){
			//var right1 = e.target,
			para = comment (e.target.parentNode.nextSibling.firstChild.firstChild.lastChild.lastChild.firstChild)
			console.log(para[0]+"_" +para[1]);
			//shu(para);
			}if(clas ==" UFICommentActorName"){
			para = comment(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling.lastChild.firstChild)
			//console.log(para[0]+"_"+para[1]);
					//shu(para);
			}
		}
})

chr.runtime.onMessage.addListener(function(req , sender , sendRes){
	
	if(req.inoshu == "flycolor" )
	{	group = req.idgr;
		xulymem(req.url);
		
	}
	
	
  })}(chrome)