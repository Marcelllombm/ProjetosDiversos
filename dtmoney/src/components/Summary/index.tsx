import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
    const {transactions} = useContext(TransactionsContext);

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit' ){
            
    //         return acc + transaction.amount;
    //     }
    //     return acc;

    // }, 0);

    const  summary = transactions.reduce((acc, transaction) => {
        console.log(transaction);
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR',{
                               style:'currency',
                               currency:'BRL'
                           }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR',{
                               style:'currency',
                               currency:'BRL'
                           }).format(summary.withdraws)} 
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                               style:'currency',
                               currency:'BRL'
                           }).format(summary.total)} 
                </strong>
            </div>
        </Container>
    )
}
