import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ListCardProps {
	title: string
	children: ReactNode
}

function ListCard({ title, children }: ListCardProps) {
	return (
		<Card className="mb-4 h-full">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">{title}</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}

export default ListCard
