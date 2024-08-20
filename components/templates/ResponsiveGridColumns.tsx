import { cn } from "@/lib/utils"
import React, { type ReactElement } from "react"

interface FlexibleColumnsProps {
	children: ReactElement[]
	className?: string
	columnClassName?: string
	columnStyles?: { [key: number]: string }
	maxColumns?: number
}

function ResponsiveGridColumns({
	children,
	className,
	columnClassName,
	columnStyles,
	maxColumns,
}: FlexibleColumnsProps) {
	const gridColumns = maxColumns
		? `repeat(${maxColumns}, minmax(min(100%, 20rem), 1fr))`
		: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))"

	return (
		<div
			className={cn("grid justify-items-start gap-[var(--gap)]", className)}
			style={{
				gridTemplateColumns: gridColumns,
			}}
		>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					return (
						<div
							key={child.key || `column-${index}`}
							className={cn(
								"space-y-[var(--gap)]",
								columnClassName,
								columnStyles?.[index + 1],
							)}
						>
							{child}
						</div>
					)
				}
				return null
			})}
		</div>
	)
}

export { ResponsiveGridColumns }
