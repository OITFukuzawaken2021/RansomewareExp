function toOITHP(){
    //ここで親要素の#titleと#linkを書き換え
    parent.document.getElementById("title").innerHTML="大阪工業大学";
    parent.document.getElementById("link").innerHTML="https://www.oit.ac.jp/";
}

function toISHP(){
    //ここで親要素の#titleと#linkを書き換え
    parent.document.getElementById("title").innerHTML="情報セキュリティ研究室";
    parent.document.getElementById("link").innerHTML="https://www.oit.ac.jp/laboratory/room/254";
}

function toRANSOMHP(){
    //ここで親要素の#titleと#linkを書き換え
    parent.document.getElementById("title").innerHTML="ランサムウェア";
    parent.document.getElementById("link").innerHTML="https://oitfukuzawaken2021.github.io/RansomwareExp/html/ransom.html";
    parent.document.getElementById("pop-up").checked = true;
}