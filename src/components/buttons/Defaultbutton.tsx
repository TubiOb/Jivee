import { Box, Button as ChakraButton } from "@chakra-ui/react"
import { DefaultbuttonProps } from "../../interface"

const Defaultbutton = (props: DefaultbuttonProps) => {
  const { width, bg, color, shadow, children, className, type = 'button', onClick, isLoading, loadingText, borderWidth, borderColor, fontSize, leftIcon, rightIcon } = props;

  return (
    <Box>
      <ChakraButton
        _hover={{ opacity: 0.7 }}
        bg={bg}
        color={color}
        h={['40px', '45px']}
        shadow={shadow}
        fontFamily='Nunito Sans'
        className={className}
        width={width}
        onClick={onClick} 
        type={type}
        isLoading={isLoading}
        loadingText={loadingText}
        borderWidth={borderWidth}
        borderColor={borderColor}
        fontSize={fontSize}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ChakraButton>
    </Box>
  );
};

export default Defaultbutton;