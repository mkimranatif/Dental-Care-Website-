"use client"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-blue-600 md:hidden"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </Button>
  )
}
