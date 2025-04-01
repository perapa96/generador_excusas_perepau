const elementoRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generadorExcusa = () => {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  const randomWho = elementoRandom(who);
  const randomAction = elementoRandom(action);
  const randomWhat = elementoRandom(what);
  const randomWhen = elementoRandom(when);

  return (`${elementoRandom(who)} ${elementoRandom(action)} ${elementoRandom(what)} ${elementoRandom(when)}`);
};


document.getElementById("excusa").innerHTML = generadorExcusa();

document.getElementById("btn-generator").addEventListener("click", () => {
  document.getElementById("excusa").innerHTML = generadorExcusa();
});  