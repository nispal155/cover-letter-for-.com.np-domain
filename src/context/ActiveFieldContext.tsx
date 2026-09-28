import { createContext, useContext, useState, type ReactNode } from "react";

interface ActiveFieldContextType {
  activeField: string | null;
  setActiveField: (fieldName: string | null) => void;
}

const ActiveFieldContext = createContext<ActiveFieldContextType | undefined>(undefined);

export function ActiveFieldProvider({ children }: { children: ReactNode }) {
  const [activeField, setActiveField] = useState<string | null>(null);
  
  return (
    <ActiveFieldContext.Provider value={{ activeField, setActiveField }}>
      {children}
    </ActiveFieldContext.Provider>
  );
}

export function useActiveField() {
  const context = useContext(ActiveFieldContext);
  if (context === undefined) {
    return { activeField: null, setActiveField: () => {} };
  }
  return context;
}
