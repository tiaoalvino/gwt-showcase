$wnd.showcase.runAsyncCallback21("function JDb(a){this.b=a}\nfunction MDb(a){this.b=a}\nfunction WBc(a){this.b=a}\nfunction xBc(a,b){return a.d.re(b)}\nfunction ABc(a,b){if(a.b){SBc(b);RBc(b)}}\nfunction aCc(a){this.d=a;this.c=a.b.c.b}\nfunction TBc(a){UBc.call(this,a,null,null)}\nfunction SBc(a){a.b.c=a.c;a.c.b=a.b;a.b=a.c=null}\nfunction RBc(a){var b;b=a.d.c.c;a.c=b;a.b=a.d.c;b.b=a.d.c.c=a}\nfunction UBc(a,b,c){this.d=a;NBc.call(this,b,c);this.b=this.c=null}\nfunction _Bc(a){if(a.c==a.d.b.c){throw new hCc}a.b=a.c;a.c=a.c.b;return a.b}\nfunction yBc(a,b){var c;c=dW(a.d.ue(b),156);if(c){ABc(a,c);return c.f}return null}\nfunction BBc(){eBc.call(this);this.c=new TBc(this);this.d=new eBc;this.c.c=this.c;this.c.b=this.c}\nfunction nkb(a){var b,c;b=dW(a.b.ue(SNc),148);if(b==null){c=VV(ufb,IDc,1,['Bonjour le monde',TNc,UNc]);a.b.we(SNc,c);return c}else{return b}}\nfunction zBc(a,b,c){var d,e,f;e=dW(a.d.ue(b),156);if(!e){d=new UBc(a,b,c);a.d.we(b,d);RBc(d);return null}else{f=e.f;MBc(e,c);ABc(a,e);return f}}\nfunction wDb(b){var c,d,e,f;e=Qac(b.e,Pac(b.e).selectedIndex);c=dW(yBc(b.g,e),119);try{f=Tsc(ps($i(b.f),gMc));d=Tsc(ps($i(b.d),gMc));U_b(b.b,c,d,f)}catch(a){a=Efb(a);if(fW(a,144)){return}else throw Dfb(a)}}\nfunction uDb(a){var b,c,d,e;d=new Y7b;a.f=new Jdc;oj(a.f,VNc);zdc(a.f,'100');a.d=new Jdc;oj(a.d,VNc);zdc(a.d,'60');a.e=new Wac;N7b(d,0,0,'<b>Points \\xE0 circuler:<\\/b>');Q7b(d,0,1,a.e);N7b(d,1,0,'<b>Bord du dessus:<\\/b>');Q7b(d,1,1,a.f);N7b(d,2,0,'<b>Bord gauche:<\\/b>');Q7b(d,2,1,a.d);for(c=hyc(HJ(a.g));c.b.Fe();){b=dW(nyc(c),1);Rac(a.e,b)}Hj(a.e,new JDb(a),(Ty(),Ty(),Sy));e=new MDb(a);Hj(a.f,e,(Gz(),Gz(),Fz));Hj(a.d,e,Fz);return d}\nfunction vDb(a){var b,c,d,e,f,g,i,j;a.g=new BBc;a.b=new W_b;kj(a.b,WNc,WNc);dj(a.b,XNc);j=nkb(a.c);i=new o5b('Hello World');P_b(a.b,i,10,20);zBc(a.g,j[0],i);c=new S0b('Cliquez-moi!');P_b(a.b,c,80,45);zBc(a.g,j[1],c);d=new y8b(2,3);Bs(d.p,SIc,fKc);for(e=0;e<3;e++){N7b(d,0,e,e+aGc);Q7b(d,1,e,new aYb((klb(),_kb)))}P_b(a.b,d,60,100);zBc(a.g,j[2],d);b=new z4b;gk(b,a.b);g=new z4b;gk(g,uDb(a));f=new P9b;As(f.f,sKc,10);M9b(f,g);M9b(f,b);return f}\nvar VNc='3em',SNc='cwAbsolutePanelWidgetNames';zgb(738,1,uEc);_.xc=function HDb(){djb(this.c,vDb(this.b))};zgb(739,1,sEc,JDb);_.Mc=function KDb(a){xDb(this.b)};zgb(740,1,cEc,MDb);_.Pc=function NDb(a){wDb(this.b)};zgb(1328,1326,fFc,BBc);_.Rh=function CBc(){this.d.Rh();this.c.c=this.c;this.c.b=this.c};_.re=function DBc(a){return xBc(this,a)};_.se=function EBc(a){var b;b=this.c.b;while(b!=this.c){if(ADc(b.f,a)){return true}b=b.b}return false};_.te=function FBc(){return new WBc(this)};_.ue=function GBc(a){return yBc(this,a)};_.we=function HBc(a,b){return zBc(this,a,b)};_.xe=function IBc(a){var b;b=dW(this.d.xe(a),156);if(b){SBc(b);return b.f}return null};_.ye=function JBc(){return this.d.ye()};_.b=false;zgb(1329,1330,{156:1,159:1},TBc,UBc);zgb(1331,367,hEc,WBc);_.Be=function XBc(a){var b,c,d;if(!fW(a,159)){return false}b=dW(a,159);c=b.Ie();if(xBc(this.b,c)){d=yBc(this.b,c);return ADc(b.Vc(),d)}return false};_.gc=function YBc(){return new aCc(this)};_.ye=function ZBc(){return this.b.d.ye()};zgb(1332,1,{},aCc);_.Fe=function bCc(){return this.c!=this.d.b.c};_.Ge=function cCc(){return _Bc(this)};_.He=function dCc(){if(!this.b){throw new Zsc('No current entry')}SBc(this.b);this.d.b.d.xe(this.b.e);this.b=null};var a5=Gsc(iLc,'CwAbsolutePanel$3',739),b5=Gsc(iLc,'CwAbsolutePanel$4',740),web=Gsc(vLc,'LinkedHashMap',1328),teb=Gsc(vLc,'LinkedHashMap$ChainEntry',1329),veb=Gsc(vLc,'LinkedHashMap$EntrySet',1331),ueb=Gsc(vLc,'LinkedHashMap$EntrySet$EntryIterator',1332);hFc(lo)(21);\n//# sourceURL=showcase-21.js\n")