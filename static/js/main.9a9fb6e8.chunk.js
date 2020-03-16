(this["webpackJsonpproject-kaylamchea"]=this["webpackJsonpproject-kaylamchea"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(34),c=t.n(l),i=t(52),o=t(9),s=t(10),u=t(12),m=t(11),h=t(18),d=t(13),p=t(31),E=(t(64),t(58)),v=(t(65),t(53)),f=t.n(v),b=function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer text-center py-3"},r.a.createElement("p",{id:"contact"},"Contact Information: ",r.a.createElement("a",{href:"mailto:kayla900@uw.edu"},"kayla900@uw.edu")," or ",r.a.createElement("a",{href:"mailto:divij@uw.edu"},"divij@uw.edu")),r.a.createElement("p",null,"@2020 Copyright: Kayla C. and Divij S.")))}}]),a}(n.Component),g=t(19),k=function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("header",null,r.a.createElement("h1",null,"About Restaurant Picker")),r.a.createElement("main",null,r.a.createElement("div",{className:"project-desc"},r.a.createElement("div",null,r.a.createElement("div",{id:"mission"},r.a.createElement("p",null,"Our mission is to help people save precious time spent on deciding"),r.a.createElement("p",null,"where to eat. With our application, users can generate a random"),r.a.createElement("p",null,"open restaurant that matches their preferences.")),r.a.createElement("p",{id:"features-label"},r.a.createElement("strong",null,"Features:")),r.a.createElement("ul",{"aria-labelledby":"features-label"},r.a.createElement("li",null,"Find nearby restaurants based on your location"),r.a.createElement("li",null,"Filter restaurants by food categories, price, and distance"),r.a.createElement("li",null,"View relevant information about the selected restaurant"))),r.a.createElement("img",{src:f.a,alt:"Man sitting down and staring at his laptop"})),r.a.createElement("div",{className:"text-center"},r.a.createElement(g.b,{role:"button","aria-label":"Go to form",className:"btn btn-dark start-btn",to:"/project-kaylamchea/form"},"Lets get started!"))),r.a.createElement(b,null))}}]),a}(n.Component),j=function(e){return r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label",htmlFor:e.id},r.a.createElement("input",{className:"form-check-input",onChange:e.handleCheckChieldElement,type:"checkbox",checked:e.isChecked,value:e.value}),e.name))},y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).handleCheckChieldElement=function(e){var a=t.state.options;a.forEach((function(a){a.value===e.target.value&&(a.isChecked=e.target.checked)})),t.setState({options:a},(function(){var e=a.filter((function(e){return e.isChecked})).map((function(e){return e.value}));t.props.onUpdate("categories",e)}))},t.state={options:[{id:1,value:"asianfusion",name:"Asian",isChecked:!1},{id:2,value:"bbq",name:"BBQ",isChecked:!1},{id:3,value:"chinese",name:"Chinese",isChecked:!1},{id:4,value:"hotdogs",name:"Fastfood",isChecked:!1},{id:5,value:"hawaiian",name:"Hawaiian",isChecked:!1},{id:6,value:"indpak",name:"Indian",isChecked:!1},{id:7,value:"italian",name:"Italian",isChecked:!1},{id:8,value:"japanese",name:"Japanese",isChecked:!1},{id:9,value:"korean",name:"Korean",isChecked:!1},{id:10,value:"mexican",name:"Mexican",isChecked:!1},{id:11,value:"pizza",name:"Pizza",isChecked:!1},{id:12,value:"sushi",name:"Sushi",isChecked:!1},{id:13,value:"thai",name:"Thai",isChecked:!1},{id:14,value:"vegan",name:"Vegan",isChecked:!1},{id:15,value:"vegetarian",name:"Vegetarian",isChecked:!1}]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.onUpdate;return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("header",null,r.a.createElement("h1",null,"Find a restaurant")),r.a.createElement("main",null,r.a.createElement("form",{"aria-label":"Submit restaurant preferences"},r.a.createElement("div",{className:"form-content"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"location"},"Location:"),r.a.createElement("input",{type:"text",name:"location",className:"form-control",id:"location",placeholder:"Enter address, city, or zip code",onChange:function(e){return a(e.target.name,e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"distance"},"Price:"),r.a.createElement("select",{className:"form-control",id:"price",name:"price",onChange:function(e){return a(e.target.name,e.target.value)}},r.a.createElement("option",{value:"1"},"$"),r.a.createElement("option",{value:"2"},"$$"),r.a.createElement("option",{value:"3"},"$$$"),r.a.createElement("option",{value:"4"},"$$$$"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"distance"},"Max distance (select one):"),r.a.createElement("select",{className:"form-control",id:"distance",name:"distance",onChange:function(e){return a(e.target.name,e.target.value)}},r.a.createElement("option",{value:"1609"},"< 1 mile"),r.a.createElement("option",{value:"8047"},"< 5 miles"),r.a.createElement("option",{value:"16093"},"< 10 miles"),r.a.createElement("option",{value:"24140"},"< 15 miles"),r.a.createElement("option",{value:"32187"},"< 20 miles"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{id:"checkbox-label"},"What are you in the mood for?"),this.state.options.map((function(a){return r.a.createElement(j,Object.assign({key:a.id,handleCheckChieldElement:e.handleCheckChieldElement},a))}))),r.a.createElement(g.b,{role:"button","aria-label":"Go to restaurant",className:"btn btn-dark start-btn",to:"/project-kaylamchea/res"},"Go!")))),r.a.createElement(b,null))}}]),a}(n.Component),C=t(56),O=t.n(C),N=t(30),S=t.n(N);S.a.initializeApp({apiKey:"AIzaSyCylhICJDdE85iwyMtI9PdG5yaMPW29MXk",authDomain:"restaurant-finder-f6e4d.firebaseapp.com",databaseURL:"https://restaurant-finder-f6e4d.firebaseio.com",projectId:"restaurant-finder-f6e4d",storageBucket:"restaurant-finder-f6e4d.appspot.com",messagingSenderId:"1098062858225",appId:"1:1098062858225:web:1ff714f619f0b44ae2e650",measurementId:"G-1ZHWES7RX1"});var w=new S.a.auth.GoogleAuthProvider,I=S.a.auth(),R=S.a,F=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={potential:[],curr:"",location:""},t.handleClick=t.handleClick.bind(Object(h.a)(t)),t.handleSave=t.handleSave.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"checkParam",value:function(){var e="";return this.props.formInfo&&(e={headers:{Authorization:"Bearer t10OHYRfo3GYd6y-YdlHTkGWv8yX9VQegs5ucOD8KrVnfED2v6wceVS-WRRP8B3nbA5_wXQfD2A4OvG1B2lmzFB3MCkbP3keFNOcvZuD8hjbvsWF0SRI8IoUQYNhXnYx"},params:{location:this.props.formInfo.location,distance:this.props.formInfo.distance,price:this.props.formInfo.price,categories:this.props.formInfo.categories,open_now:!0}}),e}},{key:"componentDidMount",value:function(){var e=this;O.a.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?",this.checkParam()).then((function(a){e.setState({potential:a.data.businesses});var t=e.state.potential[Math.floor(Math.random()*e.state.potential.length)];e.setState({curr:t});var n=t.location.display_address.join(" ");e.setState({location:n})})).catch((function(e){console.log(e.response)}))}},{key:"handleClick",value:function(){var e=this.state.potential[Math.floor(Math.random()*this.state.potential.length)];this.setState({curr:e});var a=e.location.display_address.join(" ");this.setState({location:a})}},{key:"handleSave",value:function(){var e=this.state.curr,a=R.database().ref("saved").child(R.auth().currentUser.uid),t={location:this.state.location,rating:e.rating,price:e.price,image:e.image_url,url:e.url};a.child(e.name).set(t)}},{key:"render",value:function(){var e=this.state.curr,a=this.props.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Find a Restaurant")),r.a.createElement("main",null,r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{id:"image",src:e.image_url,alt:"Restaurant of interest"}),r.a.createElement("div",{className:"restaurant-info"},r.a.createElement("p",null,r.a.createElement("strong",null,"Restaurant Name: "),e.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Location: "),this.state.location),r.a.createElement("p",null,r.a.createElement("strong",null,"Rating: "),e.rating),r.a.createElement("p",null,r.a.createElement("strong",null,"Price: "),e.price),r.a.createElement("a",{role:"button","aria-label":"Learn more",className:"btn btn-dark",href:e.url,target:"_blank"},"Learn more"),a?r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.handleSave},"Save"):r.a.createElement("p",null,"Please sign in to save"))),r.a.createElement("div",{className:"choice-buttons"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleClick},"Next restaurant"),r.a.createElement(g.b,{role:"button","aria-label":"Go to form",className:"btn btn-secondary start-btn",to:"/project-kaylamchea/form"},"Go back"))),r.a.createElement(b,null))}}]),a}(n.Component),P=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).handleDelete=t.handleDelete.bind(Object(h.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleDelete",value:function(e){var a=R.auth().currentUser.uid;R.database().ref("saved/"+a+"/"+e).remove()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"saved-res",id:this.props.name},r.a.createElement("img",{id:"image",src:this.props.image,alt:"Restaurant of interest"}),r.a.createElement("div",{className:"restaurant-info"},r.a.createElement("p",null,r.a.createElement("strong",null,"Restaurant Name: "),r.a.createElement("a",{href:this.props.url},this.props.name)),r.a.createElement("p",null,r.a.createElement("strong",null,"Location: "),this.props.location),r.a.createElement("p",null,r.a.createElement("strong",null,"Rating: "),this.props.rating),r.a.createElement("p",null,r.a.createElement("strong",null,"Price: "),this.props.price)),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.handleDelete(e.props.name)}},"Delete")))}}]),a}(n.Component),x=function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[],a=this.props.user;if(console.log(this.props.res),this.props.res){var t=this.props.res;Object.keys(t).map((function(a){e.push(r.a.createElement(P,{key:a,name:a,location:t[a].location,rating:t[a].rating,price:t[a].price,image:t[a].image,url:t[a].url}))}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("header",null,r.a.createElement("h1",null,"Saved Restaurants")),r.a.createElement("main",null,a?r.a.createElement("div",{id:"res-container"},e):r.a.createElement("p",null,"Please sign in to see saved restaurants.")),r.a.createElement(b,null))}}]),a}(n.Component),D=t(23),M=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(h.a)(t)),t.login=t.login.bind(Object(h.a)(t)),t.logout=t.logout.bind(Object(h.a)(t)),t.state={location:"",distance:"1609",price:"1",categories:"",savedRes:[],user:null},t.savedRef=R.database().ref("saved"),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e,a){var t=Object(i.a)({},e,a);this.setState(t)}},{key:"login",value:function(){var e=this;I.signInWithPopup(w).then((function(a){var t=a.user;e.setState({user:t}),console.log(t.uid),e.savedRef.child(t.uid).on("value",(function(a){console.log("the value of favorites/userid changed, so i reset the state"),e.setState({saved:a.val()})}))}))}},{key:"logout",value:function(){var e=this;I.signOut().then((function(){e.setState({user:null})}))}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(p.a.Brand,{href:"/project-kaylamchea/"},"Restaurant Picker"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,null,r.a.createElement(E.a,{className:"ml-auto"},r.a.createElement(g.b,{className:"underline",to:"/project-kaylamchea/"},"Home"),r.a.createElement(g.b,{className:"underline",to:"/project-kaylamchea/form"},"Find Restaurants"),r.a.createElement(g.b,{className:"underline",to:"/project-kaylamchea/saved"},"Saved Restaurants"))),this.state.user?r.a.createElement("button",{onClick:this.logout},"Log Out"):r.a.createElement("button",{onClick:this.login},"Log In")),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/project-kaylamchea/form"},r.a.createElement(y,{onUpdate:this.handleChange})),r.a.createElement(D.a,{path:"/project-kaylamchea/saved"},r.a.createElement(x,{user:this.state.user,res:this.state.saved})),r.a.createElement(D.a,{path:"/project-kaylamchea/res"},r.a.createElement(F,{user:this.state.user,formInfo:this.state,onUpdate:this.updateSaved})),r.a.createElement(D.a,{exact:!0,path:"/project-kaylamchea/"},r.a.createElement(k,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,a,t){e.exports=t.p+"static/media/man-thinking.60a12e36.jpeg"},59:function(e,a,t){e.exports=t(101)},65:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.9a9fb6e8.chunk.js.map