(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{828:function(e,t,i){"use strict";i.r(t);var r=i(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"begin-block"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[e._v("#")]),e._v(" Begin-Block")]),e._v(" "),i("p",[e._v("Each abci begin block call, the historical info will get stored and pruned\naccording to the "),i("code",[e._v("HistoricalEntries")]),e._v(" parameter.")]),e._v(" "),i("h2",{attrs:{id:"historical-info-tracking"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#historical-info-tracking"}},[e._v("#")]),e._v(" Historical Info Tracking")]),e._v(" "),i("p",[e._v("If the "),i("code",[e._v("HistoricalEntries")]),e._v(" parameter is 0, then the "),i("code",[e._v("BeginBlock")]),e._v(" performs a no-op.")]),e._v(" "),i("p",[e._v("Otherwise, the latest historical info is stored under the key "),i("code",[e._v("historicalInfoKey|height")]),e._v(", while any entries older than "),i("code",[e._v("height - HistoricalEntries")]),e._v(" is deleted.\nIn most cases, this results in a single entry being pruned per block.\nHowever, if the parameter "),i("code",[e._v("HistoricalEntries")]),e._v(" has changed to a lower value there will be multiple entries in the store that must be pruned.")])])}),[],!1,null,null,null);t.default=a.exports}}]);