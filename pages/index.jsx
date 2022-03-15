import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-full font-sans antialiased">
      <div className="container max-w-screen-xl mx-auto">
        <main
          id="wrapper"
          className="flex flex-col shadow-2xl sm:flex-row-reverse sm:m-12"
        >
          <div
            id="sidebar"
            className="w-full p-8 sm:max-w-sm bg-gradient-to-b from-indigo-300 via-green-300 to-white"
          >
            <div className="px-2 mb-12">
              <img
                src="./assets/milad.jpg"
                alt="Profile Picture"
                className="w-48 mx-auto mb-2 rounded-full"
              />
              <h1 className="mb-2 text-3xl font-semibold text-center">
                Milad Hassani
              </h1>
              <h2 className="text-xl font-light text-center">
                FrontEnd Developer
              </h2>
            </div>

            <div className="px-2 mb-12 text-lg font-light">
              <h2 className="mb-4 text-xl font-semibold">Contact</h2>
              <div className="flex items-center my-3">
                <img
                  src="./assets/mail-outline.svg"
                  className="inline w-6 mr-4"
                  alt="Mail icon"
                />
                <a href="mailto:">milad7212@gmail.com</a>
              </div>
              <div className="flex items-center my-3">
                <img
                  src="./assets/call-outline.svg"
                  className="inline w-6 mr-4"
                  alt="Phone icon"
                />
                <a href="tel://+989139939426">09139939426</a>
              </div>
              <div className="flex items-center my-3">
                <img
                  src="./assets/home-outline.svg"
                  className="inline w-6 pb-1 mr-4"
                  alt="House icon"
                />
                <div>
                  <p>IRan</p>
                  <p>Kerman</p>
                </div>
              </div>
            </div>

            <div className="px-2 mb-12 text-lg font-light">
              <h2 className="mb-4 text-xl font-semibold">Personal</h2>
              <div className="flex items-center my-3">
                <img
                  src="./assets/egg-outline.svg"
                  className="inline w-6 mr-4"
                  alt="Egg Icon"
                />
                <span>Born on 16th of March 1994</span>
              </div>
              <div className="flex items-center my-3">
                <img
                  src="./assets/people-outline.svg"
                  className="inline w-6 mr-4"
                  alt="Two Persons Icon"
                />
                <span>Singel</span>
              </div>
            </div>

            <div className="px-2 mb-12 text-lg font-light">
              <h2 className="mb-4 text-xl font-semibold">On the Web</h2>
              <div className="flex items-center my-3">
                <img
                  src="./assets/logo-github.svg"
                  className="inline w-6 mr-4"
                  alt="GitHub Logo"
                />
                <a
                  href="https://github.com/milad7212"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              {/* <div className="flex items-center my-3">
                <img
                  src="./assets/logo-stackoverflow.svg"
                  className="inline w-6 mr-4"
                  alt="Stack Overflow Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  StackOverflow
                </a>
              </div> */}
              <div className="flex items-center my-3">
                <img
                  src="./assets/logo-linkedin.svg"
                  className="inline w-6 mr-4"
                  alt="LinkedIn Logo"
                />
                <a
                  href="https://www.linkedin.com/in/milad-hasani-52b330176/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              {/* <div className="flex items-center my-3">
                <img
                  src="./assets/logo-twitter.svg"
                  className="inline w-6 mr-4"
                  alt="Twitter Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  @twitter_handle
                </a>
              </div> */}
              {/* <div className="flex items-center my-3">
                <img
                  src="./assets/logo-codepen.svg"
                  className="inline w-6 mr-4"
                  alt="CodePen Logo"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  CodePen
                </a>
              </div>
              <div className="flex items-center my-3">
                <img
                  src="./assets/globe-outline.svg"
                  className="inline w-6 mr-4"
                  alt="Globe icon"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </div> */}
            </div>

            <div className="px-2 mb-12 text-lg font-light">
              <h2 className="mb-4 text-xl font-semibold">Skills & Tools</h2>
              <ul className="list-none">
                <li>
                  <label htmlFor="js-skill">JavaScript</label>
                  <progress id="js-skill" max="100" value="70"></progress>
                </li>

                <li>
                  <label htmlFor="react-skill">React</label>
                  <progress id="react-skill" max="100" value="66"></progress>
                </li>
                <li>
                  <label htmlFor="reactNative-skill">React Native</label>
                  <progress
                    id="reactNative-skill"
                    max="100"
                    value="50"
                  ></progress>
                </li>
                <li>
                  <label htmlFor="nextjs-skill">Next.js</label>
                  <progress id="nextjs-skill" max="100" value="72"></progress>
                </li>
                <li>
                  <label htmlFor="eleventy-skill">Tailwind CSS</label>
                  <progress id="eleventy-skill" max="100" value="66"></progress>
                </li>

                <li>
                  <label htmlFor="css-skill">SCSS</label>
                  <progress id="css-skill" max="100" value="75"></progress>
                </li>

                <li></li>
              </ul>
            </div>

            <div className="px-2 mb-12 text-lg font-light">
              <h2 className="mb-4 text-xl font-semibold">Education</h2>
              <h3 className="font-semibold">BSc Computer Science</h3>
              <p>2016 - 2019 University of London</p>
            </div>

            <div className="px-2 mb-12 text-lg font-light">
              <h2 className="mb-4 text-xl font-semibold">Languages</h2>
              <h3 className="font-semibold">Persian</h3>
              <p>Native</p>
              <h3 className="font-semibold">English</h3>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="w-full p-12 content">
            <div id="profile" className="prose">
              <h2 className="section-headline">Profile</h2>
              <p>
                I'm a self-taught web developer focusing on the core web
                fundamentals - HTML, CSS and JS. I'm experienced in frontend
                frameworks like React and static site generators like Next.js .
                I write SCSS or use CSS frameworks like TailwindCSS, to speed up
                styling of my projects.
              </p>
              <p>
                I am highly motivated in expanding my horizons day by day for
                better performance, testing and user experience.
              </p>
            </div>
            <hr className="mt-8 mb-12" />
            <div id="experience" className="prose">
              <h2 className="section-headline">Experience</h2>
              <div>
                <h3>Nakhll - Iran </h3>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-4/12 lg:align-top">
                    (2021 untill now -Full time) :
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    Front-End Developer
                  </div>
                </section>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Task:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    Creat MarcketPlace availabel at{" "}
                    <a className="text-blue-500" href="https://nakhll.com/">
                      www.Nakhll.com
                    </a>
                  </div>
                </section>
                {/* <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Description:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Tools:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    <span className="px-3 bg-gray-300 rounded-xl">Vue</span>
                    <span className="px-3 bg-gray-300 rounded-xl">Vuex</span>
                    <span className="px-3 bg-gray-300 rounded-xl">
                      Bootstrap
                    </span>
                    <span className="px-3 bg-gray-300 rounded-xl">Docker</span>
                    <span className="px-3 bg-gray-300 rounded-xl">Git</span>
                    <span className="px-3 bg-gray-300 rounded-xl">
                      Bitbucket
                    </span>
                    <span className="px-3 bg-gray-300 rounded-xl">Jira</span>
                  </div>
                </section> */}
              </div>
            </div>
            {/* <hr className="mt-8 mb-12" /> */}
            {/* <div id="projects" className="prose">
              <h2 className="section-headline">Projects</h2>
              <div className="mb-16">
                <h3 id="chrisko-headline">Chrisko.io</h3>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Personal blog:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    My blog is the center of my online presence. Here, I share
                    posts about what I've learnt, tutorials and my thoughts on
                    web development in general.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Deployed to:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    <a
                      href="https://chrisko.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      chrisko.io
                    </a>
                  </div>
                </section>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Code on:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    <a
                      href="https://github.com/christiankozalla/nextjs-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub/nextjs-blog
                    </a>
                  </div>
                </section>
                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Features:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    <ul>
                      <li>Static generation</li>
                      <li>Blog content written in Markdown</li>
                      <li>Counter for pageviews and likes</li>
                      <li>My latest tweets</li>
                      <li>Featured images made with Inkscape</li>
                      <li>SEO</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-6">
                  <div className="mb-2 italic lg:inline-block lg:w-3/12 lg:align-top">
                    Built with:
                  </div>
                  <div className="w-full lg:inline-block lg:w-8/12">
                    <span className="px-3 bg-gray-300 rounded-xl">Next.js</span>
                    <span className="px-3 bg-gray-300 rounded-xl">CSS</span>
                    <span className="px-3 bg-gray-300 rounded-xl">
                      styled-jsx
                    </span>
                    <span className="px-3 bg-gray-300 rounded-xl">
                      DynamoDB
                    </span>
                    <span className="px-3 bg-gray-300 rounded-xl">Vercel</span>
                  </div>
                </section>
              </div>
            </div> */}
            <hr className="mt-8 mb-12" />
            <div id="projects" className="prose">
              <h2 className="section-headline">Expand my skills</h2>
              <div className="mb-16">
                <h4 id="expand-knowledge-headline">
                  I'd like to expand my skills and knowledge in several fields
                </h4>
                <ul>
                  <li>Three.js</li>
                  <li>TypeScript</li>
                  <li>Testing, e.g. with Jest</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
