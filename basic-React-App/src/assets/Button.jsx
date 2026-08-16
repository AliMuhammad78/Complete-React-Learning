export default function Button (){
    function buttonClick(event){
  console.log("Button Clicked")
  console.log(event)
}

function MouseOver(){
    console.log("Mouse Over Event Triggered")
}
function onDoubleClickHandler(){
    console.log("Double Click Event Triggered")
}
    return (
        <div>
             <button onClick={buttonClick}>Click it </button>
             <p onMouseOver={MouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis id quod voluptatem facere enim suscipit iste iure beatae, perspiciatis repellendus eos eaque molestiae ducimus! Est hic cupiditate consequuntur dolorum?</p>
             <button onDoubleClick={onDoubleClickHandler}>double click it </button>
        </div>

    )
}