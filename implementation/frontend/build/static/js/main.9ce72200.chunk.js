(this["webpackJsonpip-app"]=this["webpackJsonpip-app"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},34:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(25),i=s.n(a),r=(s(31),s(32),s(14)),o=s.n(r),l=s(16),j=s(17);s(34);function d(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=s(0);var u=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(),i=Object(j.a)(a,2),r=i[0],h=i[1],u=Object(c.useState)(),m=Object(j.a)(u,2),p=(m[0],m[1]),O=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({username:s,password:r}).then((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"outerForm",children:[Object(b.jsx)("h1",{className:"formItem",children:"Log in to your account"}),Object(b.jsxs)("form",{onSubmit:O,children:[Object(b.jsx)("p",{className:"formItem",children:" Account type: "}),Object(b.jsxs)("div",{className:"accTypeSelect",children:[Object(b.jsx)("p",{children:" Business "}),Object(b.jsx)("input",{type:"radio",value:"business",name:"accType",onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("p",{children:" Personal "}),Object(b.jsx)("input",{type:"radio",value:"personal",name:"accType",onChange:function(e){return p(e.target.value)}})]}),Object(b.jsxs)("div",{className:"formItem",children:[Object(b.jsx)("label",{children:"Username:"}),Object(b.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(b.jsxs)("div",{className:"formItem",children:[Object(b.jsx)("label",{children:"Password:"}),Object(b.jsx)("input",{type:"password",onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(b.jsx)("p",{className:"formItem",children:Object(b.jsxs)("button",{type:"submit",className:"submit-button",children:[" ","Log in"," "]})})]}),Object(b.jsx)("a",{href:"https://reactjs.org/docs/hello-world.html",target:"_blank",className:"formItem",children:"Forgot password?"}),Object(b.jsxs)("div",{className:"formItem",children:[Object(b.jsx)("p",{children:"Don't have an account yet?"}),Object(b.jsx)("a",{href:"https://reactjs.org/docs/hello-world.html",target:"_blank",children:"Create account"})]})]})},m=s(11),p=s(2);var O=function(){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsxs)("ul",{className:"Menu",children:[Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",exact:!0,to:"/",children:"HOME"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",to:"/login",children:"LOGIN"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",to:"/c-profile",children:"CUSTOMER PROFILE"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",to:"/b-profile",children:"BUSINESS PROFILE"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",to:"/view-b",children:"VIEW BUSINESS REVIEW"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",exact:!0,to:"/add-review",children:"ADD REVIEW"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",exact:!0,to:"/c-account-creation",children:"CREATE PERSONAL ACCOUNT"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{className:"navlink",activeClassName:"activenavlink",exact:!0,to:"/b-account-creation",children:"CREATE BUSINESS ACCOUNT"})})]})})};s(41);var x=function(e){var t=e.name,s=e.rating,c=e.type,n=e.location;return Object(b.jsxs)("div",{className:"busCard",children:[Object(b.jsxs)("h2",{children:[" ",t," "]}),Object(b.jsxs)("p",{children:[" ",n," "]}),Object(b.jsxs)("p",{children:[" Rating: ",s," "]}),Object(b.jsxs)("p",{children:[" Type: ",c," "]})]})};s(42);var v=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"leftColumn",children:Object(b.jsx)("ul",{className:"searchResults",children:[{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"},{name:"The Whole Bagel",location:"Upper Borough Walls",rating:"5",type:"food"},{name:"Lush",location:"Union St.",rating:"5",type:"cosmetics"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(x,{name:e.name,location:e.location,rating:e.rating,type:e.type})})}))})}),Object(b.jsxs)("div",{className:"rightColumn",children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"searchBar",placeholder:"Type to search locations and businesses...",type:"text"})}),Object(b.jsx)("img",{style:{height:"100%"},src:"/images/mapPlaceholder.jpg"})]})]})},f=s(3),N=s(4),g=s(6),w=s(5),y=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"convertToDots",value:function(){var e,t=this.props.profileS.password,s="";for(e=0;e<t.length;e++)s+="#";return s}},{key:"render",value:function(){return console.log(this.convertToDots()),Object(b.jsxs)("div",{className:"contact-card",children:[Object(b.jsx)("h1",{children:"Customer Profile"}),Object(b.jsxs)("h3",{children:["Name: ",this.props.profileS.name]}),Object(b.jsx)("img",{src:this.props.profileS.profilepic}),Object(b.jsxs)("h3",{children:["Email: ",this.props.profileS.email]}),Object(b.jsxs)("p",{children:["Password: ",this.convertToDots()]}),Object(b.jsxs)("p",{children:["Number of reviews: ",this.props.profileS.numberOfReviews]})]})}}]),s}(n.a.Component),B=s(13),C=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;return Object(f.a)(this,s),(e=t.call(this)).state={submit:!1},e.handleClick=e.handleClick.bind(Object(B.a)(e)),e}return Object(N.a)(s,[{key:"handleClick",value:function(){this.setState((function(e){return{submit:!0}}))}},{key:"render",value:function(){return console.log(this.state.submit),Object(b.jsxs)("div",{className:"contact-card",children:[Object(b.jsx)("h2",{children:" Review details"}),Object(b.jsxs)("h3",{children:["Business Name: ",this.props.reviewS.BusinessName]}),Object(b.jsxs)("h3",{children:["Date of Review: ",this.props.reviewS.reviewDate]}),Object(b.jsxs)("p",{children:["Review text: ",this.props.reviewS.reviewText]}),Object(b.jsx)("button",{Click:this.handleClick,children:"Delete Review"})]})}}]),s}(n.a.Component),S=[{id:1,CustomerID:"B0B",name:"Bob the Builder",email:"BOB3@gmail.com",password:"1234asdf",numberOfReviews:"6",profilepic:"https://m.media-amazon.com/images/M/MV5BNjRlYjgwMWMtNDFmMy00OWQ0LWFhMTMtNWE3MTU4ZjQ3MjgyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg"},{id:2,CustomerID:"1MQ",name:"Lightning McQueen",email:"Kachow@gmail.com",password:"5678",numberOfReviews:"2",profilepic:"https://img.etimg.com/thumb/msid-59192112,width-320,height-240/magazines/panache/cars-3-review-pixar-needs-to-realise-that-great-animation-isnt-enough-to-make-a-good-picture.jpg"}],k=[{id:1,CustomerID:"B0B",BusinessID:"FRS",BusinessName:"Fresh Coop",reviewDate:"04/03/2021",reviewText:"The best shop on campus"}],R=(s(23),function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;return Object(f.a)(this,s),(e=t.call(this)).state={custD:S,custR:k},e}return Object(N.a)(s,[{key:"render",value:function(){var e=this.state.custD.map((function(e){return Object(b.jsx)(y,{profileS:e},e.id)})),t=this.state.custR.map((function(e){return Object(b.jsx)(C,{reviewS:e},e.id)}));return Object(b.jsxs)("div",{className:"body_Profilepage",children:[Object(b.jsx)("div",{className:"inner",children:e[1]}),Object(b.jsx)("div",{className:"inner",children:t})]})}}]),s}(n.a.Component)),E=[{id:0,name:"University of Bath",description1:"One way system followed",description2:"Hand sanitizer availability",description3:"Customer limits into a building enforced",description4:"Percentage of customers wearing masks",description5:"COVID banners",description6:"Temeperature check on customers",description7:"Staffs wearing PPE correctly",description8:"Social distancing enforced",description9:"Good ventilation"}];s(43);function T(e){return Object(b.jsxs)("div",{className:"Font",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{className:"businessReviewName",children:["Business Review for ",e.review.name]})}),Object(b.jsxs)("div",{className:"informationDescription",children:[Object(b.jsx)("h1",{children:e.review.description1}),Object(b.jsx)("button",{className:"addReviewButton",children:"Yes"}),Object(b.jsx)("button",{className:"addReviewButton",children:"No"}),Object(b.jsx)("h1",{children:e.review.description2}),Object(b.jsx)("div",{className:"slidecontainer",children:Object(b.jsx)("input",{type:"range",min:"1",max:"100",value:"50",className:"slider"})}),Object(b.jsx)("h1",{children:e.review.description3}),Object(b.jsx)("button",{className:"addReviewButton",children:"Yes"}),Object(b.jsx)("button",{className:"addReviewButton",children:"No"}),Object(b.jsx)("h1",{children:e.review.description4}),Object(b.jsx)("div",{className:"slidecontainer",children:Object(b.jsx)("input",{type:"range",min:"1",max:"100",value:"50",className:"slider"})}),Object(b.jsx)("h1",{children:e.review.description5}),Object(b.jsx)("button",{className:"addReviewButton",children:"Yes"}),Object(b.jsx)("button",{className:"addReviewButton",children:"No"}),Object(b.jsx)("h1",{children:e.review.description6}),Object(b.jsx)("button",{className:"addReviewButton",children:"Yes"}),Object(b.jsx)("button",{className:"addReviewButton",children:"No"}),Object(b.jsx)("h1",{children:e.review.description7}),Object(b.jsx)("button",{className:"addReviewButton",children:"Yes"}),Object(b.jsx)("button",{className:"addReviewButton",children:"No"}),Object(b.jsx)("h1",{children:e.review.description8}),Object(b.jsx)("div",{className:"slidecontainer",children:Object(b.jsx)("input",{type:"range",min:"1",max:"100",value:"50",className:"slider"})}),Object(b.jsx)("h1",{children:e.review.description9}),Object(b.jsx)("button",{className:"addReviewButton",children:"Yes"}),Object(b.jsx)("button",{className:"addReviewButton",children:"No"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"reviewButton",children:"Add written review"}),Object(b.jsx)("input",{className:"reviewText",type:"text"})]})]})}var U=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;return Object(f.a)(this,s),(e=t.call(this)).state={data:E},e}return Object(N.a)(s,[{key:"render",value:function(){var e=this.state.data.map((function(e){return Object(b.jsx)(T,{review:e},e.id)}));return Object(b.jsx)("div",{children:e})}}]),s}(c.Component);var D=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"header",children:"Create an account"})})},I=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"outerForm",children:[Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Email Address:"}),Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Username:"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter username"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Password:"}),Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Confirm Password:"}),Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password again"})]}),Object(b.jsx)("button",{type:"submit",className:"submit-button",children:"Create account"}),Object(b.jsxs)("p",{children:["Already have an account? ",Object(b.jsx)("a",{href:"#",children:"Log in"})]})]})}}]),s}(c.Component);s(24);var W=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(D,{}),Object(b.jsx)(I,{})]})},_=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"outerForm",children:[Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Email Address:"}),Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Username:"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter username"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Password:"}),Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Confirm Password:"}),Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Your name:"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter full name"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Name of business:"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter business name"})]}),Object(b.jsxs)("div",{className:"forms",children:[Object(b.jsx)("label",{children:"Business address"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter business address"})]}),Object(b.jsx)("button",{type:"submit",className:"submit-button",children:"Create account"}),Object(b.jsxs)("p",{children:["Already have an account? ",Object(b.jsx)("a",{href:"#",children:"Log in"})]})]})}}]),s}(c.Component);var L=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(D,{}),Object(b.jsx)(_,{})]})},P=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;return Object(f.a)(this,s),(e=t.call(this)).state={submit:!1},e.handleClick=e.handleClick.bind(Object(B.a)(e)),e}return Object(N.a)(s,[{key:"handleClick",value:function(){this.setState((function(e){return{submit:!0}}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"contact-card",children:[Object(b.jsx)("h2",{children:" Review details"}),Object(b.jsxs)("h3",{children:["CustomerID: ",this.props.B_reviewS.CustomerID]}),Object(b.jsxs)("h3",{children:["Date of Review: ",this.props.B_reviewS.reviewDate]}),Object(b.jsxs)("p",{children:["Review text: ",this.props.B_reviewS.reviewText]}),Object(b.jsx)("button",{onClick:this.handleClick,children:"Delete Review"})]})}}]),s}(n.a.Component),A=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){return Object(f.a)(this,s),t.apply(this,arguments)}return Object(N.a)(s,[{key:"convertToDots",value:function(){var e,t=this.props.B_profileS.password,s="";for(e=0;e<t.length;e++)s+="#";return s}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" PRIVATE Business Profile "}),Object(b.jsxs)("h3",{children:["Name: ",this.props.B_profileS.name]}),Object(b.jsx)("img",{src:this.props.B_profileS.profilePic}),Object(b.jsxs)("h3",{children:["Email: ",this.props.B_profileS.email]}),Object(b.jsxs)("p",{children:["Password: ",this.convertToDots()]}),Object(b.jsxs)("h3",{children:["Business Name: ",this.props.B_profileS.businessName]}),Object(b.jsxs)("h3",{children:["Location: ",this.props.B_profileS.location]})]})}}]),s}(n.a.Component),F=[{id:1,businessID:"FRS",name:"Jeff",profilePic:"/images/freshprofile.jpg",email:"fresh@bath.ac.uk",password:"coop",businessName:"Lil Fresh",location:"Uni of Bath campus, BA2 7AYS"}],M=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;return Object(f.a)(this,s),(e=t.call(this)).state={custR:k,busD:F},e}return Object(N.a)(s,[{key:"render",value:function(){var e=this.state.busD.map((function(e){return Object(b.jsx)(A,{B_profileS:e},e.id)})),t=this.state.custR.map((function(e){return Object(b.jsx)(P,{B_reviewS:e},e.id)}));return Object(b.jsxs)("div",{className:"body_Profilepage",children:[Object(b.jsx)("div",{className:"inner",children:e}),Object(b.jsx)("div",{className:"inner",children:t})]})}}]),s}(n.a.Component);s(44);function Y(e){return Object(b.jsxs)("div",{className:"Font",children:[Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("h1",{className:"businessPropertyName",children:e.business.name}),Object(b.jsxs)("h2",{className:"address",children:["Location: ",e.business.address]}),Object(b.jsxs)("h2",{className:"businessOwner",children:["Business owner: ",e.business.owner]}),Object(b.jsxs)("h2",{className:"rating",children:["Average hygiene rating: ",e.business.rating]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"image",src:e.business.image}),Object(b.jsx)("h1",{className:"description",children:e.business.description}),Object(b.jsx)("h1",{className:"review",children:e.business.review})]})]})}var V=[{id:0,name:"University of Bath",address:"University of Bath, Claverton Down, Bath, BA2 7AY",owner:"I don't know",image:"https://i.guim.co.uk/img/media/86cd7cbc04ebbd27e1216ec4b3fb6a59fe8f9f90/0_489_7360_4417/master/7360.jpg?width=620&quality=85&auto=format&fit=max&s=64be9fe4a55bdae4ba40d6e2b336f169",rating:5,description:"Below are the description of the business",review:"Below are the customers reviews"}],z=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;return Object(f.a)(this,s),(e=t.call(this)).state={data:V},e}return Object(N.a)(s,[{key:"render",value:function(){var e=this.state.data.map((function(e){return Object(b.jsx)(Y,{business:e},e.id)}));return Object(b.jsx)("div",{children:e})}}]),s}(c.Component);var Q=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",children:Object(b.jsx)(v,{})}),Object(b.jsx)(p.a,{path:"/login",children:Object(b.jsx)(u,{})}),Object(b.jsx)(p.a,{path:"/c-profile",children:Object(b.jsx)(R,{})}),Object(b.jsx)(p.a,{path:"/b-profile",children:Object(b.jsx)(M,{})}),Object(b.jsx)(p.a,{path:"/add-review",children:Object(b.jsx)(U,{})}),Object(b.jsx)(p.a,{path:"/c-account-creation",children:Object(b.jsx)(W,{})}),Object(b.jsx)(p.a,{path:"/b-account-creation",children:Object(b.jsx)(L,{})}),Object(b.jsx)(p.a,{path:"/view-b",children:Object(b.jsx)(z,{})})]})]})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9ce72200.chunk.js.map