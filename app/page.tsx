import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";

export default function Home() {
  return (
    <>
      <RedirectToSignIn />
      <SignedIn>Home</SignedIn>
    </>
  );
}
