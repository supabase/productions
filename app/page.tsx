import Image from 'next/image';
import SupabaseLogo from '../components/SupabaseLogo';
import Link from 'next/link';

export default async function Index() {
  return (
    <div className="opacity-0 animate-in p-[20px] pb-0 flex-1 w-full h-screen flex flex-col items-center overflow-hidden max-h-screen">
      <div className="relative w-[calc(100vw-40px)] h-[calc(100vh-20px-100px)] rounded-lg overflow-hidden">
        {/* <Image
          src="/images/supabase-album-cover.jpg"
          alt="Supabase album steam-punk art"
          fill
          className="absolute inset-0 object-cover z-10"
          draggable={false}
        /> */}
        <iframe
          src="https://www.youtube-nocookie.com/embed/[YT_ID_HERE]?autoplay=1&enablejsapi=1&widgetid=0playsinline=0&&muted=1&showinfo=0&controls=0&fs=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          placeholder="/images/supabase-album-cover.jpg"
          allowFullScreen={false}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      <div className="relative h-[100px] flex gap-20 w-full p-[20px] items-center justify-center md:justify-between">
        <nav className="hidden md:block">
          <Link
            href="https://supabase.com/launch-week"
            className="w-auto py-2 flex gap-3 justify-center items-center hover:opacity-80 transition-opacity"
          >
            <SupabaseLogo />
            <span className="tracking-[2px] uppercase">Album</span>
          </Link>
        </nav>

        <div className="flex gap-4 items-center text-foreground">
          <span className="text-sm">Listen on</span>
          <SocialLink
            title="YouTube"
            href="https://www.youtube.com/"
            img="/icons/youtube.svg"
          />
          <SocialLink
            title="Spotify"
            href="https://www.youtube.com/"
            img="/icons/spotify.svg"
          />
          <SocialLink
            title="Apple Music"
            href="https://www.youtube.com/"
            img="/icons/apple.svg"
          />
          <SocialLink
            title="Bandcamp"
            href="https://www.youtube.com/"
            img="/icons/bandcamp.svg"
          />
          <SocialLink
            title="SoundCloud"
            href="https://www.youtube.com/"
            img="/icons/soundcloud.svg"
          />
        </div>
      </div>
    </div>
  );
}

const SocialLink = ({
  title,
  href,
  img,
}: {
  title: string;
  href: string;
  img: string;
}) => (
  <Link
    href={href}
    className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white border border-transparent hover:shadow-xl hover:border-btn-background transition-all"
    title={title}
    target="_blank"
  >
    <Image src={img} alt={`${title} logo"`} width={26} height={26} />
  </Link>
);
