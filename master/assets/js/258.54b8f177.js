(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{773:function(e,t,a){"use strict";a.r(t);var o=a(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" "),a("code",[e._v("upgrade")])]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[a("code",[e._v("x/upgrade")]),e._v(" is an implementation of a Cosmos SDK module that facilitates smoothly\nupgrading a live Cosmos chain to a new (breaking) software version. It accomplishes this by\nproviding a "),a("code",[e._v("BeginBlocker")]),e._v(" hook that prevents the blockchain state machine from\nproceeding once a pre-defined upgrade block time or height has been reached.")]),e._v(" "),a("p",[e._v("The module does not prescribe anything regarding how governance decides to do an\nupgrade, but just the mechanism for coordinating the upgrade safely. Without software\nsupport for upgrades, upgrading a live chain is risky because all of the validators\nneed to pause their state machines at exactly the same point in the process. If\nthis is not done correctly, there can be state inconsistencies which are hard to\nrecover from.")]),e._v(" "),a("ol",[a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/upgrade/01_concepts.html"}},[e._v("Concepts")])],1)]),e._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/upgrade/02_state.html"}},[e._v("State")])],1)]),e._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/upgrade/03_events.html"}},[e._v("Events")])],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);