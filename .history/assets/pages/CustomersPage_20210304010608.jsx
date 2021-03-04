import React from 'react';

const CustomersPage = (props) => {
    return ( 
        <>
        <h1>Liste des clients</h1>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Client</th>
                    <th>Email</th>
                    <th>Entreprise</th>
                    <th>Facture</th>
                    <th>Montant</th>
                    <th></th>
                </tr>
            </thead>
        </table>
        </>
     );
}
 
export default CustomersPage;