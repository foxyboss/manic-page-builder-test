(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{307:function(t,e,n){"use strict";n.r(e);n(32),n(53);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSIjODBFRUMwIi8+CjxwYXRoIGQ9Ik03OC4wMDAyIDQwLjM5OTdDODAuNjY2OCAzNS44NjY4IDg3LjMzMzIgMzUuODY2OCA4OS45OTk4IDQwLjM5OTdMMTE5LjA2MSA4OS44MDFDMTIxLjcyOCA5NC4zMzM5IDExOC4zOTUgMTAwIDExMy4wNjIgMTAwSDU0LjkzODNDNDkuNjA1MiAxMDAgNDYuMjcxOSA5NC4zMzM5IDQ4LjkzODUgODkuODAxTDc4LjAwMDIgNDAuMzk5N1oiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+Cg=="}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},o=n(14),component=Object(o.a)(r,(function(){this._self._c;return this._e()}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);n(32),n(53);var r=n(9),o=(n(43),{components:{SocialHead:n(307).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("README").fetch();case 3:return r=e.sent,e.abrupt("return",{page:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description}]}}}),c=n(14),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-article two-thirds column"},[e("SocialHead",{attrs:{title:t.page.title,description:t.page.description,image:"https://mrisaacs.org/nuxt-sw3cl/preview.png"}}),t._v(" "),e("div",{staticClass:"article-layer"},[e("h1",{attrs:{id:"main-title"}},[e("p",[t._v(t._s(t.page.title))])]),t._v(" "),e("p",{attrs:{id:"main-date",title:[t.page.createdAt]}},[t._v("\n      "+t._s(t.$moment(t.page.createdAt).fromNow())+"\n    ")]),t._v(" "),e("p",{attrs:{id:"main-body"}},[e("nuxt-content",{attrs:{document:t.page}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:n(307).default})}}]);