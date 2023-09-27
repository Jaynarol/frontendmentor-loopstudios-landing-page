import Image from 'next/image'
import Link from 'next/link'

const creations = [
  {
    text: 'DEEP EARTH',
    imageMobile: '/images/mobile/image-deep-earth.jpg',
    imageDesktop: '/images/desktop/image-deep-earth.jpg',
  },
  {
    text: 'NIGHT ARCADE',
    imageMobile: '/images/mobile/image-night-arcade.jpg',
    imageDesktop: '/images/desktop/image-night-arcade.jpg',
  },
  {
    text: 'SOCCER TEAM VR',
    imageMobile: '/images/mobile/image-soccer-team.jpg',
    imageDesktop: '/images/desktop/image-soccer-team.jpg',
  },
  {
    text: 'THE GRID',
    imageMobile: '/images/mobile/image-grid.jpg',
    imageDesktop: '/images/desktop/image-grid.jpg',
  },
  {
    text: 'FROM UP ABOVE VR',
    imageMobile: '/images/mobile/image-from-above.jpg',
    imageDesktop: '/images/desktop/image-from-above.jpg',
  },
  {
    text: 'POCKET BOREALIS',
    imageMobile: '/images/mobile/image-pocket-borealis.jpg',
    imageDesktop: '/images/desktop/image-pocket-borealis.jpg',
  },
  {
    text: 'THE CURIOSITY',
    imageMobile: '/images/mobile/image-curiosity.jpg',
    imageDesktop: '/images/desktop/image-curiosity.jpg',
  },
  {
    text: 'MAKE IT FISHEYE',
    imageMobile: '/images/mobile/image-fisheye.jpg',
    imageDesktop: '/images/desktop/image-fisheye.jpg',
  },
]

const ButtonSeeAll = () => (
  <div className="my-8 text-center">
    <Link className="btn btn-outline inline h-auto px-14 py-3 text-xl leading-none tracking-[0.4rem]" href="./">SEE ALL</Link>
  </div>
)

const Creations = () => (
  <section className="mb-28 mt-14 space-y-12 md:mb-44 md:mt-20 md:px-44">
    <div className="lg:flex lg:items-center lg:justify-between">
      <h2 className="text-center font-secondary text-4xl md:text-5xl">OUR CREATIONS</h2>
      <div className="hidden lg:block">
        <ButtonSeeAll />
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        creations.map(({ text, imageMobile, imageDesktop }) => (
          <div key={text} className="group relative text-primary hover:cursor-pointer hover:text-neutral">
            <Image className="h-full w-full object-cover md:hidden" width={654} height={240} src={imageMobile} alt={text.toLowerCase()} />
            <Image className="hidden h-full w-full object-cover md:block" width={256} height={450} src={imageDesktop} alt={text.toLowerCase()} />
            <div className="absolute top-0 z-10 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] from-5% md:bg-gradient-to-t" />
            <div className="absolute top-0 z-20 h-full w-full bg-white opacity-0 duration-150 group-hover:opacity-75" />
            <p className="absolute bottom-4 left-4 z-30 w-32 font-secondary text-2xl opacity-90  md:bottom-12 md:left-12 md:w-48 md:text-4xl">{text}</p>
          </div>
        ))
      }
    </div>
    <div className="lg:hidden">
      <ButtonSeeAll />
    </div>
  </section>
)

export default Creations
