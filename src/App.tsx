import { ThemeProvider } from "@/components/theme-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MePage from "./components/me-page"
import { SparklesCore } from "./components/ui/sparkles"
import { useState } from "react"
import BuildPage from "./components/builds-page"
import ExperiencePage from "./components/experience-page"

function App() {
  const [tabName, setTabName] = useState("Me")

  function onChangeTab(tab: string) {
    setTabName(tab)
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen w-full flex-col relative">
      <div className="w-full absolute inset-0 h-full">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        <div className="mx-4 lg:mx-20 my-4 z-10 min-h-screen">
          <Tabs defaultValue="Me" value={tabName} onValueChange={setTabName} className="w-full h-full flex flex-col">
            <TabsList className="w-fit self-end mb-10">
              <TabsTrigger value="Me">I</TabsTrigger>
              <TabsTrigger value="Builds">Build</TabsTrigger>
              <TabsTrigger value="Experience">Experience</TabsTrigger>
            </TabsList>
            <div className="h-full">
              <TabsContent value="Me" className="h-full">
                <MePage callbackChangeTab={onChangeTab} />
              </TabsContent>
              <TabsContent value="Builds">
                <BuildPage />.
              </TabsContent>
              <TabsContent value="Experience">
                <ExperiencePage />.
              </TabsContent>
              
            </div>
          </Tabs>
        </div>
      </div>
    </ThemeProvider >
  )
}

export default App
