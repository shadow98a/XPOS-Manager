import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
// import { MembershipCustomerProfile } from '../components/membershipCustomer/membershipCustomer-profile';
import { MembershipCustomerProfileDetails } from '../components/membershipCustomer/membershipCustomer-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';

const MembershipCustomer = () => (
  <>
    <Head>
      <title>
        멤버쉽 고객 | TJSManager
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          멤버쉽 고객
        </Typography>
        <MembershipCustomerProfileDetails />
      </Container>
    </Box>
  </>
);

MembershipCustomer.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default MembershipCustomer;
