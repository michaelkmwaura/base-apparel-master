

export default function Home() {
  return (
  <section class="flex justify-between flex-row text-red-300 text-center bg-white w-1440px h-full relative inset-y-20">
  
  <div class="text-start h-auto w-5/12 relative left-48">
  <h1 class="font-semibold tracking-wider py-5">We're coming soon</h1>
  <p class="py-10">Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.</p>
  
  
  <input class="p-5 border-solid border-2  border-red-200 rounded-full w-full" type="email" placeholder="Email Address">
  </input>
  <a class="bg-red-200 p-5 w-36 inline-flex justify-center rounded-full relative bottom-16 left-96" href="" type="submit" alt=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg></a>

  <footer class="relative inset-y-2">
  <p class="">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Michael Mwaura</a>.
  </p>
  </footer>
  </div>

  <div class="bg-cyan-500">
  <img src="base-apparel-master\public\images\hero-desktop.jpg" alt=""/>
  </div>
  </section>
  )
}
