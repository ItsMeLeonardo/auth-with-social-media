import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { extractUser } from "../../Utils/extractUser";
import { useAuth } from "../../Hooks/useAuth";

function AuthSocialMedia() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signUpWithSocialMedia } = useAuth();

  useEffect(() => {
    const token = searchParams.get("token");

    const content = extractUser(token);

    setTimeout(() => {
      signUpWithSocialMedia({ ...content, token });
      navigate("/");
    }, 2000);
  }, []);

  return <div>Welcome to this app 😛</div>;
}

export default AuthSocialMedia;
