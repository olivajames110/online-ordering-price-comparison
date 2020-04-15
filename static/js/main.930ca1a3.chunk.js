(this["webpackJsonpprice-comparison"]=this["webpackJsonpprice-comparison"]||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(7),i=n.n(c),l=(n(13),n(1)),o=n(2),s=n(4),m=n(3),u=n(5),p=(n(14),function(e){var a=e.dynamicNumber/e.maxAmt*100,n=e.title,t=e.description,c=e.minAmt,i=e.maxAmt,l=e.defaultValue,o=e.numberValueDesc,s=e.dynamicNumber,m=e.handleNumberUpdate,u="linear-gradient(90deg, var(--priceCalcSliderGreen) ".concat(a,"%, rgb(215, 220, 223) ").concat(a,"%)");return r.a.createElement("div",{className:"range-slider-wrapper"},r.a.createElement("div",{className:"upper-portion"},r.a.createElement("div",{className:"range-description"},r.a.createElement("h2",null,n),r.a.createElement("span",null,t),r.a.createElement("span",{onChange:e.updateFillAmt,className:"dynamic-number-value"},r.a.createElement("span",null,e.isPercent?"$":null,s)),r.a.createElement("span",null,o))),r.a.createElement("div",{className:"input-slider-portion____"},r.a.createElement("input",{onChange:m,className:"range-slider__range",type:"range",defaultValue:l,min:c,max:i,style:{background:u}}),r.a.createElement("div",{className:"box-minmax-key"},r.a.createElement("span",null,e.isPercent?"$":null,c),r.a.createElement("span",null,e.isPercent?"$":null,i))))}),d=function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).convertFeeNumber=function(e,a){return console.log(e,a),a?"".concat(100*e,"%"):"$".concat(e)},n}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.companies,n=a.map((function(a){return r.a.createElement("div",{className:"competitor-container"},r.a.createElement("span",null,a.name),r.a.createElement("span",{className:"competitor-commission-amt"},e.convertFeeNumber(a.fee,a.isPercent),a.specialInformation?r.a.createElement("span",{className:"special-information"},a.specialInformation):null),r.a.createElement("span",{style:{color:"var(--priceCalcCompRed)"}},"$",a.annualCost.toLocaleString()),r.a.createElement("span",{style:{color:"var(--priceCalcCompGreen)"}},"$",a.annualCost-1188<=0?0:(a.annualCost-1188).toLocaleString()))}));return r.a.createElement("div",{className:"competitor-wrapper"},r.a.createElement("div",{className:"companies"},r.a.createElement("div",{className:"companies-table-title"},r.a.createElement("h3",null,"Online Ordering Company"),r.a.createElement("h3",null,"Per Order Fee"),r.a.createElement("h3",null,"Annual Cost From Fees"),r.a.createElement("h3",null,"Savings With Ordereze")),n))}}]),a}(t.Component),h=(n(15),function(e){function a(){var e,n;Object(l.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={pricePerOrder:100,ordersPerWeek:50,companies:[]},n.updatePricePerOrder=function(e){var a=e.target.value;n.setState({pricePerOrder:e.target.value}),n.handleAnnualCost(a,n.state.ordersPerWeek)},n.updateOrdersPerWeek=function(e){var a=e.target.value;n.setState({ordersPerWeek:e.target.value}),n.handleAnnualCost(n.state.pricePerOrder,a)},n.handleAnnualCost=function(e,a){var t=e*a,r=52*a;n.setState({companies:[{name:"GrubHub",fee:.2,specialInformation:!1,isPercent:!0,annualCost:10.4*t},{name:"Eat Street",fee:.12,specialInformation:!1,isPercent:!0,annualCost:6.24*t},{name:"Menufy",fee:1.5,specialInformation:"Passed To Customer",isPercent:!1,annualCost:1.5*r},{name:"Uber Eats",fee:.3,specialInformation:!1,isPercent:!0,annualCost:15.6*t},{name:"Door Dash",fee:.2,specialInformation:!1,isPercent:!0,annualCost:10.4*t},{name:"Chow Now",fee:119,specialInformation:"Requires Annual Contract",isPercent:!1,annualCost:1428},{name:"BentoBox",fee:.99,specialInformation:!1,isPercent:!1,annualCost:.99*r},{name:"Slice",fee:1.95,specialInformation:!1,isPercent:!1,annualCost:Math.round(1.95*r)}]})},n}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handleAnnualCost(this.state.pricePerOrder,this.state.ordersPerWeek)}},{key:"render",value:function(){return r.a.createElement(t.Fragment,null,r.a.createElement("div",{class:"range-widget-container"},r.a.createElement("div",{className:"bg"}),r.a.createElement("div",{className:"range-widget-container"},r.a.createElement("div",{className:"intro-header"},r.a.createElement("h1",null,"See Your Savings"),r.a.createElement("h3",{className:"description"},"How much money are you giving away to various third-party online ordering companies?")),r.a.createElement("div",{className:"range-container"},r.a.createElement(p,{title:"Order Price",description:"The average price of an order placed online is about",minAmt:"0",maxAmt:"200",defaultValue:this.state.pricePerOrder,numberValueDesc:"per order.",dynamicNumber:this.state.pricePerOrder,handleNumberUpdate:this.updatePricePerOrder,isPercent:!0}),r.a.createElement(p,{title:"Order Quantity",description:"In one week, I typically receive an average of about",minAmt:"0",maxAmt:"500",defaultValue:this.state.ordersPerWeek,numberValueDesc:"online orders.",dynamicNumber:this.state.ordersPerWeek,handleNumberUpdate:this.updateOrdersPerWeek,isPercent:!1})),r.a.createElement(d,{companies:this.state.companies}))))}}]),a}(t.Component));n(16);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.930ca1a3.chunk.js.map