import { createContext,useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        const storedUser=localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : ({name:"",email:"",role:""});
    })
   const login=(name,email,role)=>{
    const newUser={name,email,role};
    setUser(newUser);
    localStorage.setItem("user",JSON.stringify(newUser));
    
   }
   const logout=()=>{
    localStorage.removeItem("user");
    // localStorage.clear();
    setUser({name:"",email:"",role:""});
   }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}