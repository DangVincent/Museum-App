(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},25:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),u=a.n(c),s=(a(24),a(2)),l=a(3),i=a(5),o=a(4),h=a(6);a(25);var m=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Rijks Museum Database"))};var p=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa92019 HackerYou"))},d=a(8),f=a.n(d),v=a(16),E=a(17),w=a.n(E),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.getSearchResults(a.state.searchInput)},a.handleChange=function(e){a.setState({searchInput:e.target.value})},a.state={searchInput:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getSearchResults",value:function(){var e=Object(v.a)(f.a.mark(function e(t){var a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://www.rijksmuseum.nl/api/en/collection/",{params:{imgonly:!0,ps:20,q:t,key:"vOie8Xxn"}});case 3:a=e.sent,n=a.data.artObjects,this.props.updateArt(n),this.props.updateCurrentSearch(this.state.searchInput),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.searchInput;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:"search"},"Find some art:"),r.a.createElement("input",{type:"search",id:"search",name:"search",placeholder:"Enter a keyword",value:t,onChange:function(t){return e.handleChange(t)}}))}}]),t}(n.Component);var g=function(e){return r.a.createElement("div",{className:"displayArea"},e.art.length>0?r.a.createElement("div",{className:"showResults"},r.a.createElement("p",null,"Showing results for: ",e.currentSearch),r.a.createElement("div",{className:"artworks"},e.art.map(function(e){var t=e.id,a=e.title,n=e.webImage,c=e.principalOrFirstMaker;return r.a.createElement("div",{className:"art",key:t},r.a.createElement("img",{src:n.url,alt:""}),r.a.createElement("h2",null,a),r.a.createElement("h3",null,c))}))):r.a.createElement("div",{className:"noResults"},r.a.createElement("p",null,"Enter a search term")))},S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).updateCurrentSearch=function(t){e.setState({currentSearch:t})},e.updateArt=function(t){e.setState({art:t})},e.state={currentSearch:"",art:[]},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("main",null,r.a.createElement(b,{updateCurrentSearch:this.updateCurrentSearch,updateArt:this.updateArt}),r.a.createElement(g,{art:this.state.art,currentSearch:this.state.currentSearch})),r.a.createElement(p,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.f77f200a.chunk.js.map