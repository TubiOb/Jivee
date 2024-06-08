import { forwardRef, Ref, useState } from 'react'
import { InputProps } from '../../interface';
import { CiSearch } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TfiClip } from "react-icons/tfi";
import { MdEmojiEmotions } from "react-icons/md";
import { Flex, Input as ChakraInput, InputGroup, InputRightElement, IconButton, InputLeftElement, Text } from '@chakra-ui/react';

const Defaultinput = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { color, name, value, error, onChange, onBlur, onFocus, type, isDisabled, width, height, fontWeight, errorColor, focusBorderColor, bgColor, placeholder, className, showAttachIcon } = props;

    const isPassword = type === 'password'; 
  
    const [showPassword, setShowPassword] = useState(false); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showTextIcons = type === 'text' && !showAttachIcon;

  return (
    <Flex className='flex flex-col gap-1 overflow-hidden p-2' w={width}>
        <InputGroup alignItems='center' display='flex' w='auto'>
            <ChakraInput
                name={name}
                value={value}
                ref={ref}
                onChange={onChange}
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
                            // onClick={}
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
    </Flex>
  )
})

export default Defaultinput