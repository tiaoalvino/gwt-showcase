$wnd.showcase.runAsyncCallback4("function anb(a,b,c){this.a=a;this.c=b;this.b=c}\nfunction i7(a){var b,c;b=oJ(a.a.td(Nyc),148);if(b==null){c=eJ(f2,uqc,1,['Cars','Sports','Vacation Spots']);a.a.vd(Nyc,c);return c}else{return b}}\nfunction h7(a){var b,c;b=oJ(a.a.td(Myc),148);if(b==null){c=eJ(f2,uqc,1,['compact','sedan','coupe','convertible','SUV','truck']);a.a.vd(Myc,c);return c}else{return b}}\nfunction j7(a){var b,c;b=oJ(a.a.td(Oyc),148);if(b==null){c=eJ(f2,uqc,1,[Fyc,Gyc,Hyc,Iyc,'Lacrosse','Polo',Jyc,'Softball',Kyc]);a.a.vd(Oyc,c);return c}else{return b}}\nfunction k7(a){var b,c;b=oJ(a.a.td(Pyc),148);if(b==null){c=eJ(f2,uqc,1,['Carribean','Grand Canyon','Paris','Italy','New York','Las Vegas']);a.a.vd(Pyc,c);return c}else{return b}}\nfunction Ymb(a,b,c){var d,e;Js(AZb(b));e=null;switch(c){case 0:e=h7(a.a);break;case 1:e=j7(a.a);break;case 2:e=k7(a.a);}for(d=0;d<e.length;d++){CZb(b,e[d])}}\nfunction Xmb(a){var b,c,d,e,f,g,i;d=new AYb;ls(d.e,_wc,20);b=new IZb(false);f=i7(a.a);for(e=0;e<f.length;e++){CZb(b,f[e])}EZb(b,'cwListBox-dropBox');c=new T7b;ls(c.e,_wc,4);Q7b(c,new $Tb('<b>Select a category:<\\/b>'));Q7b(c,b);xYb(d,c);g=new IZb(true);EZb(g,Qyc);(YLb(),g.gb).style[ptc]='11em';Ct(g.gb,10);i=new T7b;ls(i.e,_wc,4);Q7b(i,new $Tb('<b>Select all that apply:<\\/b>'));Q7b(i,g);xYb(d,i);vj(b,new anb(a,g,b),(Iy(),Iy(),Hy));Ymb(a,g,0);EZb(g,Qyc);return d}\nvar Qyc='cwListBox-multiBox',Myc='cwListBoxCars',Nyc='cwListBoxCategories',Oyc='cwListBoxSports',Pyc='cwListBoxVacations';k3(660,1,erc,anb);_.Ic=function bnb(a){Ymb(this.a,this.c,AZb(this.b).selectedIndex);EZb(this.c,Qyc)};k3(661,1,grc);_.sc=function fnb(){V5(this.b,Xmb(this.a))};var iT=tfc(Rxc,'CwListBox$1',660);Wrc(Zn)(4);\n//# sourceURL=showcase-4.js\n")