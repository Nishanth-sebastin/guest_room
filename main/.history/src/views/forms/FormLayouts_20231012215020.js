import React from 'react';
import { Grid } from '@mui/material';
import {
  FbOrdinaryForm,
  FbDefaultForm,
  FbBasicHeaderForm,
  FbReadonlyForm,
  FbDisabledForm,
  FbLeftIconForm,
  FbRightIconForm,
  FbInputVariants,
} from '../../components/forms/form-layouts/index';
import PageContainer from '../../components/container/PageContainer';


const FormLayouts = () => (
  <PageContainer title="Form Layouts" description="this is innerpage">
    {/* breadcrumb */}
  
    {/* end breadcrumb */}
    
    <Grid container spacing={3}>
      <Grid item lg={12} md={12} xs={12}>
        <FbOrdinaryForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbInputVariants />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbDefaultForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbBasicHeaderForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbReadonlyForm />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FbDisabledForm />
      </Grid>
      <Grid item lg={6} md={12} xs={12}>
        <FbLeftIconForm />
      </Grid>
      <Grid item lg={6} md={12} xs={12}>
        <FbRightIconForm />
      </Grid>
    </Grid>
  </PageContainer>
);

export default FormLayouts;