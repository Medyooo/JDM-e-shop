import { Container } from 'react-bootstrap'

import PaymentMethod from '../../components/checkout/PaymentMethod'

const PaymentMethodPage = () => {
  return (
    <Container style={{ minHeight: '670px' }}>
      <PaymentMethod />
    </Container>
  )
}

export default PaymentMethodPage
