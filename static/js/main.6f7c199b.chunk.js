(this["webpackJsonpqca-calculator"]=this["webpackJsonpqca-calculator"]||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(7),l=t.n(c),u=t(1),o=t(3),s=(t(4),function(e){var a=e.grade,t=e.onClick,r="CLR"===a?"btn clr":"<-"===a?"btn bk":"btn";return n.a.createElement("button",{onClick:t,className:r},a)}),i={A1:4,A2:3.6,B1:3.2,B2:3,B3:2.8,C1:2.6,C2:2.4,C3:2,D1:1.6,D2:1.2,F:0,NG:0},m=function(e){var a=e.year;return e.tooManySubjestsInYear[a-1]?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"errorText"},"You already have 10 subjects in year ",a)):n.a.createElement("h3",{className:"errorText"},"\xa0")},b=function(e){var a=e.year,t=e.handleQCA,r=e.totalSubjectsPerYear,c=e.clearYear,l=e.eachGradePerYear,u=e.tooManySubjestsInYear,o=e.clearLastSubject,b=0;l[a-1].forEach((function(e){b+=i[e]}));var E=0===r[a-1]?0:b/r[a-1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"year",style:{gridColumnStart:2*a}},n.a.createElement("h2",null,"Year ",a),n.a.createElement("p",null,0===r[a-1]?"Enter your grades for year ".concat(a):"Yearly QCA: ".concat(E.toFixed(2))),n.a.createElement("p",null,"Results :"),n.a.createElement("p",null,l[a-1].map((function(e){return e+" "})),"\xa0"),n.a.createElement("p",null,"Total Subjects: ",r[a-1]),n.a.createElement("div",{className:"keys"},Object.keys(i).map((function(e){return n.a.createElement(s,{grade:e,onClick:t(e,a),key:e})})),n.a.createElement(s,{onClick:o(a),grade:"<-"}),n.a.createElement(s,{onClick:c(a),grade:"CLR"})),n.a.createElement(m,{year:a,tooManySubjestsInYear:u})))},E=function(){var e=Object(r.useState)(0),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)([[],[],[],[]]),s=Object(o.a)(l,2),m=s[0],E=s[1],f=Object(r.useState)(new Array(4).fill(0)),d=Object(o.a)(f,2),j=d[0],y=d[1],v=Object(r.useState)(Array(4).fill(!1)),p=Object(o.a)(v,2),C=p[0],h=p[1],O=function(e,a){return function(){if(10===j[a-1]){var r=Object(u.a)(C);return r[a-1]=!0,h(r),void setTimeout((function(){h(Array(4).fill(!1))}),2e3)}var n=Object(u.a)(m);n[a-1].push(e),E(n),c(t+i[e]);var l=Object(u.a)(j);l[a-1]+=1,y(l)}},S=function(e){return function(){var a=Object(u.a)(j);a[e-1]=0,y(a);var t=Object(u.a)(m);t[e-1]=[],E(t)}},g=function(e){return function(){if(0!==j[e-1]){var a=Object(u.a)(m);a[e-1].pop(),E(a);var t=Object(u.a)(j);t[e-1]--,y(t)}}},Y=0,k=0;m.forEach((function(e){e.forEach((function(e){Y+=i[e],k++}))}));var A=Y/k;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("img",{src:"./ul.png",alt:"ul logo",id:"logo"}),n.a.createElement("h1",{id:"title"},"QCA Calculator"),n.a.createElement("p",null)),n.a.createElement("div",{className:"topInfo"},n.a.createElement("p",null,0===Y?"Select your grades":"Overall QCA is ".concat(A.toFixed(2))),n.a.createElement("p",null,"Total number of subjects: ",k)),n.a.createElement("div",{className:"yearsContainer"},j.map((function(e,a){return n.a.createElement(b,{key:a,year:a+1,handleQCA:O,totalSubjectsPerYear:j,clearYear:S,eachGradePerYear:m,tooManySubjestsInYear:C,clearLastSubject:g})}))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))},4:function(e,a,t){},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.6f7c199b.chunk.js.map