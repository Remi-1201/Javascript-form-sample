function confirmSubmit() {
  const forms = document.forms;
  forms[0].onsubmit = function(){
    if (!(confirm("本当に送信しますか？"))) {
      alert("キャンセルされました");
      return false;
    }
  };
};

window.onload = confirmSubmit;