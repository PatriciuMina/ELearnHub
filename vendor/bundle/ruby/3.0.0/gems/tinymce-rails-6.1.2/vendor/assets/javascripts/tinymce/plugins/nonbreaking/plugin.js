/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=n=>e=>typeof e===n,a=e("boolean"),o=e("number"),t=n=>e=>e.options.get(n),i=t("nonbreaking_force_tab"),r=t("nonbreaking_wrap"),s=(n,e)=>{let a="";for(let o=0;o<e;o++)a+=n;return a},c=(n,e)=>{const a=r(n)||n.plugins.visualchars?`<span class="${(n=>!!n.plugins.visualchars&&n.plugins.visualchars.isEnabled())(n)?"mce-nbsp-wrap mce-nbsp":"mce-nbsp-wrap"}" contenteditable="false">${s("&nbsp;",e)}</span>`:s("&nbsp;",e);n.undoManager.transact((()=>n.insertContent(a)))};var l=tinymce.util.Tools.resolve("tinymce.util.VK");n.add("nonbreaking",(n=>{(n=>{const e=n.options.register;e("nonbreaking_force_tab",{processor:n=>a(n)?{value:n?3:0,valid:!0}:o(n)?{value:n,valid:!0}:{valid:!1,message:"Must be a boolean or number."},default:!1}),e("nonbreaking_wrap",{processor:"boolean",default:!0})})(n),(n=>{n.addCommand("mceNonBreaking",(()=>{c(n,1)}))})(n),(n=>{const e=()=>n.execCommand("mceNonBreaking");n.ui.registry.addButton("nonbreaking",{icon:"non-breaking",tooltip:"Nonbreaking space",onAction:e}),n.ui.registry.addMenuItem("nonbreaking",{icon:"non-breaking",text:"Nonbreaking space",onAction:e})})(n),(n=>{const e=i(n);e>0&&n.on("keydown",(a=>{if(a.keyCode===l.TAB&&!a.isDefaultPrevented()){if(a.shiftKey)return;a.preventDefault(),a.stopImmediatePropagation(),c(n,e)}}))})(n)}))}();