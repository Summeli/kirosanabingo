(this.webpackJsonpkirosanabingo=this.webpackJsonpkirosanabingo||[]).push([[0],{18:function(A,e,t){},19:function(A,e,t){},25:function(A,e,t){"use strict";t.r(e);var a=t(8),n=t.n(a),i=t(12),c=t.n(i),s=(t(18),t(7)),r=(t(19),t(6)),o=function(A){return Object(r.jsxs)("button",{onClick:A.onClick,id:"".concat(A.id),className:"".concat(A.isClicked?"pressedGameButton":""," gameButton"),children:[Object(r.jsx)("div",{children:Object(r.jsx)("span",{className:"gameButtonText",children:A.text})}),Object(r.jsx)("span",{className:"gameButtonX",children:"X"})]})};var l=function(A){for(var e=["helkatti","helkkari","helkutti","helskutti","helvetti","hemmetti","hiisi","hiivatti","hitsi","hitto","jeesus","jeeveli","jessus","jukolauta","jukoliste","jukra","jukranpujut","juku","jumalauta","juukeli","juutas","j\xf6sses","kehno","kehveli","kirottu","lempo","pahus","pakana","pannahinen","paska","peeveli","peijakas","pentele","perhana","perkele","perkule","permanto","perse","pirskatti","piru","pirulauta","raato","riivattu","ry\xf6k\xe4le","r\xe4k\xe4","saakeli","saakuri","saamari","saasta","saatana","samperi","sy\xf6t\xe4v\xe4","turkanen","t\xe4ytinen","vitjat","vitsi","vittu"],t=e,n=new Array(9),i=0;i<9;i++){var c=Math.floor(Math.random()*Math.floor(t.length));n[i]=t[c],t.splice(c,1)}var l=Object(a.useState)(n),u=Object(s.a)(l,2),j=u[0],m=u[1],d=Object(a.useState)(new Array(9)),b=Object(s.a)(d,2),p=b[0],h=b[1],k=function(e){return Object(r.jsx)(o,{text:j[e],isClicked:p[e],id:e,onClick:function(){return function(e){var t,a=p.slice();a[e]=!a[e],A.setBingo(!!((t=a)[0]&&t[1]&&t[2])||!!(t[3]&&t[4]&&t[5])||!!(t[6]&&t[7]&&t[8])||!!(t[0]&&t[3]&&t[6])||!!(t[1]&&t[4]&&t[7])||!!(t[2]&&t[5]&&t[8])||!!(t[0]&&t[4]&&t[8])||!!(t[2]&&t[4]&&t[6])),h(a)}(e)}},e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"gameboard",children:[0,1,2,3,4,5,6,7,8].map((function(A){return k(A)}))}),Object(r.jsx)("p",{children:Object(r.jsx)("br",{})}),Object(r.jsx)("div",{className:"extrabuttoncontainer",children:Object(r.jsx)("button",{onClick:function(t){for(var a=e,n=new Array(9),i=0;i<9;i++){var c=Math.floor(Math.random()*Math.floor(a.length));n[i]=a[c],a.splice(c,1)}m(n),h(new Array(9).fill(!1)),A.setBingo(!1)},className:"newBingoSheetButton",children:"uusi kuponki"})})]})},u=t.p+"static/media/slogan.b8e4e56d.png",j=function(){return Object(r.jsx)("div",{className:"cloudamite-slogan-top",children:Object(r.jsx)("div",{className:"cloudamite-slogan",children:Object(r.jsx)("a",{href:"https://cloudamite.com",children:Object(r.jsx)("img",{src:u,alt:"blow your mind"})})})})},m=t(0),d=t(1),b=t(4),p=t(3),h=t.p+"static/media/clouda-logo-left.db3a6646.png",k=function(A){Object(b.a)(t,A);var e=Object(p.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"cloudamite-logo-footer",children:[Object(r.jsx)("div",{className:"logo-footer-left",children:Object(r.jsx)("a",{href:"https://cloudamite.com",children:Object(r.jsx)("img",{src:h,alt:"Logol"})})}),Object(r.jsx)("div",{className:"logo-footer-right",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAyCAYAAADP7vEwAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TxQ8qghYRccjQOlkQFXGUKhbBQmkrtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9SaBHjwXE/3t173L0DhHqZqWbHBKBqlpGMRcVMdlXsekUPhjCAMMISM/V4ajENz/F1Dx9f7yI8y/vcn6NPyZkM8InEc0w3LOIN4plNS+e8TxxkRUkhPiceN+iCxI9cl11+41xwWOCZQSOdnCcOEouFNpbbmBUNlXiaOKSoGuULGZcVzluc1XKVNe/JXxjIaSsprtMcRQxLiCMBETKqKKEMCxFaNVJMJGk/6uEfcfwJcsnkKoGRYwEVqJAcP/gf/O7WzE9NukmBKND5YtsfYaBrF2jUbPv72LYbJ4D/GbjSWv5KHZj9JL3W0kJHQP82cHHd0uQ94HIHGH7SJUNyJD9NIZ8H3s/om7LA4C3Qu+b21tzH6QOQpq6Wb4CDQ2CsQNnrHu/ubu/t3zPN/n4AwCRyxkvDvP0AAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACDMAAAgzAaEcGUgAAAAHdElNRQflCRYTEBss+Iw3AAABcklEQVR42u3cwQ2CQBRF0SfSg5ZBCVq5VdgDTZC40eDChQvIMPnnFHAD84fFJGQSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP53Wp6XW5JrknnjtqampqampqampqZmn83p3ZuL9Oyf4zdLvPeY5JFkSXLe+ME0NTU1NTU1NTU1NfttVmP/mE/z5vAV2WMBNTU1NTU1NTU1NTX7bFY8oGuaT9Pm4DsEAACA9j4H9D1+Z9DU1NTU1NTU1NTU7LdZjf1jPs2bY5J7XF6gqampqampqampqblySZzm0ZqV1xIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAn15I9cE5QUaWUAAAAABJRU5ErkJggg==",alt:"Logol"})})]})}}]),t}(n.a.Component),g=k,v=t(13),x=t.n(v),O=function(){var A=Object(a.useState)(!1),e=Object(s.a)(A,2),t=e[0],n=e[1];return Object(r.jsxs)("div",{className:"kirosanabingo",children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{className:"gamecontainer",children:Object(r.jsx)(l,{setBingo:function(A){n(A)}})}),Object(r.jsx)(g,{}),t?Object(r.jsx)(x.a,{options:{emitters:{},particles:{number:{value:200},color:{value:["#FF5A86","#953AFE","#FFC326","#46C0FF"]},shape:{type:["square","circle"]},opacity:{value:1,animation:{enable:!0,minimumValue:0,speed:.5,startValue:"max",destroy:"min"}},size:{value:5},links:{enable:!1},life:{duration:{sync:!0,value:3},count:1},move:{angle:{value:45,offset:0},drift:{min:-0,max:0},enable:!0,gravity:{enable:!0,acceleration:20},speed:90,decay:1-.9,direction:-90,random:!0,straight:!1,outModes:{default:"none",bottom:"destroy"}},rotate:{value:{min:0,max:360},direction:"random",animation:{enable:!0,speed:60}},tilt:{direction:"random",enable:!0,value:{min:0,max:360},animation:{enable:!0,speed:60}},roll:{darken:{enable:!0,value:25},enable:!0,speed:{min:15,max:25}},wobble:{distance:20,enable:!0,speed:{min:-15,max:15}}}}}):Object(r.jsx)("br",{})]})},f=function(A){A&&A instanceof Function&&t.e(4).then(t.bind(null,27)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;t(A),a(A),n(A),i(A),c(A)}))};c.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),f()}},[[25,1,2]]]);
//# sourceMappingURL=main.4695c9a9.chunk.js.map