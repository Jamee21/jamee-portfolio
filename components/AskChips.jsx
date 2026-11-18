
"use client";

const QUESTIONS = [
  "What does Jamee work with?",
  "Tell me about his projects",
  "What has he built with AI?",
  "How can I contact Jamee?",
];

export default function AskChips({ questions = QUESTIONS }) {
  const ask = (question) => {
    window.dispatchEvent(
      new CustomEvent("jamee-ask", {
        detail: question,
      })
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((question) => (
        <button
          key={question}
          type="button"
          onClick={() => ask(question)}
          className="
            rounded-md
            border border-[color:var(--line)]
            px-3 py-2
            text-left text-sm
            text-[color:var(--text)]
            transition-all duration-200
            hover:border-[color:var(--accent)]
            hover:text-[color:var(--accent)]
            hover:bg-[color:var(--accent)]/5
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[color:var(--accent)]
          "
        >
          {question}
        </button>
      ))}
    </div>
  );
}
