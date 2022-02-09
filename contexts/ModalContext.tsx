import { createContext, ReactNode, useState } from "react";

interface IModalProvider {
  children: ReactNode
}

interface IModalContext {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<IModalContext>(
  {} as IModalContext
)

export function ModalProvider({ children }: IModalProvider) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      { children }
    </ModalContext.Provider>
  )
}