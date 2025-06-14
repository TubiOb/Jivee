import { useEffect, useState } from "react";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from "react-phone-input-2";


const PhoneSignIn = ({ value, onValueChange }: { value: string, onValueChange: (value: string) => void }) => {
    const [internalvalue, setInternalValue] = useState<string>(value);

    useEffect(() => {
      if (internalvalue && !internalvalue.startsWith('+')) {
        onValueChange(`+${internalvalue}`);
      }
      else {
        onValueChange(internalvalue || '');
      }
    }, [internalvalue]);


    useEffect(() => {
      setInternalValue(value);
    }, [value]);


  return (
    <div className="h-[44px] w-[95%] mx-auto flex items-center justify-center peer-focus-within:border-purple-500 rounded-md">
      <PhoneInput country="ng" onChange={setInternalValue} value={internalvalue} inputStyle={{ background: '#e0aaff', color: '#240046', width: '100%', margin: 'auto', height: '44px', border: 'purple.500', borderRadius: '8px' }} />
    </div>
  )
}

export default PhoneSignIn