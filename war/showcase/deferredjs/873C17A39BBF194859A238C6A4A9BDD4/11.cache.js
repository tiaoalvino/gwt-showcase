$wnd.showcase.runAsyncCallback11("function bWb(){}\nfunction fWb(){}\nfunction WVb(a,b){a.b=b}\nfunction XVb(a){if(a==MVb){return true}FF();return a==PVb}\nfunction YVb(a){if(a==LVb){return true}FF();return a==KVb}\nfunction dWb(a){this.b=(ZXb(),UXb).a;this.d=(eYb(),dYb).a;this.a=a}\nfunction UVb(a,b){var c;c=uJ(a.eb,96);c.b=b.a;!!c.c&&QPb(c.c,b)}\nfunction VVb(a,b){var c;c=uJ(a.eb,96);c.d=b.a;!!c.c&&SPb(c.c,b)}\nfunction QVb(){QVb=yqc;JVb=new bWb;MVb=new bWb;LVb=new bWb;KVb=new bWb;NVb=new bWb;OVb=new bWb;PVb=new bWb}\nfunction ZVb(){QVb();UPb.call(this);this.b=(ZXb(),UXb);this.c=(eYb(),dYb);ls((gMb(),this.e),ixc,0);ls(this.e,jxc,0)}\nfunction RVb(a,b,c){var d;if(c==JVb){if(b==a.a){return}else if(a.a){throw new Tfc('Only one CENTER widget may be added')}}Cj(b);f8b(a.j,b);c==JVb&&(a.a=b);d=new dWb(c);b.eb=d;UVb(b,a.b);VVb(b,a.c);TVb(a);Ej(b,a)}\nfunction SVb(a,b){var c,d,e,f,g,i,j;E7b((gMb(),a.gb),Zsc,b);i=new boc;j=new q8b(a.j);while(j.b<j.c.c){c=o8b(j);g=uJ(c.eb,96).a;e=uJ(i.od(g),143);d=!e?1:e.a;f=g==NVb?'north'+d:g==OVb?'south'+d:g==PVb?'west'+d:g==KVb?'east'+d:g==MVb?'linestart'+d:g==LVb?'lineend'+d:bxc;E7b(Fs(c.gb),b,f);i.qd(g,hgc(d+1))}}\nfunction TVb(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;b=(gMb(),a.d);while(b.children.length>0){Vr(b,b.children[0])}r=1;e=1;for(i=new q8b(a.j);i.b<i.c.c;){d=o8b(i);f=uJ(d.eb,96).a;f==NVb||f==OVb?++r:(f==KVb||f==PVb||f==MVb||f==LVb)&&++e}s=jJ(f2,Dqc,97,r,0);for(g=0;g<r;++g){s[g]=new fWb;s[g].b=Os($doc,gxc);hMb(b,s[g].b)}n=0;o=e-1;p=0;t=r-1;c=null;for(j=new q8b(a.j);j.b<j.c.c;){d=o8b(j);k=uJ(d.eb,96);u=Os($doc,hxc);k.c=u;ms(k.c,Vwc,k.b);Et(k.c.style,Wwc,k.d);ms(k.c,ztc,Zsc);ms(k.c,ytc,Zsc);if(k.a==NVb){kMb(s[p].b,u,s[p].a);hMb(u,d.gb);ls(u,$yc,o-n+1);++p}else if(k.a==OVb){kMb(s[t].b,u,s[t].a);hMb(u,d.gb);ls(u,$yc,o-n+1);--t}else if(k.a==JVb){c=u}else if(XVb(k.a)){q=s[p];kMb(q.b,u,q.a++);hMb(u,d.gb);ls(u,Xzc,t-p+1);++n}else if(YVb(k.a)){q=s[p];kMb(q.b,u,q.a);hMb(u,d.gb);ls(u,Xzc,t-p+1);--o}}if(a.a){q=s[p];kMb(q.b,c,q.a);hMb(c,Pi(a.a))}}\nv3(726,1,qrc);_.sc=function hrb(){var a,b,c;e6(this.a,(a=new ZVb,is((gMb(),a.gb),'cw-DockPanel'),ls(a.e,ixc,4),WVb(a,(ZXb(),TXb)),RVb(a,new iUb(Pzc),(QVb(),NVb)),RVb(a,new iUb(Qzc),OVb),RVb(a,new iUb(Rzc),KVb),RVb(a,new iUb(Szc),PVb),RVb(a,new iUb(Tzc),NVb),RVb(a,new iUb(Uzc),OVb),b=new iUb('\\u8FD9\\u4E2A\\u793A\\u4F8B\\u4E2D\\u5728<code>DockPanel<\\/code> \\u7684\\u4E2D\\u95F4\\u4F4D\\u7F6E\\u6709\\u4E00\\u4E2A<code>ScrollPanel<\\/code>\\u3002\\u5982\\u679C\\u5728\\u4E2D\\u95F4\\u653E\\u5165\\u5F88\\u591A\\u5185\\u5BB9\\uFF0C\\u5B83\\u5C31\\u4F1A\\u53D8\\u6210\\u9875\\u9762\\u5185\\u7684\\u53EF\\u6EDA\\u52A8\\u533A\\u57DF\\uFF0C\\u65E0\\u9700\\u4F7F\\u7528IFRAME\\u3002<br><br>\\u6B64\\u5904\\u4F7F\\u7528\\u4E86\\u76F8\\u5F53\\u591A\\u65E0\\u610F\\u4E49\\u7684\\u6587\\u5B57\\uFF0C\\u4E3B\\u8981\\u662F\\u4E3A\\u4E86\\u53EF\\u4EE5\\u6EDA\\u52A8\\u81F3\\u53EF\\u89C6\\u533A\\u57DF\\u7684\\u5E95\\u90E8\\u3002\\u5426\\u5219\\uFF0C\\u60A8\\u6050\\u6015\\u4E0D\\u5F97\\u4E0D\\u628A\\u5B83\\u7F29\\u5230\\u5F88\\u5C0F\\u624D\\u80FD\\u770B\\u5230\\u90A3\\u5C0F\\u5DE7\\u7684\\u6EDA\\u52A8\\u6761\\u3002'),c=new bRb(b),c.gb.style[ztc]=Vzc,c.gb.style[ytc]=Wzc,RVb(a,c,JVb),SVb(a,'cwDockPanel'),a))};v3(1030,986,Hqc,ZVb);_.Hb=function $Vb(a){SVb(this,a)};_.$b=function _Vb(a){var b;b=EOb(this,a);if(b){a==this.a&&(this.a=null);TVb(this)}return b};var JVb,KVb,LVb,MVb,NVb,OVb,PVb;v3(1031,1,{},bWb);v3(1032,1,{96:1},dWb);v3(1033,1,{97:1},fWb);_.a=0;var yY=Dfc(Yxc,'DockPanel',1030),xY=Dfc(Yxc,'DockPanel$TmpRow',1033),f2=Cfc(dyc,'DockPanel$TmpRow;',1365,xY),vY=Dfc(Yxc,'DockPanel$DockLayoutConstant',1031),wY=Dfc(Yxc,'DockPanel$LayoutData',1032);esc(Zn)(11);\n//# sourceURL=showcase-11.js\n")
