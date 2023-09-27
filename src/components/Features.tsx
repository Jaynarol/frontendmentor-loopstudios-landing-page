import Image from 'next/image'

const Features = () => (
  <section className="mb-14 mt-28 flex flex-col space-y-10 text-center">
    <Image width={654} height={448} src="/images/mobile/image-interactive.jpg" alt="interactive" />
    <div className="space-y-5 px-5">
      <h2 className="font-secondary text-4xl">THE LEADER IN INTERACTIVE VR</h2>
      <p className="text-secondary">
        Founded in 2011, Loopstudios has been producing world-class virtual reality
        projects for some of the best companies around the globe. Our award-winning
        creations have transformed businesses through digital experiences that bind
        to their brand.
      </p>
    </div>
  </section>
)

export default Features
