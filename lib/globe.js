



function onImageDrop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  console.log(data);
  debugger
  e.target.src = data;
}

function allowDrop(e) {
  e.preventDefault();

}

function dragImage(e) {
  e.dataTransfer.setData("text", e.target.id);

}
