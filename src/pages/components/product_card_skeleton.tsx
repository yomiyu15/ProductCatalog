"use client";

import React from "react";
import {
  Grid,
  Card,
  CardActions,
  Skeleton,
  CardContent,
  Typography,
} from "@mui/material";

const ProductCardSkeleton = (index: any) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ maxWidth: 345 }}>
        <Skeleton variant="rectangular" height={140} animation="wave" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Skeleton
              variant="rounded"
              width={120}
              height={30}
              animation="wave"
            />
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            <Skeleton variant="rounded" width={210} height={20} />
          </Typography>
          <Typography variant="h6" color="text.secondary" mt={1}>
            <Skeleton variant="rounded" width={70} height={23} />
          </Typography>
        </CardContent>
        <CardActions>
          <Skeleton variant="rounded" width={80} height={30} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCardSkeleton;
