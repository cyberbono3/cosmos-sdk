(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{831:function(e,t,a){"use strict";a.r(t);var i=a(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("In this section we describe the processing of the staking messages and the corresponding updates to the state. All created/modified state objects specified by each message are defined within the "),a("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html"}},[e._v("state")]),e._v(" section.")],1),e._v(" "),a("h2",{attrs:{id:"msgcreatevalidator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgcreatevalidator"}},[e._v("#")]),e._v(" MsgCreateValidator")]),e._v(" "),a("p",[e._v("A validator is created using the "),a("code",[e._v("MsgCreateValidator")]),e._v(" message.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dDcmVhdGVWYWxpZGF0b3Igc3RydWN0IHsKICAgIERlc2NyaXB0aW9uICAgIERlc2NyaXB0aW9uCiAgICBDb21taXNzaW9uICAgICBDb21taXNzaW9uCgogICAgRGVsZWdhdG9yQWRkciAgc2RrLkFjY0FkZHJlc3MKICAgIFZhbGlkYXRvckFkZHIgIHNkay5WYWxBZGRyZXNzCiAgICBQdWJLZXkgICAgICAgICBjcnlwdG8uUHViS2V5CiAgICBEZWxlZ2F0aW9uICAgICBzZGsuQ29pbgp9Cg=="}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("another validator with this operator address is already registered")]),e._v(" "),a("li",[e._v("another validator with this pubkey is already registered")]),e._v(" "),a("li",[e._v("the initial self-delegation tokens are of a denom not specified as the bonding denom")]),e._v(" "),a("li",[e._v("the commission parameters are faulty, namely:\n"),a("ul",[a("li",[a("code",[e._v("MaxRate")]),e._v(" is either > 1 or < 0")]),e._v(" "),a("li",[e._v("the initial "),a("code",[e._v("Rate")]),e._v(" is either negative or > "),a("code",[e._v("MaxRate")])]),e._v(" "),a("li",[e._v("the initial "),a("code",[e._v("MaxChangeRate")]),e._v(" is either negative or > "),a("code",[e._v("MaxRate")])])])]),e._v(" "),a("li",[e._v("the description fields are too large")])]),e._v(" "),a("p",[e._v("This message creates and stores the "),a("code",[e._v("Validator")]),e._v(" object at appropriate indexes.\nAdditionally a self-delegation is made with the initial tokens delegation\ntokens "),a("code",[e._v("Delegation")]),e._v(". The validator always starts as unbonded but may be bonded\nin the first end-block.")]),e._v(" "),a("h2",{attrs:{id:"msgeditvalidator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgeditvalidator"}},[e._v("#")]),e._v(" MsgEditValidator")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Description")]),e._v(", "),a("code",[e._v("CommissionRate")]),e._v(" of a validator can be updated using the\n"),a("code",[e._v("MsgEditCandidacy")]),e._v(".")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dFZGl0Q2FuZGlkYWN5IHN0cnVjdCB7CiAgICBEZXNjcmlwdGlvbiAgICAgRGVzY3JpcHRpb24KICAgIFZhbGlkYXRvckFkZHIgICBzZGsuVmFsQWRkcmVzcwogICAgQ29tbWlzc2lvblJhdGUgIHNkay5EZWMKfQo="}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the initial "),a("code",[e._v("CommissionRate")]),e._v(" is either negative or > "),a("code",[e._v("MaxRate")])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("CommissionRate")]),e._v(" has already been updated within the previous 24 hours")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("CommissionRate")]),e._v(" is > "),a("code",[e._v("MaxChangeRate")])]),e._v(" "),a("li",[e._v("the description fields are too large")])]),e._v(" "),a("p",[e._v("This message stores the updated "),a("code",[e._v("Validator")]),e._v(" object.")]),e._v(" "),a("h2",{attrs:{id:"msgdelegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgdelegate"}},[e._v("#")]),e._v(" MsgDelegate")]),e._v(" "),a("p",[e._v("Within this message the delegator provides coins, and in return receives\nsome amount of their validator's (newly created) delegator-shares that are\nassigned to "),a("code",[e._v("Delegation.Shares")]),e._v(".")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dEZWxlZ2F0ZSBzdHJ1Y3QgewogIERlbGVnYXRvckFkZHIgc2RrLkFjY0FkZHJlc3MKICBWYWxpZGF0b3JBZGRyIHNkay5WYWxBZGRyZXNzCiAgQW1vdW50ICAgICAgICBzZGsuQ29pbgp9Cg=="}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the validator is does not exist")]),e._v(" "),a("li",[e._v("the validator is jailed")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Amount")]),e._v(" "),a("code",[e._v("Coin")]),e._v(" has a denomination different than one defined by "),a("code",[e._v("params.BondDenom")])])]),e._v(" "),a("p",[e._v("If an existing "),a("code",[e._v("Delegation")]),e._v(" object for provided addresses does not already\nexist than it is created as part of this message otherwise the existing\n"),a("code",[e._v("Delegation")]),e._v(" is updated to include the newly received shares.")]),e._v(" "),a("h2",{attrs:{id:"msgbeginunbonding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgbeginunbonding"}},[e._v("#")]),e._v(" MsgBeginUnbonding")]),e._v(" "),a("p",[e._v("The begin unbonding message allows delegators to undelegate their tokens from\nvalidator.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dCZWdpblVuYm9uZGluZyBzdHJ1Y3QgewogIERlbGVnYXRvckFkZHIgc2RrLkFjY0FkZHJlc3MKICBWYWxpZGF0b3JBZGRyIHNkay5WYWxBZGRyZXNzCiAgQW1vdW50ICAgICAgICAgc2RrLkNvaW4KfQo="}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the delegation doesn't exist")]),e._v(" "),a("li",[e._v("the validator doesn't exist")]),e._v(" "),a("li",[e._v("the delegation has less shares than the ones worth of "),a("code",[e._v("Amount")])]),e._v(" "),a("li",[e._v("existing "),a("code",[e._v("UnbondingDelegation")]),e._v(" has maximum entries as defined by "),a("code",[e._v("params.MaxEntries")])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Amount")]),e._v(" has a denomination different than one defined by "),a("code",[e._v("params.BondDenom")])])]),e._v(" "),a("p",[e._v("When this message is processed the following actions occur:")]),e._v(" "),a("ul",[a("li",[e._v("validator's "),a("code",[e._v("DelegatorShares")]),e._v(" and the delegation's "),a("code",[e._v("Shares")]),e._v(" are both reduced by the message "),a("code",[e._v("SharesAmount")])]),e._v(" "),a("li",[e._v("calculate the token worth of the shares remove that amount tokens held within the validator")]),e._v(" "),a("li",[e._v("with those removed tokens, if the validator is:\n"),a("ul",[a("li",[a("code",[e._v("Bonded")]),e._v(" - add them to an entry in "),a("code",[e._v("UnbondingDelegation")]),e._v(" (create "),a("code",[e._v("UnbondingDelegation")]),e._v(" if it doesn't exist) with a completion time a full unbonding period from the current time. Update pool shares to reduce BondedTokens and increase NotBondedTokens by token worth of the shares.")]),e._v(" "),a("li",[a("code",[e._v("Unbonding")]),e._v(" - add them to an entry in "),a("code",[e._v("UnbondingDelegation")]),e._v(" (create "),a("code",[e._v("UnbondingDelegation")]),e._v(" if it doesn't exist) with the same completion time as the validator ("),a("code",[e._v("UnbondingMinTime")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("Unbonded")]),e._v(" - then send the coins the message "),a("code",[e._v("DelegatorAddr")])])])]),e._v(" "),a("li",[e._v("if there are no more "),a("code",[e._v("Shares")]),e._v(" in the delegation, then the delegation object is removed from the store\n"),a("ul",[a("li",[e._v("under this situation if the delegation is the validator's self-delegation then also jail the validator.")])])])]),e._v(" "),a("h2",{attrs:{id:"msgbeginredelegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgbeginredelegate"}},[e._v("#")]),e._v(" MsgBeginRedelegate")]),e._v(" "),a("p",[e._v("The redelegation command allows delegators to instantly switch validators. Once\nthe unbonding period has passed, the redelegation is automatically completed in\nthe EndBlocker.")]),e._v(" "),a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dCZWdpblJlZGVsZWdhdGUgc3RydWN0IHsKICBEZWxlZ2F0b3JBZGRyICAgIHNkay5BY2NBZGRyZXNzCiAgVmFsaWRhdG9yU3JjQWRkciBzZGsuVmFsQWRkcmVzcwogIFZhbGlkYXRvckRzdEFkZHIgc2RrLlZhbEFkZHJlc3MKICBBbW91bnQgICAgICAgICAgIHNkay5Db2luCn0K"}}),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("the delegation doesn't exist")]),e._v(" "),a("li",[e._v("the source or destination validators don't exist")]),e._v(" "),a("li",[e._v("the delegation has less shares than the ones worth of "),a("code",[e._v("Amount")])]),e._v(" "),a("li",[e._v("the source validator has a receiving redelegation which is not matured (aka. the redelegation may be transitive)")]),e._v(" "),a("li",[e._v("existing "),a("code",[e._v("Redelegation")]),e._v(" has maximum entries as defined by "),a("code",[e._v("params.MaxEntries")])]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("Amount")]),e._v(" "),a("code",[e._v("Coin")]),e._v(" has a denomination different than one defined by "),a("code",[e._v("params.BondDenom")])])]),e._v(" "),a("p",[e._v("When this message is processed the following actions occur:")]),e._v(" "),a("ul",[a("li",[e._v("the source validator's "),a("code",[e._v("DelegatorShares")]),e._v(" and the delegations "),a("code",[e._v("Shares")]),e._v(" are both reduced by the message "),a("code",[e._v("SharesAmount")])]),e._v(" "),a("li",[e._v("calculate the token worth of the shares remove that amount tokens held within the source validator.")]),e._v(" "),a("li",[e._v("if the source validator is:\n"),a("ul",[a("li",[a("code",[e._v("Bonded")]),e._v(" - add an entry to the "),a("code",[e._v("Redelegation")]),e._v(" (create "),a("code",[e._v("Redelegation")]),e._v(" if it doesn't exist) with a completion time a full unbonding period from the current time. Update pool shares to reduce BondedTokens and increase NotBondedTokens by token worth of the shares (this may be effectively reversed in the next step however).")]),e._v(" "),a("li",[a("code",[e._v("Unbonding")]),e._v(" - add an entry to the "),a("code",[e._v("Redelegation")]),e._v(" (create "),a("code",[e._v("Redelegation")]),e._v(" if it doesn't exist) with the same completion time as the validator ("),a("code",[e._v("UnbondingMinTime")]),e._v(").")]),e._v(" "),a("li",[a("code",[e._v("Unbonded")]),e._v(" - no action required in this step")])])]),e._v(" "),a("li",[e._v("Delegate the token worth to the destination validator, possibly moving  tokens back to the bonded state.")]),e._v(" "),a("li",[e._v("if there are no more "),a("code",[e._v("Shares")]),e._v(" in the source delegation, then the source delegation object is removed from the store\n"),a("ul",[a("li",[e._v("under this situation if the delegation is the validator's self-delegation then also jail the validator.")])])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);