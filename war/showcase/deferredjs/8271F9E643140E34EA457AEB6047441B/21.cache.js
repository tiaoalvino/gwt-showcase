$wnd.showcase.runAsyncCallback21("function tDb(a){this.a=a}\nfunction wDb(a){this.a=a}\nfunction wBc(a){this.a=a}\nfunction CBc(a){this.c=a;this.b=a.a.b.a}\nfunction tBc(a){uBc.call(this,a,null,null)}\nfunction ZAc(a,b){return a.c.ne(b)}\nfunction aBc(a,b){if(a.a){sBc(b);rBc(b)}}\nfunction sBc(a){a.a.b=a.b;a.b.a=a.a;a.a=a.b=null}\nfunction rBc(a){var b;b=a.c.b.b;a.b=b;a.a=a.c.b;b.a=a.c.b.b=a}\nfunction BBc(a){if(a.b==a.c.a.b){throw new JBc}a.a=a.b;a.b=a.b.a;return a.a}\nfunction $Ac(a,b){var c;c=LV(a.c.qe(b),157);if(c){aBc(a,c);return c.e}return null}\nfunction uBc(a,b,c){this.c=a;nBc.call(this,b,c);this.a=this.b=null}\nfunction bBc(){GAc.call(this);this.b=new tBc(this);this.c=new GAc;this.b.b=this.b;this.b.a=this.b}\nfunction Zjb(a){var b,c;b=LV(a.a.qe(lNc),149);if(b==null){c=BV(_eb,hDc,1,['Bonjour le monde',mNc,nNc]);a.a.se(lNc,c);return c}else{return b}}\nfunction _Ac(a,b,c){var d,e,f;e=LV(a.c.qe(b),157);if(!e){d=new uBc(a,b,c);a.c.se(b,d);rBc(d);return null}else{f=e.e;mBc(e,c);aBc(a,e);return f}}\nfunction gDb(b){var c,d,e,f;e=wac(b.d,vac(b.d).selectedIndex);c=LV($Ac(b.f,e),120);try{f=tsc(cs(Pi(b.e),CLc));d=tsc(cs(Pi(b.c),CLc));A_b(b.a,c,d,f)}catch(a){a=jfb(a);if(NV(a,145)){return}else throw ifb(a)}}\nfunction eDb(a){var b,c,d,e;d=new E7b;a.e=new pdc;dj(a.e,oNc);fdc(a.e,'100');a.c=new pdc;dj(a.c,oNc);fdc(a.c,'60');a.d=new Cac;t7b(d,0,0,'<b>Points \\xE0 circuler:<\\/b>');w7b(d,0,1,a.d);t7b(d,1,0,'<b>Bord du dessus:<\\/b>');w7b(d,1,1,a.e);t7b(d,2,0,'<b>Bord gauche:<\\/b>');w7b(d,2,1,a.c);for(c=Jxc(nJ(a.f));c.a.Be();){b=LV(Pxc(c),1);xac(a.d,b)}wj(a.d,new tDb(a),(zy(),zy(),yy));e=new wDb(a);wj(a.e,e,(mz(),mz(),lz));wj(a.c,e,lz);return d}\nfunction fDb(a){var b,c,d,e,f,g,i,j;a.f=new bBc;a.a=new C_b;_i(a.a,pNc,pNc);Ui(a.a,qNc);j=Zjb(a.b);i=new W4b('Hello World');v_b(a.a,i,10,20);_Ac(a.f,j[0],i);c=new y0b('Cliquez-moi!');v_b(a.a,c,80,45);_Ac(a.f,j[1],c);d=new e8b(2,3);os(d.o,rIc,CJc);for(e=0;e<3;e++){t7b(d,0,e,e+BFc);w7b(d,1,e,new OXb((Wkb(),Lkb)))}v_b(a.a,d,60,100);_Ac(a.f,j[2],d);b=new f4b;Xj(b,a.a);g=new f4b;Xj(g,eDb(a));f=new v9b;ns(f.e,OJc,10);s9b(f,g);s9b(f,b);return f}\nvar oNc='3em',lNc='cwAbsolutePanelWidgetNames';egb(740,1,VDc);_.sc=function rDb(){Pib(this.b,fDb(this.a))};egb(741,1,TDc,tDb);_.Ic=function uDb(a){hDb(this.a)};egb(742,1,DDc,wDb);_.Lc=function xDb(a){gDb(this.a)};egb(1331,1329,GEc,bBc);_.Nh=function cBc(){this.c.Nh();this.b.b=this.b;this.b.a=this.b};_.ne=function dBc(a){return ZAc(this,a)};_.oe=function eBc(a){var b;b=this.b.a;while(b!=this.b){if(aDc(b.e,a)){return true}b=b.a}return false};_.pe=function fBc(){return new wBc(this)};_.qe=function gBc(a){return $Ac(this,a)};_.se=function hBc(a,b){return _Ac(this,a,b)};_.te=function iBc(a){var b;b=LV(this.c.te(a),157);if(b){sBc(b);return b.e}return null};_.ue=function jBc(){return this.c.ue()};_.a=false;egb(1332,1333,{157:1,160:1},tBc,uBc);egb(1334,368,IDc,wBc);_.xe=function xBc(a){var b,c,d;if(!NV(a,160)){return false}b=LV(a,160);c=b.Ee();if(ZAc(this.a,c)){d=$Ac(this.a,c);return aDc(b.Rc(),d)}return false};_.bc=function yBc(){return new CBc(this)};_.ue=function zBc(){return this.a.c.ue()};egb(1335,1,{},CBc);_.Be=function DBc(){return this.b!=this.c.a.b};_.Ce=function EBc(){return BBc(this)};_.De=function FBc(){if(!this.a){throw new zsc('No current entry')}sBc(this.a);this.c.a.c.te(this.a.d);this.a=null};var H4=gsc(EKc,'CwAbsolutePanel$3',741),I4=gsc(EKc,'CwAbsolutePanel$4',742),beb=gsc(RKc,'LinkedHashMap',1331),$db=gsc(RKc,'LinkedHashMap$ChainEntry',1332),aeb=gsc(RKc,'LinkedHashMap$EntrySet',1334),_db=gsc(RKc,'LinkedHashMap$EntrySet$EntryIterator',1335);IEc($n)(21);\n//# sourceURL=showcase-21.js\n")
