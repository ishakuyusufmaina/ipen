function getStanzas(poem){
  return poem.replace(/\n\s*\n/g, "*").split("*");
}
function getPoem(poem){
  let stanzas = getStanzas(poem);
  let poem = [];
  stanzas.map((i, stanza)=>{poem[i]=stanza.split("\n")});
  return poem;
}
function Front(cTitle, pTitles, excerpts){
  let root = newArticle("");
  let heading = newH(cTitle, 2);
  let 
}