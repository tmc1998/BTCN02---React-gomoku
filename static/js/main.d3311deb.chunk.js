(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),s=n(4),i=n(3),u=n(0),l=n.n(u),o=n(6),c=n.n(o);n(13);function m(e){return l.a.createElement("button",{className:"square "+(e.isWin?"squareWin":null),onClick:e.onClick},e.value)}var h=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(m,{isWin:this.props.winSquares.includes(e),key:"square "+e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"renderRow",value:function(e){for(var t=[],n=20*e,r=0;r<20;r++)t.push(this.renderSquare(n+r));return l.a.createElement("div",{className:"board-row"},t)}},{key:"render",value:function(){for(var e=[],t=0;t<20;t++)e.push(this.renderRow(t));return l.a.createElement("div",null,e)}}]),n}(l.a.Component),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={history:[{squares:Array(400).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(a.a)(n,[{key:"handleClick",value:function(e){for(var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice(),r=[],a=0;a<400;a++){var s=[Math.floor(a/20),a%20];r.push(s)}f(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,location:r[e]}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,isAscending:!1}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"sortHistory",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],a=f(r.squares),s=n.map((function(e,r){var a=r?"Go to move #"+r+" Location: ("+n[r].location+")":"Go to game start";return l.a.createElement("li",{key:r},l.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},r===t.state.stepNumber?l.a.createElement("b",null,a):a))}));return e=a?"Winner: "+a.winner:r.squares.includes(null)?"Next player: "+(this.state.xIsNext?"X":"O"):"Draw",l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(h,{winSquares:a?a.line:[],squares:r.squares,onClick:function(e){return t.handleClick(e)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("button",{onClick:function(){return t.sortHistory()}},"Sort: ",this.state.isAscending?"Ascending":"Descending"),l.a.createElement("ol",null,this.state.isAscending?s.reverse():s)))}}]),n}(l.a.Component);function f(e){for(var t=0;t<400;t++){if(e[t]&&e[t]===e[t+1]&&e[t]===e[t+2]&&e[t]===e[t+3]&&e[t]===e[t+4])return{winner:e[t],line:[t,t+1,t+2,t+3,t+4]};if(e[t]&&e[t]===e[t+20]&&e[t]===e[t+40]&&e[t]===e[t+60]&&e[t]===e[t+80])return{winner:e[t],line:[t,t+20,t+40,t+60,t+80]};if(e[t]&&e[t]===e[t+21]&&e[t]===e[t+42]&&e[t]===e[t+63]&&e[t]===e[t+84])return{winner:e[t],line:[t,t+21,t+42,t+63,t+84]};if(e[t]&&e[t]===e[t+19]&&e[t]===e[t+38]&&e[t]===e[t+57]&&e[t]===e[t+76])return{winner:e[t],line:[t,t+19,t+38,t+57,t+76]}}return null}c.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.d3311deb.chunk.js.map