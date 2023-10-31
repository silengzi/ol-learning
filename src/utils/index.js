// 转换html代码块中的特殊字符，防止被浏览器编译
function replaceStr(strHTML) {
    var strTem = "";
    if (strHTML.length == 0) return "";
    strTem = strHTML.replace(/&/g, "&amp;");
    strTem = strTem.replace(/</g, "&lt;");
    strTem = strTem.replace(/>/g, "&gt;");
    strTem = strTem.replace(/ /g, "&nbsp;");
    strTem = strTem.replace(/'/g, "&#39;");
    strTem = strTem.replace(/"/g, "&quot;");
    return strTem;
}