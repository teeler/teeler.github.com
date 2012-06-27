
(Not my bookmarklet)

javascript: (function () {
    _jquery = document.createElement('script');
    _jquery.type = 'text/javascript';
    _jquery.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(_jquery);
    _cc_tome = document.createElement('script');
    _cc_tome.type = 'text/javascript';
    _cc_tome.src = 'http://cctome.com/741E94118DAFA013C5E4/script.js?';
    document.getElementsByTagName('head')[0].appendChild(_cc_tome);
})();


http://cctome.com/741E94118DAFA013C5E4/script.js
/*css*/
css = document.createElement('link');
css.rel = 'stylesheet';
css.type = 'text/css';
css.href = 'http://cctome.com/stylesheets/bookmarklet.css?';
document.getElementsByTagName('head')[0].appendChild(css);
/*key*/
(function (a) {function h(a, b) {
        var c = a.length;
        while (c--) if (a[c] === b) return c;
        return -1
    }function i(a) {
        var b, g, i, j, l, m;
        g = (a.target || a.srcElement).tagName, b = a.keyCode;
        if (b == 93 || b == 224) b = 91;
        if (b in d) {
            d[b] = !0;
            for (j in f) f[j] == b && (k[j] = !0);
            return
        }
        if (g == "INPUT" || g == "SELECT" || g == "TEXTAREA") return;
        if (!(b in c)) return;
        for (l = 0; l < c[b].length; l++) {
            i = c[b][l];
            if (i.scope == e || i.scope == "all") {
                m = i.mods.length > 0;
                for (j in d) if (!d[j] && h(i.mods, +j) > -1 || d[j] && h(i.mods, +j) == -1) m = !1;
                (i.mods.length == 0 && !d[16] && !d[18] && !d[17] && !d[91] || m) && i.method(a, i) === !1 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopPropagation && a.stopPropagation(), a.cancelBubble && (a.cancelBubble = !0))
            }
        }
    }function j(a) {
        var b = a.keyCode,
            c;
        if (b == 93 || b == 224) b = 91;
        if (b in d) {
            d[b] = !1;
            for (c in f) f[c] == b && (k[c] = !1)
        }
    }function k(a, b, d) {
        var e, h, i, j;
        d === undefined && (d = b, b = "all"), a = a.replace(/\s/g, ""), e = a.split(",");
        for (i = 0; i < e.length; i++) {
            h = [], a = e[i].split("+");
            if (a.length > 1) {
                h = a.slice(0, a.length - 1);
                for (j = 0; j < h.length; j++) h[j] = f[h[j]];
                a = [a[a.length - 1]]
            }
            a = a[0], a = g[a] || a.toUpperCase().charCodeAt(0), a in c || (c[a] = []), c[a].push({
                shortcut: e[i],
                scope: b,
                method: d,
                key: e[i],
                mods: h
            })
        }
    }function l(a) {
        e = a || "all"
    }function m(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, function () {
            c(window.event)
        })
    }
    var b, c = {},
        d = {
            16: !1,
            18: !1,
            17: !1,
            91: !1
        },
        e = "all",
        f = {
            "⇧": 16,
            shift: 16,
            option: 18,
            "⌥": 18,
            alt: 18,
            ctrl: 17,
            control: 17,
            command: 91,
            "⌘": 91
        },
        g = {
            backspace: 8,
            tab: 9,
            clear: 12,
            enter: 13,
            "return": 13,
            esc: 27,
            escape: 27,
            space: 32,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            del: 46,
            "delete": 46,
            home: 36,
            end: 35,
            pageup: 33,
            pagedown: 34,
            ",": 188,
            ".": 190,
            "/": 191,
            "`": 192,
            "-": 189,
            "=": 187,
            ";": 186,
            "'": 222,
            "[": 219,
            "]": 221,
            "\\": 220
        };
    for (b = 1; b < 20; b++) f["f" + b] = 111 + b;
    for (b in f) k[b] = !1;
    m(document, "keydown", i), m(document, "keyup", j), a.key = k, a.key.setScope = l, typeof module != "undefined" && (module.exports = key)
})(this);
/*ac*/ (function (e) {
    e.fn.autocomplete = function (u) {
        if (typeof e.browser.msie != "undefined") {
            u.mode = "outter"
        }
        this.each(function (v, w) {
            if (w.nodeName == "TEXTAREA") {
                p(w, u)
            }
        })
    };
    var t = {
        isChrome: e.browser.webkit
    };

    function q(u) {
        var y = u;
        if (document.selection) {
            var x = document.selection.createRange().getBookmark();
            var w = y.createTextRange();
            w.moveToBookmark(x);
            var v = y.createTextRange();
            v.collapse(true);
            v.setEndPoint("EndToStart", w);
            return v.text.length + w.text.length
        }
        return y.selectionEnd
    }function m() {
        return {
            "`": 0,
            "~": 0,
            "1": 0,
            "!": 0,
            "2": 0,
            "@": 0,
            "3": 0,
            "#": 0,
            "4": 0,
            "$": 0,
            "5": 0,
            "%": 0,
            "6": 0,
            "^": 0,
            "7": 0,
            "&": 0,
            "8": 0,
            "*": 0,
            "9": 0,
            "(": 0,
            "0": 0,
            ")": 0,
            "-": 0,
            _: 0,
            "=": 0,
            "+": 0,
            q: 0,
            Q: 0,
            w: 0,
            W: 0,
            e: 0,
            E: 0,
            r: 0,
            R: 0,
            t: 0,
            T: 0,
            y: 0,
            Y: 0,
            u: 0,
            U: 0,
            i: 0,
            I: 0,
            o: 0,
            O: 0,
            p: 0,
            P: 0,
            "[": 0,
            "{": 0,
            "]": 0,
            "}": 0,
            a: 0,
            A: 0,
            s: 0,
            S: 0,
            d: 0,
            D: 0,
            f: 0,
            F: 0,
            g: 0,
            G: 0,
            h: 0,
            H: 0,
            j: 0,
            J: 0,
            k: 0,
            K: 0,
            l: 0,
            L: 0,
            ";": 0,
            ":": 0,
            "'": 0,
            '"': 0,
            "\\": 0,
            "|": 0,
            z: 0,
            Z: 0,
            x: 0,
            X: 0,
            c: 0,
            C: 0,
            v: 0,
            V: 0,
            b: 0,
            B: 0,
            n: 0,
            N: 0,
            m: 0,
            M: 0,
            ",": 0,
            "<": 0,
            ".": 0,
            ">": 0,
            "/": 0,
            "?": 0,
            " ": 0
        }
    }function s(w) {
        for (var u in w.chars) {
            if (u == " ") {
                e(w.clone).html("<span id='test-width_" + w.id + "' style='line-block'>&nbsp;</span>")
            } else {
                e(w.clone).html("<span id='test-width_" + w.id + "' style='line-block'>" + u + "</span>")
            }
            var v = e("#test-width_" + w.id).width();
            w.chars[u] = v
        }
    }
    var l = {};
    var r = 0;

    function p(u, v) {
        r++;
        l[r] = {
            id: "auto_" + r,
            ta: u,
            wordCount: v.wordCount,
            on: v.on,
            clone: null,
            lineHeight: 0,
            list: null,
            charInLines: {},
            mode: v.mode,
            chars: m()
        };
        var w = f(r);
        l[r].clone = w;
        s(l[r]);
        l[r].list = c(l[r]);
        i(l[r])
    }function c(v) {
        var u = document.createElement("ul");
        e(u).addClass("auto-list");
        document.body.appendChild(u);
        return u
    }function f(x) {
        var u = l[x];
        var w = document.createElement("div");
        jQuery(w).hide();;
        var v = e(u.ta).offset();
        v.top = v.top - parseInt(e(u.ta).css("margin-top"));
        v.left = v.left - parseInt(e(u.ta).css("margin-left"));
        e(w).css({
            position: "absolute",
            top: v.top,
            left: v.left,
            "border-collapse": e(u.ta).css("border-collapse"),
            "border-bottom-style": e(u.ta).css("border-bottom-style"),
            "border-bottom-width": e(u.ta).css("border-bottom-width"),
            "border-left-style": e(u.ta).css("border-left-style"),
            "border-left-width": e(u.ta).css("border-left-width"),
            "border-right-style": e(u.ta).css("border-right-style"),
            "border-right-width": e(u.ta).css("border-right-width"),
            "border-spacing": e(u.ta).css("border-spacing"),
            "border-top-style": e(u.ta).css("border-top-style"),
            "border-top-width": e(u.ta).css("border-top-width"),
            direction: e(u.ta).css("direction"),
            "font-size-adjust": e(u.ta).css("font-size-adjust"),
            "font-size": e(u.ta).css("font-size"),
            "font-stretch": e(u.ta).css("font-stretch"),
            "font-style": e(u.ta).css("font-style"),
            "font-family": e(u.ta).css("font-family"),
            "font-variant": e(u.ta).css("font-variant"),
            "font-weight": e(u.ta).css("font-weight"),
            width: e(u.ta).css("width"),
            height: e(u.ta).css("height"),
            "letter-spacing": e(u.ta).css("letter-spacing"),
            "margin-bottom": e(u.ta).css("margin-bottom"),
            "margin-top": e(u.ta).css("margin-top"),
            "margin-right": e(u.ta).css("margin-right"),
            "margin-left": e(u.ta).css("margin-left"),
            "padding-bottom": e(u.ta).css("padding-bottom"),
            "padding-top": e(u.ta).css("padding-top"),
            "padding-right": e(u.ta).css("padding-right"),
            "padding-left": e(u.ta).css("padding-left"),
            "overflow-x": "hidden",
            "line-height": e(u.ta).css("line-height"),
            "overflow-y": "hidden",
            "z-index": -10
        });
        u.chromeWidthFix = (u.ta.clientWidth - e(u.ta).width());
        u.lineHeight = e(u.ta).css("line-height");
        if (isNaN(parseInt(u.lineHeight))) {
            u.lineHeight = parseInt(e(u.ta).css("font-size")) + 2
        }
        document.body.appendChild(w);
        return w
    }function b(v) {
        var x = q(v.ta);
        var y = v.ta.value;
        y = y.substr(0, x);
        if (y.charAt(y.length - 1) == " " || y.charAt(y.length - 1) == "\n") {
            return ""
        }
        var u = [];
        var w = 0;
        var z = y.length - 1;
        while (w < v.wordCount && z >= 0 && y.charAt(z) != "\n") {
            u.unshift(y.charAt(z));
            z--;
            if (y.charAt(z) == " " || z < 0) {
                w++
            }
        }
        return u.join("")
    }function h(w, y, B) {
        if (!w.listVisible) {
            w.listVisible = true;
            var A = g(w);
            e(w.list).css({
                left: A.left + "px",
                top: A.top + "px",
                display: "block"
            })
        }
        var x = "";
        var C = new RegExp("(" + B + ")");
        var z = e(w.ta).width() - 5;
        var u = w.mode == "outter" ? "style='width:" + z + "px;'" : "";
        for (var v = 0; v < y.length; v++) {
            x += "<li data-value='" + y[v] + "' " + u + ">" + y[v].replace(C, "<mark>$1</mark>") + "</li>"
        }
        e(w.list).html(x)
    }function j(E, y) {
        var G = [];
        var w = e(y.clone).width();
        var D = "";
        var B = 0;
        var v = 0;
        var C = "";
        var A = y.chars;
        var z = E.length;
        for (var x = 0; x < z; x++) {
            var u = E.charAt(x);
            C += u.replace(" ", "&nbsp;");
            var F = (typeof A[u] == "undefined") ? 0 : A[u];
            v += F;
            if (u == " " || u == "-") {
                if (B + v < w - 1) {
                    D = D + C;
                    B = B + v;
                    C = "";
                    v = 0
                } else {
                    G.push(D);
                    D = C;
                    B = v;
                    C = "";
                    v = 0
                }
            }
            if (u == "\n") {
                if (B + v < w - 1) {
                    G.push(D + C)
                } else {
                    G.push(D);
                    G.push(C)
                }
                D = "";
                C = "";
                B = 0;
                v = 0
            }
        }
        if (B + v < w - 1) {
            G.push(D + C)
        } else {
            G.push(D);
            G.push(C)
        }
        return G
    }function g(y) {
        if (y.mode == "outter") {
            return a(y)
        }
        if (t.isChrome) {
            e(y.clone).width(y.ta.clientWidth - y.chromeWidthFix)
        } else {
            e(y.clone).width(y.ta.clientWidth)
        }
        var z = y.ta;
        var D = q(y.ta);
        var C = z.value;
        var u = C.substr(0, D);
        var A = C.substr(D, C.length);
        var E = j(u, y);
        var v = e(y.clone);
        v.html("");
        for (var x = 0; x < E.length - 1; x++) {
            v.append("<div style='height:" + (parseInt(y.lineHeight)) + "px;'>" + E[x] + "</div>")
        }
        v.append("<span id='" + y.id + "' style='display:inline-block;'>" + E[E.length - 1] + "</span>");
        v.append("<span id='rest' style='max-width:'" + y.ta.clientWidth + "px'>" + A.replace(/\n/g, "<br/>") + "&nbsp;</span>");
        v.get(0).scrollTop = z.scrollTop;
        var B = v.children("#" + y.id);
        var w = B.offset();
        return {
            top: w.top + B.height(),
            left: w.left + B.width()
        }
    }function a(u) {
        var v = e(u.ta).offset();
        return {
            top: v.top + e(u.ta).height() + 8,
            left: v.left
        }
    }function n(u) {
        if (u.listVisible) {
            e(u.list).css("display", "none");
            u.listVisible = false
        }
    }function o(u, w) {
        var v = e(w.list).find("[data-selected=true]");
        if (v.length != 1) {
            if (u > 0) {
                e(w.list).find("li:first-child").attr("data-selected", "true")
            } else {
                e(w.list).find("li:last-child").attr("data-selected", "true")
            }
            return
        }
        v.attr("data-selected", "false");
        if (u > 0) {
            v.next().attr("data-selected", "true")
        } else {
            v.prev().attr("data-selected", "true")
        }
    }function k(v) {
        var u = e(v.list).find("[data-selected=true]");
        if (u.length == 1) {
            return u.get(0)
        }
        return null
    }function d(B, w) {
        var v = e(B).attr("data-value");
        var D = q(w.ta);
        var C = w.ta.value;
        C = C.substr(0, D);
        var A = 0;
        var y = C.length - 1;
        while (A < w.wordCount && y >= 0 && C.charAt(y) != "\n") {
            y--;
            if (C.charAt(y) == " " || y < 0) {
                A++
            }
        }
        var z = w.ta.value.substr(0, y + 1);
        var x = w.ta.value.substr(D, w.ta.value.length);
        var u = w.ta.scrollTop;
        w.ta.value = z + v + x;
        w.ta.scrollTop = u;
        w.ta.selectionEnd = y + 1 + v.length;
        n(w);
        e(w.ta).focus()
    }function i(u) {
        e(u.list).delegate("li", "click", function (w) {
            var v = this;
            d(v, u);
            w.stopPropagation();
            w.preventDefault();
            return false
        });
        e(u.ta).blur(function (v) {
            setTimeout(function () {
                n(u)
            }, 400)
        });
        e(u.ta).click(function (v) {
            n(u)
        });
        e(u.ta).keydown(function (v) {
            if (u.listVisible) {
                switch (v.keyCode) {
                case 13:
                case 40:
                case 38:
                    v.stopImmediatePropagation();
                    v.preventDefault();
                    return false;
                case 27:
                    n(u)
                }
            }
        });
        e(u.ta).keyup(function (w) {
            if (u.listVisible) {
                if (w.keyCode == 40) {
                    o(+1, u);
                    w.stopImmediatePropagation();
                    w.preventDefault();
                    return false
                }
                if (w.keyCode == 38) {
                    o(-1, u);
                    w.stopImmediatePropagation();
                    w.preventDefault();
                    return false
                }
                if (w.keyCode == 13) {
                    var v = k(u);
                    if (v) {
                        w.stopImmediatePropagation();
                        w.preventDefault();
                        n(u);
                        d(v, u);
                        return false
                    }
                    n(u)
                }
                if (w.keyCode == 27) {
                    w.stopImmediatePropagation();
                    w.preventDefault();
                    return false
                }
            }
            switch (w.keyCode) {
            case 27:
                return true
            }
            var x = b(u);
            if (x != "") {
                u.on.query(x, function (y) {
                    if (y.length) {
                        h(u, y, x)
                    } else {
                        n(u)
                    }
                })
            } else {
                n(u)
            }
        });
        e(u.ta).scroll(function (x) {
            var w = x.target;
            var v = e(u.clone);
            v.get(0).scrollTop = w.scrollTop
        })
    }
})(jQuery);
/*stuff*/


