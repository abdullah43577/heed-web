import type { CategoryKey } from "@/lib/categories";
import {
  Database,
  HelpCircle,
  Lock,
  Mail,
  PenLine,
  Send,
  Shield,
  Trash2,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export interface IconItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const ASSURANCES = [
  "Never sends without your tap",
  "Never deletes or archives",
  "Up to 5 Gmail accounts",
] as const;

export const FLOW = [
  {
    label: "Arrives",
    value: 47,
    body: "emails on an ordinary day: receipts, updates, newsletters, promotions, and a few people.",
  },
  {
    label: "Heed reads",
    value: 44,
    body: "are marked read and labelled in Gmail, each with a one-line summary in your daily report.",
  },
  {
    label: "You reply",
    value: 2,
    body: "drafts wait for you. The one email Heed wasn't sure about stays unread, for you to decide.",
    highlight: true,
  },
] as const;

export interface Step {
  title: string;
  body: string;
  note?: string;
  categories?: CategoryKey[];
}

export const STEPS: Step[] = [
  {
    title: "Connect your Gmail",
    body: "Sign in with Google and choose the inboxes Heed works on, up to five. Your mail stays in Gmail.",
    note: "Gmail only, for now",
  },
  {
    title: "Heed sorts what arrives",
    body: "Your own rules first, then AI. Mail that needs no reply is marked read and labelled Heed/Handled. It never leaves your inbox.",
    categories: ["worthALook", "updates", "newsletters", "promotions"],
  },
  {
    title: "You only reply",
    body: "When someone is waiting on you, Heed drafts the reply and lets you know. Read it, change what you like, and tap Send.",
    categories: ["needsReply"],
  },
];

export const FEATURES = {
  drafts: {
    eyebrow: "Drafts",
    title: "Replies that sound like you, and never make things up.",
    body: "Heed learns your greeting, sign-off and tone from your sent mail. Where a reply needs something only you know, it leaves a blank instead of guessing.",
    ticks: [
      "Send stays locked until every blank is filled",
      "Rewrite in a tap: shorter, warmer, more formal, or a polite no",
      "Five seconds to undo after you tap Send",
    ],
  },
  report: {
    eyebrow: "Daily report",
    title: "One short report a day, instead of a full inbox.",
    body: "At a time you choose, Heed tells you what it read for you: how many emails, from which account, and anything worth a look first. Every number is counted from your mail, never estimated by AI.",
    ticks: [
      "A one-line summary of every email it read",
      "Undo anything: mark unread, or never auto-read a sender",
    ],
  },
  ask: {
    eyebrow: "Ask",
    title: "Ask your inbox anything, and see where the answer came from.",
    body: "“Did the landlord reply about the deposit?” Heed searches all your connected accounts and answers with the emails it used, so you can check it yourself.",
    ticks: [
      "Read-only: Ask can search and read, never send or change anything",
    ],
  },
  backlog: {
    eyebrow: "Backlog",
    title: "Thousands of unread emails, cleared in one confirmed tap.",
    body: "Heed sorts the unread mail from the last 7, 30 or 90 days and shows you what it would mark as read. Nothing changes in Gmail until you say so, and anything that might still need a reply is listed for you.",
    ticks: [],
  },
} as const;

export const MINI_FEATURES: IconItem[] = [
  {
    icon: Shield,
    title: "Sender rules",
    body: "Always leave a sender for you, always handle them, or never draft for them. For one inbox or all of them.",
  },
  {
    icon: PenLine,
    title: "Instructions",
    body: "Tell Heed about you, in your own words: “I'm a freelance designer. Recruiters get a polite no.”",
  },
  {
    icon: Mail,
    title: "Five inboxes, one place",
    body: "Work and personal Gmail side by side, each with its own colour, style and rules.",
  },
];

export const PRINCIPLES: IconItem[] = [
  {
    icon: Send,
    title: "Nothing is sent without your tap",
    body: "There is no auto-send setting, and there never will be. Every reply waits for you.",
  },
  {
    icon: UserCheck,
    title: "The AI never picks who gets a reply",
    body: "Recipients come from the original email's headers. An email can't trick Heed into writing to someone else.",
  },
  {
    icon: HelpCircle,
    title: "When unsure, it leaves mail alone",
    body: "If Heed isn't confident, or the AI is down, the email stays unread and untouched for you.",
  },
  {
    icon: Trash2,
    title: "Never deletes, archives or marks spam",
    body: "Handled mail is marked read and labelled. It stays exactly where it was in Gmail.",
  },
  {
    icon: Database,
    title: "Summaries, not your mailbox",
    body: "Heed reads email bodies from Gmail when it needs them and doesn't keep them. Summaries expire after 30 days.",
  },
  {
    icon: Lock,
    title: "Your mail doesn't train anyone's AI",
    body: "Heed only uses AI providers that don't keep or train on what they're sent.",
  },
];

export const PRICING_INCLUDES = [
  "Up to 5 Gmail accounts",
  "Reading, sorting and labelling new mail",
  "Reply drafts in your own style",
  "The daily report, Ask, and backlog tidying",
  "Sender rules and instructions",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Will Heed ever send an email by itself?",
    answer:
      "No. Heed writes drafts; only you can send them, by tapping Send. Even then you have five seconds to undo.",
  },
  {
    question: "What happens to the emails Heed reads?",
    answer:
      "They're marked read and labelled Heed/Handled in Gmail, and stay in your inbox. Nothing is deleted, archived or moved to spam. You can mark any of them unread again from the app.",
  },
  {
    question: "What does Heed store?",
    answer:
      "A one-line summary and basic details of each email (sender, subject, time), for 30 days. Email bodies are read from Gmail when needed and aren't kept.",
  },
  {
    question: "Which email providers does it work with?",
    answer:
      "Gmail, up to five accounts per person. Other providers may come later.",
  },
  {
    question: "What if Heed gets something wrong?",
    answer:
      "Every handled email can be undone, and you can tell Heed to never auto-read a sender again. When Heed isn't sure about an email, it leaves it unread instead of guessing.",
  },
  {
    question: "How do I remove Heed's access?",
    answer:
      "Disconnect an account in the app, or delete your Heed account. Both revoke Heed's access to Google straight away and remove what Heed stored.",
  },
] as const;
