var Photo,addListeners,canvas,ctx,grids,height,img,imgInfo,imgSrc,imgs,init,magnet,mouse,populateCanvas,render,resizeCanvas,rotateAndPaintImage,updateMouse,useGrid,width;document.body.onload=function(){setTimeout((function(){var e=document.getElementById("preload");e.classList.contains("done")||e.classList.add("done")}),1e3)},$(document).ready((function(){$(".head_burger").click((function(e){$(".head_burger, .head_menu").toggleClass("active")}))})),canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width=window.innerWidth,height=canvas.height=window.innerHeight,imgSrc=canvas.dataset.image,img=new Image,useGrid=!0,imgInfo={},imgs=[],grids=[],magnet=2e3,mouse={x:1,y:0},window.addEventListener("resize",(function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight,init()})),init=function(){return imgs=[],addListeners(),img.onload=function(e){var t;return imgInfo.width=e.path?e.path[0].width:e.target.width,imgInfo.height=e.path?e.path[0].height:e.target.height,t=Math.ceil(window.innerWidth/imgInfo.width)*Math.ceil(window.innerHeight/imgInfo.height),useGrid&&createGrid(),populateCanvas(14*t),canvas.classList.add("ready"),render()},img.src=imgSrc},addListeners=function(){return window.addEventListener("resize",resizeCanvas),window.addEventListener("mousemove",updateMouse),canvas.addEventListener("touchmove",updateMouse)},updateMouse=function(e){return mouse.x=e.clientX,mouse.y=e.clientY},resizeCanvas=function(){return width=canvas.width=window.innerWidth,height=canvas.height=window.innerHeight},populateCanvas=function(e){var t,n,i;for(t=0,i=[];t<=e;)n=new Photo,imgs.push(n),i.push(t++);return i},createGrid=function(){},Photo=function(){var e,t,n,i,a,r,d,o,s,h;d=17*Math.random()+12,o=imgInfo.width/d,r=imgInfo.height/d,s=window.innerWidth*Math.random(),t=s,h=window.innerHeight*Math.random(),n=h,i=0,a=0,e=Math.PI/180,this.update=function(){var e,r,d,o,g;o=s,g=h,r=mouse.x-o,d=mouse.y-g,e=Math.sqrt(r*r+d*d),s=o-r/e*magnet/e+(i=(i+(t-o)/2)/2.1),h=g-d/e*magnet/e+(a=(a+(n-g)/2)/2.2)},this.draw=function(){return rotateAndPaintImage(ctx,img,10*e,s,h,o/2,r/2,o,r)}},rotateAndPaintImage=function(e,t,n,i,a,r,d,o,s){return e.translate(i,a),e.rotate(n),e.drawImage(t,-r,-d,o,s),e.rotate(-n),e.translate(-i,-a)},render=function(){var e,t;for(e=0,t=0,ctx.clearRect(0,0,width,height);t<grids.length;)grids[t].draw(),t++;for(;e<imgs.length;)imgs[e].update(),imgs[e].draw(),e++;return requestAnimationFrame(render)},init();