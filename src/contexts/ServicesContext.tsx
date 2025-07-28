import { createContext, ReactNode, useState, useContext } from "react";

interface ServicesContextType {
  servicesId: string;
  handleServices: (id: string) => void;
}

const defaultContextValue: ServicesContextType = {
  servicesId: "records",
  handleServices: () => {
    console.warn("handleServices was called without the ServicesProvider");
  },
};

export const ServicesContext =
  createContext<ServicesContextType>(defaultContextValue);

interface ServicesProviderProps {
  children: ReactNode;
}

export function ServicesProvider({ children }: ServicesProviderProps) {
  const [servicesId, setServicesId] = useState<string>("records");

  const handleServices = (id: string) => {
    setServicesId(id);
  };

  const contextValue: ServicesContextType = {
    servicesId,
    handleServices,
  };

  //   console.log("Check servicesID: ", servicesId);

  return (
    <ServicesContext.Provider value={contextValue}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useTransPage() {
  return useContext(ServicesContext);
}
