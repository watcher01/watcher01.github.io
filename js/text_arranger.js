// JavaScript Document
window.addEventListener("load",onloaded,false);//畫面載入後主體函式呼叫
 var Debugger = function(){};//Debugger函式宣告
 /*Debugger.log=function(message)
 {
	try
	{
	  console.log(message);
	}catch(exception)
	{
		return;
	}
 };*/
 function onloaded()
 {
	 var pattern=new Image();
	 pattern.src="img/icon1.jpg";//預載圖片
	 canvasapp();
 }
 function cancassupport()//檢查是否支援canvas函式
 {
	 return Modernizr.canvas;
 }
 function canvasapp()
 {
	if(!cancassupport())
	 {
		 return;
	 }
	//初始值
	var message="your text!";//顯示文字
	var fontSize="50";//文字大小，需大寫
	var fontface="serif";//自型
	var textfillcolor="#ff0000";//文字填滿顏色
	var textalpha=0;//透明度
	var shadowx=1;//陰影X
	var shadowy=1;//陰影Y
	var shadowblur=1;//陰影模糊度
	var shadowcolor="#707070";//陰影顏色
	var textbaseline="middle";//文字對齊方式
	var textalign="center";//置中
	var fillorstroke="fill";//填滿或邊框
	var fontweight="normal";//文字粗細
	var fontstyle="normal";//文字字型
	var filltype="colorfill";//填滿效果
	var text2fillcolor="#000000";
	
	
	var jcanvas= document.getElementById("mycanvas");//取得canvas物件
	var jcontext=jcanvas.getContext("2d");//取得canvas內容
	
	var imgbutton=document.getElementById("createimgae");//取得按鈕
	imgbutton.addEventListener('click',createimgdate,false);//掛載監聽器
	
	var xposition=(jcanvas.width/2);
	var yposition=(jcanvas.height/2);
	
	var jtextbox=document.getElementById("textbox");//文字方塊
	jtextbox.addEventListener("keyup",textboxchange,false);
	
	var jfiilorsroke=document.getElementById("fillorstroke");//填滿OR邊框
	jfiilorsroke.addEventListener("change",fillorstrokechange,false);
	
	/*formelement=document.getElementById("textSize");//文字大小
	formelement.addEventListener("change",textsizechange,false);
	
	formelement=document.getElementById("textfillcolor");
	formelement.addEventListener("change",textfillcolorchange,false);
	
	formelement=document.getElementById("textfont");
	formelement.addEventListener("change",textfontchange,false);
	
	formelement=document.getElementById("textbaseline");
	formelement.addEventListener("change",textbaselinechange,false);
	
	formelement=document.getElementById("textalign");
	formelement.addEventListener("change",textalignchange,false);
	
	formelement=document.getElementById("fontweight");
	formelement.addEventListener("change",fontweightchange,false);
	
	//formelement=*/
	
	drawscreen();
	
	function drawscreen()
	{
		//背景
		jcontext.globalAlpha=1;
		jcontext.shadowColor=shadowcolor;
		jcontext.shadowOffsetX=0;
		jcontext.shadowOffsetY=0;
		jcontext.shadowBlur=0;
		jcontext.fillStyle="#ffffaa";
		jcontext.fillRect(0,0,jcanvas.width,jcanvas.height);
		
		//邊框		
		jcontext.strokeStyle="#000000";
		jcontext.strokeRect(5,5,jcanvas.width-10,jcanvas.height-10);
		
		//文字
		
		jcontext.fillStyle=textfillcolor;
		jcontext.fillText(message,xposition,yposition);
		jcontext.textBaseline=textbaseline;
		jcontext.textAlign=textalign;
		jcontext.font=fontweight+" "+fontstyle+" "+	fontSize+"px "+fontface;
		jcontext.shadowColor=shadowcolor;
		jcontext.shadowOffsetX=shadowx;
		jcontext.shadowOffsetY=shadowy;
		jcontext.shadowBlur=shadowblur;
		jcontext.globalAlpha=textalpha;
		
		
		
		
		
		/*var metrics=jcontext.measureText(message);
		var textWidth=metrics.width;*/
		
		var tempcolor;
		if(filltype="colorfill")
		{
			tempcolor=textfillcolor;
		}
		else if(filltype=="lineargradient")
		{
			var gradient=jcontent.createLinerGradient(xposition-textWidth/2,yposition,textWidth,yposition);
			gradient.addColorStop(0,textfillcolor);
			gradient.addColorStop(0.6,text2fillcolor);
			tempcolor=gradient;
		}
		else if(filltype=="radigradient")
		{
			var gradient=jcontent.createLinerGradient(xposition,yposition,fontSize,xposition+textWidth,yposition,1);
			gradient.addColorStop(0,textfillcolor);
			gradient.addColorStop(0.6,text2fillcolor);
			tempcoclor=gradient;
		}
		else if(filltype=="pattern")
		{
			tempcolor=jcontext.createPattern(pattern,"repeat");
		}
		else
		{
			tempcolor=textfillcolor;
		}
		switch(fillorstroke)
		{
			case "fill":
				jcontext.fillStyle=tempcolor;
				jcontext.fillText(message,xposition,yposition);
			break;
			case "stroke":
				jcontext.strokeStyle=tempcolor;
				jcontext.strokeText(message,xposition,yposition);
			break;
			case "both":
				jcontext.fillStyle=tempcolor;
				jcontext.fillText(message,xposition,yposition);
				jcontext.strokeStyle="#000000";
				jcontext.strokeText(message,xposition,yposition);
			break;
		}
	}
	function textboxchange(e)
	{
		var target=e.target;
		message=target.value;
		drawscreen();
	}
	
	function textbaselinechange(e)
	{
		var target=e.target;
		textbaseline=target.value;
		drawscreen();
	}
	
	function textalignchange(e)
	{
		var target=e.target;
		textalign=target.value;
		drawscreen();
	}
	
	function fillorstrokechange(e)
	{
		var target=e.target;
		fillorstroke=target.value;
		drawscreen();
	}
	
	function textsiezechange(e)
	{
		var target=e.target;
		fontSize=target.value;
		drawscreen();
	}
	
	function textfillcolorchange(e)
	{
		var target=e.target;
		textfillcolor="#"+target.value;
		drawscreen();
	}
	
	function textfontchange(e)
	{
		var target=e.target;
		fontface=target.value;
		drawscreen();
	}
	
	function fontweightchange(e)
	{
		var target=e.target;
		fontweight=target.value;
		drawscreen();
	}
	
	function fontstylechange(e)
	{
		var target=e.target;
		fontstyle=target.value;
		drawscreen();
	}
	
	function shadowxchange(e)
	{
		var target=e.target;
		shadowx=target.value;
		drawscreen();
	}
	
	function shadowychange(e)
	{
		var target=e.target;
		shadowy=target.value;
		drawscreen();
	}
	
	function shadowblurchange(e)
	{
		var target=e.target;
		shadowblur=target.value;
		drawscreen();
	}
	
	function shadowcolorchange(e)
	{
		var target=e.target;
		shadowcolor=target.value;
		drawscreen();
	}
	
	function textalphachange(e)
	{
		var target=e.target;
		textalpha=target.value;
		drawscreen();
	}
	
	function textfontcolor2change(e)
	{
		var target=e.target;
		text2fillcolor="#"+traget.value;
		drawscreen();
	}
	
	function filltypechange(e)
	{
		var target=e.target;
		filltype=target.value;
		drawscreen();
	}
	
	function canvaswidthchange(e)
	{
		var target=e.target;
		jcanvas.width=target.value;
		drawscreen();
	}
	
	function canvasheightchange(e)
	{
		var target=e.target;
		jcanvas.height=target.value;
		drawscreen();
	}
	
	function canvasstylesizechange(e)
	{
		var stylewidth=document.getElementById("canvasstylewidth");
		var styleheight=document.getElementById("canvasstyleheight");
		var stylevalue="width:"+stylewidth.value+"px; height:"+styleheight.value+"px;";
		jcanvas.setAttribute("style",stylevalue);
		drawscreen();
	}
	
	function createimgdate(e)
	{
		/*var imgdatadisplay=document.getElementById("imgdatadisplay");
		imgdatadisplay.value=jcanvas.toDataURL();*/
		window.open(jcanvas.toDataURL(),"canvasImage","left=0,top=0,width="+jcanvas.width+",height="+jcanvas.height+",toolbar=0,resizeble=0");
	}
	
	
 }