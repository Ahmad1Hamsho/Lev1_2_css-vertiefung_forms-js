function meinAlter() {
  const geburtsJahr = document.getElementById("geburtsJahr").value;
  const meinAlter = 2020 - geburtsJahr;
  document.getElementById("ergebniss").innerText =
    "du bist " + "(" + meinAlter + ")" + " jahre alt";
}
