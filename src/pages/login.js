
import {supabase} from "@/utils/supabase";


const LoginWithGoogleButton = () => {
    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({ provider: 'github' });
    };

    return (
        <button onClick={handleLogin}>
            Login with Github
        </button>
    );
};

export default LoginWithGoogleButton;
