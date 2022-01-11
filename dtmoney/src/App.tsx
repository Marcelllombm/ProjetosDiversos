import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Migera } from "./services/migera";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const  [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);    
  }
  return (
    <TransactionsProvider>
      <GlobalStyle/>
      <Migera />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>  
      <Dashboard />
      <NewTransactionModal 
      isOpen={ isNewTransactionModalOpen } 
      onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}
