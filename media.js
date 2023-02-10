let cont = document.querySelector('.container');
let cont2 = document.querySelector('.container2')
let btn = document.querySelector('.btnn');


btn.addEventListener('click', function(){
    let div = document.createElement('div');
    div.appendChild(cont2);
    cont2.classList.add('cont');
    cont2.appendChild(btn);

    cont2.remove();

    
})
btn.addEventListener('click', function(){

    let p = document.createElement('p')
    cont.appendChild(p)
    p.innerHTML = 'YOU ALREADY LOGGED IN!'
    p.classList.add('para')
    
})


// aqedan iwyeba meore seqcia


// aqedan iwyeba mesame seqcia

let forfetch = document.querySelector(".fetchcont");

fetch("./data.json")
  .then((data12) => data12.json())
  .then((json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      let div = document.createElement("div");
      forfetch.appendChild(div);

      let img = document.createElement("img");
      div.appendChild(img);
      img.src = json[i].img;
      img.classList.add("dataimgs");

      let p = document.createElement("p");
      p.innerHTML = json[i].txt1;
      div.appendChild(p);
      p.classList.add("p");

      let p2 = document.createElement("p2");
      p2.innerHTML = json[i].txt2;
      div.appendChild(p2);
      p2.classList.add("p2");
    }
  });