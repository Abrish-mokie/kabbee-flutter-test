import { useEffect, useState } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CabingTable from '../features/cabins/CabinTable';
import { getCabins } from '../services/apiCabins';
import Button from '../ui/Button';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <CabingTable />
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
