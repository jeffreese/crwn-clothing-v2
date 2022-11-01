import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div className="sign-in">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
