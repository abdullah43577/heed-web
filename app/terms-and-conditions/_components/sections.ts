import {
  OPERATOR_COUNTRY,
  OPERATOR_NAME,
  ROUTES,
  SUPPORT_EMAIL,
} from "@/app/_lib/site";
import type { LegalSection } from "@/components/shared/legal-page";

export const TERMS_INTRO = `These terms govern your use of Heed, the mobile app and the service behind it ("Heed", "we", "us"). Heed is run by ${OPERATOR_NAME}, an individual developer in ${OPERATOR_COUNTRY}. By creating an account you agree to these terms. If you do not agree, please do not use Heed.`;

export const TERMS_SECTIONS: readonly LegalSection[] = [
  {
    heading: "What Heed is",
    paragraphs: [
      "Heed is an AI assistant for Gmail. It sorts new mail, marks mail that needs no reply as read and labels it, drafts replies for mail that does, sends a daily report of what it handled, and answers questions about your mail. Heed sends a reply only when you tap Send.",
    ],
  },
  {
    heading: "Your account",
    bullets: [
      "You must be at least 13, or the age of digital consent where you live, to use Heed.",
      "Give accurate details when you sign up, and keep your password to yourself. You are responsible for what happens under your account.",
      "Tell us straight away if you think someone else has access to it.",
    ],
  },
  {
    heading: "Connecting Gmail",
    bullets: [
      "You may connect up to five Gmail accounts, and only accounts you own or are authorised to manage.",
      "By connecting an account you allow Heed to read, label, mark as read and send replies from it, as described in our privacy policy. You can disconnect it at any time.",
      "Google may end Heed's access, for example when you change your password or remove Heed from your Google account. Heed then stops working for that account until you reconnect it.",
    ],
  },
  {
    heading: "You are in charge of what you send",
    paragraphs: [
      "Drafts are suggestions written by AI. They can be wrong, incomplete or not what you meant. Read every draft before you tap Send; once you send a reply, it is your message, and you are responsible for it. Heed marks anything only you can know, such as a date or a price, as a blank you must fill in before Send is allowed, but it cannot catch every mistake.",
    ],
  },
  {
    heading: "AI can get things wrong",
    paragraphs: [
      "Heed's sorting, summaries, reports and answers come from AI and may be inaccurate. Heed may mark as read an email you wanted to see, or miss one that needed a reply. Do not rely on Heed alone for anything time-critical, legal, medical or financial. Every email Heed marks as read stays in your inbox, and the Handled tab and daily report show what it did, so you can check and undo it.",
    ],
  },
  {
    heading: "Acceptable use",
    paragraphs: ["You agree not to use Heed to:"],
    bullets: [
      "Send spam, harassment, or anything unlawful, fraudulent or deceptive.",
      "Access a mailbox you are not authorised to use.",
      "Interfere with, overload, probe or reverse engineer the service, or get around its limits.",
      "Resell Heed or use it to build a competing product.",
    ],
  },
  {
    heading: "Free, with limits",
    paragraphs: [
      "Heed is free. To keep it that way, each account has daily limits on AI use. When a limit is reached, Heed sorts new mail by your rules alone and leaves the rest unread and untouched until the limit resets. We may change these limits, and we will tell you before Heed stops being free.",
    ],
  },
  {
    heading: "Your content",
    paragraphs: [
      "Your email, drafts, instructions and settings remain yours. You give us permission to process them only to provide Heed to you, as described in our privacy policy. We claim no ownership of them.",
      "Heed's app, website, name, logo and design belong to us. You may not copy or reuse them without our permission.",
    ],
    links: [{ label: "Privacy policy", href: ROUTES.privacy }],
  },
  {
    heading: "Availability and changes",
    paragraphs: [
      "We work to keep Heed running, but it is provided as is and may be interrupted, for example when Gmail or an AI provider is unavailable. When that happens, Heed leaves your mail untouched. We may change, add or remove features. If we stop offering Heed, we will tell you in advance where we can.",
    ],
  },
  {
    heading: "Ending your use",
    paragraphs: [
      "You can stop using Heed and delete your account at any time. We may suspend or close an account that breaks these terms, or where the law requires it. When an account is closed, Heed's access to its Gmail accounts is revoked and its data is deleted as our privacy policy describes.",
    ],
    links: [{ label: "Delete your account", href: ROUTES.deleteAccount }],
  },
  {
    heading: "Liability",
    paragraphs: [
      "To the extent the law allows, Heed is provided without warranties of any kind, and we are not liable for indirect or consequential losses, or for loss of data, business or opportunity, arising from your use of Heed, including emails sent, not sent, missed or marked as read. Nothing in these terms limits liability that cannot be limited by law, or your rights as a consumer.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      `These terms are governed by the laws of the Federal Republic of ${OPERATOR_COUNTRY}, and disputes about them will be heard by its courts. If you use Heed as a consumer, you also keep any protections the law of the country you live in gives you, and nothing in these terms takes them away.`,
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms. We will change the date at the top of this page and email you before a significant change takes effect. If you keep using Heed after that, the new terms apply.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: ["Questions about these terms are welcome."],
    links: [{ label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` }],
  },
];
