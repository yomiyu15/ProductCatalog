import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Skeleton,
  Paper,
  Stack,
} from "@mui/material";

const SingleProductSkeleton = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Skeleton variant="rectangular" width="100%" height={40} />
        <Card style={{ border: "2px solid #ccc", padding: "20px" }}>
          <CardContent>
            <Typography
              variant="h6"
              style={{ marginBottom: "2px", fontWeight: "bold" }}
            >
              <Skeleton variant="text" width={120} />
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "12px", color: "#007bff" }}
            >
              <Skeleton variant="text" width={80} />
            </Typography>
            <Stack alignItems="center">
              <Skeleton variant="rectangular" width="75%" height={320} />
            </Stack>
            <Typography mt={2} variant="body2" sx={{ color: "#555555" }}>
              <Skeleton variant="text" width="80%" />
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default SingleProductSkeleton;
