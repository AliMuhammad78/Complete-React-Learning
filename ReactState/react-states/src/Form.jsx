 import { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    let handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <h2>Form Component</h2>
          
            <form>

                <label htmlFor="fullname">Full Name:</label>
                <input
                    type="text"
                    name="fullname"
                    placeholder="enter full name"
                    value={formData.fullname}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    placeholder="enter email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="password">Enter Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br /><br />

                <button>Submit</button>

            </form>
        </div>
    );
}
