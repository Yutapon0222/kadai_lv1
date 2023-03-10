//1. JavaScriptで再生用の関数を作っておく

function ring() {
    document.getElementById("button").currentTime = 0; //連続クリックに対応
    document.getElementById("button").play(); //クリックしたら音を再生
}

//複数の要素を設置したい場合

function ring1() {
    document.getElementById("button1").currentTime = 0; //連続クリックに対応
    document.getElementById("button1").play(); //クリックしたら音を再生
}

function ring2() {
    document.getElementById("button2").currentTime = 0; //連続クリックに対応
    document.getElementById("button2").play(); //クリックしたら音を再生
}

function ring3() {
    document.getElementById("button3").currentTime = 0; //連続クリックに対応
    document.getElementById("button3").play(); //クリックしたら音を再生
}
