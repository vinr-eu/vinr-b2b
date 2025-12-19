import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";

export default function Home() {
  return (
    <>
      <RedirectToSignIn />
      <SignedIn>
        <main className={"max-w-7xl mx-auto p-4"}>
          <h1 className={"font-bold text-3xl"}>Home</h1>
        </main>
      </SignedIn>
    </>
  );
}