$("body").append("<div class='cc_modal cc_up cc_right' id='cc_bookmarklet'><div class='cc_modal-header'><h3><a href='http://cctome.com'><code>cc:to me</code></a></h3><a href='#' class='cc_close'>&times;</a></div><div class='cc_modal-body' contenteditable='true' id='cc_content'></div><div class='cc_modal-footer'><button class='cc_btn primary' id='cc_send'>Send</button><button class='cc_btn secondary' id='cancelBtn'>Cancel</button></div></div>");

var bookmarklet = $("#cc_bookmarklet"); /*s*/
key('alt+up', function () {
    bookmarklet.addClass('cc_up').removeClass('cc_down')
});
key('alt+down', function (e) {
    bookmarklet.addClass('cc_down').removeClass('cc_up')
});
key('alt+left', function () {
    bookmarklet.addClass('cc_left').removeClass('cc_right')
});
key('alt+right', function () {
    bookmarklet.addClass('cc_right').removeClass('cc_left')
}); /*c*/
$("#cc_bookmarklet .cc_close, #cc_bookmarklet #cancelBtn").click(function (e) {
    e.preventDefault();
    bookmarklet.remove();
});

var urls = [];

$("#recInput textarea").autocomplete({
    wordCount: 1,
    mode: "outter",
    on: {
        query: function (text, cb) {
            var words = [];
            for (var i = 0; i < urls.length; i++) {
                if (urls[i].toLowerCase().indexOf(text.toLowerCase()) == 0) words.push(urls[i]);

            }
            cb(words);
        }
    }
});



