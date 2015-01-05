// JavaScript Document
function hide(){
$.mobile.hidePageLoadingMsg();
}

function request(paras){ 
var url = location.href;  
var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
var paraObj = {}  
for (i=0; j=paraString[i]; i++){  
paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
}  
var returnValue = paraObj[paras.toLowerCase()];  
if(typeof(returnValue)=="undefined"){  
return "";  
}else{  
return returnValue;  
}  
}

$("#5gshoplist").bind("swipeleft", function() {  
   history.go(-1)
});  

function quote(string) {
	return '"' + string.replace(/(\\|\"|\n|\r|\t)/g, "\\$1") + '"';
}