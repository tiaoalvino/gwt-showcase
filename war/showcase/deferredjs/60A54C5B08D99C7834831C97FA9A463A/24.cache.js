$wnd.showcase.runAsyncCallback24("function $Cb(a){this.a=a}\nfunction bDb(a){this.a=a}\nfunction eDb(a){this.a=a}\nfunction lDb(a,b){this.a=a;this.b=b}\nfunction Ks(a,b){a.remove(b)}\nfunction Jac(a,b){Bac(a,b);Ks((aZb(),a.gb),b)}\nfunction TYb(){var a;if(!QYb||VYb()){a=new YAc;UYb(a);QYb=a}return QYb}\nfunction VYb(){var a=$doc.cookie;if(a!=RYb){RYb=a;return true}else{return false}}\nfunction WYb(a){a=encodeURIComponent(a);$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction VCb(a,b){var c,d,e,f;Js(Eac(a.c));f=0;e=xJ(TYb());for(d=_xc(e);d.a.Be();){c=VV(fyc(d),1);Gac(a.c,c);Ctc(c,b)&&(f=Eac(a.c).options.length-1)}ep((Zo(),Yo),new lDb(a,f))}\nfunction WCb(a){var b,c,d,e;if(Eac(a.c).options.length<1){odc(a.a,TFc);odc(a.b,TFc);return}d=Eac(a.c).selectedIndex;b=Fac(a.c,d);c=(e=TYb(),VV(e.qe(b),1));odc(a.a,b);odc(a.b,c)}\nfunction UYb(b){var c=$doc.cookie;if(c&&c!=TFc){var d=c.split(nHc);for(var e=0;e<d.length;++e){var f,g;var i=d[e].indexOf(zHc);if(i==-1){f=d[e];g=TFc}else{f=d[e].substring(0,i);g=d[e].substring(i+1)}if(SYb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.se(f,g)}}}\nfunction UCb(a){var b,c,d;c=new m8b(3,3);a.c=new Lac;b=new G0b('Supprimer');oj((aZb(),b.gb),ZMc,true);B7b(c,0,0,'<b><b>Cookies existants:<\\/b><\\/b>');E7b(c,0,1,a.c);E7b(c,0,2,b);a.a=new ydc;B7b(c,1,0,'<b><b>Nom:<\\/b><\\/b>');E7b(c,1,1,a.a);a.b=new ydc;d=new G0b('Sauvegarder Cookie');oj(d.gb,ZMc,true);B7b(c,2,0,'<b><b>Valeur:<\\/b><\\/b>');E7b(c,2,1,a.b);E7b(c,2,2,d);vj(d,new $Cb(a),(Sy(),Sy(),Ry));vj(a.c,new bDb(a),(Iy(),Iy(),Hy));vj(b,new eDb(a),Ry);VCb(a,null);return c}\nogb(733,1,iEc,$Cb);_.Jc=function _Cb(a){var b,c,d;c=bs(Pi(this.a.a),YLc);d=bs(Pi(this.a.b),YLc);b=new lV(Mfb(Qfb((new jV).p.getTime()),rEc));if(c.length<1){TZb('Vous devez indiquer un nom de cookie');return}XYb(c,d,b);VCb(this.a,c)};ogb(734,1,jEc,bDb);_.Ic=function cDb(a){WCb(this.a)};ogb(735,1,iEc,eDb);_.Jc=function fDb(a){var b,c;c=Eac(this.a.c).selectedIndex;if(c>-1&&c<Eac(this.a.c).options.length){b=Fac(this.a.c,c);WYb(b);Jac(this.a.c,c);WCb(this.a)}};ogb(736,1,lEc);_.sc=function jDb(){Zib(this.b,UCb(this.a))};ogb(737,1,{},lDb);_.uc=function mDb(){this.b<Eac(this.a.c).options.length&&Kac(this.a.c,this.b);WCb(this.a)};_.b=0;var QYb=null,RYb,SYb=true;var K4=ysc(dLc,'CwCookies$1',733),L4=ysc(dLc,'CwCookies$2',734),M4=ysc(dLc,'CwCookies$3',735),O4=ysc(dLc,'CwCookies$5',737);$Ec(Zn)(24);\n//# sourceURL=showcase-24.js\n")