import SupabaseLogo from '../components/SupabaseLogo'

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center h-16">
        <div className="w-full max-w-4xl flex justify-center items-center p-3 text-sm">
          <SupabaseLogo />
        </div>
      </nav>

      <div className="animate-in flex-1 flex justify-center flex-col gap-20 opacity-0 max-w-4xl px-3">
          player
      </div>

      <footer className="w-full p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  )
}
