"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch("/ContactForm.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          Array.from(data.entries()).map(([key, value]) => [
            key,
            value.toString(),
          ])
        ).toString(),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="bg-slate-800 rounded-xl p-8 border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300 flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-white mb-8">Message Me</h3>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-slate-300 mb-1">First Name</span>
            <input
              name="first-name"
              required
              className="border border-slate-700/90 rounded-md p-2 text-slate-50 bg-slate-900/40"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-300 mb-1">Last Name</span>
            <input
              name="last-name"
              required
              className="border border-slate-700/90 rounded-md p-2 text-slate-50 bg-slate-900/40"
            />
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm text-slate-300 mb-1">Email</span>
          <input
            name="email"
            type="email"
            required
            className="border border-slate-700/90 rounded-md p-2 text-slate-50 bg-slate-900/40"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-slate-300 mb-1">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            className="border border-slate-700/90 rounded-md p-2 text-slate-50 bg-slate-900/40"
          />
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            Submit
          </button>

          {status === "success" && (
            <span className="text-green-400">Message sent successfully!</span>
          )}
          {status === "error" && (
            <span className="text-red-400">
              Something went wrong. Please try again.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
