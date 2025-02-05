import StreamClientProvider from "@/components/providers/SteamClientProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
  <StreamClientProvider>{children}</StreamClientProvider>
  </div>
  )
}

export default layout
