"use client"

import { createContext, useContext, useState } from "react"
import { Building2, Car, Phone, FileText, Banknote, KeyRound, CheckCircle2, Scale, Home } from "lucide-react"

export type RealEstateSubmenu = "zpětny-leasing" | "zastava" | "primy-vykup"
export type ActiveTab = "nemovitost" | "vozidlo"

type ProcessSelectionContextValue = {
  activeTab: ActiveTab
  realEstateSubmenu: RealEstateSubmenu
  setActiveTab: (tab: ActiveTab) => void
  setRealEstateSubmenu: (sub: RealEstateSubmenu) => void
}

export const ProcessSelectionContext = createContext<ProcessSelectionContextValue | null>(null)

export function ProcessSelectionProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("nemovitost")
  const [realEstateSubmenu, setRealEstateSubmenu] = useState<RealEstateSubmenu>("zpětny-leasing")
  return (
    <ProcessSelectionContext.Provider value={{ activeTab, realEstateSubmenu, setActiveTab, setRealEstateSubmenu }}>
      {children}
    </ProcessSelectionContext.Provider>
  )
}

function useProcessSelection() {
  return useContext(ProcessSelectionContext)
}

const zpětnyLeasingSteps = [
  { icon: FileText, title: "Poptávka a ocenění", description: "Odešlete poptávku. Rychle oceníme vaši nemovitost a stanovíme kupní cenu." },
  { icon: Home, title: "Prodej a nájem", description: "Proběhne formální převod nemovitosti (prodej) a současně se podepíše nájemní smlouva, která vám umožní v ní zůstat." },
  { icon: Banknote, title: "Vyplacení financí", description: "Peníze vám budou vyplaceny, často během několika dnů od podpisu smluv." },
  { icon: KeyRound, title: "Zpětný odkup", description: "Využijete udělené právo na zpětný odkup nemovitosti za sjednanou cenu, jakmile se vaše finanční situace zlepší." },
]

const zastavaSteps = [
  { icon: FileText, title: "Žádost a ocenění", description: "Odešlete žádost. Nemovitost oceníme pro stanovení výše úvěru a hodnoty zástavy." },
  { icon: FileText, title: "Návrh úvěru", description: "Předložíme vám návrh úvěru na míru, včetně úrokových sazeb a splátkového kalendáře." },
  { icon: Scale, title: "Zřízení zástavy", description: "Podepíše se úvěrová smlouva a na vaši nemovitost se zřídí zástavní právo v Katastru." },
  { icon: Banknote, title: "Vyplacení financí", description: "Částka úvěru je převedena na váš účet ihned po oficiálním zápisu zástavy." },
]

const primyVykupSteps = [
  { icon: FileText, title: "Ocenění a nabídka", description: "Rychle posoudíme vaši nemovitost dle tržních podmínek a předložíme pevnou kupní nabídku." },
  { icon: Scale, title: "Právní kontroly", description: "Provedeme potřebné právní kontroly a připravíme kupní smlouvu." },
  { icon: Home, title: "Převod vlastnictví", description: "Podepíše se kupní smlouva a vlastnictví je převedeno na nás v Katastru." },
  { icon: Banknote, title: "Vyplacení financí", description: "Kupní cena je vyplacena ihned po zapsání převodu vlastnictví." },
]

const vehicleSteps = [
  { icon: Phone, title: "Kontaktujte nás", description: "Vyplňte online formulář nebo nám zavolejte." },
  { icon: FileText, title: "Ocenění a dohoda", description: "Naši specialisté ocení reálnou tržní hodnotu vozidla a dohodnou s vámi podmínky výkupu." },
  { icon: FileText, title: "Podpis smlouvy", description: "Vyberete si, zda vozidlo ponecháte u nás, nebo jej budete dál využívat." },
  { icon: Banknote, title: "Převod finančních prostředků", description: "Peníze budou obratem zaslány po fyzické kontrole vozu na bankovní účet okamžitým převodem." },
  { icon: CheckCircle2, title: "Možnost zpětného odkupu", description: "Vůz si můžete kdykoliv odkoupit zpět za stejnou cenu, za jakou byl vykoupen." },
]

const realEstateStepsBySubmenu: Record<RealEstateSubmenu, typeof zpětnyLeasingSteps> = {
  "zpětny-leasing": zpětnyLeasingSteps,
  zastava: zastavaSteps,
  "primy-vykup": primyVykupSteps,
}

export function ProcessSteps() {
  const ctx = useProcessSelection()
  const [localTab, setLocalTab] = useState<ActiveTab>("nemovitost")
  const [localSubmenu, setLocalSubmenu] = useState<RealEstateSubmenu>("zpětny-leasing")
  const activeTab = ctx?.activeTab ?? localTab
  const realEstateSubmenu = ctx?.realEstateSubmenu ?? localSubmenu
  const setActiveTab = ctx?.setActiveTab ?? setLocalTab
  const setRealEstateSubmenu = ctx?.setRealEstateSubmenu ?? setLocalSubmenu

  const steps =
    activeTab === "nemovitost"
      ? realEstateStepsBySubmenu[realEstateSubmenu]
      : vehicleSteps

  return (
    <div>
      {/* Main tabs: Nemovitost | Vozidlo */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="inline-flex bg-muted rounded-xl p-1.5">
          <button
            onClick={() => setActiveTab("nemovitost")}
            className={`flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
              activeTab === "nemovitost"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Nemovitost</span>
          </button>
          <button
            onClick={() => setActiveTab("vozidlo")}
            className={`flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
              activeTab === "vozidlo"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Car className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Vozidlo</span>
          </button>
        </div>
      </div>

      {/* Submenu when Nemovitost is selected */}
      {activeTab === "nemovitost" && (
        <div className="flex justify-center mb-5 md:mb-6">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setRealEstateSubmenu("zpětny-leasing")}
              className={`px-3 py-1.5 sm:px-4 rounded-md font-medium text-xs sm:text-sm transition-all ${
                realEstateSubmenu === "zpětny-leasing"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Zpětný leasing
            </button>
            <button
              onClick={() => setRealEstateSubmenu("zastava")}
              className={`px-3 py-1.5 sm:px-4 rounded-md font-medium text-xs sm:text-sm transition-all ${
                realEstateSubmenu === "zastava"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Zástava nemovitosti
            </button>
            <button
              onClick={() => setRealEstateSubmenu("primy-vykup")}
              className={`px-3 py-1.5 sm:px-4 rounded-md font-medium text-xs sm:text-sm transition-all ${
                realEstateSubmenu === "primy-vykup"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Přímý výkup
            </button>
          </div>
        </div>
      )}

      {/* Steps Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden" />
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/20" />

        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex md:flex-col items-start md:items-center md:text-center flex-1">
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shrink-0">
                {index + 1}
              </div>
              <div className="ml-4 md:ml-0 md:mt-4 pb-2 md:pb-0">
                <div className="flex items-center gap-2 md:justify-center mb-1">
                  <step.icon className="w-4 h-4 text-primary md:hidden" />
                  <h3 className="font-semibold text-foreground text-base">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
