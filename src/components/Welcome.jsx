import React from "react";
import Typed from "typed.js";

const Welcome = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Welcome to Selrahc Bank. \nThe most trusted financial institution ^2000 in Africa!'

      ],
      typeSpeed: 50,
      backSpeed: 50
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div>
      <div className="welcome_text">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
    </div>
  );
}
export default Welcome;