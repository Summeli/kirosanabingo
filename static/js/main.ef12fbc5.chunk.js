(this.webpackJsonpkirosanabingo=this.webpackJsonpkirosanabingo||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),i=n(7),a=n.n(i),c=(n(13),n(14),n(8)),o=n(2),u=n(3),d=n(5),l=n(4),h=n(0),b=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{onClick:this.props.onClick,id:this.props.id,className:this.props.isClicked?"pressedGameButton":"notPressedGamebutton",children:this.props.text})}}]),n}(r.Component),j=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var r;Object(c.a)(t),Object(o.a)(this,n),(r=e.call(this,{})).cursewords=["Vittu","Jumalauta","Perhana","Saatana","Hitsit","Kulli","Hitto","Perse","Perkele"],r.state={rcursewords:new Array(9),clickedButtons:new Array(9),isBingo:!1};for(var s=0;s<9;s++){var i=Math.floor(Math.random()*Math.floor(r.cursewords.length));r.state.rcursewords[s]=r.cursewords[i],r.cursewords.splice(i,1),r.state.clickedButtons[s]=!1}return r}return Object(u.a)(n,[{key:"handleClick",value:function(t){var e=this.state.clickedButtons.slice(),n=this.state.rcursewords.slice();e[t]=!e[t];var r=this.isBingo(e);this.setState((function(t){return{rcursewords:n,clickedButtons:e,isBingo:r}}))}},{key:"renderGameButton",value:function(t){var e=this;return Object(h.jsx)(b,{text:this.state.rcursewords[t],isClicked:this.state.clickedButtons[t],id:t,onClick:function(){return e.handleClick(t)}})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"board-row",children:[this.renderGameButton(0),this.renderGameButton(1),this.renderGameButton(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderGameButton(3),this.renderGameButton(4),this.renderGameButton(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderGameButton(6),this.renderGameButton(7),this.renderGameButton(8)]}),Object(h.jsxs)("p",{children:[" ",this.state.isBingo?"BINGO":""]})]})}},{key:"isBingo",value:function(t){return!!(t[0]&&t[1]&&t[2])||(!!(t[3]&&t[4]&&t[5])||(!!(t[6]&&t[7]&&t[8])||(!!(t[0]&&t[3]&&t[6])||(!!(t[1]&&t[4]&&t[7])||(!!(t[2]&&t[5]&&t[8])||(!!(t[0]&&t[4]&&t[8])||!!(t[2]&&t[4]&&t[6])))))))}}]),n}(s.a.Component);var B=function(){return Object(h.jsx)("div",{className:"Kirosanabingo",children:Object(h.jsx)(j,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),s(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.ef12fbc5.chunk.js.map