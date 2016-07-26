



function onImageDrop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  if (data.slice(-3) === "jpg"){
    e.target.src = data;
  }
}

function allowDrop(e) {
  e.preventDefault();

}

function dragImage(e) {
  e.dataTransfer.setData("text", e.target.id);
  console.log(e);
}
