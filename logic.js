function ColFront(colTitle, poeTitles, excerpts, url){
  let cont = newSection("<h2>"+colTitle+"</h2>");
  let titleGroup = titleGroup(poeTitles);
  let excerptGroup = ExcerptGroup(excerpts, poeTitles);
  cont.appendChild(titleGroup);
  let root = newA(url);
  root.appendChild(cont);
  return root;
}
function TitleGroup(titles){
  let list = newOl("");
  titles.map((title)=>{
    list.appendChild(newList(title))
  });
  return list;
}
function ExcerptGroup(excerpts, titles, urls){
  let root = newSection("");
  excerpts.map((excerpt, i)=>{
    root.appendChild(Excerpt(excerpt, titles[i], urls[i]));
  });
  return root;
}
function Excerpt(excerpt, title, url, srcLabel){
  let root = newBlockquote("");
  let stanza = Stanza(excerpt);
  let label = srcLabel? srcLabel : "From";
  let cite = newCite(`<a href=${url}#${title}>{label}</a>`);
  root.appendChild(stanza);
  root.appendChild(cite);
  return root;
}
function Stanza(stanza){
  let root = newPara("");
  let lines = stanza.split("\n");
  lines.map((line, i)=>{
    let l = newSpan(line);
    root.appendChild(l);
    root.appendChild(l);
    if (i<length-1){root.innerHTML +="<br/>"};
  });
  return root;
  
}
function SingletonFront(title, excerpt, url){
  let root = newSection("<h2>"+title+"</h2>");
  root.appendChild(Excerpt(title, excerpt, url, "Read more..."));
  return root;
}
function Poem(poem, title){
  let stanzas = stanzanize(poem);
  let root = newArticle("<h2>"+title+"</h2>");
  stanzas.map((stanza)=>{
    root.appendChild(Stanza(stanza));
  });
  return root;
}
function stanzanize(poem){
  let stanzas = poem.replace(/\n\s*\n/g, "*").split("*");
  let stan =[];
  stanzas.map((stanza)=>{
    stan.push(stanza.split("\n"));
  });
  return stan;
}
function Collection(title, titles, poems){
  let root = newArticle("<h2>"+title+"</title>");
  titles.map((title, i)=>{
    root.appendChild(Poem(title, poesm[i]))
  });
  return root;
}
