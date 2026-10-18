import { Link } from "react-router-dom";
import ThemeToggle from "../../components/common/ThemeToggle";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <ThemeToggle />

            <Link
                to="/login"
                className="rounded-lg bg-primary px-4 py-2 text-white"
            >
                Login
            </Link>
        </div>
    );
}