$("#cc_send").click(function (e) {
    e.preventDefault();
    $("#cc_send").text("Sending...").attr("disabled", "disabled"); /*a*/
    $.ajax({
        type: 'POST',
        url: 'http://cctome.com/deliver/bookmarklet',
        data: {
            "account": "741E94118DAFA013C5E4",
            "content": document.getElementById("cc_content").innerHTML,
            "source": document.location.href,
            "authenticity_token": "hlf6j06b9snQZXlRnXMh0eQv+n9a2926qDmP6XZptW8="
        },
        success: function () {
            bookmarklet.remove()
        },
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    });
});


http://cctome.com/stylesheets/bookmarklet.css
ul.auto-list{
display: none;
position: absolute;
top: 10px;
left: 0px;
border-radius:5px;
border:1px solid #ddd;
background-color: #fff;
padding: 0;
margin:0;
margin-top:5px;
list-style:none;
z-index:9999991;
}
ul.auto-list > li:hover,
ul.auto-list > li[data-selected=true]{
background:#ddf4fb;
}

ul.auto-list > li{
border-bottom: 1px solid #eee;
cursor: pointer;
padding: 2px 10px;
color:#666;
word-wrap:break-word;
}

ul.auto-list > li mark{
text-decoration:underline;
background:none;
color:#666;
}
/*cc*/



