(function(j,k,l){var c=function(){return this||eval.call(null,"this")}(),g=c.load,h=c.print,a=null,i=Object.prototype.toString,f=function(b){return"[object Function]"===i.call(b)},d=function(b){a[b]=f(a[b])?a[b](c):a[b];return a[b]},a=d.cache={};d.add=function(b,c,m,e){if("undefined"===typeof a[b]||e)a[b]=c;return m&&d(b)};d.add("host-node","[object Object]"===i.call(c.process)&&/node(\.exe||js)?$/.test(c.process.execPath));d.add("host-v8",f(c.load)&&f(c.read));d("host-node")&&(g=function(b){var a= require("fs"),d=require("vm"),e={},a=a.readFileSync(b,"utf-8");d.runInNewContext(a,e,b);c.js_beautify=e.js_beautify},h=c.console.log);(function(b,a,d){var e={indent_size:4,indent_char:" "},a=a&&JSON.parse(a)||e;g(d);h(c.js_beautify(b,a))})(j,k,l)}).apply(this,"object"===typeof process&&process.argv.splice(3)||arguments);
