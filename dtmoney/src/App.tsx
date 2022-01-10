import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Migera } from "./services/migera";
import { GlobalStyle } from "./styles/global";

export function App() {
  const  [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);    
  }
  return (
    <>
      <GlobalStyle/>
      <Migera />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>  
      <Dashboard />
    <NewTransactionModal 
      isOpen={ isNewTransactionModalOpen } 
      onRequestClose={handleCloseNewTransactionModal}
    />
    </>
  )
}
