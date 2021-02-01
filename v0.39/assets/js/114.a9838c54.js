(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{669:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK Application")])],1)]),e._v(" "),a("h2",{attrs:{id:"transactions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions-2"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",[e._v("Transactions are comprised of metadata held in "),a("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("contexts")]),e._v(" and "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("messages")]),e._v(" that trigger state changes within a module through the module's "),a("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[e._v("Handler")]),e._v(".")],1),e._v(" "),a("p",[e._v("When users want to interact with an application and make state changes (e.g. sending coins), they create transactions. Each of a transaction's "),a("code",[e._v("message")]),e._v("s must be signed using the private key associated with the appropriate account(s), before the transaction is broadcasted to the network. A transaction must then be included in a block, validated, and approved by the network through the consensus process. To read more about the lifecycle of a transaction, click "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"type-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-definition"}},[e._v("#")]),e._v(" Type Definition")]),e._v(" "),a("p",[e._v("Transaction objects are SDK types that implement the "),a("code",[e._v("Tx")]),e._v(" interface")]),e._v(" "),a("p",[a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBUeCBpbnRlcmZhY2UgewoJLy8gR2V0cyB0aGUgYWxsIHRoZSB0cmFuc2FjdGlvbidzIG1lc3NhZ2VzLgoJR2V0TXNncygpIFtdTXNnCgoJLy8gVmFsaWRhdGVCYXNpYyBkb2VzIGEgc2ltcGxlIGFuZCBsaWdodHdlaWdodCB2YWxpZGF0aW9uIGNoZWNrIHRoYXQgZG9lc24ndAoJLy8gcmVxdWlyZSBhY2Nlc3MgdG8gYW55IG90aGVyIGluZm9ybWF0aW9uLgoJVmFsaWRhdGVCYXNpYygpIEVycm9yCn0="}})],1),e._v(" "),a("p",[e._v("It contains the following methods:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("GetMsgs:")]),e._v(" unwraps the transaction and returns a list of its message(s) - one transaction may have one or multiple "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("messages")]),e._v(", which are defined by module developers.")],1),e._v(" "),a("li",[a("strong",[e._v("ValidateBasic:")]),e._v(" includes lightweight, "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#types-of-checks"}},[a("em",[e._v("stateless")])]),e._v(" checks used by ABCI messages "),a("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[a("code",[e._v("CheckTx")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" to make sure transactions are not invalid. For example, the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module's "),a("code",[e._v("StdTx")]),e._v(" "),a("code",[e._v("ValidateBasic")]),e._v(" function checks that its transactions are signed by the correct number of signers and that the fees do not exceed what the user's maximum. Note that this function is to be distinct from the "),a("code",[e._v("ValidateBasic")]),e._v(" functions for "),a("em",[a("code",[e._v("messages")])]),e._v(", which perform basic validity checks on messages only. For example, when "),a("RouterLink",{attrs:{to:"/core/baseapp.html#runtx"}},[a("code",[e._v("runTx")])]),e._v(" is checking a transaction created from the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module, it first runs "),a("code",[e._v("ValidateBasic")]),e._v(" on each message, then runs the "),a("code",[e._v("auth")]),e._v(" module AnteHandler which calls "),a("code",[e._v("ValidateBasic")]),e._v(" for the transaction itself.")],1),e._v(" "),a("li",[a("strong",[e._v("TxEncoder:")]),e._v(" Nodes running the consensus engine (e.g. Tendermint Core) are responsible for gossiping transactions and ordering them into blocks, but only handle them in the generic "),a("code",[e._v("[]byte")]),e._v(" form. Transactions are always "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[e._v("marshaled")]),e._v(" (encoded) before they are relayed to nodes, which compacts them to facilitate gossiping and helps maintain the consensus engine's separation from from application logic. The Cosmos SDK allows developers to specify any deterministic encoding format for their applications; the default is Amino.")],1),e._v(" "),a("li",[a("strong",[e._v("TxDecoder:")]),e._v(" "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI"),a("OutboundLink")],1),e._v(" calls from the consensus engine to the application, such as "),a("code",[e._v("CheckTx")]),e._v(" and "),a("code",[e._v("DeliverTx")]),e._v(", are used to process transaction data to determine validity and state changes. Since transactions are passed in as "),a("code",[e._v("txBytes []byte")]),e._v(", they need to first be unmarshaled (decoded) using "),a("code",[e._v("TxDecoder")]),e._v(" before any logic is applied.")])]),e._v(" "),a("p",[e._v("The most used implementation of the "),a("code",[e._v("Tx")]),e._v(" interface is  "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/auth/types/stdtx.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("StdTx")]),e._v(" from the "),a("code",[e._v("auth")]),e._v(" module"),a("OutboundLink")],1),e._v(". As a developer, using "),a("code",[e._v("StdTx")]),e._v(" as your transaction format is as simple as importing the "),a("code",[e._v("auth")]),e._v(" module in your application (which can be done in the "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor of the application")]),e._v(")")],1),e._v(" "),a("h2",{attrs:{id:"transaction-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-process"}},[e._v("#")]),e._v(" Transaction Process")]),e._v(" "),a("p",[e._v("A transaction is created by an end-user through one of the possible "),a("a",{attrs:{href:"#interfaces"}},[e._v("interfaces")]),e._v(". In the process, two contexts and an array of "),a("a",{attrs:{href:"#messages"}},[e._v("messages")]),e._v(" are created, which are then used to "),a("a",{attrs:{href:"#transaction-generation"}},[e._v("generate")]),e._v(" the transaction itself. The actual state changes triggered by transactions are enabled by the "),a("a",{attrs:{href:"#handlers"}},[e._v("handlers")]),e._v(". The rest of the document will describe each of these components, in this order.")]),e._v(" "),a("h3",{attrs:{id:"cli-and-rest-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-and-rest-interfaces"}},[e._v("#")]),e._v(" CLI and REST Interfaces")]),e._v(" "),a("p",[e._v("Application developers create entrypoints to the application by creating a "),a("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("command-line interface")]),e._v(" and/or "),a("RouterLink",{attrs:{to:"/interfaces/rest.html"}},[e._v("REST interface")]),e._v(", typically found in the application's "),a("code",[e._v("./cmd")]),e._v(" folder. These interfaces allow users to interact with the application through command-line or through HTTP requests.")],1),e._v(" "),a("p",[e._v("For the "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#cli"}},[e._v("command-line interface")]),e._v(", module developers create subcommands to add as children to the application top-level transaction command "),a("code",[e._v("TxCmd")]),e._v(". For "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#rest"}},[e._v("HTTP requests")]),e._v(", module developers specify acceptable request types, register REST routes, and create HTTP Request Handlers.")],1),e._v(" "),a("p",[e._v("When users interact with the application's interfaces, they invoke the underlying modules' handlers or command functions, directly creating messages.")]),e._v(" "),a("h3",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Message")]),e._v("s")]),e._v(" are module-specific objects that trigger state transitions within the scope of the module they belong to. Module developers define the "),a("code",[e._v("message")]),e._v("s for their module by implementing the "),a("code",[e._v("Msg")]),e._v(" interface, and also define a "),a("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[a("code",[e._v("Handler")])]),e._v(" to process them.")],1),e._v(" "),a("p",[a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2cgaW50ZXJmYWNlIHsKCgkvLyBSZXR1cm4gdGhlIG1lc3NhZ2UgdHlwZS4KCS8vIE11c3QgYmUgYWxwaGFudW1lcmljIG9yIGVtcHR5LgoJUm91dGUoKSBzdHJpbmcKCgkvLyBSZXR1cm5zIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nIGZvciB0aGUgbWVzc2FnZSwgaW50ZW5kZWQgZm9yIHV0aWxpemF0aW9uCgkvLyB3aXRoaW4gdGFncwoJVHlwZSgpIHN0cmluZwoKCS8vIFZhbGlkYXRlQmFzaWMgZG9lcyBhIHNpbXBsZSB2YWxpZGF0aW9uIGNoZWNrIHRoYXQKCS8vIGRvZXNuJ3QgcmVxdWlyZSBhY2Nlc3MgdG8gYW55IG90aGVyIGluZm9ybWF0aW9uLgoJVmFsaWRhdGVCYXNpYygpIEVycm9yCgoJLy8gR2V0IHRoZSBjYW5vbmljYWwgYnl0ZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgTXNnLgoJR2V0U2lnbkJ5dGVzKCkgW11ieXRlCgoJLy8gU2lnbmVycyByZXR1cm5zIHRoZSBhZGRycyBvZiBzaWduZXJzIHRoYXQgbXVzdCBzaWduLgoJLy8gQ09OVFJBQ1Q6IEFsbCBzaWduYXR1cmVzIG11c3QgYmUgcHJlc2VudCB0byBiZSB2YWxpZC4KCS8vIENPTlRSQUNUOiBSZXR1cm5zIGFkZHJzIGluIHNvbWUgZGV0ZXJtaW5pc3RpYyBvcmRlci4KCUdldFNpZ25lcnMoKSBbXUFjY0FkZHJlc3MKfQ=="}})],1),e._v(" "),a("p",[a("code",[e._v("Message")]),e._v("s in a module are typically defined in a "),a("code",[e._v("msgs.go")]),e._v(" file (though not always), and one handler with multiple functions to handle each of the module's "),a("code",[e._v("message")]),e._v("s is defined in a "),a("code",[e._v("handler.go")]),e._v(" file.")]),e._v(" "),a("p",[e._v("Note: module "),a("code",[e._v("messages")]),e._v(" are not to be confused with "),a("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI Messages"),a("OutboundLink")],1),e._v(" which define interactions between the Tendermint and application layers.")]),e._v(" "),a("p",[e._v("To learn more about "),a("code",[e._v("message")]),e._v("s, click "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("While messages contain the information for state transition logic, a transaction's other metadata and relevant information are stored in the "),a("code",[e._v("TxBuilder")]),e._v(" and "),a("code",[e._v("CLIContext")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"transaction-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-generation"}},[e._v("#")]),e._v(" Transaction Generation")]),e._v(" "),a("p",[e._v("Transactions are first created by end-users through an "),a("code",[e._v("appcli tx")]),e._v(" command through the command-line or a POST request to an HTTPS server. For details about transaction creation, click "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#transaction-creation"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[a("a",{attrs:{href:"https://godoc.org/context",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Contexts")]),a("OutboundLink")],1),e._v(" are immutable objects that contain all the information needed to process a request. In the process of creating a transaction through the "),a("code",[e._v("auth")]),e._v(" module (though it is not mandatory to create transactions this way), two contexts are created: the "),a("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html#clicontext"}},[a("code",[e._v("CLIContext")])]),e._v(" and "),a("code",[e._v("TxBuilder")]),e._v(". Both are automatically generated and do not need to be defined by application developers, but do require input from the transaction creator (e.g. using flags through the CLI).")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TxBuilder")]),e._v(" contains data closely related with the processing of transactions.")]),e._v(" "),a("p",[a("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHhCdWlsZGVyIGltcGxlbWVudHMgYSB0cmFuc2FjdGlvbiBjb250ZXh0IGNyZWF0ZWQgaW4gU0RLIG1vZHVsZXMuCnR5cGUgVHhCdWlsZGVyIHN0cnVjdCB7Cgl0eEVuY29kZXIgICAgICAgICAgc2RrLlR4RW5jb2RlcgoJa2V5YmFzZSAgICAgICAgICAgIGNya2V5cy5LZXliYXNlCglhY2NvdW50TnVtYmVyICAgICAgdWludDY0CglzZXF1ZW5jZSAgICAgICAgICAgdWludDY0CglnYXMgICAgICAgICAgICAgICAgdWludDY0CglnYXNBZGp1c3RtZW50ICAgICAgZmxvYXQ2NAoJc2ltdWxhdGVBbmRFeGVjdXRlIGJvb2wKCWNoYWluSUQgICAgICAgICAgICBzdHJpbmcKCW1lbW8gICAgICAgICAgICAgICBzdHJpbmcKCWZlZXMgICAgICAgICAgICAgICBzZGsuQ29pbnMKCWdhc1ByaWNlcyAgICAgICAgICBzZGsuRGVjQ29pbnMKfQ=="}})],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("TxEncoder")]),e._v(" defined by the developer for this type of transaction. Used to encode messages before being processed by nodes running Tendermint.")]),e._v(" "),a("li",[a("code",[e._v("Keybase")]),e._v(" that manages the user's keys and is used to perform signing operations.")]),e._v(" "),a("li",[a("code",[e._v("AccountNumber")]),e._v(" from which this transaction originated.")]),e._v(" "),a("li",[a("code",[e._v("Sequence")]),e._v(", the number of transactions that the user has sent out, used to prevent replay attacks.")]),e._v(" "),a("li",[a("code",[e._v("Gas")]),e._v(' option chosen by the users for how to calculate how much gas they will need to pay. A common option is "auto" which generates an automatic estimate.')]),e._v(" "),a("li",[a("code",[e._v("GasAdjustment")]),e._v(" to adjust the estimate of gas by a scalar value, used to avoid underestimating the amount of gas required.")]),e._v(" "),a("li",[a("code",[e._v("SimulateAndExecute")]),e._v(" option to simply simulate the transaction execution without broadcasting.")]),e._v(" "),a("li",[a("code",[e._v("ChainID")]),e._v(" representing which blockchain this transaction pertains to.")]),e._v(" "),a("li",[a("code",[e._v("Memo")]),e._v(" to send with the transaction.")]),e._v(" "),a("li",[a("code",[e._v("Fees")]),e._v(", the maximum amount the user is willing to pay in fees. Alternative to specifying gas prices.")]),e._v(" "),a("li",[a("code",[e._v("GasPrices")]),e._v(", the amount per unit of gas the user is willing to pay in fees. Alternative to specifying fees.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("CLIContext")]),e._v(" is initialized using the application's "),a("code",[e._v("codec")]),e._v(" and data more closely related to the user interaction with the interface, holding data such as the output to the user and the broadcast mode. Read more about "),a("code",[e._v("CLIContext")]),e._v(" "),a("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html#clicontext"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("Every message in a transaction must be signed by the addresses specified by "),a("code",[e._v("GetSigners")]),e._v(". The signing process must be handled by a module, and the most widely used one is the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module. Signing is automatically performed when the transaction is created, unless the user choses to generate and sign separately. The "),a("code",[e._v("TxBuilder")]),e._v(" (namely, the "),a("code",[e._v("KeyBase")]),e._v(") is used to perform the signing operations, and the "),a("code",[e._v("CLIContext")]),e._v(" is used to broadcast transactions.")]),e._v(" "),a("h3",{attrs:{id:"handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlers"}},[e._v("#")]),e._v(" Handlers")]),e._v(" "),a("p",[e._v("Since "),a("code",[e._v("message")]),e._v("s are module-specific types, each module needs a "),a("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[a("code",[e._v("handler")])]),e._v(" to process all of its "),a("code",[e._v("message")]),e._v(" types and trigger state changes within the module's scope. This design puts more responsibility on module developers, allowing application developers to reuse common functionalities without having to implement state transition logic repetitively. To read more about "),a("code",[e._v("handler")]),e._v("s, click "),a("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about the "),a("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);