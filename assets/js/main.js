// Output
const outputMehrwert = document.querySelector(".output-mehrwert");
const outputEndpreis = document.querySelector(".outputEndpreis");
const textÄnderdichHexHex = document.querySelector(".betrag");
const outputTxt = document.querySelector(".outputTxt");

const mehrwert = () => {
  // Values auslesen
  //   Netto zu brutto oder brutto zu netto
  const bruttoNetto = document.querySelector(
    "input[name='bruttoNetto']:checked"
  ).value;
  //   Prozentsatz 7 oder 19% direkt als number
  const prozentsatz = Number(
    document.querySelector("input[name='prozentsatz']:checked").value
  );
  //   Holt Input direkt als Number
  const nettobetrag = Number(document.querySelector("#nettobetrag").value);

  console.log({ bruttoNetto }, { prozentsatz }, { nettobetrag });

  //   Berechnung der Mwst. egal ob 7 oder 19% (macht er automatisch weil ich direkt value aus zahl rausbekomme zeile 12)
  const mwst = Number(((nettobetrag / 100) * prozentsatz).toFixed(2));

  if (bruttoNetto == "nettoZuBrutto") {
    console.log("Netto -> Brutto");
    outputMehrwert.innerHTML = `${mwst} €`;
    outputEndpreis.innerHTML = `${nettobetrag + mwst} €`;
  } else {
    console.log("Brutto -> Netto");
    outputMehrwert.innerHTML = `${mwst} €`;
    outputEndpreis.innerHTML = `${nettobetrag - mwst} €`;
  }
};

const changeText = () => {
  const bruttoNetto = document.querySelector(
    'input[name="bruttoNetto"]:checked'
  ).value;

  textÄnderdichHexHex.innerHTML =
    bruttoNetto == "nettoZuBrutto"
      ? "Nettobetrag (Preis ohne Mwst.) in Euro <span>*</span>"
      : "Bruttobetrag (Preis ink. Mwst.) in Euro <span>*</span>";

  outputTxt.innerHTML =
    bruttoNetto == "nettoZuBrutto" ? "Bruttobetrag(Endpreis)" : "Nettobetrag";
};
