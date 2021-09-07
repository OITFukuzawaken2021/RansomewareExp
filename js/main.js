//各アイコンでのポップアップウインドウ開閉用関数を定義
//テキスト1の表示
function pushText1(){
    document.getElementById("textContent1").style.display="block";
}
//テキスト1の非表示
function CloseText1Content(){
    document.getElementById("textContent1").style.display="none";
}

//テキスト2の表示
function pushText2(){
    document.getElementById("textContent2").style.display="block";
}
//テキスト2の非表示
function CloseText2Content(){
    document.getElementById("textContent2").style.display="none";
}

//メールの表示
function pushMail(){
    document.getElementById("mailContent").style.display="block";
}
//メールの非表示
function CloseMailContent(){
    document.getElementById("mailContent").style.display="none";
}

//検索エンジンの表示
function pushSE(){
    document.getElementById("SEContent").style.display="block";
    document.getElementById("link").innerHTML="https://oitfukuzawaken2021.github.io/RansomewareExp/html/SEFrame.html";
}
//検索エンジンの非表示
function CloseSEContent(){
    document.getElementById("SEContent").style.display="none";
}

//警告エンジンの表示
function pushkeikoku(){
    document.getElementById("keikokuContent").style.display="block";
}
//警告エンジンの非表示
function Closekeikoku(){
    document.getElementById("keikokuContent").style.display="none";
}


//リンク情報の書き換え
function toHP(){
    document.getElementById("link").innerHTML="https://oitfukuzawaken2021.github.io/RansomewareExp/html/SEFrame.html";
}

//onload関数の定義
onload = function(){
    timer();
    window.setInterval("timer()", 1000);
}

//現在時間の表示
function timer(){
    var time = new Date();

    //年月日を取得
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    //時・分・秒を取得
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    //パディング
    month = ('00' + month).slice(-2);
    day = ('00' + day).slice(-2);
    minute = ('00' + minute).slice(-2);
    second = ('00' + second).slice(-2);

    //表示文字列の整形  秒は準備しているが使っていない
    var time = year+"/"+month+"/"+day+"  "+hour+":"+minute;

    document.getElementById("timer").innerHTML = time;
}