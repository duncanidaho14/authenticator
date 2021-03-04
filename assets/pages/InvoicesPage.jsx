import React, { useEffect, useState } from 'react';
import Pagination from './../components/Pagination';
import InvoicesAPI from './../services/InvoicesApi';

const STATUS_CLASSES = {
    PAID: "bg-blue-500",
    SENT: "bg-green-200",
    CANCELLED: "bg-red-300"
};

const STATUS_LABELS = {
    PAID: "Payée",
    SENT: "Envoyée",
    CANCELLED: "Annulée"
};


const InvoicesPage = (props) => {
    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const itemsPerPage = 10;

    
    const fetchInvoices = async () => {
        try {
        const data = await InvoicesAPI.findAll();
        setInvoices(data);
        } catch(error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchInvoices();
    }, []);
    
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
    
    // Supprimer une facture
    const handleDelete = async id => {
        const originalInvoices = [...invoices];

        setInvoices(invoices.filter(invoice => invoice.id !== id));

        try {
            await InvoicesAPI.delete(id);
        } catch (error) {
            console.log(error.response);
            setInvoices(originalInvoices);
        }
    }

    

    // Gestion de la recherche
    const filteredInvoices = invoices.filter(i => i.customer.firstName.toLowerCase().includes(search.toLowerCase()) ||
                                                i.customer.lastName.toLowerCase().includes(search.toLowerCase()) ||
                                                i.amount.toString().startsWith(search.toLowerCase()) ||
                                                STATUS_LABELS[i.status].toLowerCase().includes(search.toLowerCase())
    );
    // Pagination des données
    const paginatedInvoices = Pagination.getData(filteredInvoices, currentPage, itemsPerPage);

    // const formatDate = (str) => {
    //     dayjs(str, 'DD/MM/YYYY');
    //     new Date()
    // }

    return ( 
        <>
            <h1>Liste des factures</h1>

            <div className="relative text-green-600 py-2 px-2 mx-auto">
                <input type="search" onChange={handleSearch} value={search} className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none mx-auto" />
            </div>
        
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Client</th>
                        <th>Date d'envoi</th>
                        <th>Statut</th>
                        <th>Montant</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedInvoices.map(invoice => (
                        <tr key={invoice.id}>
                            <td>{invoice.chrono}</td>
                            <td>
                                <a href="">{invoice.customer.firstName} {invoice.customer.lastName}</a>
                            </td>
                            <td>{new Date(invoice.sentAt).toLocaleDateString()}</td>
                            <td className={"" + STATUS_CLASSES[invoice.status]}>{STATUS_LABELS[invoice.status]}</td>
                            <td>{invoice.amount.toLocaleString()}</td>
                            <td>
                                <button className="">Editer</button>
                                <button className="" onClick={() => handleDelete(invoice.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChanged={handlePageChange} length={filteredInvoices.length}/>
        </>
    );
}

export default InvoicesPage;