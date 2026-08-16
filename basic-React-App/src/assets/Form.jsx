export default  function Form (){
    function handleSubmit(event){
        event.preventDefault();  // Prevents the default form submission behavior 
        
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        console.log("Form Submitted");
        console.log("Name:", name);
        console.log("Email:", email);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}