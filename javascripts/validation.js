function confirmSubmit() {
  const forms = document.forms;
  forms[0].onsubmit = function(){
    const name = forms[0].name.value;
    if (!(confirm(`${name}さん、本当に送信しますか？`))) {
      alert("キャンセルされました");
      return false;
    }
  };
};

window.onload = confirmSubmit;