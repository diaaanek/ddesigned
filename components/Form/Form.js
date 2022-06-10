import cn from "classnames";
import styles from "./form.module.css";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mzbowgno");

  if (state.succeeded) {
    return (
      <p className={cn("caption", styles.text)}>Thanks for getting in touch!</p>
    );
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        id="name"
        type="name"
        name="name"
        className={cn("caption", styles.input)}
        placeholder="Name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        className={cn("caption", styles.input)}
        placeholder="Email Address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className={cn("caption", styles.message)}
        id="message"
        name="message"
        placeholder="Comment or Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className={cn("button", styles.button)}
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
