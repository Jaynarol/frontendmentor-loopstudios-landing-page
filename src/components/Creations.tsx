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

const Creations = () => (
  <section className="mb-28 mt-14 space-y-10">
    <div>
      <h2 className="text-center font-secondary text-4xl">OUR CREATIONS</h2>
    </div>
    <div className="grid grid-cols-1 gap-6">
      {
        creations.map(({ text, imageMobile }) => (
          <div key={text} className="relative ">
            <Image className="h-full w-full object-cover " width={654} height={240} src={imageMobile} alt={text.toLowerCase()} />
            <p className="absolute bottom-5 left-5 z-10 w-32 font-secondary text-2xl text-primary">{text}</p>
            <div className="absolute top-0 z-20 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,0.3)] from-5%" />
          </div>
        ))
      }
      <div className="my-8 text-center">
        <Link className="btn btn-outline inline h-auto px-14 py-3 text-xl leading-none tracking-[0.2rem]" href="./">SEE ALL</Link>
      </div>
    </div>
  </section>
)

export default Creations
