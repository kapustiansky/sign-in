(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{32:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(0),r=s(20),c=s.n(r),n=s(11),l=s.p+"static/media/slide-1.bab0ad4e.jpg",d=s.p+"static/media/slide-2.8114f136.jpg",o=s.p+"static/media/slide-3.9ff3347c.jpg",j=s.p+"static/media/slide-4.90ccc521.jpg",m=s.p+"static/media/slide-min-1.a999827d.svg",h=s.p+"static/media/slide-min-2.38583fd4.svg",b=s.p+"static/media/slide-min-3.d4078d8f.svg",p=s.p+"static/media/slide-min-4.17673c0d.svg",u=s(53),O=s(49),x=s(50),f=s(51),g=s(54),v=s(52);s(32),s(33),s(34),s(35);u.a.use([O.a,x.a,f.a]);var w=function(){return Object(a.jsx)("section",{className:"slider-container",children:Object(a.jsxs)(g.a,{className:"swiper-container",effect:"fade",fadeEffect:{crossFade:!0},spaceBetween:50,slidesPerView:1,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{clickable:!0},children:[Object(a.jsxs)(v.a,{children:[Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{srcSet:l,media:"(min-width: 767px)",alt:"merge data review"}),Object(a.jsx)("img",{src:m,alt:"tokenplace"})]}),Object(a.jsx)("h2",{children:"Tokenplace"}),Object(a.jsx)("span",{children:"Multi-exchange Trading Terminal"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{srcSet:d,media:"(min-width: 767px)",alt:"fund platform"}),Object(a.jsx)("img",{src:h,alt:"fund platform"})]}),Object(a.jsx)("h2",{children:"Fund Platform"}),Object(a.jsx)("span",{children:"Hedge funds wealth management"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{srcSet:o,media:"(min-width: 767px)",alt:"noviscient"}),Object(a.jsx)("img",{src:b,alt:"noviscient"})]}),Object(a.jsx)("h2",{children:"Noviscient"}),Object(a.jsx)("span",{children:"Management Platform"})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{srcSet:j,media:"(min-width: 767px)",alt:"merge data review"}),Object(a.jsx)("img",{src:p,alt:"merge data review"})]}),Object(a.jsx)("h2",{children:"Merge Data Review"}),Object(a.jsxs)("span",{children:["It gives data managers the power to efficiently manage quality data",Object(a.jsx)("br",{}),"to ensure database lock readiness."]})]})]})})},y=s(21),k=s(22),E=s(23),N=s(26),V=s(25),F=s(6),S=function(e){var t=e.formErrors;return Object(a.jsx)(a.Fragment,{children:Object.keys(t).map((function(e,s){return t[e].length>0?Object(a.jsx)(F.b,{children:t[e]},s):""}))})},I=(s(44),function(e){Object(N.a)(s,e);var t=Object(V.a)(s);function s(e){var a;return Object(k.a)(this,s),(a=t.call(this,e)).handleUserInput=function(e){var t=e.target.name,s=e.target.value;a.setState(Object(y.a)({},t,s),(function(){a.validateField(t,s)}))},a.state={email:"",password:"",formErrors:{email:"",password:""},emailValid:!1,passwordValid:!1,formValid:!1},a}return Object(E.a)(s,[{key:"validateField",value:function(e,t){var s=this.state.formErrors,a=this.state.emailValid,i=this.state.passwordValid;switch(e){case"email":a=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),s.email=a?"":"Invalid email";break;case"password":i=t.length>=6,s.password=i?"":"Invalid format too short"}this.setState({formErrors:s,emailValid:a,passwordValid:i},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"errorClass",value:function(e,t){return 0===e.length&&t.length>0?"complete":0===e.length?"":"has-error"}},{key:"render",value:function(){var e="login-button";return this.state.formValid&&(e+=" login-button-enable"),Object(a.jsxs)("form",{className:"login-form",children:[Object(a.jsx)(S,{formErrors:this.state.formErrors}),Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsxs)("div",{className:"label-area",children:["Email",Object(a.jsx)("span",{children:this.state.formErrors.email})]}),Object(a.jsx)("input",{className:this.errorClass(this.state.formErrors.email,this.state.email),type:"email",name:"email",value:this.state.email,onChange:this.handleUserInput})]}),Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsxs)("div",{className:"label-area",children:["Password",Object(a.jsx)("span",{children:this.state.formErrors.password})]}),Object(a.jsx)("input",{className:this.errorClass(this.state.formErrors.password,this.state.password),type:"password",name:"password",value:this.state.password,onChange:this.handleUserInput}),Object(a.jsx)(n.b,{to:"#",children:"Forgot your password?"})]}),Object(a.jsx)("button",{type:"submit",className:e,children:"Sign in"})]})}}]),s}(i.Component)),C=s.p+"static/media/logo.c2ccbf3c.svg",P=(s(45),function(){return Object(a.jsxs)("section",{className:"login-container",children:[Object(a.jsx)("img",{src:C,alt:"merge development"}),Object(a.jsxs)("div",{className:"login-area",children:[Object(a.jsxs)("div",{className:"login-heading",children:[Object(a.jsx)("h1",{children:"Sign in"}),Object(a.jsxs)("span",{children:["Don\u2019t have an Xcellerate account?",Object(a.jsx)(n.b,{to:"#",children:"Sign up now"})]})]}),Object(a.jsx)(I,{})]}),Object(a.jsxs)("div",{className:"info-links",children:[Object(a.jsx)(n.b,{to:"#",children:"Contact"}),Object(a.jsx)(n.b,{to:"#",children:"Privacy"}),Object(a.jsx)(n.b,{to:"#",children:"Terms"})]})]})}),T=(s(46),function(){return Object(a.jsx)(n.a,{children:Object(a.jsxs)("main",{children:[Object(a.jsx)(w,{}),Object(a.jsx)(P,{})]})})});c.a.render(Object(a.jsx)(T,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8693d9b4.chunk.js.map