import Link from "next/link";

export const metadata = { title: "About | HQ Kitchen" };

export default function AboutPage() {
  return (
    <section>
      <h1>About HQ Kitchen</h1>
      <p>
        HQ Kitchen is a home cooking business based in San Diego, CA. Our mission is to provide simple, tasty, and nutritious meals for you to enjoy with family and friends!
      </p> 
      <p>
        Our menu features a rotating set of family-style meals that is updated weekly. Check out our <Link href="/gallery" style={{ textDecoration: "underline" }}>gallery</Link> to see some examples of what we offer! Meals are available for pickup or delivery, and can be ordered by subscription or a-la-carte.
      </p>
      <p>
        We are not yet open to the public, but please <Link href="/contact" style={{ textDecoration: "underline" }}> contact us</Link> and we will keep you updated!
      </p>
    </section>
  );
}
