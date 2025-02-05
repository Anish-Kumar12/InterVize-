import StreamClientProvider from "@/components/providers/SteamClientProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
  return <StreamClientProvider>{children}</StreamClientProvider>;
  </div>
  )
}

export default layout
