"use client"

import { useContext } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ProcessSelectionContext } from "@/components/process-steps"
import type { RealEstateSubmenu } from "@/components/process-steps"

type FaqItem = { question: string; answer: string }

const faqsZpětnyLeasing: FaqItem[] = [
  {
    question: "Kdo nese náklady na údržbu a opravy během nájmu?",
    answer: "Jako nájemce zůstáváte odpovědní za běžnou údržbu a provozní náklady nemovitosti.",
  },
  {
    question: "Jaká je cena zpětného odkupu?",
    answer: "Cena zpětného odkupu je fixní, obvykle se jedná o původní prodejní cenu plus dohodnutý poplatek nebo sjednanou marži.",
  },
  {
    question: "Lze nájemní smlouvu prodloužit?",
    answer: "Ano, podmínky prodloužení nájmu lze sjednat před vypršením počáteční smluvní doby.",
  },
  {
    question: "Co se stane, když se dostanu do prodlení s platbou nájmu?",
    answer: "Nejprve se snažíme o smírné řešení. Trvalé neplacení nájmu však může vést k ukončení nájemní smlouvy.",
  },
]

const faqsZastava: FaqItem[] = [
  {
    question: "Zůstanu majitelem nemovitosti?",
    answer: "Ano, zůstáváte plným právním vlastníkem. Nemovitost slouží pouze jako zástava úvěru.",
  },
  {
    question: "Jaký je maximální poměr LTV (Loan-to-Value)?",
    answer: "Obvykle půjčujeme až 70% odhadní tržní hodnoty zajištěné nemovitosti.",
  },
  {
    question: "Mohu úvěr splatit dříve?",
    answer: "Ano, předčasné splacení je možné za podmínek sjednaných v úvěrové smlouvě.",
  },
  {
    question: "Jak zástavní právo ovlivní budoucí prodej nemovitosti?",
    answer: "Nemovitost můžete prodat, ale výnosy musí být nejprve použity na splacení zbývající dlužné částky a uvolnění zástavy.",
  },
]

const faqsPrimyVykup: FaqItem[] = [
  {
    question: "Jak rychle může být celá transakce dokončena?",
    answer: "Celý proces, od prvního kontaktu po vyplacení, obvykle trvá 2 až 4 týdny, v závislosti na rychlosti Katastru.",
  },
  {
    question: "Musím se okamžitě vystěhovat?",
    answer: "Ne, sjednáme rozumný termín vystěhování, abyste měli dostatek času na zajištění nového bydlení.",
  },
  {
    question: "Je nabízená cena k jednání?",
    answer: "Naše počáteční nabídka je transparentně kalkulována na základě tržní hodnoty, ale je finální a nezávazná, dokud ji nepřijmete.",
  },
  {
    question: "Jaké typy nemovitostí kupujete?",
    answer: "Kupujeme většinu typů obytných a komerčních nemovitostí, včetně těch se stávajícími právními zatíženími.",
  },
]

const faqsVozidlo: FaqItem[] = [
  {
    question: "Pro koho je služba dočasného výkupu určena?",
    answer: "Služba je určena všem majitelům vozidel – financování je poskytováno pro osobní, užitková a nákladní vozidla, obytné vozy, motocykly a veterány.",
  },
  {
    question: "Prověřujete mou finanční historii a registry?",
    answer: "Nezkoumáme vaši finanční historii ani neprověřujeme bankovní nebo nebankovní registry. Jediným omezením je aktivní exekuce nebo probíhající insolvence, ukončená insolvence není překážkou.",
  },
  {
    question: "Mohu vůz po výkupu nadále využívat?",
    answer: "Ano, své vozidlo můžete i po výkupu nadále využívat, přičemž v technickém průkazu zůstanete uvedeni jako provozovatel vozidla.",
  },
  {
    question: "Kdy si mohu vůz odkoupit zpět?",
    answer: "Zpětný odkup je možný kdykoliv – svůj vůz si můžete odkoupit zpět za stejnou cenu, za jakou byl vykoupen.",
  },
]

function getFaqsForSelection(
  activeTab: "nemovitost" | "vozidlo",
  realEstateSubmenu: RealEstateSubmenu
): FaqItem[] {
  if (activeTab === "vozidlo") return faqsVozidlo
  switch (realEstateSubmenu) {
    case "zpětny-leasing":
      return faqsZpětnyLeasing
    case "zastava":
      return faqsZastava
    case "primy-vykup":
      return faqsPrimyVykup
    default:
      return faqsZpětnyLeasing
  }
}

export function FaqSection() {
  const selection = useContext(ProcessSelectionContext)
  const activeTab = selection?.activeTab ?? "nemovitost"
  const realEstateSubmenu = selection?.realEstateSubmenu ?? "zpětny-leasing"
  const faqs = getFaqsForSelection(activeTab, realEstateSubmenu)

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">Často kladené otázky</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-xl px-4 md:px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground py-4 md:py-5 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 md:pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
