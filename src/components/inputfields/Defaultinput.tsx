import { useState } from 'react'
import { InputProps } from '../../interface';
import { CiSearch } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TfiClip } from "react-icons/tfi";
import { MdEmojiEmotions } from "react-icons/md";
import { Flex, Input as ChakraInput, InputGroup, InputRightElement, IconButton, InputLeftElement, Text } from '@chakra-ui/react';

const Defaultinput = (props: InputProps) => {
    const { color, name, value, error, onChange, onBlur, onFocus, type, isDisabled, width, height, fontWeight, errorColor, focusBorderColor, bgColor, placeholder, maxLength } = props;

    const isPassword = type === 'password'; 
  
    const [showPassword, setShowPassword] = useState(false); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const showTextIcons = type === 'text';

  return (
    <Flex className='flex flex-col gap-1 overflow-hidden p-2' w={width}>
        <InputGroup>
            <ChakraInput
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                color={color}
                bgColor={bgColor}
                onBlur={onBlur}
                height={height}
                border={error ? "1px solid #f00" : "none"}
                type={isPassword ? (showPassword ? "text" : "password") : type}
                disabled={isDisabled}
                placeholder={placeholder}
                fontWeight={fontWeight}
                focusBorderColor={focusBorderColor}
                maxLength={maxLength}
                className='flex items-center focus-within:bg-white text-base'
            />
            {isPassword && (
                <InputRightElement>
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
                            aria-label='attach'
                            icon={<TfiClip />} 
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
            {type === 'text' && !showTextIcons && (
                <InputRightElement flexDir={'row'} gap='1'>
                    <IconButton
                        aria-label='attach'
                        icon={<TfiClip />} 
                        // onClick={}
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
                    <IconButton
                         aria-label='emoticon'
                         icon={<MdEmojiEmotions />} 
                         // onClick={}
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
            {type === 'search' && ( 
                <InputLeftElement  border='0' mt='5px'>
                    <IconButton
                    aria-label='Search'
                    icon={<CiSearch />} 
                    // onClick={}
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
}

export default Defaultinput