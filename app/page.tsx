import ListCard from "@/components/ListCard"
import { ResponsiveGridColumns } from "@/components/templates/ResponsiveGridColumns"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Siren } from "lucide-react"
import Image from "next/image"

export default function Home() {
	return (
		<main className="max-w-7xl mx-auto p-16 flex flex-col gap-4">
			<div className="relative min-h-[300px]">
				<Image
					src="/femaleEngineerPointingAtProjectorScreen.webp"
					alt="A female engineer pointing at a projector screen"
					fill
					priority
					sizes="100vw"
					quality={100}
					style={{
						objectFit: "cover",
						objectPosition: "center right",
					}}
					className="absolute inset-0 z-0 rounded-lg"
				/>
				<div className="relative z-10 py-12 px-6 bg-violet-950 bg-opacity-70 min-h-[300px] space-y-4 rounded-lg">
					<h1 className="text-balance text-violet-50 max-w-2xl">
						Freelancing Isn't Free!
					</h1>
					<p className="text-violet-50 max-w-xl">
						{
							"If you're an engineer transitioning into freelancing, developing the skills necessary to succeed in this new landscape is essential. In this talk, we'll cover the primary strategies for making money as a freelancer, from building confidence to finding high-paying clients."
						}
					</p>
				</div>
			</div>

			<Alert>
				<Siren className="h-4 w-4" color="#f5d0fe" />
				<AlertTitle className="text-violet-200">Confidence is Key!</AlertTitle>
				<AlertDescription>
					{
						"Fake it until you make it. As a new freelancer, you may not have the confidence that comes with experience. However, it's crucial to project confidence at all times. When interacting with clients, pretend you've been there before. If a client asks if you've signed a big deal before, say yes. Don't be nervous; sound confident, even if you're sweating and crying afterward."
					}
				</AlertDescription>
			</Alert>

			<ResponsiveGridColumns>
				<ListCard title="Be Professional">
					<ul>
						<li>{"Having a straightforward process and scope of work"}</li>
						<li>{"Creating a serious and professional contract"}</li>
						<li>
							{
								"Sending invoices and having a legitimate business setup (LLC, bank account, credit card)"
							}
						</li>
						<li>{"Accepting ACH payments only (no credit cards or PayPal)"}</li>
						<li>
							{
								"Over-communicating with clients and being transparent about any issues that arise"
							}
						</li>
					</ul>
				</ListCard>
				<ListCard title="Finding Work">
					<ul>
						<li>{"Start small."}</li>
						<li>
							{
								"Use platforms like Upwork, Guru, or Freelancer to find clients."
							}
						</li>
						<li>
							{
								"Take on small projects (5 hours or less) to build your portfolio and gain confidence. As you complete more projects, you'll grow in confidence and be able to increase your rate."
							}
						</li>
						<li>
							{
								"If you're feeling courageous, try cold-calling potential clients. Offer them a valuable service, like a website, for $5,000; they will be more likely to take you seriously."
							}
						</li>
					</ul>
				</ListCard>
				<ListCard title="Focus on What Matters">
					<ul>
						<li>
							{"Registering a domain and getting a professional email address"}
						</li>
						<li>
							{"Creating a simple 1-page website with your name and services"}
						</li>
						<li>{"Opening an LLC and getting a business bank account"}</li>
						<li>
							{"Getting a Bluevine bank account and an Amex Blue Cash card"}
						</li>
						<li>{"Soliciting business and finding clients"}</li>
					</ul>
				</ListCard>
			</ResponsiveGridColumns>

			<Accordion type="multiple" defaultValue={["item-1"]}>
				<AccordionItem value="item-1">
					<AccordionTrigger>Honesty is the Best Policy</AccordionTrigger>
					<AccordionContent>
						{
							"While feigning confidence is okay, don't lie about your skills or experience. If you need clarification on a project, tell the client you need extra time to scope it. Spend the necessary time learning and becoming an expert. Lying about your skills will cost you money and damage your reputation."
						}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Develop Your Expertise</AccordionTrigger>
					<AccordionContent>
						{
							"Focus on your strengths and develop your skills. If you're good at something, do what you're good at. If you need to improve, open new Git repositories, work on documentation and learn to be an expert. Get certifications, attend webinars, and do whatever it takes to become a master in your field."
						}
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Setting Your Rate</AccordionTrigger>
					<AccordionContent>
						{
							"Choose a rate you're happy with, considering your financial situation and goals. If you're starting, your rate may be lower. As you gain more experience and build a portfolio, increase your rate. To increase your rate, focus on niche work that requires specialized skills. Niche work means less competition, and the minimum rate is higher."
						}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	)
}
