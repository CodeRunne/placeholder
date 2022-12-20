import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Modal from '../modal/modal';
import DescriptionBox from '../description-box/description-box';


function ServiceCollection({ title, data, index }) {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [singleService, setSingleService] = useState({});

	return (
		<>
         { isModalOpen ? 
            <Modal
               isOpen={isModalOpen}
               closeModal={() => setIsModalOpen(prevState => !prevState)}
            >
               {/* Description Box */}
               <DescriptionBox 
                  heading={singleService.service}
                  features={singleService?.description?.features}
                  start_time={singleService?.description?.start_time}
                  link={singleService?.description?.link}
                  notice={singleService?.description?.notice}
                  warning={singleService?.description?.warning}
               />
         </Modal> : null }

			<tr className="title">
           <td colSpan='7'>
              <p className="gradient">{title}</p>
           </td>
        	</tr>

         {/* Table rows */}
         {data.map(({ id, service, rate, min_order, max_order, avg_time, description }) => (
            <tr key={id} className='services__table__row'>
              <td>{id}</td>
              <td>{service}</td>
              <td className="figure">${rate}</td>
              <td className="figure">{min_order}</td>
              <td className="figure">{max_order}</td>
              <td>{avg_time}</td>
              <td>
                 <Button variant="primary" onClick={() => {
                     setIsModalOpen(true);
                     setSingleService({ service, description });
                 }}>View</Button>
              </td>
            </tr>
         ))}
		</>
	)
}

ServiceCollection.propTypes = {
	id: PropTypes.number
};

export default ServiceCollection