function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "C") {
        document.dentaku.display.value = "";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        } 
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
      }
    }
    
//音声再生
function ring() {
    document.getElementById("button").currentTime = 0; //連続クリックに対応
    document.getElementById("button").play(); //クリックしたら音を再生
}

//ring()要素とは別の音声を配置する
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