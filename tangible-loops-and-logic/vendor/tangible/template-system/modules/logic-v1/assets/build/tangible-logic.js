var ne=Object.defineProperty;var g=(w,u)=>ne(w,"name",{value:u,configurable:!0});(function(){"use strict";(function(){const c={NODE_ENV:"production"};try{if(process){process.env=Object.assign({},process.env),Object.assign(process.env,c);return}}catch{}globalThis.process={env:c}})();var w=Object.defineProperty,u=g((c,_)=>w(c,"name",{value:_,configurable:!0}),"c");jQuery(document).ready(function(c){var _=c("html"),E=c("body"),S=c('<div id="tangible-logic-root"></div>');E.append(S),E.on("click",'[data-tangible-logic="open"]',function(){var i=c(this).parent().find('[data-tangible-logic="input"]');if(!i.length){console.warn("tangible/logic - Input field not found");return}var l=i.data("tangibleLogicConfig");if(typeof l=="string")try{l=JSON.parse(l)}catch{console.warn("tangible/logic - Config failed to parse",l),l=[]}var e=i.val(),n=[];if(e){try{n=JSON.parse(e)}catch{console.warn("tangible/logic - Input value failed to parse",e),n=[]}typeof n=="string"&&(n=[])}G(i,n,l)});var U="tangible-logic-open",q="tangible-logic-hide-scrollbar";function L(){S.removeClass(U),S.empty(),_.removeClass(q)}g(L,"M"),u(L,"closeUI");var ee='<div class="tangible-logic-modal-actions tangible-logic-clear"><button type="button" class="tangible-logic-button" data-tangible-logic="save">Save</button><button type="button" class="tangible-logic-button" data-tangible-logic="close">Cancel</button></div>';function G(i,l,e){_.addClass(q);var n=c('<div class="tangible-logic-modal"><form>'+Q(l,e)+ee+"</form></div>");S.append(n),S.addClass(U);var a=n.find("form");a.find('[data-tangible-logic="close"]').on("click",L),a.find('[data-tangible-logic="save"]').on("click",function(){X(a,i),L()});var t=a.find(".tangible-logic-rule-groups");a.find('[data-tangible-logic="add-rule-group"]').on("click",function(){var d=C([{}],e);t.append(d)}),a.on("click",'[data-tangible-logic="add-rule"]',function(){var d=c(this).closest(".tangible-logic-rule-group").find(".tangible-logic-rule-group-rules"),b=D({},e);d.append(b)}),a.on("click",'[data-tangible-logic="remove-rule"]',function(){var d=c(this).closest(".tangible-logic-rule"),b=d.closest(".tangible-logic-rule-group-rules");d.remove();var p=b.find(".tangible-logic-rule");p.length||b.closest(".tangible-logic-rule-group").remove()}),e.fieldMap=H(e);var o=".tangible-logic-rule-field-select";a.find(o).each(function(){A(c(this),e)}),a.on("change",o,function(d){A(c(this),e)});var r=".tangible-logic-rule-operand-select";a.on("change",r,function(d){P(c(this),e)})}g(G,"Q"),u(G,"openUI");function H(i){var l={};return c.each(i.fields||[],function(e,n){l[n.name]=n}),l}g(H,"z"),u(H,"buildFieldMap");function Q(i,l){var e="";return l.title&&(e+='<div class="tangible-logic-title">'+l.title+"</div>"),l.description&&(e+='<div class="tangible-logic-description">'+l.description+"</div>"),e+='<div class="tangible-logic-rule-groups">',i.length?c.each(i,function(n,a){e+=C(a,l)}):e+=C([{}],l),e+="</div>",e+='<div class="tangible-logic-modal-actions tangible-logic-clear"><button type="button" class="tangible-logic-button" data-tangible-logic="add-rule-group">Add rule group</button></div>',e}g(Q,"E"),u(Q,"buildFormFields");function C(i,l){var e="";return e+='<div class="tangible-logic-rule-group"><div class="tangible-logic-rule-group-separator tangible-logic-clear"><div class="tangible-logic-rule-column">or</div></div>',e+='<div class="tangible-logic-rule-group-box">',e+='<div class="tangible-logic-rule-group-rules">',c.each(i,function(n,a){e+=D(a,l)}),e+="</div>",e+='<div class="tangible-logic-modal-actions tangible-logic-clear"><button type="button" class="tangible-logic-button" data-tangible-logic="add-rule">Add rule</button></div>',e+="</div></div>",e}g(C,"k"),u(C,"buildRuleGroup");function D(i,l){var e="tangible_logic[][][field]",n=`<div class="tangible-logic-rule tangible-logic-clear" data-tangible-logic-rule-data='`+B(JSON.stringify(i||{}))+`'><div class="tangible-logic-rule-columns">`+O("field",K(e,i,l))+'</div><div class="tangible-logic-rule-actions"><button type="button" class="tangible-logic-action-icon" data-tangible-logic="remove-rule">Remove</button></div></div>';return n}g(D,"V"),u(D,"buildRule");function O(i,l){return'<div class="tangible-logic-rule-column tangible-logic-rule-'+i+'"><div class="tangible-logic-rule-column-content">'+l+"</div></div>"}g(O,"x"),u(O,"buildRuleColumn");function z(i,l,e){var n=i.replace("[field]","[operand]");if(!e||!e.length)return"";var a=!1;for(let t=0,o=e.length;t<o;t++)e[t].name===l.operand&&(a=!0);return!a&&e[0]&&e[0].name&&(l.operand=e[0].name),R(n,l.operand,e,"operand")}g(z,"X"),u(z,"buildOperandSelect");function F(i,l,e,n,a=0){if(!e)return"";var t="value"+(a?"_"+a:""),o=i.replace("[field]","["+t+"]");if(e[0]&&e[0].type){var r=e[0];if((l[t]===void 0||l[t]==="")&&r.default!==void 0&&(l[t]=r.default),r.type==="number")return V(o,l[t],r,"value",t);if(r.type==="text")return j(o,l[t],r,"value",t);r.type==="select"&&(e=r.options)}var d=[];return c.each(e,function(b,p){var v=!0;p.operands&&(v=p.operands.indexOf(n)>=0),p.excludeOperands&&(v=p.excludeOperands.indexOf(n)<0),v&&d.push(p)}),d.length?R(o,l[t],d,"value",t):""}g(F,"G"),u(F,"buildValueSelect");function K(i,l,e){return R(i,l.field,e.fields,"field")}g(K,"Y"),u(K,"buildFieldSelect");function W(i,l,e,n=0){if(!e)return"";var a="field"+(n?"_"+n:""),t=i.replace("[field]","["+a+"]");if(e.type){var o=e;if((l[a]===void 0||l[a]==="")&&o.default!==void 0&&(l[a]=o.default),o.type==="number")return V(t,l[a],o,"subfield",a);if(o.type==="text")return j(t,l[a],o,"subfield",a);o.type==="select"&&(e=o.options)}return R(t,l[a],e,"subfield",a)}g(W,"Z"),u(W,"buildSubfieldSelect");function R(i,l,e,n,a){var t='<select name="'+i+'"';n&&(t+=' class="tangible-logic-rule-input tangible-logic-rule-'+n+'-select" data-tangible-logic-rule-input-name="'+(a||n)+'"'),t+=">";var o=l!==void 0,r=[];return!o&&n==="field"&&r.push({name:"",label:"Choose.."}),r=r.concat(e||[]),c.each(r,function(d,b){if(b){var p=!d&&!o||b.name.toString()===l;t+='<option value="'+b.name+'"'+(p?' selected="selected"':"")+">"+b.label+"</option>"}}),t+="</select>",t}g(R,"R"),u(R,"buildSelect");function V(i,l,e,n,a){c.isNumeric(l)||(l=0);var t='<input type="number" name="'+i+'"';return n&&(t+=' class="tangible-logic-rule-input tangible-logic-rule-'+n+'-select" data-tangible-logic-rule-input-name="'+(a||n)+'"'),t+=' value="'+(l!==void 0?l:0)+'" min="'+(e.min!==void 0?e.min:0)+'"',e.max&&(t+=' max="'+e.max+'"'),e.step&&(t+=' step="'+e.step+'"'),t+=" />",e.unit&&(typeof e.unit=="string"?t+='<span class="tangible-logic-rule-value-unit">'+e.unit+"</span>":(t+='<select name="'+i+'_unit" class="tangible-logic-rule-input tangible-logic-rule-'+n+'-unit-select" data-tangible-logic-rule-input-name="'+(a||n)+'_unit">',c.each(e.unit,function(o,r){typeof r=="string"&&(r={name:r,label:r}),t+='<option value="'+r.name+'"'+(o?"":' selected="selected"')+">"+r.label+"</option>"}),t+="</select>")),'<div class="tangible-logic-rule-number-input-wrap">'+t+"</div>"}g(V,"A"),u(V,"buildNumberInput");function j(i,l="",e,n,a){var t='<input type="text" name="'+i+'"';return n&&(t+=' class="tangible-logic-rule-input tangible-logic-rule-'+n+'-select" data-tangible-logic-rule-input-name="'+(a||n)+'"'),t+=' value="'+B(l)+'"'+(e.placeholder?' placeholder="'+e.placeholder+'"':"")+" />",t}g(j,"H"),u(j,"buildTextInput");function J(i,l){var e=i[l+"_label"]||"";return e&&'<label class="tangible-logic-rule-input-label">'+e+"</label>"}g(J,"J"),u(J,"buildInputLabel");function M(i,l){var e=i[l+"_description"]||"";return e&&'<div class="tangible-logic-rule-input-description">'+e+"</div>"}g(M,"B"),u(M,"buildInputDescription");function A(i,l){var e=i.attr("name"),n=i.val(),a=i.closest(".tangible-logic-rule"),t=a.find(".tangible-logic-rule-columns"),o=a.find(".tangible-logic-rule-subfield"),r=a.find(".tangible-logic-rule-operand"),d=a.find(".tangible-logic-rule-value"),b=a.find(".tangible-logic-rule-subvalue");if(o.remove(),r.remove(),d.remove(),b.remove(),!!n){var p=a.data("tangibleLogicRuleData")||{},v=l.fieldMap[n]||{},s=a.find(".tangible-logic-rule-field .tangible-logic-rule-column-content"),x=J(v,"field"),I=M(v,"field");s.find(".tangible-logic-rule-input-label").remove(),s.find(".tangible-logic-rule-input-description").remove(),x&&s.prepend(c(x)),I&&s.append(c(I));for(let y=0;y<3;y++){const N=y+2,k="field_"+N,m=v[k];if(!m)break;t.append(O("subfield",W(e,p,m,N)))}v.operands&&t.append(O("operand",z(e,p,v.operands))),P(t.find(".tangible-logic-rule-operand-select"),l,a)}}g(A,"P"),u(A,"updateRuleBasedOnField");function P(i,l,e){var n,a;if(i.length)n=i.closest(".tangible-logic-rule"),a=i.val();else{if(!e)return;n=e,a=""}var t=n.find(".tangible-logic-rule-columns"),o=n.find(".tangible-logic-rule-field-select"),r=o.attr("name"),d=o.val();if(!d)return;var b=n.data("tangibleLogicRuleData")||{};n.data("tangibleLogicRuleData",{});var p=n.find(".tangible-logic-rule-value");p.length&&(b.value=p.find(".tangible-logic-rule-value-select").val());var v=n.find(".tangible-logic-rule-subvalue");v.each(function(f){c(this).find(".tangible-logic-rule-input").each(function(){var h=c(this),ie=h.data("tangibleLogicRuleInputName");b[ie]=h.val()})}),p.remove(),v.remove();var s=l.fieldMap[d]||{};if(!s.values)return;if(a&&s.operands){for(let f=0,h=s.operands.length;f<h;f++)if(!(!s.operands[f]||s.operands[f].name!==a)){if(s.operands[f].value===!1)return;break}}function x(f,h){return J(s,f)+h+M(s,f)}g(x,"S"),u(x,"withLabel");const I=O("value",x("values",F(r,b,s.values,a)));s.values.length>0&&s.values[0].hasOwnProperty("before_operand")&&s.values[0].before_operand===!0?n.find(".tangible-logic-rule-operand").before(I):t.append(I);let y=T(s.values,"values",[]);for(let f=0;f<3;f++){var N=f+2,k="values_"+N,m=s[k];if(!m)break;const h=O("subvalue",x(k,F(r,b,m,a,N)));m.length>0&&m[0].hasOwnProperty("before_operand")&&m[0].before_operand===!0?n.find(".tangible-logic-rule-operand").before(h):t.append(h),y=T(m,k,y)}Z(y,n)}g(P,"U"),u(P,"updateRuleBasedOnOperand");function X(i,l){var e=Y(i);console.log("Tangible logic form result",e),e=JSON.stringify(e),l.val(e),l.trigger("change")}g(X,"W"),u(X,"saveForm");function Y(i){var l=[];return i.find(".tangible-logic-rule-group").each(function(){var e=c(this).find(".tangible-logic-rule"),n=[];e.each(function(){var a={};c(this).find(".tangible-logic-rule-input").each(function(){var t=c(this),o=t.data("tangibleLogicRuleInputName"),r=t.val();r!==""&&(a[o]=r)}),n.push(a)}),l.push(n)}),l}g(Y,"D"),u(Y,"getFormData");function T(i,l,e){if(i[0]===void 0||i[0].type===void 0||i[0].visibility===void 0)return e;var n=i[0].visibility;return e.push({name:l,config:n}),e}g(T,"j"),u(T,"addVisibility");function Z(i,l){for(let e=0;e<i.length;e++)$(i[e].name,i[e].config,l)}g(Z,"$"),u(Z,"applyVisibilities");function $(i,l,e){let n=!1;for(let t=0;t<l.length;t++){let o=e.find('select[name="tangible_logic[][]['+l[t].field.replace("s","")+']"]');(l[t].value.constructor===Array&&l[t].value.indexOf(o.val())!==-1||l[t].value===o.val())&&(n=!0)}let a=e.find('select[name="tangible_logic[][]['+i.replace("s","")+']"]').parent().parent();n!==!1?a.show():a.hide()}g($,"T"),u($,"applyVisibility");const le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function B(i){return String(i).replace(/[&<>"'`=\/]/g,function(l){return le[l]})}g(B,"q"),u(B,"escapeHtml")})})();
