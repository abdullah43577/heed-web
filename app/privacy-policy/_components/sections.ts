import {
  GOOGLE_PERMISSIONS_URL,
  GOOGLE_USER_DATA_POLICY_URL,
  OPERATOR_COUNTRY,
  OPERATOR_NAME,
  ROUTES,
  SUPPORT_EMAIL,
} from "@/app/_lib/site";
import type { LegalSection } from "@/components/shared/legal-page";

export const PRIVACY_POLICY_INTRO = `Heed ("we", "us") is an inbox assistant, run by ${OPERATOR_NAME}, an individual developer in ${OPERATOR_COUNTRY}, who is responsible for the data described here. You connect your Gmail accounts, and Heed reads the mail that does not need you, drafts replies for the mail that does, and sends a reply only when you tap Send. This policy explains what Heed reads, what it keeps, for how long, and who else is involved. Heed is built to keep as little as it can: summaries, not mailboxes.`;

export const PRIVACY_POLICY_SECTIONS: readonly LegalSection[] = [
  {
    heading: "Your Heed account",
    paragraphs: [
      "To create an account we ask for your first and last name, an email address and a password. Your password is stored only as a salted hash; we never see or keep it in readable form. We send a one-time code to your email address to confirm it is yours.",
      "We also keep your app settings (the time of your daily report and your timezone, taken from your phone) and, if you allow notifications, a push token for your device so we can tell you when a reply is ready or your report has arrived.",
    ],
  },
  {
    heading: "What Heed can do in your Gmail",
    paragraphs: [
      "When you connect a Gmail account, Google asks you to grant Heed three permissions: your email address, your basic account identity, and the Gmail permission to read, compose, send and modify your email (gmail.modify). Heed asks for nothing broader. That permission does not allow permanent deletion of mail.",
      "Heed uses it for exactly these things:",
    ],
    bullets: [
      "Reading new mail as it arrives, about once a minute, to decide whether it needs you.",
      "Marking mail that needs no reply as read, and adding the labels Heed, Heed/Handled and Heed/Needs reply. Mail stays in your inbox.",
      "Reading the conversation an email belongs to when it drafts a reply, and sending that reply from your own address, in the same thread, only after you tap Send.",
      "Reading up to 50 of your recent sent emails, only when you ask Heed to learn how you write, to produce a short note about your greeting, sign-off, length and tone.",
      "Searching and reading your mail to answer a question you ask in Ask. Ask can only search and read; it cannot send, change or delete anything.",
      "Scanning unread mail from the last 7, 30 or 90 days, only when you start Tidy my backlog. Nothing in Gmail changes until you confirm the summary.",
    ],
  },
  {
    heading: "What Heed will never do in your Gmail",
    bullets: [
      "Send anything without you tapping Send. There is no auto-send setting.",
      "Delete, archive, forward or move mail to spam.",
      "Let the AI choose who a reply goes to. Recipients are taken from the email's own headers.",
      "Open attachments. Heed reads the text of an email only.",
    ],
  },
  {
    heading: "What we store, and what we don't",
    paragraphs: [
      "We do not keep copies of your emails. When Heed needs the text of an email, to sort it, draft a reply or answer a question, it fetches it from Gmail, uses it, and discards it. What we do store is:",
    ],
    bullets: [
      "For each email Heed sorts: the sender's name and address, the subject, when it arrived, Gmail's ids for the message and thread, Heed's one-line summary, the category it chose, a one-line reason, and what Heed did (for example, marked read).",
      "Reply drafts: the text of each draft, so you can review, edit and send it.",
      "Your writing style note, the instructions you give Heed for each account, and your sender rules.",
      "Daily reports: the counts of what Heed handled, per category and per account.",
      "Backlog runs: how many emails were found and how they were sorted.",
      "Ask conversations: your questions, Heed's answers, and the sender, subject and date of each email an answer cites.",
      "For each connected Gmail account: its address, Google's id for it, and the access Google grants Heed. That access is encrypted before it is stored and is never returned by our API.",
      "In-app notifications, such as '2 replies ready'.",
    ],
  },
  {
    heading: "How long we keep it",
    bullets: [
      "Email records and their drafts are deleted 30 days after Heed first stored them. The one exception is an email still waiting on your reply, which is kept until you reply, send, or tell Heed no reply is needed.",
      "Daily reports are deleted after 90 days.",
      "A backlog summary you never confirm is deleted after 7 days.",
      "An Ask conversation is deleted 30 days after it was last used.",
      "Everything else (your account, settings, connected accounts, style notes, instructions and rules) is kept until you remove it or delete your account.",
    ],
  },
  {
    heading: "AI processing",
    paragraphs: [
      "Sorting, summaries, drafts, rewrites, the writing style note and Ask answers are produced by large language models. To do that we send the relevant email text, together with your instructions and style note, to an AI provider, one request at a time, and keep only the result described above.",
      "Our primary provider is Groq, with zero data retention switched on for our whole account, so Groq does not store what we send or what it returns, and does not train on it. When Groq is unavailable we use OpenRouter, and every request we send through OpenRouter requires a provider that neither retains prompts nor trains on them; if none is available, the request fails and the email is left untouched. No AI provider we use stores your mail or trains on it, and neither do we.",
      "Email content is treated as untrusted. The models Heed uses have no ability to send, forward, delete or change settings, and their output is checked before Heed acts on it. When Heed is unsure about an email, it leaves it unread and untouched.",
    ],
  },
  {
    heading: "Google API Services: Limited Use",
    paragraphs: [
      "Heed's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. In particular:",
    ],
    bullets: [
      "We use Gmail data only to provide and improve the features you can see in Heed, described above.",
      "We do not use Gmail data for advertising, and we do not sell it.",
      "We do not transfer Gmail data to anyone except as needed to provide those features (the AI providers above), to comply with the law, or as part of a merger or sale with your notice.",
      "No person at Heed reads your email, unless you ask us to for support, it is needed for security purposes such as investigating abuse, or the law requires it.",
      "We do not use Gmail data to develop, improve or train generalised AI or machine learning models.",
    ],
    links: [
      {
        label: "Google API Services User Data Policy",
        href: GOOGLE_USER_DATA_POLICY_URL,
      },
    ],
  },
  {
    heading: "Who else processes your data",
    paragraphs: [
      "We never sell your personal data. We use a small number of service providers, each only for the job listed:",
    ],
    bullets: [
      "Google, for Gmail itself, through the permissions you grant.",
      "Groq and OpenRouter, for the AI processing described above.",
      "Our hosting providers, which run Heed's servers and database.",
      "Resend, to send Heed's own emails to you: your sign-up code, password resets and account notices.",
      "Expo, Google Firebase Cloud Messaging and Apple Push Notification service, to deliver push notifications to your phone. A notification carries a short line such as 'Sam is waiting on a reply'.",
      "Authorities, where the law requires us to disclose information.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "Data travels between the app, our servers, Google and our providers over encrypted connections. The access Google grants Heed is encrypted at rest, passwords are hashed, and sign-in sessions use short-lived tokens. No system is perfectly secure, but we design Heed to hold as little as possible, so there is less to protect.",
    ],
  },
  {
    heading: "Your choices and rights",
    paragraphs: [
      "You have rights over your data under the Nigeria Data Protection Act 2023 and, depending on where you live, laws such as the GDPR: to see it, correct it, delete it and object to how it is used. In Heed you can exercise most of them yourself:",
    ],
    bullets: [
      "Disconnect a Gmail account at any time in the app (Profile, then Gmail accounts). Heed revokes its access at Google and deletes that account's emails, drafts, rules and backlog runs.",
      "Delete your Heed account at any time. Heed revokes its access to every connected Gmail account and deletes everything it holds about you.",
      "Remove Heed's access from your Google account directly, at any time. Heed then stops reading that account and asks you to reconnect.",
      "Edit or clear your writing style note, your instructions and your rules whenever you like.",
      "Turn notifications off in your phone's settings.",
      `Ask us for a copy of your data, or to correct it, by emailing ${SUPPORT_EMAIL}.`,
      "Labels Heed added, and mail it marked as read, stay that way in Gmail after you disconnect or delete your account. You can remove the labels in Gmail's settings.",
    ],
    links: [
      { label: "Delete your Heed account", href: ROUTES.deleteAccount },
      {
        label: "Your Google account's third-party access",
        href: GOOGLE_PERMISSIONS_URL,
      },
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "Heed is not intended for anyone under 13, or under the age of digital consent where you live. We do not knowingly collect data from children; if you believe a child has created an account, contact us and we will delete it.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If we change how Heed uses your data, we will update this page and its date, and email you before a significant change takes effect. We will not use data already collected in a new way without asking you first.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about this policy or your data are welcome. Email us and a person will reply.",
    ],
    links: [{ label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` }],
  },
];
