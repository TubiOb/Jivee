import { forwardRef, Ref, useEffect, useRef, useState } from 'react'
import { InputProps } from '../../interface';
import { CiSearch } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TfiClip } from "react-icons/tfi";
import { MdEmojiEmotions } from "react-icons/md";
import { Flex, Input as ChakraInput, InputGroup, InputRightElement, IconButton, InputLeftElement, Text, Box } from '@chakra-ui/react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const Defaultinput = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { color, name, value, error, onChange, onBlur, onFocus, type, isDisabled, width, height, fontWeight, errorColor, focusBorderColor, bgColor, placeholder, className, showAttachIcon, emojiPickerTop = [], emojiPickerLeft = [], emojiPickerRight = [], emojiPickerBottom = [], emojiPickerResponsive = false, } = props;

    const isPassword = type === 'password'; 
  
    const [showPassword, setShowPassword] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [newestValue, setNewestValue] = useState<string>(value);
    const [cursorPosition, setCursorPosition] = useState<number | null>(null);
    const [pickerPosition, setPickerPosition] = useState({ top: emojiPickerTop[0] || '0', left: emojiPickerLeft[0] || '0', bottom: emojiPickerBottom[0] || '0', right: emojiPickerRight[0] || '0' });

    const inputRef = useRef<HTMLInputElement>(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const prevPickerPosition = useRef<{ top: string; left: string; bottom: string; right: string }>(pickerPosition);
    const showTextIcons = type === 'text' && !showAttachIcon;




    // const handleEmojiSelect = (emoji: { native: string; }) => {
    //     console.log('HIIIIIIIIIIII')
    //     const inputElement = (ref as React.RefObject<HTMLInputElement>)?.current;
    //     console.log(inputElement);

    //     if (inputElement) {
    //         inputElement.focus();
    //         const selectionStart = inputElement.selectionStart ?? 0;
    //         const newValue = value.slice(0, selectionStart) + emoji.native + value.slice(selectionStart);
    //         console.log(newValue);

    //         if (onChange) {
    //             const inputEvent = new Event('input', { bubbles: true }) as CustomEvent;
    //             const target = {
    //                 name,
    //                 value: newValue,
    //             };
    //             Object.defineProperty(inputEvent, 'target', { value: target });
    //             Object.defineProperty(inputEvent, 'currentTarget', { value: target });
    //             onChange(inputEvent as unknown as React.ChangeEvent<HTMLInputElement>);
    //         }

    //         setCursorPosition(selectionStart + emoji.native.length);
    //         setNewestValue(newValue);
    //     }
    //     setShowEmojiPicker(false);
    // };

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
        setShowEmojiPicker(false);
    };


    useEffect(() => {
        if (inputRef.current && cursorPosition !== null) {
            inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        }
    }, [cursorPosition]);
    
      



    const handleEmojiPickerToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (showEmojiPicker && inputRef.current) {
            inputRef.current.focus();
        }
        setShowEmojiPicker(!showEmojiPicker);
    };


    useEffect(() => {
        const updatePickerPosition = () => {
            if (emojiPickerResponsive) {
                const windowWidth = window.innerWidth;
                let newTop = emojiPickerTop[0] || '0';
                let newLeft = emojiPickerLeft[0] || '0';
                let newBottom = emojiPickerBottom[0] || '0';
                let newRight = emojiPickerRight[0] || '0';

                // Define breakpoints
                const breakpoints = {
                    xs: 0,
                    sm: 480,
                    md: 768,
                    lg: 1024,
                    xl: 1200,
                    '2xl': 1400,
                };

                // Responsive positioning logic
                if (windowWidth >= breakpoints['2xl']) {
                    newTop = emojiPickerTop[5] || newTop;
                    newLeft = emojiPickerLeft[5] || newLeft;
                } else if (windowWidth >= breakpoints.xl) {
                    newTop = emojiPickerTop[4] || newTop;
                    newLeft = emojiPickerLeft[4] || newLeft;
                } else if (windowWidth >= breakpoints.lg) {
                    newTop = emojiPickerTop[3] || newTop;
                    newLeft = emojiPickerLeft[3] || newLeft;
                } else if (windowWidth >= breakpoints.md) {
                    newTop = emojiPickerTop[2] || newTop;
                    newLeft = emojiPickerLeft[2] || newLeft;
                } else if (windowWidth >= breakpoints.sm) {
                    newTop = emojiPickerTop[1] || newTop;
                    newLeft = emojiPickerLeft[1] || newLeft;
                } else {
                    newTop = emojiPickerTop[0] || newTop;
                    newLeft = emojiPickerLeft[0] || newLeft;
                    newBottom = emojiPickerBottom[0] || newBottom;
                    newRight = emojiPickerRight[0] || newRight;
                }

                const newPosition = { top: newTop, left: newLeft, bottom: newBottom, right: newRight };
                
                if (JSON.stringify(prevPickerPosition.current) !== JSON.stringify(newPosition)) {
                    setPickerPosition(newPosition);
                    prevPickerPosition.current = newPosition;
                }
            }
        };

        updatePickerPosition();
        window.addEventListener('resize', updatePickerPosition);

        return () => {
            window.removeEventListener('resize', updatePickerPosition);
        };
    }, [emojiPickerResponsive, emojiPickerTop, emojiPickerLeft, emojiPickerBottom, emojiPickerRight]);



    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(inputRef.current);
            } else if ('current' in ref) {
                (ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current;
            }
        }
    }, [ref]);
    

  return (
    <Flex className='flex flex-col gap-1 overflow-hidden p-2' w={width}>
        <InputGroup alignItems='center' display='flex' w='auto'>
            <ChakraInput
                name={name}
                value={newestValue}
                ref={inputRef}
                onChange={(e) => setNewestValue(e.target.value)}
                onFocus={onFocus}
                color={color}
                className={className}
                bgColor={bgColor}
                onBlur={onBlur}
                height={height}
                border={error ? "1px solid #f00" : "none"}
                type={isPassword ? (showPassword ? "text" : "password") : type}
                disabled={isDisabled}
                placeholder={placeholder}
                fontWeight={fontWeight}
                focusBorderColor={focusBorderColor}
                outline='none'
                px='3'
            />
            {isPassword && (
                <InputRightElement display='flex' h='100%' w='auto' alignItems='center'>
                    <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />} 
                        onClick={togglePasswordVisibility}
                        variant="ghost"
                        color="gray.500"
                        border='0px'
                        _hover={
                         { border: '0px',}
                        }
                        _active={
                          { border: '0px',}
                         }
                    />
                </InputRightElement>
            )}
            {showTextIcons && (
                    <InputRightElement>
                        <IconButton
                            aria-label='emoticon'
                            icon={<MdEmojiEmotions />}
                            cursor='pointer'
                            onClick={(event) => { event.preventDefault(); handleEmojiPickerToggle(event); }}
                            variant="ghost"
                            color="gray.500"
                            border='0px'
                            _hover={{
                                border: '0px',
                            }}
                            _active={{
                                border: '0px',
                            }}
                        />
                    </InputRightElement>
                )}
            {type === 'text' && showAttachIcon && (
                <InputRightElement display='flex' h='100%' w='auto' alignItems='center'>
                    <IconButton
                        aria-label='attach'
                        icon={<TfiClip />}
                        cursor='pointer'
                        size='xs'
                        fontSize='18px'
                        // onClick={}
                        variant="ghost"
                        color="gray.500"
                        border='0px'
                        p='0px'
                        _hover={
                         { border: '0px',}
                        }
                        _active={
                          { border: '0px',}
                         }
                    />
                    {/* <AttachmentIcon cursor='pointer' /> */}
                    <IconButton
                         aria-label='emoticon'
                         icon={<MdEmojiEmotions />}
                         cursor='pointer'
                         size='xs'
                         fontSize='18px'
                         // onClick={}
                         variant="ghost"
                         color="gray.500"
                         border='0px'
                         p='0px'
                         mr='2'
                         _hover={
                          { border: '0px',}
                         }
                         _active={
                           { border: '0px',}
                          }
                    />
                </InputRightElement>
            )}
            {type === 'search' && ( 
                <InputLeftElement display='flex' h='100%' w='auto' alignItems='center'>
                    <IconButton
                    aria-label='Search'
                    icon={<CiSearch />}
                    cursor='pointer'
                    // onClick={}
                    variant="ghost"
                    color="gray.900"
                    border='0px'
                    _hover={
                    { border: '0px',}
                    }
                    _active={
                        { border: '0px',}
                    }
                    
                    />
                </InputLeftElement>
                )}
        </InputGroup>
        {error && (
            <Text color={errorColor} fontSize='small'>
                {error}
            </Text>
        )}
        {showEmojiPicker && (
            <Box position='absolute' top={pickerPosition.top} left={pickerPosition.left} right={pickerPosition.right} bottom={pickerPosition.bottom} zIndex='1000'>
                <Picker data={data} onEmojiSelect={(emoji: { native: string; }) => handleEmojiSelect(emoji)} noCountryFlags={true} emojiSize={20} skin='3' skinTonePosition='preview' emojiButtonSIze={18} maxFrequentRows={1} previewPosition='none' />
            </Box>
        )}
    </Flex>
  )
})

export default Defaultinput