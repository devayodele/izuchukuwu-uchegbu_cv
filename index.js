const downloadBtn = document.getElementById("download-btn");
const html = document.getElementById("main");

const generatePDF = () => {
  const opt = {
    marginTop: 40,
    marginBottom: 40,
    filename: "izuchukwu.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    pagebreak: { mode: "css" },
  };
  html2pdf().set(opt).from(html).save();
};

downloadBtn.addEventListener("click", generatePDF);
