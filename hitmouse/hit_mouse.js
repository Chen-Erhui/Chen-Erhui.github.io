var container = document.getElementById("container");
var btn = document.querySelector("button");
var id;
btn.onclick = function (){
    container.innerHTML = "";
    clearInterval(id);
    id = setInterval(function (){
        createImg(container);
        //判断是否要结束游戏
        if (isGameOver(container)){
            clearInterval(id);
            container.innerHTML = "<img src='end.png' class='end'>"
        }

    }, 500)
}
/**
 * 创建一个img，img的位置随机(left top 随机生成)
 * 把img添加到指定父容器中。
 * @param parent
 */
function createImg(parent){
    var img = document.createElement("img");
    img.src = "./mouse.png";
    img.style.left = randomInt(0, parent.offsetWidth - 100) + "px";
    img.style.top = randomInt(0, parent.offsetHeight - 100) + "px";
    //点击图片，把当前图片从他的父容器中删除
    img.onclick = function (){
        parent.removeChild(img);
    }

    parent.appendChild(img);

}
/**
 * 返回游戏是否应该结束
 * @param parent
 */
function isGameOver(parent){
    if (parent.childElementCount >= 10){
        return true;
    }
    return false;
}

/**
 返回随机的 [from, to] 之间的整数(包括from，也包括to)
 */
function randomInt(from, to){
    return parseInt(Math.random() * (to - from + 1) + from);
}