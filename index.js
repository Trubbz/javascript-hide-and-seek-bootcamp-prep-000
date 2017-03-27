function getFirstSelector(selector){
  return document.querySelector([selector]);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const increaseThis = document.querySelectorAll('.ranked-list');
  for(let i = 0, l = increaseThis.length; i<l; i++){
    increaseThis[i].innerHTML = parseInt(increaseThis[i].innerHTML + n, 10);
  }
}

  function deepestChild(){
    var current = document.querySelector('div#grand-node');
    var next = [];
    while(current){
      if(current.children.length === 0){
        return current;
      }
      if(current.children.length > 0){
        for(let i = 0; i < current.children.length; i++){
          next.push(current.children[i])
        }
      }
      current = next.shift();
    }
    return null;
  }
