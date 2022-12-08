
function Form() {

    const ConsoleIt = (e) => {
        e.preventDefault();
        const form = document.querySelector("#formOne");
        // const button = document.querySelector("#button");
        if (!form.username.value) {
            alert("Enter something in the form!")
        }
        console.log(form.username.value);
        form.reset();
    }

    return (
        <div className="border border-white rounded-md p-5">
            <form
                action="post"
                id="formOne"
                onSubmit={ConsoleIt}
                className="flex flex-col space-y-2 justify-center items-center"
            >
                <input
                className="textField"
                type="search"
                    name="username"
                    placeholder='Add ToDo'
                required
                />

                <button id="button" type="submit" className="button">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default Form;
