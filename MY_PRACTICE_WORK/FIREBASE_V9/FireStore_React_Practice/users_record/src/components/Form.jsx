import { useState } from 'react';
function Form() {
    const [username, setUsername] = useState("Sandeep");

    const ConsoleIt = (e) => {
        e.preventDefault();
        const form = document.querySelector("#formOne");
        const button = document.querySelector("#button");
        console.log(form.username.value);
        form.reset();
    }

    return (
        <div className="border border-white rounded-md p-5">
            <form
                action="post"
                id="formOne"
                onSubmit={ConsoleIt}
                className="flex flex-col space-y-2 items-center justify-center"
            >
                <label htmlFor="name">Enter the UserName:</label>
                <br />
                <input
                className="textField"
                type="search"
                name="username"
                defaultValue={username}
                onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value);
                }}
                required
                />

                <button id="button" type="submit" className="button">
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form;
