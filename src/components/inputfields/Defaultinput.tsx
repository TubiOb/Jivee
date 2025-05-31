import { forwardRef, Ref, useEffect, useRef, useState } from 'react'
import { InputProps } from '../../interface';
import { CiSearch } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { Flex, Input as ChakraInput, InputGroup, InputRightElement, IconButton, InputLeftElement, Text, } from '@chakra-ui/react';
import EmojiPicker from '../emojiPicker';
import { useEmojiPicker } from '../../hooks/use-emoji-picker';


const Defaultinput = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    // @ts-ignore
    const { color, name, value, error, onChange, onBlur, onFocus, type, isDisabled, width, height, fontWeight, errorColor, focusBorderColor, borderColor, bgColor, placeholder, maxLength, className, showAttachIcon, /* emojiPickerTop = [], emojiPickerLeft = [], emojiPickerRight = [], emojiPickerBottom = [], emojiPickerResponsive = false, */  } = props;

    const isPassword = type === 'password'; 
  
    const [showPassword, setShowPassword] = useState(false);
    // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [newestValue, setNewestValue] = useState(value);
    const [cursorPosition, setCursorPosition] = useState<number | null>(null);
    // const [pickerPosition, setPickerPosition] = useState({ top: emojiPickerTop[0] || '0', left: emojiPickerLeft[0] || '0', bottom: emojiPickerBottom[0] || '0', right: emojiPickerRight[0] || '0' });

    const inputRef = useRef<HTMLInputElement>(null);
    // const emojiButtonRef = useRef<HTMLButtonElement>(null)
    const { isOpen, triggerRef, togglePicker, closePicker } = useEmojiPicker()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // const prevPickerPosition = useRef<{ top: string; left: string; bottom: string; right: string }>(pickerPosition);
    const showTextIcons = type === 'text' && !showAttachIcon;



    const handleEmojiSelect = (emoji: { native: string; }) => {
        const currentRef = inputRef.current;
        if (currentRef) {
            currentRef.focus();
            const selectionStart = currentRef.selectionStart ?? 0;
            const newValue = newestValue.slice(0, selectionStart) + emoji.native + newestValue.slice(selectionStart);
            setNewestValue(newValue);
            setCursorPosition(selectionStart + emoji.native.length);

            // Trigger onChange event if it's provided
            if (onChange) {
                const event = {
                    target: {
                        name,
                        value: newValue,
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                onChange(event);
            }
        }
        closePicker();
        // setShowEmojiPicker(false);
    };  



    const handleEmojiPickerToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // if (showEmojiPicker && inputRef.current) {
        //     inputRef.current.focus();
        // }
        // setShowEmojiPicker(!showEmojiPicker);
        togglePicker();
    };

    // const getEmojiPickerPosition = () => {
    //     if (!emojiButtonRef.current) return {}

    //     const buttonRect = emojiButtonRef.current.getBoundingClientRect()
    //     const viewportWidth = window.innerWidth
    //     const viewportHeight = window.innerHeight

    //     // Emoji picker dimensions
    //     const pickerWidth = 352
    //     const pickerHeight = 435

    //     let left = buttonRect.left
    //     let top = buttonRect.top - pickerHeight - 10

    //     // Adjust horizontal position if picker would overflow
    //     if (left + pickerWidth > viewportWidth) {
    //         left = viewportWidth - pickerWidth - 10
    //     }
    //     if (left < 10) {
    //         left = 10
    //     }

    //     // Adjust vertical position if picker would overflow
    //     if (top < 10) {
    //         top = buttonRect.bottom + 10
    //     }

    //     return {
    //         position: "fixed" as const,
    //         left: `${left}px`,
    //         top: `${top}px`,
    //         zIndex: 9999,
    //     }
    // }


    // const getEmojiPickerPosition = () => {
    //     if (!emojiButtonRef.current) return {}

    //     const buttonRect = emojiButtonRef.current.getBoundingClientRect()
    //     const viewportWidth = window.innerWidth

    //     // Emoji picker dimensions
    //     const pickerWidth = 352
    //     const pickerHeight = 435

    //     let left = buttonRect.left - pickerWidth + buttonRect.width
    //     let top = buttonRect.top - pickerHeight - 10 // Always above the input

    //     // Adjust horizontal position if picker would overflow
    //     if (left + pickerWidth > viewportWidth) {
    //       left = viewportWidth - pickerWidth - 10
    //     }
    //     if (left < 10) {
    //       left = 10
    //     }

    //     // Ensure it stays above even if there's not enough space
    //     if (top < 10) {
    //       top = 100 // Minimum distance from top of viewport
    //     }

    //     return {
    //       position: "fixed" as const,
    //       left: `${left}px`,
    //       top: `${top}px`,
    //       zIndex: 9999,
    //     }
    //   }


    useEffect(() => {
        if (inputRef.current && cursorPosition !== null) {
            inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        }
    }, [cursorPosition]);


    useEffect(() => {
        setNewestValue(value)
    }, [value]);


    // useEffect(() => {
    //     const updatePickerPosition = () => {
    //         if (emojiPickerResponsive) {
    //             const windowWidth = window.innerWidth;
    //             let newTop = emojiPickerTop[0] || '0';
    //             let newLeft = emojiPickerLeft[0] || '0';
    //             let newBottom = emojiPickerBottom[0] || '0';
    //             let newRight = emojiPickerRight[0] || '0';

    //             // Define breakpoints
    //             const breakpoints = {
    //                 sm: 480,
    //                 md: 768,
    //                 lg: 1024,
    //                 xl: 1200,
    //                 '2xl': 1500,
    //             };

    //             // Responsive positioning logic
    //             if (windowWidth >= breakpoints['2xl']) {
    //                 newTop = emojiPickerTop[4] || newTop;
    //                 newLeft = emojiPickerLeft[4] || newLeft;
    //                 newBottom = emojiPickerBottom[4] || newBottom;
    //                 newRight = emojiPickerRight[4] || newRight;
    //             } else if (windowWidth >= breakpoints.xl) {
    //                 newTop = emojiPickerTop[3] || newTop;
    //                 newLeft = emojiPickerLeft[3] || newLeft;
    //                 newBottom = emojiPickerBottom[3] || newBottom;
    //                 newRight = emojiPickerRight[3] || newRight;
    //             } else if (windowWidth >= breakpoints.lg) {
    //                 newTop = emojiPickerTop[2] || newTop;
    //                 newLeft = emojiPickerLeft[2] || newLeft;
    //                 newBottom = emojiPickerBottom[2] || newBottom;
    //                 newRight = emojiPickerRight[2] || newRight;
    //             } else if (windowWidth >= breakpoints.md) {
    //                 newTop = emojiPickerTop[1] || newTop;
    //                 newLeft = emojiPickerLeft[1] || newLeft;
    //                 newBottom = emojiPickerBottom[1] || newBottom;
    //                 newRight = emojiPickerRight[1] || newRight;
    //             } else if (windowWidth >= breakpoints.sm) {
    //                 newTop = emojiPickerTop[0] || newTop;
    //                 newLeft = emojiPickerLeft[0] || newLeft;
    //                 newBottom = emojiPickerBottom[0] || newBottom;
    //                 newRight = emojiPickerRight[0] || newRight;
    //             } 
    //             // else {
    //             //     newTop = emojiPickerTop[0] || newTop;
    //             //     newLeft = emojiPickerLeft[0] || newLeft;
    //             //     newBottom = emojiPickerBottom[0] || newBottom;
    //             //     newRight = emojiPickerRight[0] || newRight;
    //             // }

    //             const newPosition = { top: newTop, left: newLeft, bottom: newBottom, right: newRight };
                
    //             if (JSON.stringify(prevPickerPosition.current) !== JSON.stringify(newPosition)) {
    //                 setPickerPosition(newPosition);
    //                 prevPickerPosition.current = newPosition;
    //             }
    //         }
    //     };

    //     updatePickerPosition();
    //     window.addEventListener('resize', updatePickerPosition);

    //     return () => {
    //         window.removeEventListener('resize', updatePickerPosition);
    //     };
    // }, [emojiPickerResponsive, emojiPickerTop, emojiPickerLeft, emojiPickerBottom, emojiPickerRight]);



    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(inputRef.current);
            } else if ('current' in ref) {
                ;(ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
            }
        }
    }, [ref]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewestValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };


    // Close emoji picker when clicking outside
    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (showEmojiPicker && emojiButtonRef.current && !emojiButtonRef.current.contains(event.target as Node)) {
    //             setShowEmojiPicker(false)
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside)
    //     return () => document.removeEventListener("mousedown", handleClickOutside)
    // }, [showEmojiPicker])
    

  return (
    // <>
    //     <Flex className='flex flex-col gap-1 relative' w={width}>
    //         <InputGroup alignItems='center' display='flex' w='100%'>
    //             <ChakraInput
    //                 name={name}
    //                 value={newestValue}
    //                 ref={inputRef}
    //                 onChange={handleChange}
    //                 onFocus={onFocus}
    //                 color={color}
    //                 className={className}
    //                 bgColor={bgColor}
    //                 onBlur={onBlur}
    //                 height={height}
    //                 _hover={{ border: 'purple.300', outline: 'none' }}
    //                 border={error ? "1px solid #f00" : borderColor}
    //                 borderColor='purple.300'
    //                 type={isPassword ? (showPassword ? "text" : "password") : type}
    //                 disabled={isDisabled}
    //                 placeholder={placeholder}
    //                 fontWeight={fontWeight}
    //                 focusBorderColor={focusBorderColor}
    //                 outline='none'
    //                 maxLength={maxLength}
    //                 px='3'
    //             />
    //             {isPassword && (
    //                 <InputRightElement display='flex' h='100%' w='auto' alignItems='center'>
    //                     <IconButton
    //                         aria-label={showPassword ? "Hide password" : "Show password"}
    //                         icon={showPassword ? <FaEyeSlash /> : <FaEye />} 
    //                         cursor='pointer'
    //                         onClick={togglePasswordVisibility}
    //                         variant="ghost"
    //                         color="gray.500"
    //                         border='0px'
    //                         _hover={
    //                          { border: '0px',}
    //                         }
    //                         _active={
    //                           { border: '0px',}
    //                          }
    //                     />
    //                 </InputRightElement>
    //             )}
    //             {showTextIcons && (
    //                     <InputRightElement>
    //                         <IconButton
    //                             aria-label='emoticon'
    //                             icon={<MdEmojiEmotions />}
    //                             cursor='pointer'
    //                             onClick={(event) => { event.preventDefault(); handleEmojiPickerToggle(event); }}
    //                             variant="ghost"
    //                             color="purple.300"
    //                             border='0px'
    //                             _hover={{
    //                                 border: '0px',
    //                             }}
    //                             _active={{
    //                                 border: '0px',
    //                             }}
    //                         />
    //                     </InputRightElement>
    //                 )}
    //             {type === 'text' && showAttachIcon && (
    //                 <InputRightElement display='flex' h='100%' w='auto' px='0.5' gap='2' mr='2' alignItems='center'>
    //                     {/* <IconButton
    //                         aria-label='attach'
    //                         icon={<TfiClip />}
    //                         cursor='pointer'
    //                         size='xs'
    //                         fontSize='18px'
    //                         // onClick={}
    //                         variant="ghost"
    //                         color="purple.300"
    //                         border='0px'
    //                         p='0px'
    //                         _hover={
    //                          { border: '0px',}
    //                         }
    //                         _active={
    //                           { border: '0px',}
    //                          }
    //                     /> */}
    //                     {/*  */}
    //                     {/* <AttachmentIcon cursor='pointer' /> */}
    //                     <IconButton
    //                          aria-label='emoticon'
    //                          icon={<MdEmojiEmotions />}
    //                          cursor='pointer'
    //                          size='xs'
    //                          fontSize='18px'
    //                          onClick={(event) => { event.preventDefault(); handleEmojiPickerToggle(event); }}
    //                          variant="ghost"
    //                          color="purple.300"
    //                          border='0px'
    //                          p='0px'
    //                          _hover={
    //                           { border: '0px',}
    //                          }
    //                          _active={
    //                            { border: '0px',}
    //                           }
    //                     />
    //                 </InputRightElement>
    //             )}
    //             {type === 'search' && ( 
    //                 <InputLeftElement display='flex' h='100%' w='auto' alignItems='center'>
    //                     <IconButton
    //                     aria-label='Search'
    //                     icon={<CiSearch />}
    //                     cursor='pointer'
    //                     // onClick={}
    //                     variant="ghost"
    //                     color="gray.900"
    //                     border='0px'
    //                     _hover={
    //                     { border: '0px',}
    //                     }
    //                     _active={
    //                         { border: '0px',}
    //                     }
                    
    //                     />
    //                 </InputLeftElement>
    //                 )}
    //         </InputGroup>
    //         {error && (
    //             <Text color={errorColor} fontSize='small'>
    //                 {error}
    //             </Text>
    //         )}
    //     </Flex>

        
    //     <EmojiPicker isOpen={isOpen} onClose={closePicker} onEmojiSelect={handleEmojiSelect} triggerRef={triggerRef} />
           
    // </>

    <>
        <Flex className="flex flex-col gap-1" w={width}>
            <InputGroup alignItems="center" display="flex" w="100%">
                <ChakraInput name={name} value={newestValue} ref={inputRef} onChange={handleChange} onFocus={onFocus} color={color} className={className} bgColor={bgColor} onBlur={onBlur} height={height} _hover={{ borderColor: "purple.400" }} border={error ? "1px solid #f00" : "1px solid"} borderColor={error ? "red.500" : borderColor} type={isPassword ? (showPassword ? "text" : "password") : type} disabled={isDisabled} placeholder={placeholder} fontWeight={fontWeight} focusBorderColor={focusBorderColor} outline="none" maxLength={maxLength} px="3" borderRadius="lg" />

                {isPassword && (
                    <InputRightElement display="flex" h="100%" w="auto" alignItems="center">
                    <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FaEyeSlash /> : <FaEye />} cursor="pointer" onClick={togglePasswordVisibility} variant="ghost" color="gray.500" size="sm" _hover={{ bg: "gray.100" }} />
                    </InputRightElement>
                )}

                {showTextIcons && (
                    <InputRightElement>
                    <IconButton ref={triggerRef} aria-label="emoticon" icon={<MdEmojiEmotions />} cursor="pointer" onClick={handleEmojiPickerToggle} variant="ghost" color={isOpen ? "purple.600" : "purple.400"} size="sm" _hover={{ bg: "purple.50", color: "purple.600" }} _active={{ bg: "purple.100" }} />
                    </InputRightElement>
                )}

                {type === "text" && showAttachIcon && (
                    <InputRightElement display="flex" h="100%" w="auto" px="2" gap="1" alignItems="center">
                    <IconButton ref={triggerRef} aria-label="emoticon" icon={<MdEmojiEmotions />} cursor="pointer" size="sm" fontSize="18px" onClick={handleEmojiPickerToggle} variant="ghost" color={isOpen ? "purple.600" : "purple.400"} _hover={{ bg: "purple.50", color: "purple.600" }} _active={{ bg: "purple.100" }} />
                    </InputRightElement>
                )}

                {type === "search" && (
                    <InputLeftElement display="flex" h="100%" w="auto" alignItems="center">
                    <IconButton aria-label="Search" icon={<CiSearch />} cursor="pointer" variant="ghost" color="gray.600" size="sm" _hover={{ bg: "gray.100" }} />
                    </InputLeftElement>
                )}
            </InputGroup>

            {error && (
                <Text color={errorColor} fontSize="sm" mt={1}>
                    {error}
                </Text>
            )}
        </Flex>

        {/* Emoji Picker - Rendered outside the input to avoid layout issues */}
        <EmojiPicker isOpen={isOpen} onClose={closePicker} onEmojiSelect={handleEmojiSelect} triggerRef={triggerRef} />
    </>
  )
})

export default Defaultinput