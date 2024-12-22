import React, { useEffect, useState } from 'react'

const BlinkingText = ({text, icon}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsVisible((prev) => !prev);
        }, 1000); 
    
        return () => clearInterval(interval);
      }, []);

  return (
     <div className="flex items-center space-x-2 bg-[#2c3e50] text-gray-300 font-medium px-3 py-1 rounded">
      {icon && <span className="text-xl">{icon}</span>}
      <span className={isVisible ? "opacity-100" : "opacity-0 transition-opacity duration-500"}>{text}</span>
    </div>
  )
}

export default BlinkingText