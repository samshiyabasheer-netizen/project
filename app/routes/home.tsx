import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Ai resume analyzer" },
        {
            name: "description",
            content:
                "AI Resume Analyzer is a web application that analyzes resumes using artificial intelligence to provide insights, skill evaluation, and improvement suggestions for better job opportunities",
        },
    ];
}

export default function Home() {
    const {  auth } = usePuterStore();

    const location = useLocation();
    const next: string = location.search.split("next=")[1];

    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate(next || "/auth?next=/");
        }
    }, [auth.isAuthenticated])
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
            <Navbar />

            <section className="main-section">
                <div className="page-heading">
                    <h1>Track Your Application & Resume Ratings</h1>

                    <h2>
                        Review Your Submissions and check AI-powered feedback.
                    </h2>
                </div>

                {resumes.length > 0 && (
                    <div className="resumes-section">
                        {resumes.map((resume) => (
                            <ResumeCard key={resume.id} resume={resume} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}