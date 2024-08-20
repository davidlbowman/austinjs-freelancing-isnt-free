import Image from "next/image"

export default function Home() {
	return (
		<main className="max-w-7xl space-y-4 p-16">
			<section>
				<div className="relative min-h-[300px]">
					<Image
						src="/femaleEngineerPointingAtProjectorScreen.webp"
						alt="A female engineer pointing at a projector screen"
						layout="fill"
						objectFit="cover"
						objectPosition="center right"
						quality={100}
						className="absolute inset-0 z-0"
					/>
					<div className="relative z-10 py-12 px-6 bg-gray-800 bg-opacity-80 min-h-[300px] space-y-4">
						<h1 className="text-balance text-white max-w-2xl">
							Making Money as a Freelancer: A Practical Guide
						</h1>
						<p className="text-white max-w-xl">
							{
								"If you're an engineer transitioning into freelancing, developing the skills necessary to succeed in this new landscape is essential. In this talk, we'll cover the primary strategies for making money as a freelancer, from building confidence to finding high-paying clients."
							}
						</p>
					</div>
				</div>
			</section>
			<section>
				<h2>Confidence is Key</h2>
				<p>
					{
						"Fake it until you make it. As a new freelancer, you may not have the confidence that comes with experience. However, it's crucial to project confidence at all times. When interacting with clients, pretend you've been there before. If a client asks if you've signed a big deal before, say yes. Don't be nervous; sound confident, even if you're sweating and crying afterward."
					}
				</p>
			</section>
			<section>
				<h2>Be Professional</h2>
				<p>{"To be taken seriously, you must act professionally."}</p>
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
				<p>
					{
						"Remember, if you act like a clown, people will try to exploit you. Treat people with the utmost respect, and they will treat you professionally."
					}
				</p>
			</section>
			<section>
				<h2>Honesty is the Best Policy</h2>
				<p>
					{
						"While feigning confidence is okay, don't lie about your skills or experience. If you need clarification on a project, tell the client you need extra time to scope it. Spend the necessary time learning and becoming an expert. Lying about your skills will cost you money and damage your reputation."
					}
				</p>
			</section>
			<section>
				<h2>Develop Your Expertise</h2>
				<p>
					{
						"Focus on your strengths and develop your skills. If you're good at something, do what you're good at. If you need to improve, open new Git repositories, work on documentation and learn to be an expert. Get certifications, attend webinars, and do whatever it takes to become a master in your field."
					}
				</p>
			</section>
			<section>
				<h2>Finding Work</h2>
				<ul>
					<li>{"Start small."}</li>
					<li>
						{"Use platforms like Upwork, Guru, or Freelancer to find clients."}
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
			</section>
			<section>
				<h2>Setting Your Rate</h2>
				<p>
					{
						"Choose a rate you're happy with, considering your financial situation and goals. If you're starting, your rate may be lower. As you gain more experience and build a portfolio, increase your rate. To increase your rate, focus on niche work that requires specialized skills. Niche work means less competition, and the minimum rate is higher."
					}
				</p>
			</section>
			<section>
				<h2>Focus on What Matters</h2>
				<p>{"Don't waste time on unnecessary things like:"}</p>
				<ul>
					<li>{"Creating a fancy website or business cards"}</li>
					<li>{"Building a resume"}</li>
				</ul>
				<p>{"Instead, focus on:"}</p>
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
			</section>
			<section>
				<p>
					{
						"By following these practical tips, you'll be well on your way to making money as a freelancer. Remember to stay confident, professional, and honest, and always focus on developing your expertise and finding high-paying clients."
					}
				</p>
			</section>
		</main>
	)
}
