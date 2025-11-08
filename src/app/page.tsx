import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Delicious homemade meals, prepared with care</h1>
      <p>
        HQ Kitchen is a home cooking business based in San Diego, CA. Our mission is to provide simple, tasty, and nutritious meals, made fresh daily and delivered to your door.
      </p> 
      <p>
        Our rotating menu of family-style meals is updated weekly. Check out our <Link href="/gallery" style={{ textDecoration: "underline" }}>gallery</Link> to see some examples of what we offer.
      </p>
      <p>
        Please <Link href="/contact" style={{ textDecoration: "underline" }}> contact us</Link> to receive more info, or to join our mailing list!
      </p>
    </section>
  );
}
