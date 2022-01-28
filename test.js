var ZdcCount = 0
var timeout = prompt('设置刷新时间')
var current = location.href

/*这边是找点击按钮，各有不同办法*/

/* Document.querySelectorAll 
返回与指定的选择器组匹配的文档中的元素列表 
(使用深度优先的先序遍历文档的节点)。
返回的对象是 NodeList 
教学：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll
原：'span[data-spm-anchor-id="a211oj.14285231.1123813110.i0"]'
*/
var Zdc = document.querySelectorAll('')[0]
var ZdcHandsome = Zdc.getElementsByClassName('rax-text ')[1]
/*End*/

if (timeout > 0) {
    setTimeout('reload()', 1000 * timeout)
} else {
    location.replace(current)
}

function reload() {
    ZdcCount++
    console.log(`点击${ZdcCount}次`)
    setTimeout('reload()', 1000 * timeout)
    ZdcHandsome.click()
    console.log(ZdcHandsome)
    var frame = "<frameset cols='*'>\n<frame src='" + current + "' /></frameset>"
    with (document) {
        //加载页面  用脚本加载一下页面
        write(frame)
        //关闭上一个页面 小贴士  只能关闭脚本打开的页面
        void close()
    }
}
