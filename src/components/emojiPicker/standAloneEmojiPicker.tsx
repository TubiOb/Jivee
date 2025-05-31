"use client"

import { IconButton } from "@chakra-ui/react"
import { MdEmojiEmotions } from "react-icons/md"
import EmojiPicker from './index'
import { useEmojiPicker } from './../../hooks/use-emoji-picker';

interface StandaloneEmojiPickerProps {
  onEmojiSelect: (emoji: { native: string }) => void
  size?: "sm" | "md" | "lg"
  variant?: "ghost" | "solid" | "outline"
  color?: string
}

const StandaloneEmojiPicker = ({
  onEmojiSelect,
  size = "sm",
  variant = "ghost",
  color = "purple.400",
}: StandaloneEmojiPickerProps) => {
  const { isOpen, triggerRef, togglePicker, closePicker } = useEmojiPicker()

  const handleEmojiSelect = (emoji: { native: string }) => {
    onEmojiSelect(emoji)
    closePicker()
  }

  return (
    <>
      <IconButton ref={triggerRef} aria-label="Select emoji" icon={<MdEmojiEmotions />} cursor="pointer" onClick={togglePicker} variant={variant} color={isOpen ? "purple.600" : color} size={size} _hover={{ bg: "purple.50", color: "purple.600" }} _active={{ bg: "purple.100" }} />

      <EmojiPicker isOpen={isOpen} onClose={closePicker} onEmojiSelect={handleEmojiSelect} triggerRef={triggerRef} />
    </>
  )
}

export default StandaloneEmojiPicker
