import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Man");

  const onChangeHandler = (e) => {
    if (e.target.id === "name") setName(e.target.value);
    else if (e.target.id === "email") setEmail(e.target.value);
    else if (e.target.id === "gender") setGender(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const message = `
      Name: ${name}
      Email: ${email}
      Gender: ${gender}
    `;

    alert(message);
  };

  return (
    <div>
      <h1> Register Form</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" value={name} onChange={onChangeHandler} />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="gender">Gender: </label>
        <select id="gender" value={gender} onChange={onChangeHandler}>
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
        </select>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
