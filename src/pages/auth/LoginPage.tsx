
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormData = {
    email: string;
    password: string;
};

type FormErrors = {
    email?: string;
    password?: string;
};

export default function LoginPage() {
    const [formData, setFormData] = useState<FormData>({ email: "", password: "", });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password =
                "Password must be at least 8 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        console.log("Login submitted", {
            email: formData.email,
            password: formData.password,
            rememberMe,
        });
        navigate("/dashboard");
      

        // TODO: Call your login API here.
    };

    return (
        <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
            <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

                {/* LEFT PANEL */}
                <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 p-8 text-white sm:p-12 lg:p-14">

                    {/* Decorative background */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

                    {/* Brand */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl font-bold ring-1 ring-white/20">
                                E
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    E-Construction
                                </h2>

                                <p className="text-sm text-blue-200">
                                    Management System
                                </p>
                            </div>
                        </div>

                        {/* Welcome content */}
                        <div className="mt-16 sm:mt-24">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                                Build smarter
                            </p>

                            <h1 className="max-w-lg text-4xl font-bold leading-tight sm:text-5xl">
                                Welcome to your construction command center.
                            </h1>

                            <p className="mt-6 max-w-md text-base leading-7 text-blue-100 sm:text-lg">
                                Manage projects, track progress,
                                organize resources, and keep your
                                construction operations running smoothly
                                — all in one place.
                            </p>
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div className="relative z-10 mt-12">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                                    ✓
                                </div>

                                <h3 className="font-semibold">
                                    Project Tracking
                                </h3>

                                <p className="mt-1 text-sm text-blue-200">
                                    Monitor project progress in one place.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                                    ◈
                                </div>

                                <h3 className="font-semibold">
                                    Better Control
                                </h3>

                                <p className="mt-1 text-sm text-blue-200">
                                    Keep teams and resources organized.
                                </p>
                            </div>

                        </div>

                        <p className="mt-8 text-sm text-blue-200">
                            © {new Date().getFullYear()} E-Construction.
                            All rights reserved.
                        </p>
                    </div>
                </section>

                {/* RIGHT PANEL */}
                <section className="flex items-center justify-center p-6 sm:p-12 lg:p-14">
                    <div className="w-full max-w-md">

                        {/* Form heading */}
                        <div className="mb-8">
                            <p className="mb-3 text-sm font-semibold text-blue-700">
                                SECURE LOGIN
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Welcome back!
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Please enter your details to sign in.
                            </p>
                        </div>

                        {/* Login form */}
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="space-y-5"
                        >
                            {/* EMAIL */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="username"
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={
                                        errors.email
                                            ? "email-error"
                                            : undefined
                                    }
                                    className={`w-full rounded-xl border px-4 py-3 outline-none transition placeholder:text-slate-400 focus:ring-4 ${errors.email
                                            ? "border-red-500 focus:ring-red-100"
                                            : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
                                        }`}
                                />

                                {errors.email && (
                                    <p
                                        id="email-error"
                                        role="alert"
                                        className="mt-1.5 text-sm text-red-600"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Password
                                    </label>

                                    <a
                                        href="/forgot-password"
                                        className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.password}
                                        aria-describedby={
                                            errors.password
                                                ? "password-error"
                                                : undefined
                                        }
                                        className={`w-full rounded-xl border px-4 py-3 pr-20 outline-none transition placeholder:text-slate-400 focus:ring-4 ${errors.password
                                                ? "border-red-500 focus:ring-red-100"
                                                : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
                                            }`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        className="absolute inset-y-0 right-3 text-sm font-medium text-slate-500 hover:text-blue-700"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p
                                        id="password-error"
                                        role="alert"
                                        className="mt-1.5 text-sm text-red-600"
                                    >
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* REMEMBER ME */}
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) =>
                                        setRememberMe(e.target.checked)
                                    }
                                    className="h-4 w-4 rounded border-slate-300 accent-blue-700"
                                />

                                <label
                                    htmlFor="rememberMe"
                                    className="ml-2 text-sm text-slate-600"
                                >
                                    Remember me
                                </label>
                            </div>

                            {/* LOGIN BUTTON */}
                            <button
                                onClick={handleSubmit}
                                type="submit"
                                className="w-full rounded-xl bg-blue-700 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
                            >
                                Sign in to your account →
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-7 flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-200" />

                            <span className="text-xs text-slate-400">
                                SECURE ACCESS
                            </span>

                            <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Support */}
                        <p className="text-center text-sm text-slate-500">
                            Need help accessing your account?{" "}
                            <a
                                href="mailto:support@example.com"
                                className="font-semibold text-blue-700 hover:text-blue-900"
                            >
                                Contact support
                            </a>
                        </p>

                        <p className="mt-8 text-center text-xs leading-5 text-slate-400">
                            By signing in, you agree to your organization's
                            security and access policies.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
