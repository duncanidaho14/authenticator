import React, {useEffect, useState} from 'react';
import Pagination from './../components/Pagination';
import CustomersAPI from '../services/CustomersApi';

const CustomersPage = props => {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    // Récupére les customers
    const fetchCustomers = async () => {
        try {
            const data = await CustomersAPI.findAll()
            setCustomers(data);
        } catch (error) {
            console.log(error.response);
        }
        
    }
    // Au chargement du composant, récupère les clients
    useEffect(() => {
        fetchCustomers();
    }, []);

    // Supprime un client
    const handleDelete = async id => {
        const originalCustomers = [...customers];
        setCustomers(customers.filter(customer => customer.id !== id));
        try {
            await CustomersAPI.delete(id);
        } catch (error) {
            console.log(setCustomers(originalCustomers));
        }
    }
    // Gestion de la page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    // Gestion de la recherche
    const handleSearch = event => {
        const value = event.currentTarget.value;
        setSearch(value);
        setCurrentPage(1);
    }
    
    const itemsPerPage = 10;
    const filteredCustomers = customers.filter(c => 
        c.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.lastName.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        (c.company && c.company.toLowerCase().includes(search.toLowerCase()))
    );
    
    // Pagination des données
    const paginatedCustomers = Pagination.getData(filteredCustomers, currentPage, itemsPerPage);
    return(
        <>
            <h1>Liste des clients</h1>
            <div className="relative text-green-600 py-2 px-2 mx-auto">
                <input type="search" onChange={handleSearch} value={search} className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none mx-auto" />
          </div>
        

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
                    {paginatedCustomers.map(customer => (
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
                                className="disabled:opacity-25 bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50 disabled:cursor-not-allowed"
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {itemsPerPage < filteredCustomers.length && (
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} length={filteredCustomers.length} onPageChanged={handlePageChange}/>
        )}
            
        </>
    )
}

export default CustomersPage;