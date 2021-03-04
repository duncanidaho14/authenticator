import React, {useEffect} from 'react';
import A
const CustomersPage = (props) => {
    useEffect(() => {

    }, [])
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
                    <th>Montant total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <a href="#"></a>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button className="btn btn-sm btn-danger">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
     );
}
 
export default CustomersPage;