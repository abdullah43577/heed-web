export const SITE_NAME = "Heed";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://heed.reactmode.dev";

export const SITE_TAGLINE = "Your inbox, read for you.";

export const SITE_DESCRIPTION =
  "Heed reads the Gmail that doesn't need you and drafts replies for the mail that does. Nothing is sent until you tap Send.";

// Placeholders until the founder confirms the real address and link.
export const SUPPORT_EMAIL = "support@heed.reactmode.dev";
export const COFFEE_URL = "#";

export const ROUTES = {
  home: "/",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
  deleteAccount: "/delete-account",
} as const;

export const GOOGLE_USER_DATA_POLICY_URL =
  "https://developers.google.com/terms/api-services-user-data-policy";
