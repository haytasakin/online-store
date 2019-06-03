import React from "react";
import { Field, reduxForm } from "redux-form";

function CheckoutForm(props) {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">
            <b>Name</b>
          </label>
          <br />
          <Field
            class="form-control"
            name="order[name]"
            component="input"
            type="text"
            placeholder="enter your name"
            pattern="[A-Za-z]{1,32}"
            required
          />
        </div>

        <div>
          <label htmlFor="order[email]">
            <b>Email</b>{" "}
          </label>
          <br />
          <Field
            class="form-control"
            name="order[email]"
            component="input"
            type="email"
            placeholder="enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </div>

        <div>
          <button class="btn btn-primary" type="submit">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}
CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
