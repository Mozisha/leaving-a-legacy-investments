"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Who can invest?",
    answer:
      "Investments are available to Accredited Investors or individuals with an existing relationship with Leaving a Legacy Investments, LLC or its principals. If you meet the investment criteria or wish to build a relationship with us for potential future opportunities, we invite you to register in our Investor Portal or contact us anytime for more information.",
  },
  {
    question: "What does the Leaving a Legacy Investments team invest in?",
    answer:
      "Leaving a Legacy Investments specializes in commercial multi-family residential properties and other commercial assets, including hotels and managed apartment complexes.",
  },
  {
    question: "When will I get my original investment back and what is the holding period?",
    answer:
      "The holding period for each investment property typically ranges from 3 to 5 years, beginning on the date of acquisition and ending upon the sale of the property. However, this timeline is flexible. The planned holding period is outlined in the Private Placement Memorandum; the actual duration may adjust based on market conditions and the evolution of the investment. We maintain transparent communication with our investment partners and will notify them promptly if circumstances warrant an adjustment to the holding period.",
  },
  {
    question: "What returns can I expect?",
    answer:
      "The management plans and projected returns for each investment property are detailed in the Private Placement Memorandum or prospectus. These documents are prepared using conservative underwriting practices to ensure accurate revenue and appreciation projections. Additionally, we are committed to providing our investors with regular, transparent reporting to keep them informed throughout the investment lifecycle.",
  },
  {
    question: "What is syndication?",
    answer:
      "A real estate syndication is a collaborative partnership where multiple investors pool their skills, resources, and capital to acquire and manage properties that might be unattainable individually. At Leaving a Legacy Investments, we utilize a Limited Partnership structure for our syndicated property investments.",
  },
  {
    question: "What are the risks?",
    answer:
      "When you express interest in a specific investment opportunity, we will provide you with a Private Placement Memorandum (PPM) that outlines detailed information about the investment, including potential risks. Before proceeding, you will be required to review and sign the PPM. It is important to consider your personal risk tolerance, as no investment is suitable for every investor.",
  },
  {
    question: "What is a limited partnership?",
    answer:
      "A real estate Limited Partnership (LP) is a type of syndication where a group of investors pools their funds to invest in real estate projects. These investments may involve property acquisitions, development projects, or leasing activities. The partnership structure typically includes a General Partner, who serves as the experienced manager overseeing property operations and investment strategy, and Limited Partners, who contribute capital in exchange for a share of the returns.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "The minimum investment amount typically ranges from $25,000 to $50,000, depending on the specific deal. Individual investors also have the option to contribute larger amounts.",
  },
  {
    question: "What are the tax benefits?",
    answer:
      "Real estate investments offer several potential tax advantages. The potential tax benefits of each opportunity will be detailed in the Private Placement Memorandum. However, the specific tax benefits you may experience will depend on your individual financial situation.",
  },
  {
    question: "What is a preferred return?",
    answer:
      "A preferred return is a contractual provision outlining an investor's entitlement to a prioritized share of profits. This provision determines the sequence in which profits from our real estate projects are distributed. Typically, our agreements specify a preferred return as a percentage of the initial investment. Any profits exceeding the preferred return are then distributed proportionally among all partners.",
  },
  {
    question: "What is a Private Placement Memorandum (PPM)?",
    answer:
      "The Private Placement Memorandum (PPM) is a comprehensive document that provides potential investment partners with all the necessary information to make an informed investment decision. It includes details typically found in a Business Plan, along with an in-depth overview of the investment opportunity, legal disclaimers, and potential risks. Leaving a Legacy Investments prioritizes accuracy and transparency in compiling this document to ensure our partners have a clear understanding of the investment.",
  },
  {
    question: "What is an accredited investor?",
    answer:
      "Accredited Investors are individuals legally permitted to purchase securities not registered with regulatory authorities such as the SEC. To qualify, an individual must meet at least one criterion based on income, net worth, or professional experience. Currently, eligibility requires an annual income exceeding $200,000 (or $300,000 for joint income) for the past two years, with a reasonable expectation of earning the same or more in the current year. Alternatively, a net worth of over $1 million, excluding the primary residence, also qualifies. For detailed requirements, refer to SEC Rule 501 under Regulation D.",
  },
  {
    question: "Why should I invest with your company?",
    answer:
      "Leaving a Legacy Investments is looking for partnerships with investors seeking to actively or passively invest in apartment complexes and hotels. We maximize value for our investors by generating monthly cash flow and long-term capital appreciation while helping our investors to build generational wealth and to diversify their investment portfolios. We are here to help you build your Legacy through investments!",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <span className={cn(
                "text-base font-semibold leading-snug transition-colors",
                isOpen ? "text-[#1a4fa0]" : "text-gray-900",
              )}>
                {faq.question}
              </span>
              {/* Plus / Minus icon */}
              <span className={cn(
                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors",
                isOpen ? "bg-[#1a4fa0] text-white" : "bg-gray-100 text-gray-500",
              )}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    className={cn("transition-transform origin-center", isOpen && "opacity-0")}
                  />
                  <path
                    d="M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    className={cn("transition-opacity", !isOpen && "opacity-0")}
                  />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="pb-5">
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
