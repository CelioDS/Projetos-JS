setInterval(() => {
  const back = true;
  if (back) {
    window.location = window.location.href.replace(
      "conteudo-protegido.html",
      ""
    );
  }
}, 1000);
