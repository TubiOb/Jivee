import { useRef, useState, useCallback } from "react"

export const useEmojiPicker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const openPicker = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closePicker = useCallback(() => {
    setIsOpen(false)
  }, [])

  const togglePicker = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    triggerRef,
    openPicker,
    closePicker,
    togglePicker,
  }
}
