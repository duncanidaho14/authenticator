import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CustomersPage = (props) => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/customers")
            .then(response => response.data["hydra:member"])
            .then(data => setCustomers(data))
            .catch(error => console.log(error.response));
    }, []);

    const handleDelete = id => {
        axios.delete("http://127.0.0.1:8000/api/customers/" + id)
            .then(response => console.log(response));
    }
    return ( 
        <>
        <h1>Liste des clients</h1>
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Client</th>
                    <th>Email</th>
                    <th>Entreprise</th>
                    <th>Facture</th>
                    <th>Montant total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => ( 
                    <tr key={customer.id}>
                
                        <td>{customer.id}</td>
                        <td>
                            <a href="#">{customer.firstName} {customer.lastName}</a>
                        </td>
                        <td>{customer.email}</td>
                        <td>{customer.company}</td>
                        <td>
                            <span>{customer.invoices.length}</span>
                        </td>
                        <td>{customer.totalAmount.toLocaleString()} €</td>
                        <td>
                            <button 
                                onClick={() => handleDelete(customer.id)}
                                disabled={customer.invoices.length > 0}
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 {{cursor-not-allowed}}"
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
     );
}
 
export default CustomersPage;