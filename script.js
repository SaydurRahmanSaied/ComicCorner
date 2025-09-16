document.querySelectorAll("#card-container a[data-pdf]").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const pdfFile = this.getAttribute("data-pdf");
    // console.log("PDF file to open:", pdfFile);
    if (pdfFile) {
      window.location.href = pdfFile;
    }
  });
});


