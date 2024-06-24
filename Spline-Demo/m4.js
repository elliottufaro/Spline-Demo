function _m(arg){if(typeof arg!='undefined')_mS[_to]=arg;return _mS[_to];}var M4=function(){this._mS=new Array();this._to=0;this._mS[0]=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];this._m=function(arg){if(typeof arg!='undefined')this._mS[this._to]=arg;return this._mS[this._to];};this.push=function(){this._mS[this._to+1]=this._mS[this._to++];};this.pop=function(){--this._to;};this.identity=function(){return this._m(this._id());};this.normalMatrix=function(m){var a=m[0]*m[0]+m[1]*m[1]+m[2]*m[2],b=m[4]*m[4]+m[5]*m[5]+m[6]*m[6],c=m[8]*m[8]+m[9]*m[9]+m[10]*m[10];return[m[0]/a,m[1]/a,m[2]/a,0,m[4]/b,m[5]/b,m[6]/b,0,m[8]/c,m[9]/c,m[10]/c,0,0,0,0,1];};this.transpose=function(m){return[m[0],m[4],m[8],m[12],m[1],m[5],m[9],m[13],m[2],m[6],m[10],m[14],m[3],m[7],m[11],m[15]];};this.translate=function(x,y,z){this._xf(this._tr(x,y,z));};this.rotateX=function(a){this._xf(this._rX(a));};this.rotateY=function(a){this._xf(this._rY(a));};this.rotateZ=function(a){this._xf(this._rZ(a));};this.scale=function(x,y,z){if(typeof y=='undefined')z=y=x;this._xf(this._sc(x,y,z));};this.perspective=function(x,y,z){this._xf(this._pe(x,y,z));};this.normalize=function(v){var x=v[0],y=v[1],z=v[2],r=Math.sqrt(x*x+y*y+z*z);v[0]/=r;v[1]/=r;v[2]/=r;};this._xf=function(m){this._m(this._mm(this._m(),m));};this._id=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];};this._tr=function(x,y,z){return[1,0,0,x,0,1,0,y,0,0,1,z,0,0,0,1];};this._rX=function(a){var c=Math.cos(a),s=Math.sin(a);return[1,0,0,0,0,c,s,0,0,-s,c,0,0,0,0,1];};this._rY=function(a){var c=Math.cos(a),s=Math.sin(a);return[c,0,-s,0,0,1,0,0,s,0,c,0,0,0,0,1];};this._rZ=function(a){var c=Math.cos(a),s=Math.sin(a);return[c,s,0,0,-s,c,0,0,0,0,1,0,0,0,0,1];};this._sc=function(x,y,z){return[x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1];};this._pe=function(x,y,z){var rr=x*x+y*y+z*z;return[1,0,0,0,0,1,0,0,0,0,1,0,x/rr,y/rr,z/rr,1];};this._d=function(a,b){if(b.length<4)b[3]=1.;return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3];};this._x=function(m){return[m[0],m[1],m[2],m[3]];};this._y=function(m){return[m[4],m[5],m[6],m[7]];};this._z=function(m){return[m[8],m[9],m[10],m[11]];};this._w=function(m){return[m[12],m[13],m[14],m[15]];};this._mm=function(a,b){var t=this.transpose(b);var x=this._x(a),y=this._y(a),z=this._z(a),w=this._w(a);var X=this._x(t),Y=this._y(t),Z=this._z(t),W=this._w(t);return[this._d(x,X),this._d(x,Y),this._d(x,Z),this._d(x,W),this._d(y,X),this._d(y,Y),this._d(y,Z),this._d(y,W),this._d(z,X),this._d(z,Y),this._d(z,Z),this._d(z,W),this._d(w,X),this._d(w,Y),this._d(w,Z),this._d(w,W)];};this._mv=function(m,v){var w=this._d(this._w(m),v);return[this._d(this._x(m),v)/w,this._d(this._y(m),v)/w,this._d(this._z(m),v)/w];};this.transform=function(v){return this._mv(this._m(),v);}};function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];};function lerp(t,a,b){return a+t*(b-a);};function standardView(x,y,theta,phi,s){m.translate(width()*x,height()*(1-y),0);m.perspective(0,0,-width()*2);m.rotateX(phi);m.rotateY(theta);s*=width()/3.5;m.scale(s,-s,s);};function vecAdd(a,b){return[a[0]+b[0],a[1]+b[1],a[2]+b[2]];};function vecScale(a,s){return[s*a[0],s*a[1],s*a[2]];};function vecLerp(t,a,b){return[lerp(t,a[0],b[0]),lerp(t,a[1],b[1]),lerp(t,a[2],b[2])];};function mLine(a,b){var A=m.transform(a);var B=m.transform(b);line(A[0],A[1],B[0],B[1]);};function mCurve(c){for(var n=1;n<c.length;n++){var A=m.transform(c[n-1]);var B=m.transform(c[n]);line(A[0],A[1],B[0],B[1]);}};function mArrow(a,b){var A=m.transform(a);var B=m.transform(b);arrow(A[0],A[1],B[0],B[1]);};function mText(str,p){var P=m.transform(p);text(str,P[0],P[1]);}


