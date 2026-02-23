import { Header } from "@/components/header"
import { Metadata } from "next"
import Link from "next/link"
import { FileText, Cookie } from "lucide-react"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Dočasný výkup",
  description: "Prohlášení o ochraně osobních údajů – Dočasný výkup s.r.o.",
}

export default function OchranaOsobnichUdajuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Prohlášení o ochraně osobních údajů
          </h1>
          <p className="text-white/80 text-sm md:text-base">Datum účinnosti: 10. prosince 2025</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="legal-content text-foreground">
            <h2 id="uvod" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4 first:mt-0">
              1. Úvod
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Tento dokument obsahuje informace o tom, jak subjekt <strong className="text-foreground">Dočasný výkup s.r.o.</strong>, IČ: 23626836, se sídlem
              Podvesná VII/6192, 760 01 Zlín (dále jen „Provozovatel" nebo „my"), jako správce osobních údajů,
              zpracovává vaše osobní údaje v souladu s nařízením (EU) 2016/679 (GDPR) a dalšími platnými právními
              předpisy.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Cílem těchto zásad je poskytnout vám jasné informace o tom, jaké osobní údaje shromažďujeme, za jakým
              účelem, jak s nimi nakládáme a jaká máte práva.
            </p>

            <h2 id="jaké-údaje" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              2. Jaké osobní údaje zpracováváme
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Pro účely zpracování poptávky prostřednictvím našeho webového formuláře zpracováváme následující údaje:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li>Jméno a příjmení</li>
              <li>E-mailová adresa</li>
              <li>Telefonní číslo</li>
              <li>Typ zajištění (Nemovitost / Vozidlo)</li>
              <li>Typ požadované služby (např. Zpětný leasing, Přímý výkup)</li>
              <li>Požadovaná částka</li>
            </ul>

            <h2 id="jak-získáváme" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              3. Jak vaše údaje získáváme
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Vaše osobní údaje získáváme výhradně prostřednictvím webového formuláře na našich stránkách.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Poskytnutí údajů je zcela dobrovolné, ale je nezbytné pro posouzení poptávky a následné poskytnutí našich
              služeb.
            </p>

            <h2 id="účely" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              4. Účely a právní základ zpracování
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Vaše údaje slouží k posouzení, zprostředkování a vytvoření nabídky na služby zajištěného financování
              (nemovitosti nebo vozidla).
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">Vaše osobní údaje zpracováváme na základě:</p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li>
                čl. 6 odst. 1 písm. b) GDPR – zpracování je nezbytné pro provedení opatření před uzavřením smlouvy na
                vaši žádost (např. vytvoření nabídky a posouzení poptávky).
              </li>
              <li>
                čl. 6 odst. 1 písm. f) GDPR – oprávněný zájem Provozovatele na komunikaci se zákazníkem a zajištění
                provozu služeb.
              </li>
            </ul>

            <h2 id="předání" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              5. Předání osobních údajů třetím stranám
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Zadané údaje jsou předávány smluvnímu partnerovi Provozovatele pouze v případě, že poptávka směřuje na
              službu zajištěnou Vozidlem.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">V případě poptávky vozidla jsou údaje předány:</p>
            <p className="font-semibold text-foreground mb-2">Car Service Partner s.r.o.</p>
            <ul className="list-none pl-0 text-base text-muted-foreground leading-relaxed space-y-1 mb-6">
              <li>Sídlo: Na Poříčí 1071/17, Nové Město, 110 00 Praha 1</li>
              <li>IČ: 06143911</li>
              <li>E-mail: info@cash4car.cz</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Car Service Partner s.r.o. je náš důvěryhodný obchodní partner, který se řídí vlastními zásadami ochrany
              osobních údajů. Údaje u poptávek zajištěných nemovitostí nejsou třetím stranám předávány. Údaje nejsou
              dále poskytovány jiným třetím osobám, s výjimkou případů, kdy to ukládá zákon.
            </p>

            <h2 id="doba-uchování" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              6. Doba uchování údajů
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Osobní údaje jsou uchovávány po dobu nezbytně nutnou ke zprostředkování nabídky a komunikaci s klientem,
              nejdéle však po dobu 6 měsíců, pokud nebude zahájena smluvní spolupráce.
            </p>

            <h2 id="cookies" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              7. Cookies a online sledování
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">Na našem webu používáme následující typy cookies:</p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li>Analytické cookies – Google Analytics (sledování návštěvnosti).</li>
              <li>Reklamní cookies – Seznam Sklik (retargeting) a Google Ads (cílení reklamy a remarketing).</li>
              <li>Funkční cookies – zajišťující správné fungování formuláře.</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Používáním našeho webu s použitím těchto cookies souhlasíte. V nastavení vašeho prohlížeče můžete
              ukládání cookies omezit nebo zcela zakázat. Více informací naleznete v našich{" "}
              <Link href="/zasady-cookies" className="text-primary no-underline hover:underline">Zásadách cookies</Link>.
            </p>

            <h2 id="zabezpečení" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              8. Zabezpečení údajů
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Přijali jsme odpovídající technická a organizační opatření, aby vaše údaje byly v bezpečí a nebyly
              zneužity, ztraceny nebo neoprávněně zpřístupněny.
            </p>

            <h2 id="práva" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              9. Vaše práva
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">V souvislosti se zpracováním osobních údajů máte tato práva:</p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-6">
              <li>právo na přístup k osobním údajům,</li>
              <li>právo na opravu nepřesných údajů,</li>
              <li>právo na výmaz (tzv. právo být zapomenut),</li>
              <li>právo na omezení zpracování,</li>
              <li>právo vznést námitku proti zpracování,</li>
              <li>právo na přenositelnost údajů,</li>
              <li>
                právo podat stížnost u dozorového orgánu –{" "}
                <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-primary no-underline hover:underline">
                  Úřadu pro ochranu osobních údajů (www.uoou.cz)
                </a>
                .
              </li>
            </ul>

            <h2 id="kontakt" className="text-xl md:text-2xl font-bold text-foreground mt-12 mb-4">
              10. Kontakt na Provozovatele
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">Pro uplatnění vašich práv nebo dotazy ohledně zpracování údajů nás můžete kontaktovat:</p>
            <ul className="list-none pl-0 text-base text-muted-foreground leading-relaxed space-y-2">
              <li>📞 +420 777 400 256</li>
              <li>
                📧 <a href="mailto:info@docasnyvykup.cz" className="text-primary no-underline hover:underline">info@docasnyvykup.cz</a>
              </li>
              <li>📍 Adresa sídla: Podvesná VII/6192, 760 01 Zlín</li>
            </ul>
          </article>
        </div>
      </section>

      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <Link
              href="/ochrana-osobnich-udaju"
              className="hover:text-primary transition-colors flex items-center gap-2 font-medium text-foreground"
            >
              <FileText className="w-4 h-4" />
              Ochrana osobních údajů
            </Link>
            <Link
              href="/zasady-cookies"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Cookie className="w-4 h-4" />
              Zásady cookies
            </Link>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            © 2025 Dočasný výkup s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </main>
  )
}
