import Image from 'next/image'

const Features = () => (
  <section className="mb-14 mt-28 flex flex-col items-center space-y-10 text-center sm:justify-start lg:flex-row lg:items-end lg:px-44 lg:text-left">
    <Image className="lg:hidden" width={654} height={448} src="./images/mobile/image-interactive.jpg" alt="interactive" />
    <Image className="hidden h-full object-cover lg:block lg:w-3/5" width={731} height={500} src="./images/desktop/image-interactive.jpg" alt="interactive" />
    <div className="space-y-5 bg-primary px-5 md:p-10 lg:ml-[-10%] lg:w-1/2 lg:pb-0 xl:p-20">
      <h2 className="font-secondary text-4xl lg:text-5xl">THE LEADER IN INTERACTIVE VR</h2>
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
