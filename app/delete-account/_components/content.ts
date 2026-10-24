export const DELETE_INTRO =
  "You can delete your Heed account, and everything Heed holds about you, at any time. Deletion is immediate and cannot be undone.";

export const IN_APP_STEPS = [
  "Open Heed on your phone and sign in.",
  "Go to the Profile tab.",
  "Tap Delete account, at the bottom of the screen.",
  "Enter your password and tap Delete my account.",
] as const;

export const DELETED_DATA = [
  "Your Heed account: your name, email address, password and settings.",
  "Every connected Gmail account, and Heed's access to it, which is revoked at Google first.",
  "The records of the emails Heed sorted, and every reply draft.",
  "Your writing style notes, instructions for Heed and sender rules.",
  "Daily reports, backlog runs and Ask conversations.",
  "Notifications and your device's push token.",
] as const;

export const GMAIL_AFTER = [
  "Nothing is deleted from Gmail. Heed never deleted mail, and it does not now.",
  "Mail Heed marked as read stays read, and its labels (Heed, Heed/Handled, Heed/Needs reply) stay until you delete them in Gmail's settings.",
  "Replies you sent through Heed stay in your Sent folder, like any other email you sent.",
] as const;
