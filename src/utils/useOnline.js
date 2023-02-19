import { useEffect, useState } from "react";

const useOnline=()=>{
    const [isOnline, setIsOnline]=useState(true)

    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true)
        };
        const handleOffline=()=>{
            setIsOnline(false)
        }
     window.addEventListener("online",handleOnline)
     window.addEventListener("offline",handleOffline)
    return ()=>{
         window.removeEventListener("online",handleOnline)
         window.removeEventListener("offline",handleOffline)
    }
 }, [])
    return isOnline;
}
export default useOnline;
//How this code is working actually?This has an excellent explanation, it just blew my head:

// his custom hook useOnline is using the useEffect hook from React, which is responsible for managing side effects in functional components.The useEffect hook takes two arguments: a callback function and a dependency array.

// In this code, the dependency array is empty[], which means the callback function inside useEffect will only run once, after the first render.The purpose of this callback function is to add event listeners for the online and offline events, which are emitted by the browser's window object whenever the internet connection status changes.

// The handleOnline and handleOffline functions are event handlers that update the state of isOnline using the setIsOnline function, which is part of the useState hook.If the browser goes online, setIsOnline(true) is called and if it goes offline, setIsOnline(false) is called.The state value isOnline is returned from the custom hook to the component using it.

//     Now, since the dependency array is empty, the useEffect callback function runs only once after the initial render.This means that the event listeners for the online and offline events are added only once, during the initial render.

//         However, the event listeners that were added during the first render can still trigger even if the dependency array is empty.This is because the callback function is not re - run on subsequent renders, but the event listeners are still present in the DOM.

//             So, if the internet connection goes off after the first render, the offline event will still trigger the handleOffline function, which will update the state of isOnline to false.The component using the useOnline hook will then re - render with the new value of isOnline.

// In summary, the dependency array being empty in this case only means that the event listeners are added once during the initial render.However, the event listeners can still trigger after the initial render, even if the dependency array is empty, and cause a re - render of the component using the hook. This is an example of closures, in fact.


// The lines return () => { window.removeEventListener("online", handleOnline) window.removeEventListener("offline", handleOffline) } in the code are used to clean up the event listeners when the component using the custom hook is unmounted.

// In React, when a component is unmounted, it's important to clean up any resources that were created when the component was mounted. In this case, the custom hook useOnline sets up two event listeners for the online and offline events on the window object. These listeners call the handleOnline and handleOffline functions respectively when the online status of the browser changes.

// The lines return () => { window.removeEventListener("online", handleOnline) window.removeEventListener("offline", handleOffline) } return a function that removes these event listeners when the component is unmounted.This ensures that the listeners are no longer active and do not continue to respond to events even though the component that set them up has been removed.

//     It's a best practice in React to clean up resources created in custom hooks when the component that uses the hook is unmounted. This helps to prevent memory leaks and other issues that can occur when resources are not properly managed.