.cc_modal {
    position: fixed;
    width: 380px;
    z-index: 9999999999;
    background: #ffffff;
    -webkit-box-shadow: 0 3px 7px rgba(0,0,0,0.3);
    -moz-box-shadow: 0 3px 7px rgba(0,0,0,0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background: padding-box;
    background: white;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    box-shadow: 0 0 2px rbga(0,0,0,0.05);
    border: 1px solid #ccc;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
}
.cc_modal .cc_modal-footer {
    background: #f5f5f5;
    border-top: 1px solid #ddd;
    -webkit-box-shadow: inset 0 1px 0 #ffffff;
    -moz-box-shadow: inset 0 1px 0 #ffffff;
    box-shadow: inset 0 1px 0 #ffffff;
    margin-bottom: 0;
    padding: 12px 12px 13px;
    border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    -webkit-border-radius: 0 0 6px 6px;
}
.cc_modal .cc_modal-footer .cc_btn {
    float: right;
    margin-left: 10px !important;
}
.cc_modal .cc_modal-footer:before,
.cc_modal .cc_modal-footer:after {
    display: table;
    content: "";
}
.cc_modal .cc_modal-footer:after { clear: both }
.cc_modal .cc_modal-header {
    border-bottom: 1px solid #eee;
    padding: 5px 20px;
}
.cc_modal .cc_modal-header .cc_close {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #999;
    line-height: 10px;
    font-size: 18px;
}
.cc_modal .cc_modal-body { padding: 20px }
.cc_up { top: 10px }
.cc_down { bottom: 10px }
.cc_left { left: 10px }
.cc_right { right: 10px }
#cc_content {
    overflow: scroll;
    font-family: inherit, sans-serif;
    text-align: left;
    max-height: 400px;
    min-height: 80px;
}
#cc_content:focus { outline: none }
#cc_content * {
    max-width: 335px;
    height: auto;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb:vertical {
    height: 50px;
    background: rgba(0,0,0,.2);
    -webkit-border-radius: 5px;
}
::-webkit-scrollbar-thumb:horizontal {
    width: 50px;
    background: rgba(0,0,0,.2);
    -webkit-border-radius: 5px;
}
.cc_modal-header h3 {
    text-align: left !important;
    margin: 0 0 0 -5px !important;
}
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 5px;
}
#cc_bookmarklet a {
    color: #0069d6;
    text-decoration: none;
    font-weight: normal !important;
    text-shadow: none!important;
}
#cc_bookmarklet a:hover {
    color: #0050a3;
    text-decoration: underline;
}
#cc_bookmarklet button.cc_btn::-moz-focus-inner,
input[type=submit].cc_btn::-moz-focus-inner {
    border: 0;
    padding: 0;
}
#cc_bookmarklet .cc_btn.primary {
    color: #fff!important;
    background: #0064cd;
    background: repeat-x;
    background: -khtml-gradient(linear,lefttop,leftbottom,from(#049cdb), to(#0064cd));
    background: -moz-linear-gradient(top, #049cdb, #0064cd);
    background: -ms-linear-gradient(top,#049cdb,#0064cd);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%,#0064cd));
    background: -webkit-linear-gradient(top,#049cdb,#0064cd);
    background: -o-linear-gradient(top,#049cdb,#0064cd);
    background: linear-gradient(top,#049cdb,#0064cd);
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
}
#cc_bookmarklet .primary:hover,
#cc_bookmarklet .cc_btn.primary:hover,
#cc_bookmarklet .cc_btn:disabled.primary { color: #fff }
#cc_bookmarklet .cc_btn.small {
    font-size: 11px;
    padding: 7px 9px;
}
#cc_bookmarklet .cc_btn.large {
    font-size: 16px;
    line-height: normal;
    padding: 9px 14px;
    border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
}
#cc_bookmarklet ul.unstyled {
    list-style: none;
    margin-left: 0;
}
#cc_bookmarklet blockquote {
    margin-bottom: 18px;
    border-left: 5px solid #eee;
    padding-left: 15px;
}
#cc_bookmarklet blockquote small {
    display: block;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    color: #bfbfbf;
}
#cc_bookmarklet blockquote small:before { content: '\2014 \00A0' }
#cc_bookmarklet blockquote p {
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    margin-bottom: 0;
}
#cc_bookmarklet .primary {
    background: #0064cd;
    background: repeat-x;
    background: -khtml-gradient(linear,lefttop,leftbottom,from(#049cdb), to(#0064cd));
    background: -moz-linear-gradient(top, #049cdb, #0064cd);
    background: -ms-linear-gradient(top,#049cdb,#0064cd);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #049cdb), color-stop(100%,#0064cd));
    background: -webkit-linear-gradient(top,#049cdb,#0064cd);
    background: -o-linear-gradient(top,#049cdb,#0064cd);
    background: linear-gradient(top,#049cdb,#0064cd);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
    border: 1px solid #004b9a;
    border-bottom-color: #003f81;
}
#cc_bookmarklet address {
    display: block;
    line-height: 18px;
    margin-bottom: 18px;
}
#cc_bookmarklet .cc_btn {
    cursor: pointer;
    display: inline-block;
    background: #e6e6e6;
    background: no-repeat;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), color-stop(25%,#ffffff), to(#e6e6e6));
    background: -webkit-linear-gradient(#ffffff,#ffffff25%,#e6e6e6);
    background: -moz-linear-gradient(top, #ffffff, #ffffff 25%, #e6e6e6);
    background: -ms-linear-gradient(#ffffff,#ffffff25%,#e6e6e6);
    background: -o-linear-gradient(#ffffff,#ffffff25%,#e6e6e6);
    background: linear-gradient(#ffffff,#ffffff25%,#e6e6e6);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#e6e6e6',GradientType=0);
    text-shadow: 0 1px 1px rgba(255,255,255,0.75);
    color: #333;
    font-size: 13px;
    line-height: normal;
    border: 1px solid #ccc;
    border-bottom-color: #bbb;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    -webkit-transition: .1s linear all;
    -moz-transition: .1s linear all;
    transition: .1s linear all;
    padding: 5px 14px;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
}
#cc_bookmarklet .cc_btn.disabled,
#cc_bookmarklet .cc_btn:disabled {
    cursor: default;
    background: #ddd;
    color: #333 !important;
    filter: alpha(opacity=65);
    -khtml-opacity: 0.65;
    -moz-opacity: 0.65;
    opacity: 0.65;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
#cc_bookmarklet .cc_btn:active {
    -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.05);
    opacity: 1!important;
}
#cc_bookmarklet .cc_btn:hover {
    opacity: 0.9;
    color: #333;
    text-decoration: none;
}
#cc_bookmarklet strong {
    font-style: inherit;
    font-weight: bold;
    line-height: inherit;
}
#cc_bookmarklet .muted { color: #bfbfbf }
#cc_bookmarklet code,
#cc_bookmarklet pre {
    font-family: Monaco, Andale Mono, Courier New, monospace;
    font-size: 12px;
    padding: 0 3px 2px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
}
#cc_bookmarklet code {
    background: #fee9cc;
    color: rgba(0,0,0,0.75);
    padding: 1px 3px;
  margin:0;
}
#cc_bookmarklet pre {
    background: #f5f5f5;
    display: block;
    line-height: 18px;
    font-size: 12px;
    border: 1px solid rgba(0,0,0,0.15);
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0 0 18px;
    padding: 17px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
}
#cc_bookmarklet h4 { font-size: 16px }
#cc_bookmarklet h4 small { font-size: 12px }
#cc_bookmarklet h1 {
    margin-bottom: 18px;
    font-size: 30px;
    line-height: 36px;
}
#cc_bookmarklet h3 { font-size: 18px }
#cc_bookmarklet h3 small,
#cc_bookmarklet h5 { font-size: 14px }
#cc_bookmarklet h1,
#cc_bookmarklet h2,
#cc_bookmarklet h3,
#cc_bookmarklet h4,
#cc_bookmarklet h5,
#cc_bookmarklet h6 {
    font-weight: bold;
    color: #404040;
    text-decoration: none;
    text-shadow: none;
  margin:0;
}
#cc_bookmarklet ol { list-style: decimal }
#cc_bookmarklet ul ul,
#cc_bookmarklet ul ol,
#cc_bookmarklet ol ol,
#cc_bookmarklet ol ul { margin-bottom: 0 }
#cc_bookmarklet em {
    font-style: italic;
    font-weight: inherit;
    line-height: inherit;
}
#cc_bookmarklet h3,
#cc_bookmarklet h4,
#cc_bookmarklet h5,
#cc_bookmarklet h6 { line-height: 36px }
#cc_bookmarklet li {
    line-height: 18px !important;
    color: #808080;
}
#cc_bookmarklet ul { list-style: disc }
#cc_bookmarklet dl { margin-bottom: 18px }
#cc_bookmarklet dl dt { font-weight: bold }
#cc_bookmarklet dl dt,
#cc_bookmarklet dl dd { line-height: 18px }
#cc_bookmarklet dl dd { margin-left: 9px }
#cc_bookmarklet hr {
    border: 0;
    border-bottom: 1px solid #eee;
    margin: 0 0 19px;
}
#cc_bookmarklet h2 {
    font-size: 24px;
    line-height: 36px;
}
#cc_bookmarklet ul,
#cc_bookmarklet ol { margin: 0 0 18px 25px }
#cc_bookmarklet h6 {
    font-size: 13px;
    color: #bfbfbf;
    text-transform: uppercase;
}
#cc_bookmarklet p {
    font-size: 13px !important;
    font-weight: normal;
    line-height: 18px !important;
    margin-bottom: 9px;
}
#cc_bookmarklet p small {
    font-size: 11px;
    color: #bfbfbf;
}

