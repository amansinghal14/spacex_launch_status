(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,a,n){e.exports=n(61)},50:function(e,a,n){},59:function(e,a,n){},61:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(36),r=n.n(l),s=(n(50),n(44)),m=n(7),i=n(19),o=n(6),u=n(21),h=n(22),d=n(27),p=n(26),g=n(23),E=n(18),b=n.n(E),f=n(62),_=n(37),y=n.n(_),v=function(e){var a=e.launch,n=a.flight_number,t=a.launch_date_local,l=a.launch_success,r=a.mission_name;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:l?"text-success":"text-danger"}," ",r," ")),c.a.createElement("p",null,"Date: ",c.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm"},t))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(i.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))};function N(){var e=Object(g.a)(["\n  query launches {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return N=function(){return e},e}var k=b()(N()),j=function(e){Object(d.a)(n,e);var a=Object(p.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(f.a,{query:k},(function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement(t.Fragment,null,l.launches.map((function(e){return c.a.createElement(v,{key:e.flight_number,launch:e})}))))})))}}]),n}(t.Component),w=n(43),O=n.n(w);function x(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      launch_date_local\n      launch_success\n      launch_year\n      mission_name\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return x=function(){return e},e}var L=b()(x()),D=function(e){Object(d.a)(n,e);var a=Object(p.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(f.a,{query:L,variables:{flight_number:e}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=t.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,o=l.launch_success,u=l.rocket,h=u.rocket_id,d=u.rocket_name,p=u.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",c.a.createElement("span",{className:O()({"text-success":o,"text-danger":!o})},o?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket Id: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",d),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(i.b,{to:"/",className:"btn btn-secondary"},"Back"))})))}}]),n}(t.Component),Y=(n(59),new s.a({uri:"/graphql"}));var q=function(){return c.a.createElement(m.a,{client:Y},c.a.createElement(i.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:"https://i.pinimg.com/originals/e5/bd/23/e5bd23574cee3222e088a5de04c28eaf.jpg",alt:"spacex logo",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(o.a,{exact:!0,path:"/",component:j}),c.a.createElement(o.a,{exact:!0,path:"/launch/:flight_number",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.f087e89c.chunk.js.map