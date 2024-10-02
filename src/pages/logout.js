import {useEffect} from "react";
import {supabase} from "@/utils/supabase";

export default function LogoutPage() {
    useEffect(() => {
        const logout = async () => {
            await supabase.auth.signOut();
        }
    }, [])
    return (<p>Logging Out</p>)
}