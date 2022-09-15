function convertHTML(str) {
  const enty = {
    '&':'&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"':'&quot;',
    '\'':'&apos;'
  };
  
  let strHtml = [...str].map(i => enty[i] != null ? enty[i]:i).join("");

  console.log(strHtml)
  return strHtml;

}

// convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("<>");