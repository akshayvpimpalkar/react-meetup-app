(this["webpackJsonpudemy-react-meetup-app"]=this["webpackJsonpudemy-react-meetup-app"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__hvIgS",image:"MeetupItem_image__3p721",content:"MeetupItem_content__vQp9o",actions:"MeetupItem_actions__22Dds"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__1OBYd",logo:"MainNavigation_logo__3EIsI",active:"MainNavigation_active__2hmQX",badge:"MainNavigation_badge__1LxVh"}},20:function(e,t,c){e.exports={list:"MeetupList_list__bESnq"}},21:function(e,t,c){e.exports={card:"Card_card__19-Nd"}},23:function(e,t,c){e.exports={main:"Layout_main__29QQi"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(19),r=c.n(n),s=(c(29),c(2)),a=c(24),o=c(11),d=c(20),j=c.n(d),l=c(12),u=c.n(l),b=c(21),h=c.n(b),p=c(0);var O=function(e){return Object(p.jsx)("div",{className:h.a.card,children:e.children})},x=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=Object(i.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1];var s={favorites:n,totalFavorites:n.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(p.jsx)(x.Provider,{value:s,children:e.children})}var v=x;var f=function(e){var t=Object(i.useContext)(v),c=t.itemIsFavorite(e.id);return Object(p.jsx)("li",{className:u.a.item,children:Object(p.jsxs)(O,{children:[Object(p.jsx)("div",{className:u.a.image,children:Object(p.jsx)("img",{src:e.image,alt:e.title})}),Object(p.jsxs)("div",{className:u.a.content,children:[Object(p.jsx)("h1",{children:e.title}),Object(p.jsx)("address",{children:e.address}),Object(p.jsx)("p",{children:e.description})]}),Object(p.jsx)("div",{className:u.a.actions,children:Object(p.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,image:e.image,title:e.title,address:e.address,description:e.description})},children:c?"Remove from Favorites":"To Favorites"})})]})})};var _=function(e){return Object(p.jsx)("ul",{className:j.a.list,children:e.meetups.map((function(e){return Object(p.jsx)(f,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var g=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),s=Object(o.a)(r,2),d=s[0],j=s[1];return Object(i.useEffect)((function(){n(!0),fetch("https://udemy-react-meetup-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(a.a)({id:c},e[c]);t.push(i)}n(!1),j(t)}))}),[]),c?Object(p.jsx)("section",{children:Object(p.jsx)("p",{children:"Loading......"})}):Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"All Meetups"}),Object(p.jsx)("ul",{children:Object(p.jsx)(_,{meetups:d})})]})},N=c(9),M=c.n(N);var F=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(p.jsx)(O,{children:Object(p.jsxs)("form",{className:M.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(p.jsxs)("div",{className:M.a.control,children:[Object(p.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(p.jsx)("input",{type:"text",id:"title",required:!0,ref:t})]}),Object(p.jsxs)("div",{className:M.a.control,children:[Object(p.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(p.jsx)("input",{type:"url",id:"image",required:!0,ref:c})]}),Object(p.jsxs)("div",{className:M.a.control,children:[Object(p.jsx)("label",{htmlFor:"address",children:"Address"}),Object(p.jsx)("input",{type:"text",id:"address",required:!0,ref:n})]}),Object(p.jsxs)("div",{className:M.a.control,children:[Object(p.jsx)("label",{htmlFor:"description",children:"Description"}),Object(p.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(p.jsx)("div",{className:M.a.actions,children:Object(p.jsx)("button",{children:"Add Meetup"})})]})})};var y=function(){var e=Object(s.f)();return Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"Add New Meetup"}),Object(p.jsx)(F,{onAddMeetup:function(t){fetch("https://udemy-react-meetup-app-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var w=function(){var e,t=Object(i.useContext)(v);return e=0===t.totalFavorites?Object(p.jsx)("p",{children:"you got no favorites yet. Start adding some?"}):Object(p.jsx)(_,{meetups:t.favorites}),Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"My Favorites"}),e]})},I=c(23),S=c.n(I),A=c(7),C=c(13),E=c.n(C);var R=function(){var e=Object(i.useContext)(v);return Object(p.jsxs)("header",{className:E.a.header,children:[Object(p.jsx)("div",{className:E.a.logo,children:"React Meetups"}),Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(A.b,{to:"/",children:"All Meetups"})}),Object(p.jsx)("li",{children:Object(p.jsx)(A.b,{to:"/new-meetup",children:"Add New Meetup"})}),Object(p.jsx)("li",{children:Object(p.jsxs)(A.b,{to:"/favorites",children:["My Favorites",Object(p.jsx)("span",{className:E.a.badge,children:e.totalFavorites})]})})]})})]})};var q=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(R,{}),Object(p.jsx)("main",{className:S.a.main,children:e.children})]})};var L=function(){return Object(p.jsx)(q,{children:Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/",exact:!0,children:Object(p.jsx)(g,{})}),Object(p.jsx)(s.a,{path:"/new-meetup",children:Object(p.jsx)(y,{})}),Object(p.jsx)(s.a,{path:"/favorites",children:Object(p.jsx)(w,{})})]})})};r.a.render(Object(p.jsx)(m,{children:Object(p.jsx)(A.a,{children:Object(p.jsx)(L,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__1ECMs",control:"NewMeetupForm_control__3jKWP",actions:"NewMeetupForm_actions__2yE0p"}}},[[36,1,2]]]);
//# sourceMappingURL=main.8b9e8316.chunk.js.map