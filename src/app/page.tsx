import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="mt-11 flex flex-col p-4 justify-end">
      {/* Container for the image and the about section */}

      <div className="flex flex-row mx-auto">
        <div className="ml-20">
          <Image
            src="/hero.jpeg"
            alt="image missing"
            height={300}
            width={350}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* About Section */}
        <div id="about" className="max-w-lg">
          <h1 className="text-5xl font-bold text-center mb-4">About</h1>
          <p className="text-center text-wrap text-lg">
            &nbsp;&nbsp;&nbsp;&nbsp;My name is Lucas Lamar, I went to Auburn University and graduated with a bachelor's degree
            in Computer Science. Something cool about me is that I enjoy studying Japanese in my free time. I haven't been doing
            it for very long, but I have the basic Hiragana and Katakana character sets down, as well as some other basics. I
            started at CGI on June 3rd, 2024, so I'm still relatively new here.
          </p>
        </div>
      </div>
      {/* Image */}

      <div className="m-auto mt-11">
        {/* Contact Form below the image and about section */}
        <ContactForm></ContactForm>
      </div>
    </main>
  );
}
