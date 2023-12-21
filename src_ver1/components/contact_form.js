export function ContactForm(){
    return(
        <div>
            <form>
                <lable htmlFor="title">Name: </lable>
                <input id= "title" name="title" type="text"/><br/>
                <lable htmlFor="content">Message: </lable>
                <textarea id="content" name="content"></textarea><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}