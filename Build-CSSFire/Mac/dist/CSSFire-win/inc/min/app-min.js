$(document).ready(function(){var e=ace.edit("editor");theme=localStorage.getItem("theme"),""==theme&&(theme="ace/theme/clouds"),e.setTheme(theme),e.getSession().setMode("ace/mode/html"),e.getSession().setUseWrapMode(!1);var t=ace.edit("newHTMLEditor");t.setTheme(theme),t.getSession().setMode("ace/mode/html"),t.getSession().setUseWrapMode(!1);var s=ace.edit("cssClassesEditor");s.setTheme(theme),s.getSession().setMode("ace/mode/css"),s.getSession().setUseWrapMode(!1),$("#aceTheme option").prop("selected",!1).filter('[value="'+theme+'"]').prop("selected",!0),$("#cleanBox").fadeOut(1e3),$("#cleanNow").click(function(){prepend=$("#prependID").val(),""==prepend&&(prepend="cssFire"),htmlTags="",$("#addTag").is(":checked")&&(htmlTags="checked"),addID="",$("#addID").is(":checked")&&(addID="checked"),oldHTML=e.getValue(),$("#iframe").contents().find("body").html(oldHTML),i=0,$("#cssClassesPrepare").html("");var a=$("#iframe").contents().find("[style]").length;$("#iframe").contents().find("[style]").each(function(e){i+=1,tag=$(this).prop("tagName").toLowerCase(),cssClass="checked"==htmlTags?prepend+i+"_"+tag:prepend+i,html_id=$(this).attr("id")?$(this).attr("id"):"",cssClass="checked"==addID&&""!=html_id?"checked"==htmlTags?prepend+i+"_"+html_id+"_"+tag:prepend+i+"_"+html_id:"checked"==htmlTags?prepend+i+"_"+tag:prepend+i,$(this).addClass(cssClass),styles=$(this).attr("style"),e===a-1?$("#minify").is(":checked")?(styles=styles.replace(/ {2,}/g," "),minifyCSS=styles.split("; ").join(";"),minifyCSS=minifyCSS.split(";").join(";"),finalCSS="."+cssClass+" { "+minifyCSS+" }\n",$(this).removeAttr("style"),finalCSS=finalCSS.replace(/^\s*\n/gm,""),finalCSS=finalCSS.trim(),$("#cssClassesPrepare").append(finalCSS),getCSS=$("#cssClassesPrepare").html(),s.setValue(getCSS,1)):(styles=styles.replace(/ {2,}/g," "),prettyCSS=styles.split("; ").join(";"),prettyCSS=prettyCSS.split(";").join(";\n	"),finalCSS="."+cssClass+" { \n	"+prettyCSS+"\n}\n",$(this).removeAttr("style"),finalCSS=finalCSS.replace(/^\s*\n/gm,""),finalCSS=finalCSS.trim(),$("#cssClassesPrepare").append(finalCSS),getCSS=$("#cssClassesPrepare").html(),s.setValue(getCSS,1)):$("#minify").is(":checked")?(styles=styles.replace(/ {2,}/g," "),minifyCSS=styles.split("; ").join(";"),minifyCSS=minifyCSS.split(";").join(";"),finalCSS="."+cssClass+" { "+minifyCSS+" }\n",$(this).removeAttr("style"),finalCSS=finalCSS.replace(/^\s*\n/gm,""),finalCSS=finalCSS.trim(),finalCSS=finalCSS.replace("}","}\n"),$("#cssClassesPrepare").append(finalCSS),getCSS=$("#cssClassesPrepare").html(),s.setValue(getCSS,1)):(styles=styles.replace(/ {2,}/g," "),prettyCSS=styles.split("; ").join(";"),prettyCSS=prettyCSS.split(";").join(";\n	"),finalCSS="."+cssClass+" { \n	"+prettyCSS+"\n}\n",$(this).removeAttr("style"),finalCSS=finalCSS.replace(/^\s*\n/gm,""),finalCSS=finalCSS.trim(),finalCSS=finalCSS.replace("}","}\n"),$("#cssClassesPrepare").append(finalCSS),getCSS=$("#cssClassesPrepare").html(),s.setValue(getCSS,1))}),html=$("#iframe").contents().find("body").html(),html=html.trim(),t.setValue(html,1),$("#fire").attr("style",$("#fire").attr("style")+"; margin-left: 0"),$("#fire").velocity({opacity:"1"},100),setTimeout(function(){$("#startBox").hide(),$("#startBox").velocity({opacity:"1"},100),$("#fire").fadeOut(),$(".fa-refresh").fadeIn(),$("#cleanBox").attr("style","margin-top: 0"),$("#cleanBox").fadeIn()},200)}),$("#closeWindow").click(function(){var e=require("nw.gui"),t=e.Window.get();t.close()}),$("#restart").click(function(){$("#fire").attr("style",$("#fire").attr("style")+"; margin-left: -800px"),$("#fire").show(),$("#fire").velocity({opacity:"0"},100),$("#startBox").fadeIn(),$(".fa-refresh").hide(),$("#cleanBox").hide(),$("#cleanBox").attr("style","margin-top: 50px")}),$("#aceTheme").change(function(){theme=$(this).val(),localStorage.setItem("theme",theme),e.setTheme(theme),t.setTheme(theme),s.setTheme(theme)})});