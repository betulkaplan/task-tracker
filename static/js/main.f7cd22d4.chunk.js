(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),o=(n(14),n(9)),i=n(5),l=n(2),d=(n(15),n(0));var u=function(e){var t=e.color,n=e.text,a=e.handleClick;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:a,children:n})})};function j(e){var t=e.title,n=e.showAddTask,a=e.toggleShow;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(u,{color:n?"purple":"red",text:n?"Close Add Task Bar":"Show Add Task Bar",handleClick:a})]})}j.defaultProps={title:"Default Title"};var b=j;var h=function(e){var t=e.addTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),console.log(e.target.value),t({text:s,day:u,isDone:!1}),r(""),j("")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"task",children:"Task"}),Object(d.jsx)("input",{id:"task",name:"text",type:"text",placeholder:"AddTask",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"day",children:"Day & Time"}),Object(d.jsx)("input",{id:"day",name:"day",type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})})},O=n(7);var k=function(e){var t=e.task,n=e.deleteTask,a=e.toggleDone;return Object(d.jsxs)("div",{className:"task ".concat(t.isDone?"done":""),onDoubleClick:function(){return a(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})};var x=function(e){var t=e.tasks,n=e.deleteTask,a=e.toggleDone;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(k,{task:e,deleteTask:n,toggleDone:a},e.id)}))})};var f=function(){var e=Object(a.useState)([{id:1,text:"Study React Pre-Class Notes",day:"Feb 5th at 2:30pm",isDone:!1},{id:2,text:"Feed the Dog",day:"Feb 6th at 1:30pm",isDone:!1},{id:3,text:"Attend in-Class",day:"Feb 7th at 20:00pm",isDone:!1}]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(l.a)(s,2),u=r[0],j=r[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{title:"Task Tracker",showAddTask:u,toggleShow:function(){j(!u)}}),u?Object(d.jsx)(h,{addTask:function(e){var t=Math.floor(100*Math.random())+1,a=Object(i.a)({id:t},e);c([].concat(Object(o.a)(n),[a]))}}):null,0!==n.length?Object(d.jsx)(x,{tasks:n,deleteTask:function(e){c(n.filter((function(t){return t.id!==e})))},toggleDone:function(e){c(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isDone:!t.isDone}):t})))}}):"No Tasks to Show"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.f7cd22d4.chunk.js.map