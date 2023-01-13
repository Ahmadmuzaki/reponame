import { graphql } from "gatsby";
import * as React from "react"
import TypewriterComponent from "typewriter-effect"

const Content = () => {
  const data = [];
  for (let i = 0; i < 8; i++) {
    data.push(
      <div key={i + 1} className="card w-full bg-base-100 shadow-xl" >
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    )
  }
  return data;
}

const IndexPage = ({data}) => {
  const {title} = data.site.siteMetadata;
  return (
    <main className="bg-background">
      <img src={'/patern.jpg'} alt="" className="absolute opacity-10" />
      <div className="navbar shadow-sm">
        <div className="container m-auto">
          <div className="flex-1">
            <span className="normal-case text-xl">{title}</span>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><span>Portofolio</span></li>
              <li>
                <a href="http://indomie.com">
                  Blog
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li><span>Frontend</span></li>
                  <li><span>Backend</span></li>
                </ul>
              </li>
              <li><span>Contact</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container m-auto h-[80vh] w-full grid items-center p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Hello, I'm Ahmad Muzaki SA</h1>
          <span className="text-3xl font-bold text-violet-600">
            <TypewriterComponent
              options={{
                strings: ["I'm a Frontend Developer", "Using ReactJS", "Using NextJS", "Using TailwindCSS",],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <div className="md:w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos autem illum suscipit nisi quia iure non? Alias nisi laboriosam est vitae a molestiae, velit neque voluptates? Dignissimos ipsa corporis veritatis mollitia odit ratione a reprehenderit, aspernatur quas rem nesciunt voluptatibus, maiores dicta officia quibusdam! Id praesentium saepe illo exercitationem!
          </div>

          <div className="flex gap-4 mt-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </div>
      </div>
      {/* Content */}

      <div className="container m-auto mb-4 px-8 md:0">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <p>Ini adalah portofolio terbaik hasil copas.</p>
      </div>
      <div className="container m-auto grid xl:grid-cols-4 px-8 gap-12 mb-14">
        <Content />
      </div>
      {/* Stat */}
      <div className="container m-auto">
        <div className="shadow w-full grid xl:grid-cols-3 px-8">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://placeimg.com/128/128/people" alt="" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>
      </div>
      {/* Footer */}

      <footer className="footer footer-center p-10 bg-[#264653] text-primary-content mt-16">
        <div>
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p className="font-bold">
            ACME Industries Ltd. <br />Providing reliable tech since 1992
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
