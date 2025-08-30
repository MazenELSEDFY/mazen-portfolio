import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Section, Card } from "../components/ui";
import { profile } from "../data/profile";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // Simple honeypot for spam bots
    if (e.target.bot_field.value) {
      setStatus({ type: "error", msg: "Submission blocked (spam detected)." });
      return;
    }

    const name = e.target.from_name.value.trim();
    const email = e.target.reply_to.value.trim();
    const title = e.target.title.value.trim();
    const message = e.target.message.value.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !title || !message) {
      setStatus({ type: "error", msg: "Please fill all fields with a valid email." });
      return;
    }

    try {
      setSending(true);
      await emailjs.sendForm(
        "service_wek9vsw",   // Your EmailJS Service ID
        "template_4ywvzi3",  // Your EmailJS Template ID
        formRef.current,
        "fE_2gfE852-2ONuHU"  // Your EmailJS Public Key
      );
      setStatus({ type: "success", msg: "Message sent successfully ✅" });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "Failed to send ❌ Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section title="Contact">
      {/* Quick contact cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <p className="font-medium text-orange-500">Email</p>
          <a className="text-blue-600 hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Card>
        <Card>
          <p className="font-medium text-orange-500">LinkedIn</p>
          <a
            className="text-blue-600 hover:underline"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {profile.links.linkedin}
          </a>
        </Card>
        <Card>
          <p className="font-medium text-orange-500">GitHub</p>
          <a
            className="text-blue-600 hover:underline"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            {profile.links.github}
          </a>
        </Card>
        <Card>
          <p className="font-medium text-orange-500">Phone</p>
          <a
            className="text-blue-600 hover:underline"
            href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
          >
            {profile.phone}
          </a>
        </Card>
      </div>

      {/* Contact form */}
      <Card className="mt-6">
        <h3 className="font-semibold text-blue-600 mb-3">Send me a message</h3>

        {/* Status banner */}
        {status.msg && (
          <div
            className={`mb-4 rounded-md border px-3 py-2 text-sm ${
              status.type === "success"
                ? "border-green-300 bg-green-50 text-green-800"
                : "border-red-300 bg-red-50 text-red-800"
            }`}
            role="status"
            aria-live="polite"
          >
            {status.msg}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot */}
          <input type="text" name="bot_field" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-orange-500" htmlFor="from_name">
                Name
              </label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                required
                className="w-full border rounded-md p-2 text-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-500" htmlFor="reply_to">
                Email
              </label>
              <input
                id="reply_to"
                type="email"
                name="reply_to"
                required
                className="w-full border rounded-md p-2 text-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-500" htmlFor="title">
              Subject
            </label>
            <input
              id="title"
              type="text"
              name="title"
              required
              className="w-full border rounded-md p-2 text-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="How can I help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-500" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full border rounded-md p-2 text-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-medium px-4 py-2 rounded-md shadow-sm transition ${
              sending ? "opacity-70 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            {sending && (
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {sending ? "Sending..." : "Send"}
          </button>
        </form>

        <p className="mt-3 text-xs text-blue-600/70">
          This form uses EmailJS. By submitting, you agree to be contacted at the email you provided.
        </p>
      </Card>
    </Section>
  );
}
