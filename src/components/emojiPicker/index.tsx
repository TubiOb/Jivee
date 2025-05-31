import type React from "react"

import { useEffect, useRef } from "react"
import { Box } from "@chakra-ui/react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"

interface EmojiPickerProps {
  isOpen: boolean
  onClose: () => void
  onEmojiSelect: (emoji: { native: string }) => void
  triggerRef: React.RefObject<HTMLElement>
}

const EmojiPicker = ({ isOpen, onClose, onEmojiSelect, triggerRef }: EmojiPickerProps) => {
  const pickerRef = useRef<HTMLDivElement>(null)

  const getPickerPosition = () => {
    if (!triggerRef.current) return { display: "none" }

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // Emoji picker dimensions
    const pickerWidth = 352
    const pickerHeight = 435

    // Calculate position - always above the trigger
    let left = triggerRect.left + triggerRect.width / 2 - pickerWidth / 2
    let top = triggerRect.top - pickerHeight - 20

    // Adjust horizontal position if picker would overflow
    if (left + pickerWidth > viewportWidth - 10) {
      left = viewportWidth - pickerWidth - 10
    }
    if (left < 10) {
      left = 10
    }

    // If there's not enough space above, position it above with minimum spacing
    if (top < 20) {
      top = 20
    }

    return {
      position: "fixed" as const,
      left: `${left}px`,
      top: `${top}px`,
      zIndex: 9999,
      display: "block",
    }
  }

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside as EventListener)
      document.addEventListener("touchstart", handleClickOutside as EventListener)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside as EventListener)
      document.removeEventListener("touchstart", handleClickOutside as EventListener)
    }
  }, [isOpen, onClose, triggerRef])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Box ref={pickerRef} style={getPickerPosition()} bg="white" borderRadius="lg" shadow="2xl" border="1px" borderColor="gray.200" overflow="hidden" >
      <Picker data={data} onEmojiSelect={onEmojiSelect} theme="light" previewPosition="none" skinTonePosition="preview" emojiSize={18} perLine={8} maxFrequentRows={2} noCountryFlags={false} skin='3' searchPosition="sticky" navPosition="top" />
    </Box>
  )
}

export default EmojiPicker