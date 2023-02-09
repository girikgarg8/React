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

// The lines return () => { window.removeEventListener("online", handleOnline) window.removeEventListener("offline", handleOffline) } in the code are used to clean up the event listeners when the component using the custom hook is unmounted.

// In React, when a component is unmounted, it's important to clean up any resources that were created when the component was mounted. In this case, the custom hook useOnline sets up two event listeners for the online and offline events on the window object. These listeners call the handleOnline and handleOffline functions respectively when the online status of the browser changes.

// The lines return () => { window.removeEventListener("online", handleOnline) window.removeEventListener("offline", handleOffline) } return a function that removes these event listeners when the component is unmounted.This ensures that the listeners are no longer active and do not continue to respond to events even though the component that set them up has been removed.

//     It's a best practice in React to clean up resources created in custom hooks when the component that uses the hook is unmounted. This helps to prevent memory leaks and other issues that can occur when resources are not properly managed.

