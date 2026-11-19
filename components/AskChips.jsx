"use client";

const QUESTIONS = [
  "What does Jamee work with?",
  "Tell me about his projects",
  "What has he built with AI?",
  "How can I contact Jamee?",
];

export default function AskChips({ questions = QUESTIONS }) {
  const ask = (q) => window.dispatchEvent(new CustomEvent("jamee-ask", { detail: q }));

  return (
    <div className="flex flex-wrap gap-2">
      {questions.map(q => (
        <button
          key={q}
          type="button"
          onClick={() => ask(q)}
          className="rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-3 py-1.5 text-left text-xs font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-lt)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
