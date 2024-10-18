import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main id="home" className="flex flex-col p-4 justify-end">
      {/* Container for the image and the about section */}

      <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-row">
            <div className="ml-20">
              <Image
                src="/hero.jpeg"
                alt="image missing"
                className="object-cover w-full h-auto min-w-[350px] min-h-[300px]"
                height={300}
                width={350}
              />
            </div>

            {/* About Section */}
            <div id="about" className="max-w-lg ml-5">
              <h1 className="text-5xl font-bold text-center mb-4">About</h1>
              <p className="text-center text-wrap text-lg">
                &nbsp;&nbsp;&nbsp;&nbsp;My name is Lucas Lamar, I went to Auburn University and graduated with a bachelor's degree
                in Computer Science. Something cool about me is that I enjoy studying Japanese in my free time. I haven't been doing
                it for very long, but I have the basic Hiragana and Katakana character sets down, as well as some other basics. I
                started at CGI on June 3rd, 2024, so I'm still relatively new here.
              </p>
            </div>
          </div>
      </div>

      <hr id="contact" className="border-t border-gray-300" />


      <div className="flex items-center justify-center min-h-screen">
        {/* Contact Form below the image and about section */}
        <ContactForm></ContactForm>
      </div>
    </main>
  );
}
