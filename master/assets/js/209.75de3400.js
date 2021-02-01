(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{867:function(t,e,a){"use strict";a.r(e);var i=a(1),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),a("h2",{attrs:{id:"create-or-modify-delegation-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-or-modify-delegation-distribution"}},[t._v("#")]),t._v(" Create or modify delegation distribution")]),t._v(" "),a("ul",[a("li",[t._v("triggered-by: "),a("code",[t._v("staking.MsgDelegate")]),t._v(", "),a("code",[t._v("staking.MsgBeginRedelegate")]),t._v(", "),a("code",[t._v("staking.MsgUndelegate")])])]),t._v(" "),a("p",[t._v("The pool of a new delegator bond will be 0 for the height at which the bond was\nadded, or the withdrawal has taken place. This is achieved by setting\n"),a("code",[t._v("DelegationDistInfo.WithdrawalHeight")]),t._v(" to the height of the triggering transaction.")]),t._v(" "),a("h2",{attrs:{id:"commission-rate-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commission-rate-change"}},[t._v("#")]),t._v(" Commission rate change")]),t._v(" "),a("ul",[a("li",[t._v("triggered-by: "),a("code",[t._v("staking.MsgEditValidator")])])]),t._v(" "),a("p",[t._v("If a validator changes its commission rate, all commission on fees must be\nsimultaneously withdrawn using the transaction "),a("code",[t._v("TxWithdrawValidator")]),t._v(".\nAdditionally the change and associated height must be recorded in a\n"),a("code",[t._v("ValidatorUpdate")]),t._v(" state record.")]),t._v(" "),a("h2",{attrs:{id:"change-in-validator-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-in-validator-state"}},[t._v("#")]),t._v(" Change in Validator State")]),t._v(" "),a("ul",[a("li",[t._v("triggered-by: "),a("code",[t._v("staking.Slash")]),t._v(", "),a("code",[t._v("staking.UpdateValidator")])])]),t._v(" "),a("p",[t._v("Whenever a validator is slashed or enters/leaves the validator group all of the\nvalidator entitled reward tokens must be simultaneously withdrawn from\n"),a("code",[t._v("Global.Pool")]),t._v(" and added to "),a("code",[t._v("ValidatorDistInfo.Pool")]),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);