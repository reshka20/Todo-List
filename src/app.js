var root = document.getElementById("root");

var todo ={
    title:"Todo List",
    description:"my todo List",
    items:[]
}

function submit(event){
    event.preventDefault();

    var item = event.target.elements.txt.value;

    if(item){
        todo.items.push(item);
        event.target.elements.txt.value = "";
        render();
    }
}
function clear(){
    todo.items =[];
    render();
}

function render(){
    var html = (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>

            {
                <ul>
                    {
                        todo.items.map((item,index) =>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            }


            <p><button onClick={clear}>CLear</button></p>

            <form onSubmit={submit}>
                <input type="text" name="txt"/>
                <button type="submit">Send</button>

            </form>
        </div>

    );

   


ReactDOM.render(html,root)
}
render();
    
