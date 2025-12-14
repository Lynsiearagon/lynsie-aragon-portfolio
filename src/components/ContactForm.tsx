"use client";

import { useState, FormEvent } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    const data = {
      "form-name": "contact",
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      Message: message,
    };

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-8">Message Me</h3>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="bg-transparent border border-slate-700/40 rounded-md p-2 text-slate-50 placeholder-slate-400"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-300 mb-1">Last Name</span>
            <input
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="bg-transparent border border-slate-700/40 rounded-md p-2 text-slate-50 placeholder-slate-400"
            />
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm text-slate-300 mb-1">Email</span>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border border-slate-700/40 rounded-md p-2 text-slate-50 placeholder-slate-400"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-slate-300 mb-1">Message</span>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="bg-transparent border border-slate-700/40 rounded-md p-2 text-slate-50 placeholder-slate-400"
          />
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <span className="text-green-400">Submitted</span>
          )}
          {status === "error" && (
            <span className="text-red-400">Submission failed. Try again.</span>
          )}
        </div>
      </form>
    </div>
  );
}
