(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{1:function(e,t,a){},10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),l=a.n(r),c=a(5),i=a(6),s=a(8),d=a(7),m=a(2),u=a(9);a(1);var p=function(e){return o.a.createElement("div",{className:"TodoItem-wrapper"},o.a.createElement("input",{type:"checkbox",onChange:function(){return e.handleChange(e.item.id)}}),o.a.createElement("span",{className:"TodoItem-text",style:e.item.completed?{fontStyle:"italics",color:"#999999",textDecoration:"line-through"}:null},e.item.text)," ",o.a.createElement("br",null))},h=[{id:1,text:"Completing ReactJS Practice Course",completed:!0},{id:2,text:"Review HTML & CSS",completed:!1},{id:3,text:"Review JavaScript && jQuery",completed:!0},{id:4,text:"Brush up on other JS Libraries and Frameworks",completed:!0},{id:5,text:"Build a website project each week",completed:!0}];var v=function(){return o.a.createElement("div",{className:"Header-wrapper"},o.a.createElement("h2",null,"Class-Based Components"))};var E=function(){return o.a.createElement("div",{className:"Footer-wrapper"},o.a.createElement("h2",null,"Class-Based Components ReactJS - TaLoveous Goodwin"))},f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={todos:h},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState((function(t){return{todo:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed,console.log("test",e)),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(p,{key:t.id,item:t,handleChange:e.handleChange})}));return o.a.createElement("h2",null,o.a.createElement("div",{className:"App-wrapper"},o.a.createElement(v,null),o.a.createElement("div",{className:"todoitems-list"}," ",t," "),o.a.createElement(E,null)))}}]),t}(o.a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.357f4c83.chunk.js.map