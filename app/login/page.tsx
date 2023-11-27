import getCurrentUser from "../../actions/getCurrentUser";
import FormWrap from "../components/FormWrap";
import Container from "../components/Container";
import LoginForm from "./LoginForm";

const Login = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
