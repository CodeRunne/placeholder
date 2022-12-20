import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectServices } from '../../../redux/services/services.selectors';
import { fetchServices } from '../../../redux/services/services.actions';
import { 
   Alert,
   ServiceCollection,
   FilterFormContainer,
   Table,
   Footer
} from '../../../components';

import { ServicesContainer } from './services.styles';

function Services({ fetchServices, services }) {
   const [alertIsOpen, setAlertIsOpen] = useState(false);

   useEffect(() => {
      setTimeout(() => setAlertIsOpen(true), 2000);

      // Fetch All Services
      fetchServices();
   }, [setAlertIsOpen, fetchServices]);

   const servicesTableHead = ["ID", "Services", "Rate Per 1000", "Min Order", "Max Order", "Average Time", "Description"];

   return (
    <>
     { alertIsOpen ? <Alert isOpen={alertIsOpen} setIsOpen={setAlertIsOpen}>
        Before placing an order, click on the view button and read the description in full
     </Alert> : null }

     {/* Section Container */}
     <ServicesContainer className="container">
        {/* Filter Form Container */}
        <FilterFormContainer 
            type="services"
            filterName="Filter by category" 
         />
         
         {/* Service List Table */}
         <Table tableHead={servicesTableHead}>
            {services.map(([name, data]) => (<ServiceCollection key={name} title={name} data={data}  />))}
         </Table>
     </ServicesContainer>

     <Footer />
    </>
   )
}

const mapDispatchToProps = dispatch => ({
   fetchServices: () => dispatch(fetchServices())
})

const mapStateToProps = createStructuredSelector({
   services: selectServices
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);