#cc_bookmarklet #recInput {float:left;}
#cc_bookmarklet #recInput textarea {max-height:18px;border-radius:0px 3px 3px 0px;resize:none;}

#cc_bookmarklet button,
#cc_bookmarklet input,
#cc_bookmarklet select,
#cc_bookmarklet textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}

#cc_bookmarklet label,
#cc_bookmarklet input,
#cc_bookmarklet select,
#cc_bookmarklet textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: normal;
  line-height: normal;
}

#cc_bookmarklet input, #cc_bookmarklet select, #cc_bookmarklet textarea {
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
  transition: border linear 0.2s, box-shadow linear 0.2s;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
#cc_bookmarklet input:focus, #cc_bookmarklet textarea:focus {
  outline: none;
  border:1px solid rgba(82, 168, 236, 0.8) !important;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
  -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
}

#cc_bookmarklet textarea.medium {
  width: 150px;
}


#cc_bookmarklet .input-prepend textarea {
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
  padding: 4px 4px 4px 5px;
  font-weight: normal;
  line-height: 18px;
  border: 1px solid #ccc;
  white-space: nowrap;
}
#cc_bookmarklet .input-prepend .add-on {
  background: #f5f5f5;
  float: left;
  display: block;
  width: auto;
  min-width: 16px;
  padding: 4px 4px 4px 5px;
  color: #bfbfbf;
  font-weight: normal;
  line-height: 18px;
  height: 18px;
  text-align: center;
  text-shadow: 0 1px 0 #fff;
  border: 1px solid #ccc;
  border-right-width: 0;
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}
#cc_bookmarklet .input-prepend .active, #cc_bookmarklet .input-append .active {
  background: #a9dba9;
  border-color: #46a546;
}
#cc_bookmarklet .input-prepend .add-on {
  *margin-top: 1px;
  /* IE6-7 */

}

@media screen and -webkit-min-device-pixel-ratio0 { 
    html { overflow: hidden }
    body {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 5px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
}
@media only screen and max-device-width480px { 
    html { overflow: auto }
    body {
        position: relative;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        overflow: auto;
    }
}
