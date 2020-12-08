(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"show-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-game"}},[t._v("#")]),t._v(" Show Game")]),t._v(" "),a("p",[t._v("Returns json data about a single game.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("URL")])]),t._v(" "),a("p",[t._v("/api/games/:id")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Method:")])]),t._v(" "),a("p",[a("code",[t._v("GET")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("URL Params")])]),t._v(" "),a("p",[a("strong",[t._v("Required:")])]),t._v(" "),a("p",[a("code",[t._v("id=[integer]")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Data Params")])]),t._v(" "),a("p",[t._v("None")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Success Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 200 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('{"id":2,"game_name":"Game Prueba","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Error Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 404 NOT FOUND "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('{ error : "Game not found" }')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Sample Call:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"show-games"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-games"}},[t._v("#")]),t._v(" Show Games")]),t._v(" "),a("p",[t._v("Returns json data about all games.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("URL")])]),t._v(" "),a("p",[t._v("/api/games")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Method:")])]),t._v(" "),a("p",[a("code",[t._v("GET")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("URL Params")])]),t._v(" "),a("p",[t._v("None")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Data Params")])]),t._v(" "),a("p",[t._v("None")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Success Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 200 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('[{"id":2,"game_name":"Game Prueba","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}, ...')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Error Response:")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Sample Call:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"insert-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-game"}},[t._v("#")]),t._v(" Insert Game")]),t._v(" "),a("p",[t._v("Inserts a new game.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("URL")])]),t._v(" "),a("p",[t._v("/api/games")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Method:")])]),t._v(" "),a("p",[a("code",[t._v("POST")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("URL Params")])]),t._v(" "),a("p",[t._v("None")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Data Params")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('{"id":int,"game_name":string,"rating":float,"id_owner":int,"entry_date":string,"disponibility":bool,"comments":string}')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Success Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 200 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('[{"id":2,"game_name":"Game Prueba","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}, ...')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Error Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 400 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v("Error inserting game")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Sample Call:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"delete-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-game"}},[t._v("#")]),t._v(" Delete Game")]),t._v(" "),a("p",[t._v("Delete a game.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("URL")])]),t._v(" "),a("p",[t._v("/api/games/:id")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Method:")])]),t._v(" "),a("p",[a("code",[t._v("DELETE")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("URL Params")])]),t._v(" "),a("p",[a("strong",[t._v("Required:")])]),t._v(" "),a("p",[a("code",[t._v("id=[integer]")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Data Params")])]),t._v(" "),a("p",[t._v("None")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Success Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 200 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v("Game removed successfully")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Error Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 404 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v("Error removing the game, might not exist")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Sample Call:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"update-game"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-game"}},[t._v("#")]),t._v(" Update Game")]),t._v(" "),a("p",[t._v("Update an existing game.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("URL")])]),t._v(" "),a("p",[t._v("/api/games/:id")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Method:")])]),t._v(" "),a("p",[a("code",[t._v("PUT")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("URL Params")])]),t._v(" "),a("p",[a("strong",[t._v("Required:")])]),t._v(" "),a("p",[a("code",[t._v("id=[integer]")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Data Params")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('{"id":int,"game_name":string,"rating":float,"id_owner":int,"entry_date":string,"disponibility":bool,"comments":string}')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Success Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 200 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v('{"id":2,"game_name":"Game Prueba 2","rating":7.44997,"id_owner":1,"entry_date":"2020-11-02 16:56:58","disponibility":true,"comments":""}')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Error Response:")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Code:")]),t._v(" 404 "),a("br"),t._v(" "),a("strong",[t._v("Content:")]),t._v(" "),a("code",[t._v("Game not found")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Sample Call:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);